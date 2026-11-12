export const dynamic = 'force-static';

// RFC 9727 API catalog: tells agents where Plumb-All's public API is described.
export async function GET() {
  const catalog = {
    linkset: [
      {
        anchor: 'https://integration.plumb-all.com/website/bookingRequest',
        'service-desc': [
          { href: 'https://integration.plumb-all.com/openapi.json', type: 'application/vnd.oai.openapi+json' },
        ],
        'service-doc': [{ href: 'https://plumb-all.com/llms.txt', type: 'text/plain' }],
      },
    ],
  };
  return new Response(JSON.stringify(catalog, null, 2), {
    headers: { 'Content-Type': 'application/linkset+json' },
  });
}
