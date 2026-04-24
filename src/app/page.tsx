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
  telephone: '+82-10-8352-0358',
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
      telephone: '+82-10-8352-0358',
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
        <a href="/" className="inline-flex items-center">
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
          href="https://t.me/foxytiket"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 md:px-5 py-2 md:py-2.5 bg-gradient-to-br from-[#37AEE2] to-[#1E96C8] text-white rounded-full text-[12px] md:text-[13px] font-bold shadow-[0_4px_12px_rgba(34,158,217,0.35)] hover:brightness-[1.05] transition"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff">
            <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/>
          </svg>
          텔레그램 상담
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
