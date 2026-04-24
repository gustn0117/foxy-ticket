export function GET() {
  const now = new Date().toUTCString()
  const url = 'https://foxy-ticket.hsweb.pics'

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>폭시티켓 - 신용카드 현금화 · 소액결제 현금화 · 업계 최고 94% 지급률</title>
    <link>${url}</link>
    <description>폭시티켓은 신용카드 현금화, 소액결제 현금화, 정보이용료 현금화 전문 업체입니다. 업계 최고 94% 지급률, 365일 24시간 상담, 5년간 무사고 운영.</description>
    <language>ko</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${url}/feed.xml" rel="self" type="application/rss+xml"/>
    <item>
      <title>폭시티켓 - 신용카드 현금화 업계 최고 94% 지급률</title>
      <link>${url}</link>
      <guid>${url}#foxy-ticket-main</guid>
      <description>폭시티켓에서 신용카드 현금화를 업계 최고 지급률로 이용하세요. 무이자 할부, 앱카드 결제 가능, 신용한도 영향 없음. 365일 24시간 상담.</description>
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
