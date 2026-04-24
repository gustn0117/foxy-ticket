'use client'

import { useState } from 'react'

const faqData = [
  {
    q: '어떤 방식으로 진행되는 서비스인가요?',
    a: '본 서비스는 고객님이 보유하신 신용카드 잔여 한도를 정식 등록 매입 업체의 전문 시스템을 통해 즉시 자산화하여 현금으로 지급해 드리는 안전한 매입 서비스입니다.',
  },
  {
    q: '이용 한도에 제한이 있나요?',
    a: '소액부터 고액까지 카드 잔여한도 내에서 자유롭게 이용 가능합니다. 정확한 금액은 상담을 통해 확인해 주세요.',
  },
  {
    q: '신용도에 영향이 있거나 대출 기록이 남나요?',
    a: '카드 결제 방식이므로 대출 기록이 남지 않으며, 신용등급에 영향을 주지 않습니다.',
  },
  {
    q: '지급률(수수료)은 어떻게 결정되나요?',
    a: '결제 금액, 카드사, 할부 개월 수에 따라 수수료가 달라집니다. 상담 시 정확한 지급률을 안내드립니다.',
  },
  {
    q: '할부 결제 및 무이자 혜택이 가능한가요?',
    a: '네, 무이자 할부가 가능합니다. 카드사 및 할부 개월에 따라 조건이 다르니 상담 시 확인해 주세요.',
  },
  {
    q: '법적으로 안전한 정식 업체인가요?',
    a: '순순페이솔루션은 정식 등록된 사업자로 합법적인 절차에 따라 안전하게 운영되고 있습니다.',
  },
  {
    q: '주말이나 야간에도 서비스 이용이 가능한가요?',
    a: '네, 24시간 연중무휴로 운영됩니다. 언제든 편하게 상담해 주세요.',
  },
  {
    q: '타인 명의의 카드로도 신청할 수 있나요?',
    a: '아니요, 본인 명의의 카드와 계좌만 이용 가능합니다. 타인 명의는 절대 불가합니다.',
  },
  {
    q: '승인 후 입금까지 소요되는 시간은?',
    a: '결제 승인 확인 후 평균 3분 이내로 입금 처리됩니다.',
  },
]

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section className="px-5 py-8 reveal">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-[18px] font-extrabold">자주 묻는 질문</h2>
        <span className="text-[11px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{faqData.length}개</span>
      </div>
      <div className="space-y-2">
        {faqData.map((item, i) => {
          const isOpen = openIdx === i
          return (
            <div key={i} className={`rounded-xl border transition-all duration-300 ${isOpen ? 'border-primary/30 shadow-[0_2px_12px_rgba(99,102,241,0.08)]' : 'border-[--border]'}`}>
              <button
                onClick={() => setOpenIdx(isOpen ? null : i)}
                className={`flex items-center justify-between w-full px-4 py-3.5 text-[14px] text-left rounded-xl transition-colors ${
                  isOpen ? 'bg-primary text-white font-bold' : 'bg-[--bg-alt] text-[--text] font-medium hover:bg-gray-100'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className={`text-[12px] font-bold ${isOpen ? 'text-white/60' : 'text-[--text-light]'}`}>Q.</span>
                  {item.q}
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  className={`shrink-0 ml-2 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                >
                  <path d="M6 9l6 6 6-6" stroke={isOpen ? '#fff' : '#9CA3AF'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-52' : 'max-h-0'}`}>
                <div className="px-4 pt-3 pb-4 flex gap-2">
                  <span className="text-[12px] font-bold text-primary mt-0.5 shrink-0">A.</span>
                  <p className="text-[13px] text-[--text-sub] leading-[1.7]">{item.a}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
