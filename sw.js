const CACHE_VERSION = 'khts-v1';

const APP_SHELL = [
    './',
    './index.html',
    './manifest.webmanifest',
    './icons/icon-192.png',
    './icons/icon-512.png',
    './icons/icon-maskable-512.png',
    './icons/apple-touch-icon.png'
];

const CDN_HOSTS = ['cdnjs.cloudflare.com', 'cdn.jsdelivr.net'];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_VERSION)
            .then(cache => cache.addAll(APP_SHELL))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys()
            .then(keys => Promise.all(
                keys.filter(key => key !== CACHE_VERSION).map(key => caches.delete(key))
            ))
            .then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', event => {
    const { request } = event;
    if (request.method !== 'GET') return;

    const url = new URL(request.url);

    if (request.mode === 'navigate') {
        event.respondWith(networkFirst(request));
        return;
    }

    const isSameOrigin = url.origin === self.location.origin;
    const isCdn = CDN_HOSTS.includes(url.hostname);
    const isFirebaseSdk = url.hostname === 'www.gstatic.com' && url.pathname.startsWith('/firebasejs/');

    if (isSameOrigin || isCdn || isFirebaseSdk) {
        event.respondWith(staleWhileRevalidate(request));
    }
});

async function networkFirst(request) {
    const cache = await caches.open(CACHE_VERSION);
    try {
        const response = await fetch(request);
        if (response.ok) {
            cache.put('./index.html', response.clone());
        }
        return response;
    } catch (err) {
        const cached = await cache.match('./index.html');
        return cached || Response.error();
    }
}

async function staleWhileRevalidate(request) {
    const cache = await caches.open(CACHE_VERSION);
    const cached = await cache.match(request);

    const network = fetch(request)
        .then(response => {
            if (response.ok || response.type === 'opaque') {
                cache.put(request, response.clone());
            }
            return response;
        })
        .catch(() => cached || Response.error());

    return cached || network;
}
