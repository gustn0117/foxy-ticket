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
]

export default function Reviews() {
  return (
    <section id="reviews" className="py-14 md:py-20 lg:py-24 bg-white reveal">
      <div className="container-x">
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-block text-[12px] md:text-[13px] font-bold text-[#DB2777] bg-[--brand-pink-soft] px-3 py-1 rounded-full mb-3">
            폭시티켓 100% 찐 이용자 후기
          </div>
          <h2 className="text-[24px] md:text-[34px] lg:text-[40px] font-black leading-tight break-keep">
            실제 고객님들의 <span className="text-brand-gradient">생생한 후기</span>
          </h2>
          <div className="inline-flex items-center gap-2 mt-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, j) => (
                <span key={j} className="text-[#F59E0B] text-[18px] md:text-[22px]">&#9733;</span>
              ))}
            </div>
            <span className="text-[15px] md:text-[17px] font-bold text-[--text]">5.0</span>
            <span className="text-[12px] md:text-[14px] text-[--text-light]">· 실시간 평점</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
          {featured.map((r, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-white to-[#FDF2F8] rounded-2xl p-6 md:p-7 border border-[--border-strong] hover:shadow-[0_12px_32px_rgba(236,72,153,0.12)] transition-all"
            >
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-[#F59E0B] text-[14px] md:text-[16px]">&#9733;</span>
                ))}
              </div>
              <div className="text-[14px] md:text-[15px] font-extrabold text-[#DB2777] mb-1">{r.name}님</div>
              <h3 className="text-[16px] md:text-[18px] font-black text-[--text] mb-3 break-keep leading-snug">{r.title}</h3>
              <p className="text-[13px] md:text-[14px] text-[--text-sub] leading-[1.75] break-keep">{r.body}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-2.5 max-w-[960px] mx-auto">
          {mini.map((t, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1 bg-[#FDF2F8] border border-[--border-strong] text-[12px] md:text-[13px] text-[#7C3AED] font-semibold px-3 py-1.5 rounded-full"
            >
              <span className="text-[#F59E0B]">&#9733;</span> {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
