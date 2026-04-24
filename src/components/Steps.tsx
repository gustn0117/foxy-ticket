const steps = [
  {
    num: '01',
    title: '채널톡 및 전화로',
    highlight: '365일 24시간 가능',
    sub: '문의 상담하기',
    colorA: '#1E3A8A',
    colorB: '#3B82F6',
    progress: 212,
    svg: (
      <svg viewBox="0 0 80 80" className="w-12 h-12 md:w-14 md:h-14">
        <defs>
          <linearGradient id="s1g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1E3A8A" />
          </linearGradient>
          <linearGradient id="s1shine" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M16 18c0-2 2-4 4-4h40c2 0 4 2 4 4v30c0 2-2 4-4 4H36L22 64v-12h-2c-2 0-4-2-4-4z" fill="url(#s1g)" />
        <path d="M16 18c0-2 2-4 4-4h40c2 0 4 2 4 4v18H16z" fill="url(#s1shine)" />
        <circle cx="30" cy="32" r="3" fill="#FCD34D" />
        <circle cx="40" cy="32" r="3" fill="#FCD34D" />
        <circle cx="50" cy="32" r="3" fill="#FCD34D" />
      </svg>
    ),
  },
  {
    num: '02',
    title: '상담원이 절차 설명 후',
    highlight: '한도 매입 진행',
    sub: '고객이 원하는',
    colorA: '#2563EB',
    colorB: '#0EA5E9',
    progress: 283,
    svg: (
      <svg viewBox="0 0 80 80" className="w-12 h-12 md:w-14 md:h-14">
        <defs>
          <linearGradient id="s2g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0EA5E9" />
            <stop offset="100%" stopColor="#1E3A8A" />
          </linearGradient>
          <linearGradient id="s2gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FCD34D" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>
          <linearGradient id="s2shine" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect x="12" y="22" width="56" height="38" rx="6" fill="url(#s2g)" />
        <rect x="12" y="22" width="56" height="38" rx="6" fill="url(#s2shine)" />
        <rect x="12" y="28" width="56" height="6" fill="#0A1628" opacity="0.55" />
        <rect x="20" y="42" width="10" height="6" rx="1" fill="url(#s2gold)" />
        <line x1="34" y1="45" x2="56" y2="45" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" />
        <line x1="34" y1="52" x2="48" y2="52" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: '03',
    title: '기재해 주신 계좌로',
    highlight: '비상금 입금 완료!',
    sub: '원하시는 금액의',
    colorA: '#0EA5E9',
    colorB: '#F59E0B',
    progress: 283,
    svg: (
      <svg viewBox="0 0 80 80" className="w-12 h-12 md:w-14 md:h-14">
        <defs>
          <linearGradient id="s3g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="100%" stopColor="#0EA5E9" />
          </linearGradient>
          <linearGradient id="s3gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="60%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>
          <radialGradient id="s3shine" cx="0.3" cy="0.3" r="0.5">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="40" cy="40" r="28" fill="url(#s3g)" />
        <circle cx="40" cy="40" r="28" fill="url(#s3shine)" />
        <circle cx="40" cy="40" r="20" fill="url(#s3gold)" />
        <circle cx="40" cy="40" r="20" fill="url(#s3shine)" opacity="0.7" />
        <text x="40" y="47" textAnchor="middle" fill="#7C2D12" fontSize="18" fontWeight="900">₩</text>
      </svg>
    ),
  },
]

export default function Steps() {
  return (
    <section id="steps" className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-white to-[#EFF6FF] reveal">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[#3B82F6] opacity-10 blur-[80px] pointer-events-none animate-blob" />
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#0EA5E9] opacity-10 blur-[80px] pointer-events-none animate-blob-2" />

      <div className="container-x relative">
        <div className="text-center mb-14 md:mb-20">
          <div className="inline-block text-[12px] md:text-[13px] font-bold text-[#1E3A8A] bg-white border border-[--border-strong] px-3.5 py-1.5 rounded-full mb-4 shadow-sm">
            폭시티켓 신용카드 이용 시
          </div>
          <h2 className="text-[28px] md:text-[42px] lg:text-[50px] font-black leading-tight mb-3 break-keep">
            한도만큼! <span className="text-brand-gradient">비상금 매입 순서</span>
          </h2>
          <p className="text-[14px] md:text-[17px] text-[--text-sub]">
            채널톡 상담부터 입금까지 단 <b className="text-[#1E3A8A]">3단계</b>로 완료
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-start">
          {steps.map((s, i) => (
            <div key={s.num} className="relative">
              <div className="step-ring">
                <svg viewBox="0 0 100 100" className="overflow-visible">
                  <defs>
                    <linearGradient id={`ringG${s.num}`} x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor={s.colorA} />
                      <stop offset="100%" stopColor={s.colorB} />
                    </linearGradient>
                    <radialGradient id={`ringGlow${s.num}`} cx="0.5" cy="0.5" r="0.5">
                      <stop offset="0%" stopColor={s.colorB} stopOpacity="0.4" />
                      <stop offset="100%" stopColor={s.colorB} stopOpacity="0" />
                    </radialGradient>
                    <filter id={`ringShadow${s.num}`} x="-30%" y="-30%" width="160%" height="160%">
                      <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor={s.colorA} floodOpacity="0.25" />
                    </filter>
                  </defs>
                  <circle cx="50" cy="50" r="48" fill={`url(#ringGlow${s.num})`} />
                  <circle cx="50" cy="50" r="42" fill="#F8FAFC" />
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#E2E8F0" strokeWidth="6" />
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke={`url(#ringG${s.num})`}
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray="264"
                    strokeDashoffset={264 - s.progress}
                    transform="rotate(-90 50 50)"
                    filter={`url(#ringShadow${s.num})`}
                  />
                  {/* decorative small dots */}
                  <circle cx="50" cy="8" r="3.5" fill={s.colorA} filter={`url(#ringShadow${s.num})`} />
                  <circle cx="50" cy="8" r="1.4" fill="#fff" />
                </svg>
                <div className="step-ring-content">
                  <div className="mb-2 animate-float-slow">{s.svg}</div>
                  <div className="text-[18px] md:text-[22px] font-black tracking-[0.08em] mb-1" style={{ color: s.colorA }}>
                    STEP {s.num}
                  </div>
                  <div className="text-[11px] md:text-[12px] text-[--text-sub] leading-[1.5] break-keep">{s.title}</div>
                  <div className="text-[13px] md:text-[15px] font-bold mt-1 break-keep" style={{ color: s.colorA }}>
                    {s.highlight}
                  </div>
                  <div className="text-[10px] md:text-[11px] text-[--text-light] mt-0.5 break-keep">{s.sub}</div>
                </div>
              </div>

              {i < steps.length - 1 && (
                <>
                  <div className="hidden md:block absolute top-1/2 -right-5 -translate-y-1/2 z-10">
                    <div className="w-10 h-10 rounded-full bg-white shadow-[0_6px_16px_rgba(30,58,138,0.2)] border border-[--border-strong] flex items-center justify-center">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14M13 5l7 7-7 7" stroke="#1E3A8A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div className="md:hidden flex justify-center my-3">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d="M12 5v14M5 13l7 7 7-7" stroke="#1E3A8A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="mt-14 md:mt-20 max-w-[820px] mx-auto">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#0EA5E9] opacity-40 blur-lg pointer-events-none" />
            <div className="relative bg-[#0A1628] rounded-full py-5 md:py-6 px-6 md:px-10 text-center border border-[#3B82F6]/30 overflow-hidden">
              <div className="absolute inset-0 grid-bg-dark opacity-40 pointer-events-none" />
              <p className="relative text-[15px] md:text-[20px] font-black tracking-[-0.01em] break-keep text-white">
                <span className="text-gold-gradient">&quot; </span>
                앱카드 <span className="text-[#60A5FA] mx-1">/</span> 무이자 할부 <span className="text-[#60A5FA] mx-1">/</span> 신용한도 영향{' '}
                <span className="text-[#EF4444]">X</span>
                <span className="text-gold-gradient"> &quot;</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
