'use client'

import { useEffect, useRef, useState } from 'react'

const reviews = [
  { name: '권*진', text: '금융 기록에 남지 않는 서비스라 나중에 은행 이용할 때도 걱정 없을 것 같아요.' },
  { name: '황*재', text: '소액인데도 정성껏 상담해주셔서 감동받았습니다. 기분 좋게 이용하고 가요.' },
  { name: '안*영', text: '시스템이 잘 갖춰져 있어서 전 과정이 매끄럽고 신속하게 끝났습니다.' },
  { name: '이*호', text: '급하게 돈이 필요했는데 30분 만에 입금 완료됐어요. 정말 빠릅니다.' },
  { name: '김*수', text: '다른 곳에서 수수료 많이 뜯기고 왔는데, 여기는 확실히 저렴해서 놀랐어요.' },
  { name: '박*은', text: '카톡으로 간편하게 상담받고 바로 진행할 수 있어서 편리했습니다.' },
  { name: '최*라', text: '처음 이용하는 거라 긴장했는데 직원분이 친절하게 설명해주셔서 안심하고 했어요.' },
  { name: '정*민', text: '신용등급 걱정했는데 정말 영향 없더라고요. 추천드립니다.' },
  { name: '조*현', text: '밤 11시에 상담 요청했는데 바로 답변 와서 감사했어요. 진짜 24시간 맞네요.' },
  { name: '한*우', text: '카드 한도 소진되어서 걱정이었는데 깔끔하게 해결해주셨어요. 감사합니다.' },
  { name: '송*아', text: '지인 소개로 알게 됐는데 수수료도 합리적이고 과정도 투명해서 좋았어요.' },
  { name: '윤*석', text: '타 업체 3군데 비교해봤는데 여기가 제일 수수료 낮고 빠릅니다.' },
  { name: '서*빈', text: '사업자금 급히 필요해서 이용했는데 정확한 시간에 입금 확인했습니다.' },
  { name: '장*희', text: '복잡한 절차 없이 카톡 상담 한 번으로 끝났어요. 다음에도 이용할게요.' },
  { name: '오*준', text: '주말에도 이용 가능한 게 가장 큰 장점이에요. 직장인에게 추천!' },
  { name: '나*형', text: '카드값 막막했는데 덕분에 한숨 돌렸습니다. 감사해요.' },
  { name: '문*정', text: '수수료 안내받은 그대로 입금되어서 신뢰가 갑니다.' },
  { name: '배*훈', text: '타 업체에서 사기당한 적 있는데 여기는 정말 다르네요.' },
  { name: '임*연', text: '상담부터 입금까지 10분도 안 걸렸어요. 놀랍습니다.' },
  { name: '유*미', text: '친구한테도 추천했어요. 둘 다 만족하고 있습니다.' },
  { name: '신*호', text: '새벽 2시에 연락했는데 바로 처리해주셨어요. 대단합니다.' },
  { name: '강*별', text: '경조사비 급하게 필요했는데 바로 해결됐어요. 감사합니다.' },
  { name: '홍*택', text: '수수료가 진짜 업계 최저 맞는 거 같아요. 다른 데랑 비교 불가.' },
  { name: '양*서', text: '처음엔 반신반의했는데 실제로 이용하니 완전 만족입니다.' },
  { name: '전*원', text: '카드 3장으로 한 번에 진행했는데 깔끔하게 처리됐어요.' },
  { name: '고*림', text: '설명이 자세해서 이해하기 쉬웠고 과정이 투명합니다.' },
  { name: '백*진', text: '월세 내야 하는데 마침 좋은 서비스를 알게 돼서 다행이에요.' },
  { name: '차*은', text: '이전 업체에서는 수수료 바가지 씌웠는데 여긴 양심적이에요.' },
  { name: '노*혁', text: '결제하자마자 바로 입금 확인했습니다. 속도가 미쳤어요.' },
  { name: '하*나', text: '불안한 마음에 여러 번 확인했는데 매번 친절하게 답변해주셨어요.' },
  { name: '도*환', text: '비상금이 필요할 때 가장 먼저 떠오르는 곳이 됐습니다.' },
  { name: '성*아', text: '카드 현금화 처음인데 절차가 너무 간단해서 좋았어요.' },
  { name: '류*빈', text: '할부 무이자로 진행할 수 있어서 부담이 적었습니다.' },
  { name: '민*기', text: '지인 소개로 왔는데 소개해준 친구한테 고맙다고 했어요.' },
  { name: '피*율', text: '다른 곳은 연락이 느린데 여기는 카톡 답장이 즉시 와요.' },
  { name: '탁*준', text: '소액도 거절 없이 진행해주셔서 감사했습니다.' },
  { name: '허*영', text: '수수료 안내 후 추가 비용 전혀 없었어요. 깔끔합니다.' },
  { name: '주*현', text: '사업 운영하면서 급전 필요할 때마다 이용하고 있어요.' },
  { name: '봉*석', text: '입금 시간 정확히 지켜주셔서 일정 관리하기 좋았어요.' },
  { name: '곽*이', text: '3번째 이용인데 매번 한결같이 빠르고 정확합니다.' },
  { name: '위*찬', text: '여행 경비 마련하려고 이용했는데 아주 만족스러웠어요.' },
  { name: '심*우', text: '타 업체 대비 수수료가 확실히 저렴합니다. 단골이에요.' },
  { name: '변*라', text: '상담원분이 정말 친절해서 처음인데도 안심하고 진행했어요.' },
  { name: '추*동', text: '공과금 납부 기한이 급했는데 제때 해결할 수 있었습니다.' },
  { name: '마*진', text: '후기 보고 반신반의했는데 직접 이용하니 후기가 다 맞더라고요.' },
  { name: '길*태', text: '입금까지 딱 5분 걸렸어요. 약속대로 빠릅니다.' },
  { name: '엄*희', text: '한도가 적어서 걱정했는데 소액도 문제없이 처리해주셨어요.' },
  { name: '방*율', text: '두 번째 이용인데 첫 번째보다 더 빨라진 것 같아요.' },
  { name: '석*나', text: '지인 3명한테 추천했더니 다들 만족한다고 합니다.' },
  { name: '채*헌', text: '24시간 운영이라 시간 구애 없이 이용할 수 있어 좋습니다.' },
]

const VISIBLE_COUNT = 4
const colors = ['bg-primary', 'bg-accent', 'bg-[#10B981]', 'bg-[#EC4899]', 'bg-[#8B5CF6]']

export default function Reviews() {
  const [startIdx, setStartIdx] = useState(0)
  const [offset, setOffset] = useState(0)
  const [animate, setAnimate] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      // 1) transition ON → slide up
      setAnimate(true)
      setOffset(-88)

      // 2) after transition ends: transition OFF → snap back to 0 + advance data
      setTimeout(() => {
        setAnimate(false)
        setOffset(0)
        setStartIdx((prev) => (prev + 1) % reviews.length)
      }, 500)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const visible = []
  for (let i = 0; i < VISIBLE_COUNT + 1; i++) {
    const idx = (startIdx + i) % reviews.length
    visible.push({ ...reviews[idx], idx })
  }

  return (
    <section className="px-5 py-8 reveal">
      <div className="flex items-end justify-between mb-4">
        <div>
          <h2 className="text-[18px] font-extrabold mb-0.5">고객 후기</h2>
          <p className="text-[13px] text-[--text-light]">실제 이용 고객님들의 생생한 후기</p>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, j) => (
              <span key={j} className="text-accent text-[14px]">&#9733;</span>
            ))}
          </div>
          <span className="text-[13px] font-bold text-[--text]">5.0</span>
        </div>
      </div>

      <div ref={containerRef} className="overflow-hidden relative" style={{ height: `${VISIBLE_COUNT * 88}px` }}>
        <div
          style={{
            transform: `translateY(${offset}px)`,
            transition: animate ? 'transform 500ms ease-in-out' : 'none',
          }}
        >
          {visible.map((r, i) => (
            <div
              key={`${r.idx}-${startIdx}-${i}`}
              className="h-[84px] mb-1 bg-[--bg-alt] rounded-xl px-4 py-3 border border-[--border] flex items-center gap-3"
            >
              <div className={`w-9 h-9 rounded-full ${colors[r.idx % colors.length]} flex items-center justify-center text-white text-[12px] font-bold shrink-0`}>
                {r.name.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[13px] font-bold text-[--text]">{r.name} 님</span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-accent text-[9px]">&#9733;</span>
                    ))}
                  </div>
                </div>
                <p className="text-[12px] text-[--text-sub] leading-snug truncate">&ldquo;{r.text}&rdquo;</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
