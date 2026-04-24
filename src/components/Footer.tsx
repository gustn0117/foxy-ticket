export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#020617] text-white py-14 md:py-20">
      <div className="absolute inset-0 bg-mesh-navy opacity-70 pointer-events-none" />
      <div className="absolute inset-0 grid-bg-dark opacity-40 pointer-events-none" />
      <div className="absolute -top-32 left-1/4 w-96 h-96 rounded-full bg-[#1E3A8A] opacity-40 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-40 right-1/4 w-[420px] h-[420px] rounded-full bg-[#0EA5E9] opacity-25 blur-[120px] pointer-events-none" />

      <div className="container-x relative max-w-[1040px] text-center">
        <div className="inline-flex items-center gap-3 mb-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/fox-only-256.png"
            alt="폭시티켓 로고"
            width={56}
            height={56}
            className="w-12 h-12 md:w-14 md:h-14 object-contain drop-shadow-[0_8px_20px_rgba(96,165,250,0.5)]"
          />
          <span className="text-[24px] md:text-[32px] font-black text-brand-gradient tracking-tight">폭시티켓</span>
        </div>
        <p className="text-[12px] md:text-[15px] text-[#94A3B8] mb-8 md:mb-10 break-keep">
          안전하고 빠른 신용카드 · 소액결제 현금화 전문 서비스
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mb-10 md:mb-12">
          <div className="inline-flex items-center gap-1.5 text-[12px] md:text-[14px] text-[#CBD5E1]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse-dot" />
            365일 24시간 상담
          </div>
          <div className="w-px h-3 bg-white/15" />
          <div className="text-[12px] md:text-[14px] text-[#CBD5E1]">업계 최고 94% 지급률</div>
          <div className="w-px h-3 bg-white/15" />
          <div className="text-[12px] md:text-[14px] text-[#CBD5E1]">5년간 무사고</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 text-left max-w-[780px] mx-auto mb-10 md:mb-12">
          <div className="glass-card-dark rounded-2xl p-5 md:p-6">
            <div className="flex items-center gap-2 mb-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.81.36 1.6.68 2.34a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.74.32 1.53.55 2.34.68A2 2 0 0122 16.92z" stroke="#FCD34D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-[11px] md:text-[13px] text-[#94A3B8] font-semibold uppercase tracking-wider">연락처</span>
            </div>
            <div className="text-[13px] md:text-[15px] text-white/90 font-semibold leading-[1.95]">
              <div>상호명 : 폭시티켓</div>
              <div>대표전화 : <a href="tel:01083520358" className="text-gold-gradient font-black">010-8352-0358</a></div>
              <div>상담 : 텔레그램 공식 채널 <a href="https://t.me/foxytiket" target="_blank" rel="noopener noreferrer" className="text-[#37AEE2] font-black">@foxytiket</a></div>
            </div>
          </div>
          <div className="glass-card-dark rounded-2xl p-5 md:p-6">
            <div className="flex items-center gap-2 mb-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="6" width="18" height="14" rx="2" stroke="#60A5FA" strokeWidth="2"/>
                <path d="M3 10h18M8 15h4" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span className="text-[11px] md:text-[13px] text-[#94A3B8] font-semibold uppercase tracking-wider">취급 상품</span>
            </div>
            <div className="text-[13px] md:text-[14px] text-[#CBD5E1] leading-[1.9] break-keep">
              문화상품권 · 해피머니 · 신용카드 현금화 · 정보이용료 · 휴대폰 소액결제 · 각종 모바일상품권
            </div>
          </div>
        </div>

        <div className="pt-6 md:pt-8 border-t border-white/10 max-w-[820px] mx-auto text-left">
          <div className="text-[10px] md:text-[12px] text-[#94A3B8] font-bold mb-2 uppercase tracking-wider">금융상품 조건 공시</div>
          <div className="text-[10px] md:text-[12px] text-[#64748B] leading-[1.9] space-y-1">
            <p>• 상환 기간: 최소 61일 ~ 최대 12개월</p>
            <p>• 최대 연이율(APR): 연 20% 이내 (수수료 포함)</p>
            <p>• 대표 예시: 100만 원 이용 시, 수수료 6만 원 포함 총 상환금액 106만 원 (지급률 94% · 상환기간 90일 기준)</p>
            <p>• 취급 수수료 및 기타 비용은 이용 금액, 카드사, 상환 기간에 따라 달라질 수 있습니다.</p>
            <p>• 과도한 이용은 개인 신용에 영향을 줄 수 있으므로 신중하게 판단하시기 바랍니다.</p>
          </div>
        </div>

        <div className="w-12 h-px bg-white/10 mx-auto my-7 md:my-10" />
        <div className="text-[11px] md:text-[13px] text-[#475569]">&copy; 2026 폭시티켓 (FoxyTicket). All rights reserved.</div>
      </div>
    </footer>
  )
}
