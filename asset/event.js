// K-HTS 패밀리 리그 - 실시간 뉴스 및 연쇄(Chain) 이벤트 데이터베이스 (총 100개)
// target: 'ALL'(전 종목) 또는 기업 ID('A'~'J')
// A: 에이아이반도체, B: 번개배터리, C: 튼튼셀바이오, D: 드림모빌리티, E: 에브리톡
// F: 퓨처로보틱스, G: 글로벌스타엔터, H: 헤라클레스방산, I: 이노그린에너지, J: 제일금융지주
// bias: 틱당 상승확률 가중치 (-0.18 ~ +0.18), volMult: 거래량 증폭 배수, duration: 지속 시간(초)

export const MARKET_EVENTS = [
    // =========================================================================
    // 1. 거시경제 및 단기 시장 전체 충격 이벤트 (EVT_001 ~ EVT_020: 20개)
    // =========================================================================
    {
        id: 'EVT_001',
        type: 'MACRO',
        headline: '[속보] 한국은행, 기준금리 0.50%p 전격 빅컷 인하... 증시 유동성 랠리 기대감 폭발',
        effects: [
            { target: 'ALL', bias: 0.04, volMult: 1.6, duration: 3600 },
            { target: 'J', bias: 0.05, volMult: 1.9, duration: 5400 }
        ],
        chains: []
    },
    {
        id: 'EVT_002',
        type: 'MACRO',
        headline: '[긴급] 글로벌 인플레이션 재점화 우려... 미 연준(Fed) 긴축 장기화 시사에 투자심리 급랭',
        effects: [
            { target: 'ALL', bias: -0.04, volMult: 1.6, duration: 3600 }
        ],
        chains: []
    },
    {
        id: 'EVT_003',
        type: 'MACRO',
        headline: '[속보] 정부, 50조 원 규모 K-첨단전략산업 메가 펀드 조성 발표... 기술주 일제히 환호',
        effects: [
            { target: 'A', bias: 0.06, volMult: 1.8, duration: 4200 },
            { target: 'B', bias: 0.05, volMult: 1.7, duration: 4200 },
            { target: 'C', bias: 0.05, volMult: 1.7, duration: 4200 },
            { target: 'F', bias: 0.06, volMult: 1.8, duration: 4200 }
        ],
        chains: []
    },
    {
        id: 'EVT_004',
        type: 'MACRO',
        headline: '[외환] 원·달러 환율 1,450원 돌파 급등... 수출 대기업 환차익 기대 vs 내수주 원가 부담',
        effects: [
            { target: 'A', bias: 0.05, volMult: 1.5, duration: 3000 },
            { target: 'H', bias: 0.05, volMult: 1.5, duration: 3000 },
            { target: 'E', bias: -0.04, volMult: 1.3, duration: 3000 },
            { target: 'J', bias: -0.04, volMult: 1.4, duration: 3000 }
        ],
        chains: []
    },
    {
        id: 'EVT_005',
        type: 'MACRO',
        headline: '[수급] 외국인 투자자, K-증시 하루 만에 2조 원 순매수 폭풍 유입... 대형주 강세',
        effects: [
            { target: 'ALL', bias: 0.03, volMult: 1.7, duration: 3000 },
            { target: 'A', bias: 0.04, volMult: 2.0, duration: 3000 }
        ],
        chains: []
    },
    {
        id: 'EVT_006',
        type: 'MACRO',
        headline: '[특징주] 중동 지정학적 긴장 최고조... 국제 유가 배럴당 100달러 돌파에 방산·친환경주 급등',
        effects: [
            { target: 'H', bias: 0.08, volMult: 2.3, duration: 3600 },
            { target: 'I', bias: 0.07, volMult: 2.1, duration: 3600 },
            { target: 'D', bias: -0.05, volMult: 1.5, duration: 3000 }
        ],
        chains: []
    },
    {
        id: 'EVT_007',
        type: 'MACRO',
        headline: '[글로벌] 미국 나스닥 AI·기술주 사상 최고치 경신... 국내 AI·플랫폼·로봇주 동반 훈풍',
        effects: [
            { target: 'A', bias: 0.06, volMult: 1.9, duration: 3600 },
            { target: 'E', bias: 0.05, volMult: 1.7, duration: 3600 },
            { target: 'F', bias: 0.05, volMult: 1.7, duration: 3600 }
        ],
        chains: []
    },
    {
        id: 'EVT_008',
        type: 'MACRO',
        headline: '[쇼크] 글로벌 헤지펀드 대규모 마진콜 사태 발생... 아시아 증시 전반 투매 확산',
        effects: [
            { target: 'ALL', bias: -0.05, volMult: 2.0, duration: 2700 }
        ],
        chains: []
    },
    {
        id: 'EVT_009',
        type: 'MACRO',
        headline: '[정책] 금융당국, 기업 밸류업 세제 혜택 대폭 강화... 법인세·배당소득세 감면안 통과',
        effects: [
            { target: 'ALL', bias: 0.02, volMult: 1.4, duration: 3600 },
            { target: 'J', bias: 0.09, volMult: 2.4, duration: 4800 }
        ],
        chains: []
    },
    {
        id: 'EVT_010',
        type: 'MACRO',
        headline: '[기후] 유엔 기후변화협약, 탄소배출권 가격 2배 인상 합의... 친환경·전기차 섹터 수혜',
        effects: [
            { target: 'I', bias: 0.08, volMult: 2.2, duration: 4200 },
            { target: 'B', bias: 0.06, volMult: 1.8, duration: 3600 },
            { target: 'D', bias: 0.04, volMult: 1.5, duration: 3600 }
        ],
        chains: []
    },
    {
        id: 'EVT_011',
        type: 'MACRO',
        headline: '[원자재] 남미 리튬·니켈 광산 노조 전면 파업 돌입... 배터리 원소재 가격 폭등 비상',
        effects: [
            { target: 'B', bias: -0.07, volMult: 2.1, duration: 3600 },
            { target: 'D', bias: -0.04, volMult: 1.5, duration: 3000 }
        ],
        chains: []
    },
    {
        id: 'EVT_012',
        type: 'MACRO',
        headline: '[속보] 국민연금, 국내 주식 투자 비중 목표치 3%p 상향 조정... 기관 자금 대거 유입',
        effects: [
            { target: 'ALL', bias: 0.03, volMult: 1.5, duration: 4200 }
        ],
        chains: []
    },
    {
        id: 'EVT_013',
        type: 'MACRO',
        headline: '[비상] 글로벌 클라우드 보안 인증 서버 해킹 사고... IT·금융권 보안 점검에 투자 위축',
        effects: [
            { target: 'E', bias: -0.06, volMult: 1.8, duration: 3000 },
            { target: 'J', bias: -0.04, volMult: 1.5, duration: 3000 }
        ],
        chains: []
    },
    {
        id: 'EVT_014',
        type: 'MACRO',
        headline: '[단독] 한국 증시, 선진국 지수(MSCI) 최종 편입 확정! 글로벌 패시브 자금 40조 유입 기대',
        effects: [
            { target: 'ALL', bias: 0.06, volMult: 2.2, duration: 4800 }
        ],
        chains: []
    },
    {
        id: 'EVT_015',
        type: 'MACRO',
        headline: '[경제] 국내 3분기 GDP 성장률 시장 전망치 크게 하회... 경기 둔화 우려에 매수세 실종',
        effects: [
            { target: 'ALL', bias: -0.03, volMult: 1.3, duration: 3600 }
        ],
        chains: []
    },
    {
        id: 'EVT_016',
        type: 'MACRO',
        headline: '[문화] 한류 콘텐츠 글로벌 스트리밍 점유율 역대 최고치... K-컬처 및 플랫폼 동반 수혜',
        effects: [
            { target: 'G', bias: 0.08, volMult: 2.1, duration: 3600 },
            { target: 'E', bias: 0.04, volMult: 1.5, duration: 3000 }
        ],
        chains: []
    },
    {
        id: 'EVT_017',
        type: 'MACRO',
        headline: '[산업] 정부, 산업용 전기요금 kWh당 15원 인상 단행... 전력 다소비 제조업계 원가 부담',
        effects: [
            { target: 'A', bias: -0.03, volMult: 1.3, duration: 2700 },
            { target: 'B', bias: -0.03, volMult: 1.3, duration: 2700 },
            { target: 'I', bias: 0.07, volMult: 1.9, duration: 3600 }
        ],
        chains: []
    },
    {
        id: 'EVT_018',
        type: 'MACRO',
        headline: '[바이오] 미국 생물보안법 상원 통과... 중국 바이오 기업 퇴출에 한국 CDMO·신약 기업 반사이익',
        effects: [
            { target: 'C', bias: 0.09, volMult: 2.4, duration: 4200 }
        ],
        chains: []
    },
    {
        id: 'EVT_019',
        type: 'MACRO',
        headline: '[규제] 유럽연합(EU), 자율주행·AI 안전성 규제 법안 대폭 완화... 상용화 속도 붙는다',
        effects: [
            { target: 'D', bias: 0.07, volMult: 1.9, duration: 3600 },
            { target: 'F', bias: 0.06, volMult: 1.8, duration: 3600 },
            { target: 'A', bias: 0.04, volMult: 1.5, duration: 3000 }
        ],
        chains: []
    },
    {
        id: 'EVT_020',
        type: 'MACRO',
        headline: '[시장] 선물·옵션 동시 만기일(네 마녀의 날) 프로그램 매물 폭탄 출회... 장중 변동성 확대',
        effects: [
            { target: 'ALL', bias: -0.02, volMult: 2.5, duration: 2400 }
        ],
        chains: []
    },

    // =========================================================================
    // 2. 기업·섹터 간 나비효과 연쇄 이벤트 (EVT_021 ~ EVT_050: 15쌍 = 30개)
    // =========================================================================
    {
        id: 'EVT_021',
        type: 'CHAIN_START',
        headline: '[단독] 에이아이반도체(A), 차세대 HBM4 샘플 글로벌 빅테크 퀄테스트 최종 단계 돌입',
        effects: [
            { target: 'A', bias: 0.06, volMult: 2.0, duration: 2400 }
        ],
        chains: [
            { nextId: 'EVT_022', delaySec: 1500, prob: 1.0 }
        ]
    },
    {
        id: 'EVT_022',
        type: 'CHAIN_FOLLOWUP',
        isChainOnly: true,
        headline: '[공시] 에이아이반도체(A), HBM4 퀄테스트 통과! 에브리톡(E) AI 데이터센터에도 칩 우선 공급 협약',
        effects: [
            { target: 'A', bias: 0.11, volMult: 2.8, duration: 3600 },
            { target: 'E', bias: 0.06, volMult: 1.8, duration: 3000 }
        ],
        chains: []
    },
    {
        id: 'EVT_023',
        type: 'CHAIN_START',
        headline: '[속보] 번개배터리(B), 10분 초급속 충전 전고체 배터리 양산 라인 가동식 개최',
        effects: [
            { target: 'B', bias: 0.07, volMult: 2.1, duration: 2400 }
        ],
        chains: [
            { nextId: 'EVT_024', delaySec: 1800, prob: 1.0 }
        ]
    },
    {
        id: 'EVT_024',
        type: 'CHAIN_FOLLOWUP',
        isChainOnly: true,
        headline: '[연쇄] 드림모빌리티(D), 번개배터리(B) 차세대 전고체 셀 전량 탑재 발표... 주행거리 1,000km 돌파',
        effects: [
            { target: 'D', bias: 0.10, volMult: 2.5, duration: 3600 },
            { target: 'B', bias: 0.06, volMult: 1.9, duration: 3000 }
        ],
        chains: []
    },
    {
        id: 'EVT_025',
        type: 'CHAIN_START',
        headline: '[비상] 에브리톡(E), 수도권 메인 데이터센터 전력 공급 차질로 메신저·결제 일부 먹통',
        effects: [
            { target: 'E', bias: -0.09, volMult: 2.4, duration: 2400 }
        ],
        chains: [
            { nextId: 'EVT_026', delaySec: 1500, prob: 1.0 }
        ]
    },
    {
        id: 'EVT_026',
        type: 'CHAIN_FOLLOWUP',
        isChainOnly: true,
        headline: '[연쇄] 에브리톡(E), 재발 방지 위해 이노그린에너지(I)와 친환경 독립형 마이크로그리드 구축 계약',
        effects: [
            { target: 'I', bias: 0.09, volMult: 2.3, duration: 3600 },
            { target: 'E', bias: 0.04, volMult: 1.6, duration: 2400 }
        ],
        chains: []
    },
    {
        id: 'EVT_027',
        type: 'CHAIN_START',
        headline: '[산업] 완성차·부품 업계 노조 임금 협상 결렬... 생산 라인 가동 중단 위기감 고조',
        effects: [
            { target: 'D', bias: -0.07, volMult: 1.9, duration: 2400 }
        ],
        chains: [
            { nextId: 'EVT_028', delaySec: 1800, prob: 1.0 }
        ]
    },
    {
        id: 'EVT_028',
        type: 'CHAIN_FOLLOWUP',
        isChainOnly: true,
        headline: '[특징주] 제조 라인 무인화 수요 폭발... 퓨처로보틱스(F) 스마트팩토리 협동로봇 주문 300% 급증',
        effects: [
            { target: 'F', bias: 0.11, volMult: 2.7, duration: 3600 }
        ],
        chains: []
    },
    {
        id: 'EVT_029',
        type: 'CHAIN_START',
        headline: '[엔터] 글로벌스타엔터(G), 간판 보이그룹 월드투어 전 좌석(200만 석) 5분 만에 매진 기염',
        effects: [
            { target: 'G', bias: 0.08, volMult: 2.2, duration: 2400 }
        ],
        chains: [
            { nextId: 'EVT_030', delaySec: 1500, prob: 1.0 }
        ]
    },
    {
        id: 'EVT_030',
        type: 'CHAIN_FOLLOWUP',
        isChainOnly: true,
        headline: '[연쇄] 에브리톡(E), 글로벌스타엔터(G) 온라인 콘서트 독점 생중계 및 굿즈 커머스 정산 대박',
        effects: [
            { target: 'E', bias: 0.07, volMult: 2.0, duration: 3000 },
            { target: 'G', bias: 0.05, volMult: 1.7, duration: 3000 }
        ],
        chains: []
    },
    {
        id: 'EVT_031',
        type: 'CHAIN_START',
        headline: '[방산] 헤라클레스방산(H), 중동 국가와 4조 원 규모 차세대 방공망 수출 본계약 협상 개시',
        effects: [
            { target: 'H', bias: 0.07, volMult: 2.0, duration: 2400 }
        ],
        chains: [
            { nextId: 'EVT_032', delaySec: 1800, prob: 1.0 }
        ]
    },
    {
        id: 'EVT_032',
        type: 'CHAIN_FOLLOWUP',
        isChainOnly: true,
        headline: '[연쇄] 제일금융지주(J), 헤라클레스방산(H) 수출 금융 프로젝트 단독 주관사 선정... 수수료 수익 급증',
        effects: [
            { target: 'J', bias: 0.07, volMult: 1.9, duration: 3600 },
            { target: 'H', bias: 0.08, volMult: 2.2, duration: 3600 }
        ],
        chains: []
    },
    {
        id: 'EVT_033',
        type: 'CHAIN_START',
        headline: '[기후] 유럽 사상 초유의 폭풍 및 강풍 지속... 북해 및 글로벌 해상풍력 발전 효율 급상승',
        effects: [
            { target: 'I', bias: 0.07, volMult: 1.9, duration: 2400 }
        ],
        chains: [
            { nextId: 'EVT_034', delaySec: 1500, prob: 1.0 }
        ]
    },
    {
        id: 'EVT_034',
        type: 'CHAIN_FOLLOWUP',
        isChainOnly: true,
        headline: '[연쇄] 이노그린에너지(I) 풍력 단지 잉여 전력 저장용 번개배터리(B) 대용량 ESS 긴급 발주',
        effects: [
            { target: 'B', bias: 0.08, volMult: 2.1, duration: 3600 },
            { target: 'I', bias: 0.05, volMult: 1.7, duration: 3000 }
        ],
        chains: []
    },
    {
        id: 'EVT_035',
        type: 'CHAIN_START',
        headline: '[단독] 튼튼셀바이오(C), AI 기반 신약 후보물질 발굴 프로젝트 착수 발표',
        effects: [
            { target: 'C', bias: 0.06, volMult: 1.8, duration: 2400 }
        ],
        chains: [
            { nextId: 'EVT_036', delaySec: 1500, prob: 1.0 }
        ]
    },
    {
        id: 'EVT_036',
        type: 'CHAIN_FOLLOWUP',
        isChainOnly: true,
        headline: '[연쇄] 튼튼셀바이오(C), 신약 시뮬레이션 슈퍼컴퓨터 구축 위해 에이아이반도체(A) NPU 대량 도입',
        effects: [
            { target: 'A', bias: 0.07, volMult: 2.0, duration: 3000 },
            { target: 'C', bias: 0.05, volMult: 1.7, duration: 3000 }
        ],
        chains: []
    },
    {
        id: 'EVT_037',
        type: 'CHAIN_START',
        headline: '[모빌리티] 드림모빌리티(D), 서울·수도권 심야 완전 무인 로봇택시 상용 서비스 전격 개시',
        effects: [
            { target: 'D', bias: 0.08, volMult: 2.1, duration: 2400 }
        ],
        chains: [
            { nextId: 'EVT_038', delaySec: 1500, prob: 1.0 }
        ]
    },
    {
        id: 'EVT_038',
        type: 'CHAIN_FOLLOWUP',
        isChainOnly: true,
        headline: '[연쇄] 에브리톡(E) 모빌리티 앱, 드림모빌리티(D) 로봇택시 단독 호출 연동에 일간 이용자 사상 최대',
        effects: [
            { target: 'E', bias: 0.08, volMult: 2.2, duration: 3600 },
            { target: 'D', bias: 0.05, volMult: 1.8, duration: 3000 }
        ],
        chains: []
    },
    {
        id: 'EVT_039',
        type: 'CHAIN_START',
        headline: '[로봇] 퓨처로보틱스(F), 차세대 가정용 휴머노이드 가사 로봇 사전예약 10만 대 돌파',
        effects: [
            { target: 'F', bias: 0.09, volMult: 2.3, duration: 2400 }
        ],
        chains: [
            { nextId: 'EVT_040', delaySec: 1800, prob: 1.0 }
        ]
    },
    {
        id: 'EVT_040',
        type: 'CHAIN_FOLLOWUP',
        isChainOnly: true,
        headline: '[연쇄] 휴머노이드 핵심 부품인 고밀도 소형 배터리 및 AI 칩 공급사 번개배터리(B)·에이아이반도체(A) 동반 강세',
        effects: [
            { target: 'B', bias: 0.06, volMult: 1.9, duration: 3000 },
            { target: 'A', bias: 0.06, volMult: 1.9, duration: 3000 }
        ],
        chains: []
    },
    {
        id: 'EVT_041',
        type: 'CHAIN_START',
        headline: '[금융] 제일금융지주(J), 1조 원 규모 벤처·스타트업 스케일업 신기술투자조합 결성',
        effects: [
            { target: 'J', bias: 0.04, volMult: 1.5, duration: 2400 }
        ],
        chains: [
            { nextId: 'EVT_042', delaySec: 1500, prob: 1.0 }
        ]
    },
    {
        id: 'EVT_042',
        type: 'CHAIN_FOLLOWUP',
        isChainOnly: true,
        headline: '[연쇄] 제일금융지주(J), 1호 투자처로 퓨처로보틱스(F)·튼튼셀바이오(C) 지분 취득 공시',
        effects: [
            { target: 'F', bias: 0.07, volMult: 2.0, duration: 3600 },
            { target: 'C', bias: 0.07, volMult: 2.0, duration: 3600 }
        ],
        chains: []
    },
    {
        id: 'EVT_043',
        type: 'CHAIN_START',
        headline: '[우주] 헤라클레스방산(H), 저궤도 통신위성 군집 발사 프로젝트 1차 발사 성공',
        effects: [
            { target: 'H', bias: 0.08, volMult: 2.2, duration: 2400 }
        ],
        chains: [
            { nextId: 'EVT_044', delaySec: 1800, prob: 1.0 }
        ]
    },
    {
        id: 'EVT_044',
        type: 'CHAIN_FOLLOWUP',
        isChainOnly: true,
        headline: '[연쇄] 저궤도 위성통신망 개통으로 드림모빌리티(D) 도심항공교통(UAM) 항로 관제 정밀도 혁신',
        effects: [
            { target: 'D', bias: 0.08, volMult: 2.1, duration: 3600 }
        ],
        chains: []
    },
    {
        id: 'EVT_045',
        type: 'CHAIN_START',
        headline: '[통상] 주요국 반도체 핵심 화학소재 수출 통제 발표... 에이아이반도체(A) 수급 우려에 약세',
        effects: [
            { target: 'A', bias: -0.08, volMult: 2.2, duration: 2100 }
        ],
        chains: [
            { nextId: 'EVT_046', delaySec: 1800, prob: 1.0 }
        ]
    },
    {
        id: 'EVT_046',
        type: 'CHAIN_FOLLOWUP',
        isChainOnly: true,
        headline: '[반전] 에이아이반도체(A), 국내 소부장 기업과 초고순도 소재 100% 국산화 대체 라인 즉시 가동 성공!',
        effects: [
            { target: 'A', bias: 0.12, volMult: 2.9, duration: 3600 }
        ],
        chains: []
    },
    {
        id: 'EVT_047',
        type: 'CHAIN_START',
        headline: '[논란] 글로벌스타엔터(G), 대형 콘서트 암표 기승 및 팬덤 플랫폼 서버 지연에 팬 불만 폭주',
        effects: [
            { target: 'G', bias: -0.07, volMult: 1.9, duration: 2100 }
        ],
        chains: [
            { nextId: 'EVT_048', delaySec: 1500, prob: 1.0 }
        ]
    },
    {
        id: 'EVT_048',
        type: 'CHAIN_FOLLOWUP',
        isChainOnly: true,
        headline: '[해결] 글로벌스타엔터(G), 에브리톡(E) 생체인증 NFT 티켓 시스템 전면 도입으로 암표 원천 차단 호평',
        effects: [
            { target: 'G', bias: 0.08, volMult: 2.1, duration: 3000 },
            { target: 'E', bias: 0.05, volMult: 1.7, duration: 3000 }
        ],
        chains: []
    },
    {
        id: 'EVT_049',
        type: 'CHAIN_START',
        headline: '[에너지] 이노그린에너지(I), 동해안 초대형 그린수소 플랜트 착공... 프로젝트 파이낸싱(PF) 금리 부담 우려',
        effects: [
            { target: 'I', bias: -0.05, volMult: 1.7, duration: 2100 }
        ],
        chains: [
            { nextId: 'EVT_050', delaySec: 1500, prob: 1.0 }
        ]
    },
    {
        id: 'EVT_050',
        type: 'CHAIN_FOLLOWUP',
        isChainOnly: true,
        headline: '[반전] 제일금융지주(J) 및 글로벌 녹색기후기금, 이노그린에너지(I)에 초저금리 ESG 자금 2조 원 지원 확정',
        effects: [
            { target: 'I', bias: 0.10, volMult: 2.5, duration: 3600 },
            { target: 'J', bias: 0.04, volMult: 1.5, duration: 3000 }
        ],
        chains: []
    },

    // =========================================================================
    // 3. 10대 기업별 장기 분기 스토리라인 이벤트 (EVT_051 ~ EVT_080: 10기업 × 3단계 = 30개)
    //    (1단계 기대감 발생 ➔ 일정 시간 후 60% 확률 대성공 / 40% 확률 실패·악재 반전)
    // =========================================================================
    // [A. 에이아이반도체]
    {
        id: 'EVT_051',
        type: 'STORY_START',
        headline: '[반도체] 에이아이반도체(A), 차세대 2나노 AI 가속기 칩 시험생산(Tape-out) 돌입... 수율 결과 주목',
        effects: [
            { target: 'A', bias: 0.06, volMult: 2.0, duration: 1800 }
        ],
        chains: [
            { nextId: 'EVT_052', delaySec: 1500, prob: 0.60 },
            { nextId: 'EVT_053', delaySec: 1500, prob: 0.40 }
        ]
    },
    {
        id: 'EVT_052',
        type: 'CHAIN_FOLLOWUP',
        isChainOnly: true,
        headline: '[쾌거] 에이아이반도체(A), 2나노 AI 가속기 초기 수율 85% 돌파! 글로벌 빅테크 10조 원 선주문 쇄도',
        effects: [
            { target: 'A', bias: 0.14, volMult: 3.2, duration: 4200 }
        ],
        chains: []
    },
    {
        id: 'EVT_053',
        type: 'CHAIN_FOLLOWUP',
        isChainOnly: true,
        headline: '[충격] 에이아이반도체(A), 2나노 공정 발열 제어 결함 발견... 양산 일정 반년 연기 불가피',
        effects: [
            { target: 'A', bias: -0.13, volMult: 3.0, duration: 3600 }
        ],
        chains: []
    },

    // [B. 번개배터리]
    {
        id: 'EVT_054',
        type: 'STORY_START',
        headline: '[2차전지] 번개배터리(B), 화재 위험 제로 꿈의 전고체 배터리 극한 충돌 안전성 공개 테스트 진행',
        effects: [
            { target: 'B', bias: 0.06, volMult: 2.0, duration: 1800 }
        ],
        chains: [
            { nextId: 'EVT_055', delaySec: 1500, prob: 0.60 },
            { nextId: 'EVT_056', delaySec: 1500, prob: 0.40 }
        ]
    },
    {
        id: 'EVT_055',
        type: 'CHAIN_FOLLOWUP',
        isChainOnly: true,
        headline: '[대박] 번개배터리(B), 관통·고열 테스트 완벽 통과! 유럽 완성차 3사와 15조 원 장기 공급계약 체결',
        effects: [
            { target: 'B', bias: 0.14, volMult: 3.3, duration: 4200 }
        ],
        chains: []
    },
    {
        id: 'EVT_056',
        type: 'CHAIN_FOLLOWUP',
        isChainOnly: true,
        headline: '[악재] 번개배터리(B), 영하 20도 저온 테스트에서 충전 효율 급감 현상 발생... 보완 재설계 돌입',
        effects: [
            { target: 'B', bias: -0.12, volMult: 2.9, duration: 3600 }
        ],
        chains: []
    },

    // [C. 튼튼셀바이오]
    {
        id: 'EVT_057',
        type: 'STORY_START',
        headline: '[바이오] 튼튼셀바이오(C), 표적 면역항암제 미국 FDA 임상 3상 최종 탑라인 결과 발표 임박',
        effects: [
            { target: 'C', bias: 0.07, volMult: 2.3, duration: 1800 }
        ],
        chains: [
            { nextId: 'EVT_058', delaySec: 1500, prob: 0.55 },
            { nextId: 'EVT_059', delaySec: 1500, prob: 0.45 }
        ]
    },
    {
        id: 'EVT_058',
        type: 'CHAIN_FOLLOWUP',
        isChainOnly: true,
        headline: '[속보] 튼튼셀바이오(C), 항암 신약 완전관해율 역대 최고치 경신! FDA 신속 승인 및 8조 기술수출 성사',
        effects: [
            { target: 'C', bias: 0.16, volMult: 3.8, duration: 4500 }
        ],
        chains: []
    },
    {
        id: 'EVT_059',
        type: 'CHAIN_FOLLOWUP',
        isChainOnly: true,
        headline: '[충격] 튼튼셀바이오(C), 임상 3상 대조군 대비 통계적 유의성 확보 실패... 주가 급락세',
        effects: [
            { target: 'C', bias: -0.15, volMult: 3.5, duration: 4200 }
        ],
        chains: []
    },

    // [D. 드림모빌리티]
    {
        id: 'EVT_060',
        type: 'STORY_START',
        headline: '[모빌리티] 드림모빌리티(D), 도심항공교통(UAM) 에어택시 국토부 상용화 최종 비행 심사 시작',
        effects: [
            { target: 'D', bias: 0.06, volMult: 1.9, duration: 1800 }
        ],
        chains: [
            { nextId: 'EVT_061', delaySec: 1500, prob: 0.60 },
            { nextId: 'EVT_062', delaySec: 1500, prob: 0.40 }
        ]
    },
    {
        id: 'EVT_061',
        type: 'CHAIN_FOLLOWUP',
        isChainOnly: true,
        headline: '[축포] 드림모빌리티(D), 세계 최초 UAM 도심 상용 운항 허가 획득! 중동 네옴시티에 500대 수출 쾌거',
        effects: [
            { target: 'D', bias: 0.13, volMult: 3.1, duration: 4200 }
        ],
        chains: []
    },
    {
        id: 'EVT_062',
        type: 'CHAIN_FOLLOWUP',
        isChainOnly: true,
        headline: '[속보] 드림모빌리티(D), UAM 시험비행 중 돌풍에 의한 항법 센서 오류 발생... 인증 심사 보류',
        effects: [
            { target: 'D', bias: -0.12, volMult: 2.8, duration: 3600 }
        ],
        chains: []
    },

    // [E. 에브리톡]
    {
        id: 'EVT_063',
        type: 'STORY_START',
        headline: '[IT플랫폼] 에브리톡(E), 초거대 생성형 AI 비서 탑재한 슈퍼앱 2.0 글로벌 동시 출시',
        effects: [
            { target: 'E', bias: 0.06, volMult: 2.0, duration: 1800 }
        ],
        chains: [
            { nextId: 'EVT_064', delaySec: 1500, prob: 0.60 },
            { nextId: 'EVT_065', delaySec: 1500, prob: 0.40 }
        ]
    },
    {
        id: 'EVT_064',
        type: 'CHAIN_FOLLOWUP',
        isChainOnly: true,
        headline: '[돌풍] 에브리톡(E) AI 비서, 출시 하루 만에 글로벌 유료 구독자 1,000만 명 돌파! 실적 퀀텀점프',
        effects: [
            { target: 'E', bias: 0.13, volMult: 3.0, duration: 4200 }
        ],
        chains: []
    },
    {
        id: 'EVT_065',
        type: 'CHAIN_FOLLOWUP',
        isChainOnly: true,
        headline: '[논란] 에브리톡(E) AI 비서, 개인정보 오답 노출 및 환각 현상 논란에 유료화 서비스 잠정 중단',
        effects: [
            { target: 'E', bias: -0.12, volMult: 2.8, duration: 3600 }
        ],
        chains: []
    },

    // [F. 퓨처로보틱스]
    {
        id: 'EVT_066',
        type: 'STORY_START',
        headline: '[로보틱스] 퓨처로보틱스(F), 글로벌 최대 물류 기업 아마존 물류창고에 이족보행 로봇 시범 투입',
        effects: [
            { target: 'F', bias: 0.07, volMult: 2.1, duration: 1800 }
        ],
        chains: [
            { nextId: 'EVT_067', delaySec: 1500, prob: 0.60 },
            { nextId: 'EVT_068', delaySec: 1500, prob: 0.40 }
        ]
    },
    {
        id: 'EVT_067',
        type: 'CHAIN_FOLLOWUP',
        isChainOnly: true,
        headline: '[잭팟] 퓨처로보틱스(F), 물류 생산성 250% 입증! 글로벌 물류센터에 휴머노이드 5만 대 정식 납품 계약',
        effects: [
            { target: 'F', bias: 0.14, volMult: 3.4, duration: 4200 }
        ],
        chains: []
    },
    {
        id: 'EVT_068',
        type: 'CHAIN_FOLLOWUP',
        isChainOnly: true,
        headline: '[악재] 퓨처로보틱스(F), 시범 가동 중 로봇 관절 액추에이터 과열 결함 발견... 전량 리콜 조치',
        effects: [
            { target: 'F', bias: -0.13, volMult: 3.0, duration: 3600 }
        ],
        chains: []
    },

    // [G. 글로벌스타엔터]
    {
        id: 'EVT_069',
        type: 'STORY_START',
        headline: '[엔터] 글로벌스타엔터(G), 매출 비중 60% 차지하는 간판 메가 IP 그룹 전속계약 재계약 협상 돌입',
        effects: [
            { target: 'G', bias: 0.05, volMult: 2.2, duration: 1800 }
        ],
        chains: [
            { nextId: 'EVT_070', delaySec: 1500, prob: 0.65 },
            { nextId: 'EVT_071', delaySec: 1500, prob: 0.35 }
        ]
    },
    {
        id: 'EVT_070',
        type: 'CHAIN_FOLLOWUP',
        isChainOnly: true,
        headline: '[공시] 글로벌스타엔터(G), 간판 그룹 전원 7년 장기 재계약 체결 완료! 컴백 앨범 선주문 600만 장 돌파',
        effects: [
            { target: 'G', bias: 0.14, volMult: 3.3, duration: 4200 }
        ],
        chains: []
    },
    {
        id: 'EVT_071',
        type: 'CHAIN_FOLLOWUP',
        isChainOnly: true,
        headline: '[충격] 글로벌스타엔터(G), 핵심 멤버 재계약 불발 및 독자 활동 선언... 향후 실적 공백 우려',
        effects: [
            { target: 'G', bias: -0.14, volMult: 3.4, duration: 3600 }
        ],
        chains: []
    },

    // [H. 헤라클레스방산]
    {
        id: 'EVT_072',
        type: 'STORY_START',
        headline: '[방산] 헤라클레스방산(H), 12조 원 규모 유럽 차세대 자주포·장갑차 통합 도입 사업 최종 입찰 참여',
        effects: [
            { target: 'H', bias: 0.06, volMult: 2.0, duration: 1800 }
        ],
        chains: [
            { nextId: 'EVT_073', delaySec: 1500, prob: 0.65 },
            { nextId: 'EVT_074', delaySec: 1500, prob: 0.35 }
        ]
    },
    {
        id: 'EVT_073',
        type: 'CHAIN_FOLLOWUP',
        isChainOnly: true,
        headline: '[쾌거] 헤라클레스방산(H), 유럽 방산 강호 제치고 12조 원 수주 최종 낙찰! 창사 이래 최대 수주잔고',
        effects: [
            { target: 'H', bias: 0.14, volMult: 3.2, duration: 4200 }
        ],
        chains: []
    },
    {
        id: 'EVT_074',
        type: 'CHAIN_FOLLOWUP',
        isChainOnly: true,
        headline: '[고배] 헤라클레스방산(H), 유럽 자국 우선주의 장벽에 밀려 수주 탈락... 실망 매물 출회',
        effects: [
            { target: 'H', bias: -0.11, volMult: 2.7, duration: 3600 }
        ],
        chains: []
    },

    // [I. 이노그린에너지]
    {
        id: 'EVT_075',
        type: 'STORY_START',
        headline: '[에너지] 이노그린에너지(I), 발전 단가 절반으로 낮춘 차세대 그린수소 수전해 촉매 실증 가동',
        effects: [
            { target: 'I', bias: 0.06, volMult: 2.0, duration: 1800 }
        ],
        chains: [
            { nextId: 'EVT_076', delaySec: 1500, prob: 0.60 },
            { nextId: 'EVT_077', delaySec: 1500, prob: 0.40 }
        ]
    },
    {
        id: 'EVT_076',
        type: 'CHAIN_FOLLOWUP',
        isChainOnly: true,
        headline: '[혁신] 이노그린에너지(I), 세계 최고 수전해 효율 92% 달성! 글로벌 에너지 메이저와 기술 로열티 계약',
        effects: [
            { target: 'I', bias: 0.14, volMult: 3.2, duration: 4200 }
        ],
        chains: []
    },
    {
        id: 'EVT_077',
        type: 'CHAIN_FOLLOWUP',
        isChainOnly: true,
        headline: '[악재] 이노그린에너지(I), 고압 수전해 실증 설비 내구성 결함 발견... 상용화 일정 전면 재검토',
        effects: [
            { target: 'I', bias: -0.12, volMult: 2.8, duration: 3600 }
        ],
        chains: []
    },

    // [J. 제일금융지주]
    {
        id: 'EVT_078',
        type: 'STORY_START',
        headline: '[금융] 제일금융지주(J), 동남아 최대 디지털 은행 인수전 본입찰 단독 참여... 글로벌 확장 승부수',
        effects: [
            { target: 'J', bias: 0.05, volMult: 1.8, duration: 1800 }
        ],
        chains: [
            { nextId: 'EVT_079', delaySec: 1500, prob: 0.65 },
            { nextId: 'EVT_080', delaySec: 1500, prob: 0.35 }
        ]
    },
    {
        id: 'EVT_079',
        type: 'CHAIN_FOLLOWUP',
        isChainOnly: true,
        headline: '[성사] 제일금융지주(J), 시장 예상보다 20% 저렴한 가격에 동남아 은행 인수 성공! 글로벌 수익성 급증',
        effects: [
            { target: 'J', bias: 0.12, volMult: 2.8, duration: 4200 }
        ],
        chains: []
    },
    {
        id: 'EVT_080',
        type: 'CHAIN_FOLLOWUP',
        isChainOnly: true,
        headline: '[우려] 제일금융지주(J), 무리한 인수 자금 조달로 자본적정성(BIS) 비율 하락 및 배당 축소 우려 제기',
        effects: [
            { target: 'J', bias: -0.10, volMult: 2.5, duration: 3600 }
        ],
        chains: []
    },

    // =========================================================================
    // 4. 10대 기업별 단발성 핵심 호재/악재 공시 (EVT_081 ~ EVT_100: 10기업 × 2개 = 20개)
    // =========================================================================
    {
        id: 'EVT_081',
        type: 'COMPANY_SINGLE',
        headline: '[어닝서프라이즈] 에이아이반도체(A), 분기 영업이익 컨센서스 45% 상회! 사상 최대 실적 달성',
        effects: [
            { target: 'A', bias: 0.09, volMult: 2.4, duration: 3600 }
        ],
        chains: []
    },
    {
        id: 'EVT_082',
        type: 'COMPANY_SINGLE',
        headline: '[악재] 에이아이반도체(A), 핵심 NPU 설계 엔지니어링 인력 경쟁사 집단 이직 논란',
        effects: [
            { target: 'A', bias: -0.07, volMult: 1.9, duration: 3000 }
        ],
        chains: []
    },
    {
        id: 'EVT_083',
        type: 'COMPANY_SINGLE',
        headline: '[공시] 번개배터리(B), 북미 친환경차 보조금(IRA) 세액공제 8,000억 원 영업이익 일시 반영 확정',
        effects: [
            { target: 'B', bias: 0.09, volMult: 2.3, duration: 3600 }
        ],
        chains: []
    },
    {
        id: 'EVT_084',
        type: 'COMPANY_SINGLE',
        headline: '[충격] 번개배터리(B), 시설자금 조달 위한 1조 5,000억 원 규모 주주배정 유상증자 전격 결정',
        effects: [
            { target: 'B', bias: -0.10, volMult: 2.6, duration: 3600 }
        ],
        chains: []
    },
    {
        id: 'EVT_085',
        type: 'COMPANY_SINGLE',
        headline: '[특허] 튼튼셀바이오(C), 차세대 유전자 가위 치료제 미국·유럽 물질특허 동시 등록 완료',
        effects: [
            { target: 'C', bias: 0.09, volMult: 2.2, duration: 3600 }
        ],
        chains: []
    },
    {
        id: 'EVT_086',
        type: 'COMPANY_SINGLE',
        headline: '[수급] 튼튼셀바이오(C), 초기 벤처캐피탈(VC) 보유 지분 500만 주 보호예수 해제... 오버행(대량매물) 출회',
        effects: [
            { target: 'C', bias: -0.08, volMult: 2.4, duration: 3000 }
        ],
        chains: []
    },
    {
        id: 'EVT_087',
        type: 'COMPANY_SINGLE',
        headline: '[호재] 드림모빌리티(D), 미국 캘리포니아주 무인 자율주행 유료 운행 무제한 면허 취득',
        effects: [
            { target: 'D', bias: 0.09, volMult: 2.3, duration: 3600 }
        ],
        chains: []
    },
    {
        id: 'EVT_088',
        type: 'COMPANY_SINGLE',
        headline: '[리콜] 드림모빌리티(D), 자율주행 소프트웨어 브레이크 응답 지연 오류로 차량 3만 대 무선 리콜',
        effects: [
            { target: 'D', bias: -0.08, volMult: 2.1, duration: 3000 }
        ],
        chains: []
    },
    {
        id: 'EVT_089',
        type: 'COMPANY_SINGLE',
        headline: '[공시] 에브리톡(E), 주주가치 제고 위해 자사주 5,000억 원 매입 및 전량 소각 전격 결의!',
        effects: [
            { target: 'E', bias: 0.10, volMult: 2.5, duration: 3600 }
        ],
        chains: []
    },
    {
        id: 'EVT_090',
        type: 'COMPANY_SINGLE',
        headline: '[규제] 공정거래위원회, 에브리톡(E) 플랫폼 독과점 및 수수료 남용 혐의로 과징금 부과 착수',
        effects: [
            { target: 'E', bias: -0.08, volMult: 2.1, duration: 3000 }
        ],
        chains: []
    },
    {
        id: 'EVT_091',
        type: 'COMPANY_SINGLE',
        headline: '[정책] 정부, 저출산·고령화 대책으로 돌봄·의료 로봇 보조금 신설... 퓨처로보틱스(F) 최대 수혜',
        effects: [
            { target: 'F', bias: 0.09, volMult: 2.3, duration: 3600 }
        ],
        chains: []
    },
    {
        id: 'EVT_092',
        type: 'COMPANY_SINGLE',
        headline: '[악재] 퓨처로보틱스(F), 해외 경쟁사와 로봇 감속기 핵심 특허 침해 소송전에 법률 비용 급증',
        effects: [
            { target: 'F', bias: -0.07, volMult: 1.9, duration: 3000 }
        ],
        chains: []
    },
    {
        id: 'EVT_093',
        type: 'COMPANY_SINGLE',
        headline: '[쾌거] 글로벌스타엔터(G) 신인 걸그룹, 데뷔곡 빌보드 핫100 1위 직행! 글로벌 광고 러브콜 쇄도',
        effects: [
            { target: 'G', bias: 0.11, volMult: 2.6, duration: 3600 }
        ],
        chains: []
    },
    {
        id: 'EVT_094',
        type: 'COMPANY_SINGLE',
        headline: '[어닝쇼크] 글로벌스타엔터(G), 해외 공연 제작비 급등 및 신규 자회사 적자로 분기 영업이익 30% 감소',
        effects: [
            { target: 'G', bias: -0.09, volMult: 2.2, duration: 3000 }
        ],
        chains: []
    },
    {
        id: 'EVT_095',
        type: 'COMPANY_SINGLE',
        headline: '[국방] 국회, 한국형 아이언돔 및 우주방위 국방예산 20% 증액 통과... 헤라클레스방산(H) 수혜',
        effects: [
            { target: 'H', bias: 0.09, volMult: 2.2, duration: 3600 }
        ],
        chains: []
    },
    {
        id: 'EVT_096',
        type: 'COMPANY_SINGLE',
        headline: '[차질] 헤라클레스방산(H), 해외 수출 물량 선적 지연으로 분기 매출 인식 다음 분기로 이연',
        effects: [
            { target: 'H', bias: -0.07, volMult: 1.8, duration: 3000 }
        ],
        chains: []
    },
    {
        id: 'EVT_097',
        type: 'COMPANY_SINGLE',
        headline: '[계약] 이노그린에너지(I), 글로벌 반도체·데이터센터 기업들과 10년 장기 재생에너지(RE100) 공급 체결',
        effects: [
            { target: 'I', bias: 0.09, volMult: 2.3, duration: 3600 }
        ],
        chains: []
    },
    {
        id: 'EVT_098',
        type: 'COMPANY_SINGLE',
        headline: '[지연] 이노그린에너지(I), 서해안 해상풍력 발전단지 환경영향평가 보완 요구로 착공 지연',
        effects: [
            { target: 'I', bias: -0.08, volMult: 2.0, duration: 3000 }
        ],
        chains: []
    },
    {
        id: 'EVT_099',
        type: 'COMPANY_SINGLE',
        headline: '[밸류업] 제일금융지주(J), 역대 최대 분기 배당 및 총주주환원율 50% 조기 달성 로드맵 발표!',
        effects: [
            { target: 'J', bias: 0.10, volMult: 2.4, duration: 3600 }
        ],
        chains: []
    },
    {
        id: 'EVT_100',
        type: 'COMPANY_SINGLE',
        headline: '[충당금] 제일금융지주(J), 부동산 PF 부실 대비 선제적 대손충당금 4,000억 원 추가 적립에 순이익 감소',
        effects: [
            { target: 'J', bias: -0.08, volMult: 2.0, duration: 3000 }
        ],
        chains: []
    }
];
