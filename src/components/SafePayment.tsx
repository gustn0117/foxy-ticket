type Limit = {
  label: string
  amount: string
  sub: string
  isPrimary?: boolean
  svg: React.ReactNode
}

const limits: Limit[] = [
  {
    label: '소액결제 한도',
    amount: '100만원',
    sub: '통신사 휴대폰 결제 한도 활용',
    svg: (
      <svg viewBox="0 0 140 140" className="w-24 h-24 md:w-28 md:h-28">
        <defs>
          <linearGradient id="l1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="100%" stopColor="#0A1628" />
          </linearGradient>
          <linearGradient id="l1screen" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#1E3A8A" />
          </linearGradient>
          <linearGradient id="l1shine" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect x="44" y="14" width="52" height="110" rx="12" fill="url(#l1)" />
        <rect x="49" y="24" width="42" height="84" rx="6" fill="url(#l1screen)" />
        <rect x="49" y="24" width="42" height="84" rx="6" fill="url(#l1shine)" />
        <circle cx="70" cy="116" r="3" fill="#475569" />
        <rect x="62" y="18" width="16" height="2" rx="1" fill="#0A1628" />
        <text x="70" y="62" textAnchor="middle" fill="#FCD34D" fontSize="14" fontWeight="900">₩ 100</text>
        <text x="70" y="78" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="700">만원 한도</text>
      </svg>
    ),
  },
  {
    label: '정보이용료 한도',
    amount: '100만원',
    sub: '통신사 정보이용료 한도 활용',
    svg: (
      <svg viewBox="0 0 140 140" className="w-24 h-24 md:w-28 md:h-28">
        <defs>
          <linearGradient id="l2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#1E3A8A" />
          </linearGradient>
          <linearGradient id="l2shine" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <circle cx="70" cy="70" r="56" fill="url(#l2)" />
        <circle cx="70" cy="70" r="56" fill="url(#l2shine)" />
        <circle cx="70" cy="70" r="40" fill="#0F1E3D" opacity="0.9" />
        <path d="M44 72c8-22 44-22 52 0" stroke="#60A5FA" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M50 72c6-16 34-16 40 0" stroke="#38BDF8" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M56 72c4-10 24-10 28 0" stroke="#0EA5E9" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="70" cy="74" r="3" fill="#FCD34D" />
        <text x="70" y="102" textAnchor="middle" fill="#FCD34D" fontSize="12" fontWeight="900">100만원</text>
      </svg>
    ),
  },
  {
    label: '신용카드 한도',
    amount: '1,000만원',
    sub: '최대 12개월 무이자 할부',
    isPrimary: true,
    svg: (
      <svg viewBox="0 0 160 140" className="w-28 h-24 md:w-32 md:h-28">
        <defs>
          <linearGradient id="l3" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="60%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#0A1628" />
          </linearGradient>
          <linearGradient id="l3gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="60%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>
          <linearGradient id="l3shine" x1="0" y1="0" x2="1" y2="0.6">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="l3glow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="80" cy="124" rx="60" ry="6" fill="url(#l3glow)" />
        <g transform="translate(30 30) rotate(-6 50 40)">
          <rect x="0" y="0" width="100" height="64" rx="8" fill="#1E3A8A" opacity="0.55" />
        </g>
        <g transform="translate(14 18)">
          <rect x="0" y="0" width="132" height="84" rx="10" fill="url(#l3)" />
          <rect x="0" y="0" width="132" height="84" rx="10" fill="url(#l3shine)" />
          <text x="10" y="18" fill="#fff" fontSize="8" fontWeight="700" letterSpacing="1">FOXY TICKET</text>
          <rect x="10" y="28" width="22" height="16" rx="3" fill="url(#l3gold)" />
          <path d="M12 36h18 M21 30v12" stroke="#92400E" strokeOpacity="0.5" strokeWidth="0.8" />
          <text x="10" y="60" fill="#E0EAFA" fontSize="9" fontFamily="monospace" letterSpacing="2">1234 5678 9012</text>
          <text x="90" y="60" fill="#fff" fontSize="9" fontFamily="monospace" letterSpacing="2" fontWeight="700">3425</text>
          <text x="10" y="75" fill="#93C5FD" fontSize="6" letterSpacing="1">VIP MEMBER</text>
          <circle cx="112" cy="22" r="7" fill="#EF4444" opacity="0.9" />
          <circle cx="121" cy="22" r="7" fill="#F59E0B" opacity="0.9" />
        </g>
      </svg>
    ),
  },
]

export default function SafePayment() {
  return (
    <section id="intro" className="relative py-16 md:py-24 lg:py-28 overflow-hidden bg-gradient-to-b from-white via-[#EFF6FF] to-[#F8FAFC] reveal">
      <div className="absolute -top-16 left-1/3 w-96 h-96 rounded-full bg-[#3B82F6] opacity-10 blur-[80px] pointer-events-none" />

      <div className="container-x relative">
        <div className="text-center max-w-[780px] mx-auto mb-12 md:mb-16">
          <div className="inline-block text-[12px] md:text-[13px] font-bold text-[#0EA5E9] bg-[#E0F2FE] px-3.5 py-1.5 rounded-full mb-4">
            신용카드 현금화란?
          </div>
          <h2 className="text-[26px] md:text-[40px] lg:text-[48px] font-black leading-tight break-keep mb-4 md:mb-5">
            긴급할 때 활용하는<br className="md:hidden" />
            <span className="md:ml-2"> </span>
            <span className="text-brand-gradient">나만의 비상금</span>
          </h2>
          <p className="text-[14px] md:text-[17px] text-[--text-sub] leading-[1.85] break-keep">
            신용카드 현금화는 <b className="text-[--text]">긴급한 자금이 필요할 때 신용카드 결제 한도를 활용해 현금을 확보</b>하는 방식입니다.
            폭시티켓은 업계 최고 94% 지급률로 빠르고 안전하게 처리해드립니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7 mb-12 md:mb-16">
          {limits.map((l) => (
            <div
              key={l.label}
              className={`card-3d relative overflow-hidden rounded-2xl md:rounded-3xl p-6 md:p-8 text-center ${
                l.isPrimary
                  ? 'bg-gradient-to-br from-[#0A1628] via-[#1E3A8A] to-[#2563EB] text-white md:scale-[1.04] shadow-[0_24px_60px_rgba(30,58,138,0.35)] border border-[#3B82F6]/30'
                  : 'bg-white border border-[--border] shadow-[0_8px_28px_rgba(15,30,61,0.06)]'
              }`}
            >
              {l.isPrimary && (
                <>
                  <div className="absolute inset-0 grid-bg-dark opacity-40 pointer-events-none" />
                  <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-[#60A5FA] opacity-30 blur-3xl pointer-events-none" />
                  <span className="relative inline-block bg-gradient-to-r from-[#FCD34D] to-[#F59E0B] text-[#7C2D12] text-[11px] md:text-[12px] font-black px-3 py-1 rounded-full shadow-md whitespace-nowrap mb-3">
                    ⭐ 가장 많이 이용
                  </span>
                </>
              )}
              <div className="relative flex justify-center mb-3 md:mb-4 animate-float-slow">{l.svg}</div>
              <div className={`relative text-[13px] md:text-[14px] font-semibold ${l.isPrimary ? 'text-[#93C5FD]' : 'text-[--text-sub]'} mb-2`}>
                {l.label}
              </div>
              <div
                className={`relative text-[32px] md:text-[40px] lg:text-[48px] font-black leading-none mb-3 ${
                  l.isPrimary ? 'text-gold-gradient' : 'text-brand-gradient'
                }`}
              >
                {l.amount}
              </div>
              <div className={`relative text-[12px] md:text-[14px] ${l.isPrimary ? 'text-[#CBD5E1]' : 'text-[--text-sub]'}`}>
                {l.sub}
              </div>
              <span className="shine-overlay" />
            </div>
          ))}
        </div>

        <div className="relative max-w-[820px] mx-auto">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#0EA5E9] opacity-30 blur-xl pointer-events-none" />
          <div className="relative glass-card rounded-3xl p-8 md:p-12 text-center border border-[--border-strong]">
            <div className="inline-flex items-center gap-1.5 text-[11px] md:text-[13px] font-bold text-white bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#0EA5E9] px-3.5 py-1.5 rounded-full mb-5 shadow-md">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8 5.8 21.3l2.4-7.4L2 9.4h7.6L12 2z" fill="#FCD34D"/>
              </svg>
              업계 최고 94% 지급률 보장
            </div>
            <div className="text-[30px] md:text-[48px] font-black tracking-[-1px] leading-none mb-3">
              <span className="text-navy-shine">내 한도 즉시 확인</span>
            </div>
            <p className="text-[13px] md:text-[16px] text-[--text-sub] mb-7 break-keep">언제 어디서든 가능한 나만의 비상금, 폭시티켓</p>
            <a
              href="https://t.me/foxytiket119"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 w-full md:w-auto md:px-12 py-4 md:py-5 bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#0EA5E9] text-white rounded-2xl md:rounded-full text-[15px] md:text-[17px] font-bold overflow-hidden animate-glow-pulse"
            >
              <span className="relative z-10 inline-flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="5" width="20" height="14" rx="3" stroke="#fff" strokeWidth="2" />
                  <path d="M2 10h20" stroke="#fff" strokeWidth="2" />
                </svg>
                내 입금액 1분 조회하기
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="ml-1 transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
            <p className="mt-5 text-[11px] md:text-[12px] text-[#B91C1C] font-medium">
              ※ 본인 명의 카드/계좌만 이용 가능합니다
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
