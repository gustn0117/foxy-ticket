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
    a: '네, 365일 24시간 연중무휴로 운영됩니다. 채널톡 또는 전화(010-3425-0104)로 언제든 편하게 상담해 주세요.',
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
    <section id="faq" className="py-14 md:py-20 lg:py-24 bg-gradient-to-b from-[#FDF2F8] to-white reveal">
      <div className="container-x max-w-[900px]">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block text-[12px] md:text-[13px] font-bold text-[#DB2777] bg-white border border-[--border-strong] px-3 py-1 rounded-full mb-3">
            자주 묻는 질문
          </div>
          <h2 className="text-[24px] md:text-[34px] lg:text-[40px] font-black leading-tight break-keep">
            <span className="text-brand-gradient">폭시티켓</span> 이용 FAQ
          </h2>
        </div>

        <div className="space-y-2.5">
          {faqData.map((item, i) => {
            const isOpen = openIdx === i
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? 'border-[#F472B6] shadow-[0_8px_24px_rgba(236,72,153,0.12)] bg-white'
                    : 'border-[--border-strong] bg-white'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className={`flex items-center justify-between w-full px-5 md:px-6 py-4 md:py-5 text-[14px] md:text-[16px] text-left rounded-2xl transition-colors ${
                    isOpen
                      ? 'bg-gradient-to-r from-[#EC4899] to-[#A855F7] text-white font-bold'
                      : 'text-[--text] font-semibold hover:bg-[#FDF2F8]'
                  }`}
                >
                  <span className="flex items-center gap-3 pr-4">
                    <span className={`text-[13px] md:text-[14px] font-black shrink-0 ${isOpen ? 'text-white/75' : 'text-[#DB2777]'}`}>Q.</span>
                    <span className="break-keep">{item.q}</span>
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  >
                    <path d="M6 9l6 6 6-6" stroke={isOpen ? '#fff' : '#A855F7'} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-64' : 'max-h-0'}`}>
                  <div className="px-5 md:px-6 pt-3 pb-5 md:pb-6 flex gap-3">
                    <span className="text-[13px] md:text-[14px] font-black text-[#7C3AED] mt-0.5 shrink-0">A.</span>
                    <p className="text-[13px] md:text-[15px] text-[--text-sub] leading-[1.8] break-keep">{item.a}</p>
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
