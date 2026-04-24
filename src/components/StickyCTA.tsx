'use client'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

function trackConversion() {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: 'AW-17949755839/kSWBCMHE4PcbEL-Tju9C',
      transaction_id: `kakao_${Date.now()}`,
    })
  }
}

function trackClickToCall(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault()
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: ['AW-17949755839/KJFMCOHq6vcbEL-Tju9C', 'AW-17949755839/NmaRCJ6GiPsbEL-Tju9C'],
      transaction_id: `call_${Date.now()}`,
      event_callback: () => {
        window.location.href = 'tel:01044037958'
      },
    })
    setTimeout(() => {
      window.location.href = 'tel:01044037958'
    }, 500)
  } else {
    window.location.href = 'tel:01044037958'
  }
}

export default function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] z-50 bg-dark/95 backdrop-blur-md px-4 py-3 shadow-[0_-4px_24px_rgba(0,0,0,0.2)]">
      <div className="flex gap-2.5">
        <a
          href="https://open.kakao.com/o/skv91Efi"
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackConversion}
          className="flex-1 flex items-center justify-center gap-1.5 py-3.5 bg-[#FEE500] text-[#1A1A1A] rounded-xl text-[13px] font-bold whitespace-nowrap hover:brightness-[0.97] active:scale-[0.98] transition-all"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#1A1A1A" className="shrink-0">
            <path d="M12 3C6.48 3 2 6.58 2 10.94c0 2.8 1.86 5.27 4.66 6.66-.15.54-.96 3.47-1 3.63 0 .05.02.1.06.13a.14.14 0 00.1.02c.14-.02 3.25-2.14 3.73-2.46.77.11 1.58.17 2.4.17 5.52 0 10-3.58 10-7.94S17.52 3 12 3z"/>
          </svg>
          카카오톡 · 금액확인 1분
        </a>
        <a
          href="tel:01044037958"
          onClick={trackClickToCall}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-accent text-white rounded-xl text-[15px] font-bold hover:brightness-[0.95] active:scale-[0.98] transition-all"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.81.36 1.6.68 2.34a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.74.32 1.53.55 2.34.68A2 2 0 0122 16.92z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          전화상담
        </a>
      </div>
    </div>
  )
}
