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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: '순순페이솔루션',
  alternateName: ['순순페이', '순순페이 솔루션', 'SunSunPay'],
  url: 'https://www.sunsunpay.com',
  description: '순순페이솔루션은 신용카드현금화, 신용카드한도현금화, 카드깡 전문 업체입니다. 업계 최저수수료 단독 보장, 무서류·무방문·무심사, 24시간 빠른상담 후 5분 지급.',
  telephone: '+82-10-4403-7958',
  areaServed: {
    '@type': 'Country',
    name: 'KR',
  },
  serviceType: ['신용카드현금화', '신용카드한도현금화', '카드깡', '카드대출', '카드한도대출'],
  slogan: '신용카드현금화 업계 최저수수료 단독 보장',
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: 'https://www.sunsunpay.com',
    servicePhone: {
      '@type': 'ContactPoint',
      telephone: '+82-10-4403-7958',
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
    description: '신용카드현금화, 신용카드한도현금화, 카드깡 업계 최저수수료. 신규고객 우대, 기업·개인 OK',
    availability: 'https://schema.org/InStock',
  },
}

export default function Home() {
  return (
    <div className="page-wrapper">
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollReveal />
        <Hero />
        <SafePayment />
        <Stats />
        <Warning />
        <UseCases />
        <Compare />
        <Steps />
        <Reviews />
        <PhishingWarning />
        <FAQ />
        <Footer />
        <div className="h-24" />
        <StickyCTA />
      </main>
    </div>
  )
}
