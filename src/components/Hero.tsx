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
    <section className="relative bg-white px-6 pt-14 pb-10 text-center overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] to-transparent pointer-events-none" />

      {/* Badge */}
      <div className="relative inline-flex items-center gap-2 bg-[--bg-alt] text-[#059669] text-[13px] font-medium px-4 py-2 rounded-full mb-8 border border-[--border] animate-fade-up">
        <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse-dot" />
        24시간 운영 중
      </div>

      {/* Heading */}
      <h1 className="relative text-[28px] font-extrabold leading-[1.4] mb-4 text-[--text] animate-fade-up-delay-1">
        신용카드 한도를<br />
        <span className="text-shimmer">현금</span>으로 바꿔드려요
      </h1>

      {/* Sub-badges */}
      <div className="relative flex items-center justify-center gap-2 mb-9 animate-fade-up-delay-2">
        <span className="inline-flex items-center gap-1 bg-[--bg-alt] border border-[--border] text-[12px] text-[--text-sub] font-medium px-3 py-1.5 rounded-full">
          <span className="text-[#10B981]">&#10003;</span> 정식등록 사업자
        </span>
        <span className="inline-flex items-center gap-1 bg-[--bg-alt] border border-[--border] text-[12px] text-[--text-sub] font-medium px-3 py-1.5 rounded-full">
          <span className="text-[#10B981]">&#10003;</span> 업계 최저 수수료
        </span>
        <span className="inline-flex items-center gap-1 bg-[--bg-alt] border border-[--border] text-[12px] text-[--text-sub] font-medium px-3 py-1.5 rounded-full">
          <span className="text-[#10B981]">&#10003;</span> 즉시 입금
        </span>
      </div>

      {/* Ticker card */}
      <div className="relative bg-[--bg-alt] rounded-2xl border border-[--border] overflow-hidden animate-fade-up-delay-3">
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-[--border]">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-[#10B981] rounded-full animate-pulse-dot" />
            <span className="text-[11px] font-semibold text-[#059669]">실시간 입금</span>
          </div>
          <span className="text-[11px] text-[--text-light]">방금 전</span>
        </div>
        <div className="px-4 py-3 flex items-center justify-between transition-opacity duration-300" style={{ opacity: fade ? 1 : 0 }}>
          <span className="text-[14px] text-[--text-sub]">{tickerData[tickerIdx].name}</span>
          <div className="flex items-center gap-2.5">
            <span className="text-primary font-extrabold text-[17px]">{tickerData[tickerIdx].amount}</span>
            <span className="text-[10px] font-bold text-white bg-[#10B981] px-2 py-0.5 rounded">완료</span>
          </div>
        </div>
      </div>
    </section>
  )
}
