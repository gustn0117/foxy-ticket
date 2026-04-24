'use client'

const featured = [
  {
    name: 'craz****',
    title: '급할 때 바로 입금돼서 정말 도움됐어요!',
    body: '갑자기 급하게 돈이 필요했는데 모바일 소액결제로 현금화가 된다고 해서 이용해봤어요. 상담도 친절했고 절차도 간단해서 10분 안에 입금까지 완료됐습니다. 처음엔 조금 불안했는데 믿고 맡길 수 있겠더라고요.',
  },
  {
    name: 'ghsue***',
    title: '신용카드 현금화, 생각보다 간편하네요.',
    body: '다른 데는 번거롭거나 수수료가 높다고 들었는데 여기는 설명도 자세하고 정직하게 응대해줘서 좋았어요. 신용카드로 진행했는데 전산 처리도 빠르고 입금 속도도 만족스러웠습니다. 위급할 때 유용하게 쓸 수 있을 것 같아요.',
  },
  {
    name: 'ilot12****',
    title: '새벽에도 바로 응대해줘서 만족',
    body: '자정 넘은 시간이었는데도 바로 응답해주시고 현금화 진행이 가능하다고 해서 깜짝 놀랐어요. 안내도 깔끔하고 실수 없이 처리됐습니다. 응대 속도와 신뢰도 모두 만족이에요. 다음에 또 이용하고 싶네요.',
  },
]

const mini = [
  '카톡 답장 즉시 와서 편했어요',
  '수수료 안내 그대로 입금 확인',
  '신용등급 영향 전혀 없었어요',
  '소액도 문제없이 처리',
  '24시간 운영 정말 가능',
  '3번째 이용, 매번 한결같이 빠릅니다',
  '할부 무이자로 부담 적었어요',
  '경조사비 급하게 해결됐어요',
  '업계 최고 지급률 맞네요',
  '친구한테도 추천했어요',
]

function StarRow() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, j) => (
        <svg key={j} width="15" height="15" viewBox="0 0 24 24" fill="none">
          <defs>
            <linearGradient id={`srg${j}`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FDE68A" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>
          </defs>
          <path
            d="M12 2l2.4 6.6L21 9.6l-5 4.6 1.4 6.6L12 17.6 6.6 20.8 8 14.2l-5-4.6 6.6-1 2.4-6.6z"
            fill={`url(#srg${j})`}
            stroke="#F59E0B"
            strokeOpacity="0.5"
            strokeWidth="0.5"
          />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="relative py-16 md:py-24 lg:py-28 overflow-hidden bg-gradient-to-b from-white to-[#F1F5F9] reveal">
      <div className="absolute -top-20 right-1/4 w-96 h-96 rounded-full bg-[#3B82F6] opacity-10 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-[#FCD34D] opacity-10 blur-[80px] pointer-events-none" />

      <div className="container-x relative">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block text-[12px] md:text-[13px] font-bold text-[#1E3A8A] bg-white border border-[--border-strong] px-3.5 py-1.5 rounded-full mb-4 shadow-sm">
            폭시티켓 100% 찐 이용자 후기
          </div>
          <h2 className="text-[26px] md:text-[40px] lg:text-[48px] font-black leading-tight break-keep">
            실제 고객님들의 <span className="text-brand-gradient">생생한 후기</span>
          </h2>
          <div className="inline-flex items-center gap-2 mt-5">
            <StarRow />
            <span className="text-[18px] md:text-[22px] font-black text-gold-gradient">5.0</span>
            <span className="text-[12px] md:text-[14px] text-[--text-light]">· 실시간 평점</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7 mb-10 md:mb-12">
          {featured.map((r, i) => (
            <div
              key={i}
              className="card-3d relative bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 border border-[--border] shadow-[0_8px_28px_rgba(15,30,61,0.05)] overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#FCD34D] opacity-15 blur-2xl pointer-events-none" />

              <svg width="30" height="24" viewBox="0 0 30 24" className="mb-4 text-[#CBD5E1]" fill="currentColor">
                <path d="M0 24V12C0 5.4 4.4 0.6 10.8 0v4C6.6 4.8 4 7.6 4 12h6v12H0zm16 0V12c0-6.6 4.4-11.4 10.8-12v4c-4.2 0.8-6.8 3.6-6.8 8h6v12H16z"/>
              </svg>

              <div className="flex items-center gap-2 mb-3">
                <StarRow />
              </div>
              <div className="text-[13px] md:text-[15px] font-black text-[#1E3A8A] mb-1">{r.name}님</div>
              <h3 className="text-[16px] md:text-[19px] font-black text-[--text] mb-3 break-keep leading-snug">{r.title}</h3>
              <p className="text-[13px] md:text-[14px] text-[--text-sub] leading-[1.8] break-keep">{r.body}</p>
              <span className="shine-overlay" />
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-2.5 max-w-[1040px] mx-auto">
          {mini.map((t, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 bg-white border border-[--border-strong] text-[12px] md:text-[13px] text-[#1E3A8A] font-semibold px-3 py-1.5 rounded-full shadow-sm"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#F59E0B">
                <path d="M12 2l2.4 6.6L21 9.6l-5 4.6 1.4 6.6L12 17.6 6.6 20.8 8 14.2l-5-4.6 6.6-1 2.4-6.6z"/>
              </svg>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
