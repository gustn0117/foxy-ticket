'use client'

export default function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/95 to-[#020617]/80 backdrop-blur-md" />
      <div className="absolute inset-0 border-t border-[#1E3A8A]/40" />
      <div className="relative container-x py-3 md:py-3.5">
        <div className="flex gap-2.5 md:gap-3 max-w-[760px] mx-auto">
          <a
            href="https://open.kakao.com/o/skv91Efi"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex-1 flex items-center justify-center gap-1.5 md:gap-2 py-3.5 md:py-4 bg-[#FEE500] text-[#1A1A1A] rounded-xl md:rounded-2xl text-[13px] md:text-[15px] font-bold whitespace-nowrap shadow-[0_8px_24px_rgba(254,229,0,0.3)] hover:brightness-[0.97] active:scale-[0.98] transition-all overflow-hidden"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#1A1A1A" className="shrink-0 md:w-[18px] md:h-[18px]">
              <path d="M12 3C6.48 3 2 6.58 2 10.94c0 2.8 1.86 5.27 4.66 6.66-.15.54-.96 3.47-1 3.63 0 .05.02.1.06.13a.14.14 0 00.1.02c.14-.02 3.25-2.14 3.73-2.46.77.11 1.58.17 2.4.17 5.52 0 10-3.58 10-7.94S17.52 3 12 3z"/>
            </svg>
            채널톡 · 1분 상담
          </a>
          <a
            href="tel:01034250104"
            className="relative flex-1 flex items-center justify-center gap-1.5 md:gap-2 py-3.5 md:py-4 rounded-xl md:rounded-2xl text-[13px] md:text-[15px] font-bold text-white whitespace-nowrap bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#0EA5E9] animate-glow-pulse overflow-hidden"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0 md:w-[18px] md:h-[18px]">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.81.36 1.6.68 2.34a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.74.32 1.53.55 2.34.68A2 2 0 0122 16.92z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            010-3425-0104
          </a>
        </div>
      </div>
    </div>
  )
}
