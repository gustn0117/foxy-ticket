import Hero from '@/components/Hero'
import SafePayment from '@/components/SafePayment'
import Stats from '@/components/Stats'
import Warning from '@/components/Warning'
import UseCases from '@/components/UseCases'
import Compare from '@/components/Compare'
import Steps from '@/components/Steps'
import Reviews from '@/components/Reviews'
import PhishingWarning from '@/components/PhishingWarning'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import StickyCTA from '@/components/StickyCTA'
import ScrollReveal from '@/components/ScrollReveal'
import ScrollProgress from '@/components/ScrollProgress'
import CursorGlow from '@/components/CursorGlow'
import LiveStats from '@/components/LiveStats'
import Brands from '@/components/Brands'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: '폭시티켓',
  alternateName: ['FoxyTicket', '폭시티켓 솔루션'],
  url: 'https://foxy-ticket.hsweb.pics',
  description:
    '폭시티켓은 신용카드 현금화, 소액결제 현금화, 정보이용료 현금화 전문 업체입니다. 업계 최고 94% 지급률, 365일 24시간 상담, 5년간 무사고 운영. 앱카드·무이자 할부 가능, 신용한도 영향 없음.',
  telephone: '+82-10-3425-0104',
  areaServed: { '@type': 'Country', name: 'KR' },
  serviceType: [
    '신용카드현금화',
    '소액결제현금화',
    '정보이용료현금화',
    '휴대폰현금화',
    '카드깡',
  ],
  slogan: '업계 최고 94% 지급률, 365일 24시간 상담 - 폭시티켓',
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: 'https://foxy-ticket.hsweb.pics',
    servicePhone: {
      '@type': 'ContactPoint',
      telephone: '+82-10-3425-0104',
      contactType: 'customer service',
      availableLanguage: 'Korean',
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    },
  },
  offers: {
    '@type': 'Offer',
    description: '신용카드 현금화 업계 최고 94% 지급률 보장. 무이자 할부, 앱카드 결제 가능.',
    availability: 'https://schema.org/InStock',
  },
}

function TopNav() {
  return (
    <header className="sticky top-0 z-40 bg-[#0A1628]/80 backdrop-blur-xl border-b border-white/10">
      <div className="container-x flex items-center justify-between h-14 md:h-16">
        <a href="/" className="inline-flex items-center gap-2.5">
          <span className="inline-block w-8 h-8 md:w-9 md:h-9 rounded-xl bg-gradient-to-br from-[#FCD34D] via-[#F59E0B] to-[#B45309] shadow-[0_4px_12px_rgba(245,158,11,0.3)] relative overflow-hidden">
            <svg viewBox="0 0 40 40" className="w-full h-full">
              <path d="M10 30 L30 10 M14 10 L10 10 L10 14 M26 30 L30 30 L30 26" stroke="#7C2D12" strokeWidth="3" strokeLinecap="round" fill="none" />
            </svg>
          </span>
          <span className="text-[18px] md:text-[22px] font-black text-gold-gradient tracking-tight">폭시티켓</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-[14px] font-semibold text-[#94A3B8]">
          <a href="#intro" className="hover:text-white transition">현금화 소개</a>
          <a href="#benefits" className="hover:text-white transition">혜택</a>
          <a href="#steps" className="hover:text-white transition">이용 순서</a>
          <a href="#reviews" className="hover:text-white transition">후기</a>
          <a href="#faq" className="hover:text-white transition">FAQ</a>
        </nav>
        <a
          href="https://open.kakao.com/o/skv91Efi"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 md:px-5 py-2 md:py-2.5 bg-[#FEE500] text-[#1A1A1A] rounded-full text-[12px] md:text-[13px] font-bold shadow-[0_4px_12px_rgba(254,229,0,0.25)] hover:brightness-[0.97] transition"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#1A1A1A">
            <path d="M12 3C6.48 3 2 6.58 2 10.94c0 2.8 1.86 5.27 4.66 6.66-.15.54-.96 3.47-1 3.63 0 .05.02.1.06.13a.14.14 0 00.1.02c.14-.02 3.25-2.14 3.73-2.46.77.11 1.58.17 2.4.17 5.52 0 10-3.58 10-7.94S17.52 3 12 3z"/>
          </svg>
          채널톡 상담
        </a>
      </div>
    </header>
  )
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollReveal />
      <ScrollProgress />
      <CursorGlow />
      <TopNav />
      <main>
        <Hero />
        <LiveStats />
        <Stats />
        <Brands />
        <SafePayment />
        <Warning />
        <Steps />
        <Compare />
        <UseCases />
        <Reviews />
        <PhishingWarning />
        <FAQ />
      </main>
      <Footer />
      <div className="h-20 md:h-24" />
      <StickyCTA />
    </>
  )
}
