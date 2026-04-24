'use client'

function trackConversion() {
  if (typeof window !== 'undefined' && (window as { gtag?: (...args: unknown[]) => void }).gtag) {
    (window as { gtag: (...args: unknown[]) => void }).gtag('event', 'conversion', {
      send_to: 'AW-17949755839/kSWBCMHE4PcbEL-Tju9C',
      transaction_id: `inquiry_${Date.now()}`,
    })
  }
}

export default function SafePayment() {
  return (
    <section className="px-5 pt-2">
      <div className="bg-[--bg-alt] rounded-3xl p-7 pb-5 text-center border border-[--border] reveal">
        <div className="inline-flex items-center gap-1.5 bg-accent-light text-accent text-[12px] font-bold px-3 py-1 rounded-full mb-4">
          업계 최저 수수료 단독 보장
        </div>

        <div className="text-[44px] font-black tracking-[-2px] mb-1 leading-none">
          <span className="text-shimmer">안전결제</span>
        </div>

        <p className="text-[13px] text-[--text-sub] mb-6">내 카드 한도, 얼마까지 될까?</p>

        <a
          href="https://open.kakao.com/o/skv91Efi"
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackConversion}
          className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl text-[15px] font-bold shadow-[0_4px_16px_rgba(99,102,241,0.3)] hover:shadow-[0_6px_24px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 active:translate-y-0 transition-all"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="5" width="20" height="14" rx="3" stroke="#fff" strokeWidth="2" />
            <path d="M2 10h20" stroke="#fff" strokeWidth="2" />
          </svg>
          내 입금액 조회하기
        </a>

        <p className="mt-3.5 text-[11px] text-[#EF4444] font-medium">
          ※ 본인 명의 카드/계좌만 이용 가능
        </p>
      </div>
    </section>
  )
}
