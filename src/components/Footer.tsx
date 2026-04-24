export default function Footer() {
  return (
    <footer className="bg-dark px-6 py-8 text-center">
      <div className="text-[16px] font-bold text-white/90 mb-1">순순페이솔루션</div>
      <div className="text-[12px] text-white/40 mb-4">안전하고 빠른 카드 현금화 서비스</div>

      <div className="flex items-center justify-center gap-4 mb-4">
        <div className="flex items-center gap-1.5 text-[11px] text-white/50">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
          24시간 운영
        </div>
        <div className="w-px h-3 bg-white/10" />
        <div className="text-[11px] text-white/50">정식 사업자 등록</div>
        <div className="w-px h-3 bg-white/10" />
        <div className="text-[11px] text-white/50">업계 최저 수수료</div>
      </div>

      {/* 금융상품 필수 공시사항 */}
      <div className="border-t border-white/10 pt-4 mt-4 mx-auto max-w-sm text-left">
        <div className="text-[10px] text-white/30 font-bold mb-2">금융상품 조건 공시</div>
        <div className="text-[9px] text-white/25 leading-[1.7] space-y-1">
          <p>• 상환 기간: 최소 61일 ~ 최대 12개월</p>
          <p>• 최대 연이율(APR): 연 20% 이내 (수수료 포함)</p>
          <p>• 대표 예시: 100만 원 이용 시, 수수료 10만 원 포함 총 상환금액 110만 원 (수수료율 10%, 상환기간 90일 기준)</p>
          <p>• 취급 수수료 및 기타 비용은 이용 금액, 상환 기간에 따라 달라질 수 있습니다.</p>
          <p>• 과도한 이용은 개인 신용에 영향을 줄 수 있으므로 신중하게 판단하시기 바랍니다.</p>
        </div>
      </div>

      <div className="w-12 h-px bg-white/10 mx-auto my-4" />
      <div className="text-[11px] text-white/20">&copy; 2025 SunsonPay. All rights reserved.</div>
      <div className="text-[9px] text-white/10 mt-2">우리상품권 | 사업자등록번호 219-98-39532</div>
    </footer>
  )
}
