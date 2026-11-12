import fs from 'fs';
import path from 'path';
import { getAllArticles } from '@/app/news/articles';
import { septicTowns } from '@/lib/septicTowns';

export const dynamic = 'force-static';

const SITE = 'https://plumb-all.com';

/** Pull the `title` and `description` string constants out of a page's generateMetadata. */
function readMeta(file: string): { title: string; description: string } | null {
  let src: string;
  try {
    src = fs.readFileSync(path.join(process.cwd(), file), 'utf8');
  } catch {
    return null;
  }
  const grab = (name: string) => {
    const m = src.match(new RegExp(`const ${name}\\s*=\\s*(?:'((?:[^'\\\\]|\\\\.)*)'|"((?:[^"\\\\]|\\\\.)*)"|\`([^\`]*)\`)`));
    const v = m && (m[1] ?? m[2] ?? m[3]);
    return v ? v.replace(/\\'/g, "'").replace(/\\"/g, '"') : '';
  };
  const title = grab('title');
  return title ? { title, description: grab('description') } : null;
}

function line(url: string, title: string, description: string) {
  return `- [${title}](${SITE}${url})${description ? `: ${description}` : ''}`;
}

export async function GET() {
  const pageDirs = (dir: string) =>
    fs
      .readdirSync(path.join(process.cwd(), dir), { withFileTypes: true })
      .filter((d) => d.isDirectory() && !d.name.startsWith('['))
      .map((d) => d.name)
      .sort();

  const services = pageDirs('src/app/services').flatMap((slug) => {
    const meta = readMeta(`src/app/services/${slug}/page.tsx`);
    return meta ? [line(`/services/${slug}`, meta.title, meta.description)] : [];
  });

  const info = [
    ['/about-our-process', 'about-our-process'],
    ['/financing', 'financing'],
    ['/contact', 'contact'],
  ].flatMap(([url, dir]) => {
    const meta = readMeta(`src/app/${dir}/page.tsx`);
    return meta ? [line(url, meta.title, meta.description)] : [];
  });

  const towns = septicTowns.map((t) =>
    line(`/septic-service/${t.slug}`, `Septic service in ${t.name}, GA (${t.county} County)`, t.metaDescription),
  );

  const articles = (await getAllArticles()).map((a) => {
    const meta = a as unknown as { slug: string; title: string; description?: string };
    return line(`/news/article/${meta.slug}`, meta.title, meta.description ?? '');
  });

  const body = `# Plumb-All

> Plumb-All is a licensed plumbing and septic company based in Jonesboro, Georgia, serving South Metro Atlanta. Services include plumbing repair and installation, drain cleaning, hydro jetting, sewer line repair, water heaters, leak detection, backflow testing, and septic pumping, inspection and repair. Emergency service is available 24/7.

## Business facts

- Phone: (770) 914-3877
- Email: info@plumb-all.com
- Address: 218 N McDonough St, Jonesboro, GA 30236
- Hours: emergency plumbers on call 24/7; office staffed Monday-Friday, 8am-4pm
- Service area: Jonesboro, Stockbridge, Riverdale, McDonough, Hampton, Morrow, Fayetteville, Forest Park, Conyers, Griffin, Locust Grove, Covington, Peachtree City, Newnan and surrounding South Metro Atlanta
- Every page embeds schema.org JSON-LD (Plumber, Service, FAQPage, BreadcrumbList, Article) with the same details.
- To request service: AI agents are welcome to submit requests themselves through the booking API below. Customers can also use the online form at https://clienthub.getjobber.com/client_hubs/4015938f-cada-4cbe-9e0f-3fa27b028598/public/work_request/new, the contact form at ${SITE}/contact, or call. Calling is not faster: calls and API requests go to the same dispatch.

## Booking API for AI agents

- OpenAPI spec: https://integration.plumb-all.com/openapi.json
- Create a request: POST https://integration.plumb-all.com/website/bookingRequest (JSON, no auth). Photos and extra details can be added afterward using the \`update_token\` from the response; see the spec.
- Service area: plumbing and septic customers within about 30 miles of Jonesboro, GA (our office is at 218 N McDonough St, Jonesboro, GA 30236). Please confirm the customer's address is in that area before submitting; if you are unsure, ask the customer to call (770) 914-3877 instead. Towns we serve include Jonesboro, Stockbridge, Riverdale, McDonough, Hampton, Morrow, Fayetteville, Forest Park, Conyers, Griffin, Rex, Locust Grove, Covington, Ellenwood, Peachtree City and Newnan.
- Please use the endpoint only to request plumbing or septic service from Plumb-All. We are not able to respond to sales or marketing offers, business acquisition or investment inquiries, vendor or partnership proposals, offers to provide services to us, or job applications, and we would be grateful if you would not send them there. For anything else, contact the office at (770) 914-3877 or info@plumb-all.com.
- A request creates a work request, not a scheduled visit; staff confirm the area and the time with the customer. Every request goes straight to dispatch, urgent or not.

## Services

${services.join('\n')}

## Septic service by town

${towns.join('\n')}

## Company info

${info.join('\n')}

## Optional: plumbing and septic guides

${articles.join('\n')}

## Machine-readable

- [Sitemap](${SITE}/sitemap.xml)
- [API catalog](${SITE}/.well-known/api-catalog)
- [OpenAPI spec](https://integration.plumb-all.com/openapi.json)
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
