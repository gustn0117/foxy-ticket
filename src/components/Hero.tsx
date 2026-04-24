'use client'

import { useEffect, useState } from 'react'

const tickerData = [
  { name: '김*수님', amount: '850,000원' },
  { name: '서*호님', amount: '750,000원' },
  { name: '박*영님', amount: '1,200,000원' },
  { name: '이*진님', amount: '500,000원' },
  { name: '최*현님', amount: '2,000,000원' },
  { name: '정*미님', amount: '350,000원' },
  { name: '강*은님', amount: '1,500,000원' },
  { name: '한*우님', amount: '900,000원' },
]

export default function Hero() {
  const [tickerIdx, setTickerIdx] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setTickerIdx((prev) => (prev + 1) % tickerData.length)
        setFade(true)
      }, 300)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FDF2F8] via-white to-[#F3E8FF]">
      {/* Decorative blobs */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#F9A8D4] opacity-30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-24 w-96 h-96 bg-[#C084FC] opacity-25 rounded-full blur-3xl pointer-events-none" />

      <div className="container-x relative pt-16 pb-14 md:pt-24 md:pb-20 lg:pt-28 lg:pb-28 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white text-[#DB2777] text-[12px] md:text-[13px] font-semibold px-4 py-2 rounded-full border border-[--border-strong] shadow-sm mb-7 md:mb-9 animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse-dot" />
          365일 24시간 상담 운영 중
        </div>

        {/* Heading */}
        <h1 className="text-[32px] md:text-[48px] lg:text-[60px] font-black leading-[1.25] md:leading-[1.2] tracking-[-0.02em] mb-5 md:mb-7 animate-fade-up-delay-1">
          소액결제 현금화<br className="md:hidden" />
          <span className="md:ml-3"> </span>
          <span className="text-shimmer">폭시티켓</span>
        </h1>

        <p className="text-[15px] md:text-[19px] lg:text-[21px] text-[--text-sub] leading-[1.7] mb-9 md:mb-11 animate-fade-up-delay-2 break-keep max-w-[760px] mx-auto">
          긴급한 자금이 필요할 때, 폭시티켓이 함께합니다.<br />
          <b className="text-[--text]">업계 최고 94% 지급률</b> · <b className="text-[--text]">365일 24시간 상담</b> · <b className="text-[--text]">5년간 무사고 운영</b>
        </p>

        {/* Sub-badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 md:mb-12 animate-fade-up-delay-2">
          {['앱카드 결제 OK', '무이자 할부 가능', '신용한도 영향 X'].map((t) => (
            <span
              key={t}
              className="inline-flex items-center gap-1 bg-white/80 border border-[--border-strong] text-[12px] md:text-[13px] text-[#7C3AED] font-semibold px-3.5 py-1.5 rounded-full"
            >
              <span className="text-[#10B981]">&#10003;</span> {t}
            </span>
          ))}
        </div>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10 md:mb-12 animate-fade-up-delay-3">
          <a
            href="https://open.kakao.com/o/skv91Efi"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FEE500] text-[#1A1A1A] rounded-full text-[15px] md:text-[16px] font-bold shadow-[0_8px_24px_rgba(254,229,0,0.4)] hover:-translate-y-0.5 active:translate-y-0 transition-all"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#1A1A1A">
              <path d="M12 3C6.48 3 2 6.58 2 10.94c0 2.8 1.86 5.27 4.66 6.66-.15.54-.96 3.47-1 3.63 0 .05.02.1.06.13a.14.14 0 00.1.02c.14-.02 3.25-2.14 3.73-2.46.77.11 1.58.17 2.4.17 5.52 0 10-3.58 10-7.94S17.52 3 12 3z"/>
            </svg>
            채널톡 1분 상담
          </a>
          <a
            href="tel:01034250104"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#EC4899] to-[#A855F7] text-white rounded-full text-[15px] md:text-[16px] font-bold shadow-[0_8px_24px_rgba(236,72,153,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.81.36 1.6.68 2.34a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.74.32 1.53.55 2.34.68A2 2 0 0122 16.92z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            010-3425-0104
          </a>
        </div>

        {/* Ticker card */}
        <div className="relative mx-auto max-w-[520px] bg-white rounded-2xl border border-[--border-strong] shadow-[0_10px_30px_rgba(168,85,247,0.08)] overflow-hidden animate-fade-up-delay-3">
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-[--border]">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-[#10B981] rounded-full animate-pulse-dot" />
              <span className="text-[11px] md:text-[12px] font-semibold text-[#059669]">실시간 입금 현황</span>
            </div>
            <span className="text-[11px] text-[--text-light]">방금 전</span>
          </div>
          <div
            className="px-4 py-3.5 flex items-center justify-between transition-opacity duration-300"
            style={{ opacity: fade ? 1 : 0 }}
          >
            <span className="text-[14px] md:text-[15px] text-[--text-sub]">{tickerData[tickerIdx].name}</span>
            <div className="flex items-center gap-2.5">
              <span className="font-extrabold text-[17px] md:text-[19px] text-brand-gradient">
                {tickerData[tickerIdx].amount}
              </span>
              <span className="text-[10px] md:text-[11px] font-bold text-white bg-[#10B981] px-2 py-0.5 rounded">완료</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
