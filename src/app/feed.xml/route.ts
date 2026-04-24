export function GET() {
  const now = new Date().toUTCString()

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>순순페이솔루션 - 신용카드현금화 · 신용카드한도현금화 · 카드깡</title>
    <link>https://sunsunpay.com</link>
    <description>순순페이솔루션은 신용카드현금화, 신용카드한도현금화, 카드깡 전문 업체입니다. 업계 최저수수료 단독 보장, 24시간 빠른상담.</description>
    <language>ko</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="https://sunsunpay.com/feed.xml" rel="self" type="application/rss+xml"/>
    <item>
      <title>순순페이솔루션 - 신용카드현금화 업계 최저수수료 단독 보장</title>
      <link>https://sunsunpay.com</link>
      <guid>https://sunsunpay.com#sunsonpay-main</guid>
      <description>순순페이솔루션에서 신용카드현금화를 업계 최저수수료로 이용하세요. 무서류·무방문·무심사, 신용조회 없음. 소액부터 고액까지 안전하게 처리합니다. 24시간 상담 가능.</description>
      <pubDate>${now}</pubDate>
    </item>
    <item>
      <title>신용카드한도현금화 - 잠자는 카드한도를 현금으로 | 순순페이솔루션</title>
      <link>https://sunsunpay.com#card-limit</link>
      <guid>https://sunsunpay.com#card-limit</guid>
      <description>신용카드한도현금화 전문 순순페이솔루션. 사용하지 않는 신용카드 한도를 현금으로 바꿔 드립니다. 신규고객 우대, 기업·개인 모두 가능. 상담 후 5분 지급.</description>
      <pubDate>${now}</pubDate>
    </item>
    <item>
      <title>카드깡 안전하게 이용하는 방법 | 순순페이솔루션</title>
      <link>https://sunsunpay.com#card-cash</link>
      <guid>https://sunsunpay.com#card-cash</guid>
      <description>카드깡은 순순페이솔루션에서 안전하게. 정식등록 사업자 운영, 업계 최저수수료 단독 보장. 카드값 미납도 가능, 24시간 빠른 상담으로 편리하게 이용하세요.</description>
      <pubDate>${now}</pubDate>
    </item>
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  })
}
