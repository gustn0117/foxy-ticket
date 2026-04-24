'use client'

import { useState } from 'react'

const faqData = [
  {
    q: '폭시티켓은 어떤 방식으로 진행되는 서비스인가요?',
    a: '폭시티켓은 고객님이 보유하신 신용카드 잔여 한도를 정식 매입 시스템을 통해 즉시 자산화하여 현금으로 지급해 드리는 안전한 매입 서비스입니다. 소액결제·정보이용료 한도도 함께 이용 가능합니다.',
  },
  {
    q: '이용 가능한 한도가 어느 정도인가요?',
    a: '소액결제 한도 100만 원, 정보이용료 한도 100만 원, 신용카드 한도 최대 1,000만 원까지 이용 가능합니다. 정확한 금액은 상담을 통해 확인해 주세요.',
  },
  {
    q: '신용도에 영향이 있거나 대출 기록이 남나요?',
    a: '카드 결제 방식이므로 대출 기록이 남지 않으며, 신용 점수 및 신용 한도에 영향을 주지 않습니다.',
  },
  {
    q: '지급률은 어떻게 되나요?',
    a: '폭시티켓은 업계 최고 수준인 최대 94% 지급률을 보장합니다. 카드사·결제 방식·할부 개월에 따라 지급률이 조정될 수 있으니 상담 시 정확한 금액을 안내드립니다.',
  },
  {
    q: '앱카드나 무이자 할부로도 진행 가능한가요?',
    a: '네, 앱카드 결제 및 무이자 할부 모두 가능합니다. 카드사 정책에 따라 조건이 다르므로 상담 시 자세히 안내드립니다.',
  },
  {
    q: '법적으로 안전한 업체인가요?',
    a: '폭시티켓은 정식 등록된 사업자로 합법적인 절차에 따라 5년간 무사고로 안전하게 운영하고 있습니다.',
  },
  {
    q: '주말이나 새벽에도 상담 가능한가요?',
    a: '네, 365일 24시간 연중무휴로 운영됩니다. 텔레그램 또는 전화(010-8352-0358)로 언제든 편하게 상담해 주세요.',
  },
  {
    q: '타인 명의 카드로도 신청할 수 있나요?',
    a: '아니요, 본인 명의의 카드와 계좌만 이용 가능합니다. 타인 명의는 절대 불가합니다.',
  },
  {
    q: '승인 후 입금까지 얼마나 걸리나요?',
    a: '결제 승인 확인 후 평균 3~10분 이내로 기재해 주신 본인 계좌로 입금 처리됩니다.',
  },
]

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-16 md:py-24 lg:py-28 overflow-hidden bg-gradient-to-b from-white to-[#EFF6FF] reveal">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute -top-20 right-10 w-80 h-80 rounded-full bg-[#3B82F6] opacity-10 blur-[80px] pointer-events-none" />

      <div className="container-x relative max-w-[920px]">
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-block text-[12px] md:text-[13px] font-bold text-[#1E3A8A] bg-white border border-[--border-strong] px-3.5 py-1.5 rounded-full mb-4 shadow-sm">
            자주 묻는 질문
          </div>
          <h2 className="text-[26px] md:text-[40px] lg:text-[48px] font-black leading-tight break-keep">
            <span className="text-brand-gradient">폭시티켓</span> 이용 FAQ
          </h2>
        </div>

        <div className="space-y-3">
          {faqData.map((item, i) => {
            const isOpen = openIdx === i
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-500 overflow-hidden ${
                  isOpen
                    ? 'border-transparent shadow-[0_16px_40px_rgba(30,58,138,0.18)]'
                    : 'border-[--border-strong] bg-white hover:border-[#60A5FA]'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className={`relative flex items-center justify-between w-full px-5 md:px-7 py-4 md:py-5 text-[14px] md:text-[16px] text-left transition-colors ${
                    isOpen
                      ? 'bg-gradient-to-r from-[#0A1628] via-[#1E3A8A] to-[#2563EB] text-white font-bold'
                      : 'text-[--text] font-semibold hover:bg-[#EFF6FF]'
                  }`}
                >
                  {isOpen && <span className="absolute inset-0 grid-bg-dark opacity-40 pointer-events-none" />}
                  <span className="relative flex items-center gap-3 pr-4">
                    <span className={`inline-flex items-center justify-center w-7 h-7 rounded-lg text-[12px] md:text-[13px] font-black shrink-0 ${
                      isOpen ? 'bg-[#FCD34D] text-[#7C2D12]' : 'bg-[#DBEAFE] text-[#1E3A8A]'
                    }`}>Q</span>
                    <span className="break-keep">{item.q}</span>
                  </span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={`relative shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  >
                    <path d="M6 9l6 6 6-6" stroke={isOpen ? '#FCD34D' : '#1E3A8A'} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-80' : 'max-h-0'}`}>
                  <div className="px-5 md:px-7 pt-4 pb-5 md:pb-7 flex gap-3 bg-white">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-[#FEF3C7] text-[#B45309] text-[12px] md:text-[13px] font-black mt-0.5 shrink-0">A</span>
                    <p className="text-[13px] md:text-[15px] text-[--text-sub] leading-[1.85] break-keep">{item.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
