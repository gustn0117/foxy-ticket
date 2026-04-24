import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import Script from 'next/script'
import GtagConversion from '@/components/GtagConversion'
import './globals.css'

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-noto',
})

export const metadata: Metadata = {
  title: '순순페이솔루션 | 신용카드현금화 · 신용카드한도현금화 · 카드깡 업계 최저수수료',
  description: '순순페이솔루션은 신용카드현금화, 신용카드한도현금화, 카드깡 전문 업체입니다. 업계 최저수수료 단독 보장, 무서류·무방문·무심사, 신용조회 없음. 24시간 빠른상담, 상담 후 5분 지급. 소액부터 고액까지 안전하게 처리해 드립니다.',
  keywords: '순순페이솔루션, 신용카드현금화, 신용카드한도현금화, 카드깡, 카드대출, 카드한도대출, 신용카드 현금화, 카드현금화, 카드값미납, 최저수수료, 24시간빠른상담, 무서류무방문무심사, 신용조회없음, 신규고객우대',
  alternates: {
    canonical: 'https://www.sunsunpay.com',
    types: {
      'application/rss+xml': 'https://www.sunsunpay.com/feed.xml',
    },
  },
  verification: {
    google: 'c3he4LIMJsATzoStkZOt71ihH76bQX-2HATkh6vjPMI',
    other: {
      'naver-site-verification': ['21d93367cf6d6f4fcf53b529eaa6c7af7ec0a2fa', '0e529038a174130bd26ab2a40506026eaec95094'],
      'google-adsense-account': ['ca-pub-1906417754886631'],
    },
  },
  openGraph: {
    title: '순순페이솔루션 | 신용카드현금화 · 신용카드한도현금화 · 카드깡 최저수수료',
    description: '순순페이솔루션 - 신용카드현금화, 신용카드한도현금화, 카드깡 전문. 업계 최저수수료 단독 보장. 무서류·무방문·무심사, 24시간 상담 후 5분 지급!',
    type: 'website',
    url: 'https://www.sunsunpay.com',
    siteName: '순순페이솔루션',
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary',
    title: '순순페이솔루션 | 신용카드현금화 · 카드깡 최저수수료',
    description: '신용카드현금화, 신용카드한도현금화, 카드깡 전문. 무서류 무방문 무심사. 24시간 빠른상담, 상담 후 5분 지급!',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={notoSansKR.variable}>
      <head>
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P92Q6B5W');`,
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17949755839"
          strategy="afterInteractive"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Z8XEX4YBDG"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17949755839');
              gtag('config', 'G-Z8XEX4YBDG');
            `,
          }}
        />
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1906417754886631"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
      </head>
      <body className="font-sans">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P92Q6B5W"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <GtagConversion />
        {children}
      </body>
    </html>
  )
}
