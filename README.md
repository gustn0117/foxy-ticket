# 순순페이솔루션 - 신용카드 현금화 랜딩페이지

Next.js 14 + Tailwind CSS로 제작된 모바일 최적화 랜딩페이지입니다.

## 🚀 빠른 시작

```bash
npm install
npm run dev
```

http://localhost:3000 에서 확인할 수 있습니다.

## 📦 Vercel 배포 방법

### 방법 1: GitHub 연동 (추천)
1. 이 프로젝트를 GitHub 레포에 push
2. [vercel.com](https://vercel.com)에 접속 → GitHub 로그인
3. "New Project" → 해당 레포 선택
4. 설정 변경 없이 "Deploy" 클릭
5. 자동 배포 완료!

### 방법 2: Vercel CLI
```bash
npm i -g vercel
vercel
```

## 🛠 기술 스택
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Noto Sans KR** (Google Fonts)

## 📁 프로젝트 구조
```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── Hero.tsx          # 히어로 + 실시간 티커
    ├── SafePayment.tsx   # 안전결제 카드
    ├── Stats.tsx         # 통계 (만족도/고객/입금시간)
    ├── Warning.tsx       # 타 업체 비교
    ├── UseCases.tsx      # 이용 사례 4가지
    ├── Compare.tsx       # 일반대출 vs 순순티켓
    ├── Steps.tsx         # 3단계 이용절차
    ├── Reviews.tsx       # 이용 후기
    ├── PhishingWarning.tsx # 보이스피싱 주의
    ├── FAQ.tsx           # 자주 묻는 질문
    ├── Footer.tsx        # 푸터
    ├── StickyCTA.tsx     # 하단 고정 CTA
    └── ScrollReveal.tsx  # 스크롤 애니메이션
```

## ✏️ 커스터마이징
- **카카오톡 링크**: `StickyCTA.tsx` 및 `Hero.tsx`에서 `onClick` 핸들러 수정
- **전화번호**: `StickyCTA.tsx`에서 `tel:` 링크 추가
- **색상**: `tailwind.config.ts`의 `colors` 수정
- **후기/FAQ**: 각 컴포넌트 파일의 데이터 배열 수정
