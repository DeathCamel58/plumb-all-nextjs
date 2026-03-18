import type { MetadataRoute } from 'next'
import {getAllArticles} from "@/app/news/articles";
import path from "path";
import fs from "fs";

export const dynamic = 'force-static';

// Priority mapping for different page types
function getPriority(url: string): number {
  if (url === '') return 1.0; // Homepage
  if (url.startsWith('/services/')) return 0.8; // Service pages
  if (url === '/services') return 0.8; // Services index
  if (['/about-our-process', '/financing', '/contact'].includes(url)) return 0.7; // Non-service pages
  if (url === '/news') return 0.5; // News listing
  if (url.startsWith('/news/article/')) return 0.6; // Blog articles
  if (['/privacy-policy', '/terms-and-conditions'].includes(url)) return 0.3; // Legal pages
  return 0.5; // Default
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const urlPrefix = 'https://plumb-all.com'

  // Add Static Pages
  const pages = [
    { url: '', changeFrequency: 'monthly' },
    { url: '/about-our-process', changeFrequency: 'monthly' },
    { url: '/contact', changeFrequency: 'monthly' },
    { url: '/financing', changeFrequency: 'monthly' },
    { url: '/privacy-policy', changeFrequency: 'monthly' },
    { url: '/terms-and-conditions', changeFrequency: 'monthly' },
    { url: '/services', changeFrequency: 'monthly' },
    { url: '/services/alternative-septic', changeFrequency: 'monthly' },
    { url: '/services/backflow', changeFrequency: 'monthly' },
    { url: '/services/commercial', changeFrequency: 'monthly' },
    { url: '/services/drain-cleaning', changeFrequency: 'monthly' },
    { url: '/services/eljen-septic', changeFrequency: 'monthly' },
    { url: '/services/emergencies', changeFrequency: 'monthly' },
    { url: '/services/expert-plumbing-services-in-atlanta-ga', changeFrequency: 'monthly' },
    { url: '/services/garbage-disposal-repair', changeFrequency: 'monthly' },
    { url: '/services/hydro-jetting', changeFrequency: 'monthly' },
    { url: '/services/leak-detection', changeFrequency: 'monthly' },
    { url: '/services/plumbing-installation', changeFrequency: 'monthly' },
    { url: '/services/plumbing-repair', changeFrequency: 'monthly' },
    { url: '/services/plumbing-service-agreement', changeFrequency: 'monthly' },
    { url: '/services/residential', changeFrequency: 'monthly' },
    { url: '/services/septic-repair', changeFrequency: 'monthly' },
    { url: '/services/septic-tank-pumping', changeFrequency: 'monthly' },
    { url: '/services/sink-repair', changeFrequency: 'monthly' },
    { url: '/services/toilet-installation', changeFrequency: 'monthly' },
    { url: '/services/water-heater-replacement', changeFrequency: 'monthly' },
    { url: '/services/bathroom-plumbing', changeFrequency: 'monthly' },
    { url: '/services/faucet-repair', changeFrequency: 'monthly' },
    { url: '/services/plumber', changeFrequency: 'monthly' },
    { url: '/services/water-line-repair', changeFrequency: 'monthly' },
    { url: '/news', changeFrequency: 'weekly' },
  ];

  // Add all the news articles
  const articles = await getAllArticles();
  for (const article of articles) {
    const articleData = { url: `/news/article/${article.slug}`, changeFrequency: 'monthly' };
    pages.push(articleData);
  }

  // Add news pagination
  const totalPages = Math.ceil(articles.length / 12);
  if (totalPages > 1) {
    for (let i = 2; i < totalPages + 1; i++) {
      pages.push({ url: `/news/${i}`, changeFrequency: 'weekly' })
    }
  }

  const siteArray: MetadataRoute.Sitemap = []
  for (const page of pages) {
    if (page.url.startsWith('/news/') && !page.url.startsWith('/news/article/')) {
      // This is for paginated news pages
      siteArray.push({
        url: `${urlPrefix}${page.url}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: getPriority(page.url),
      })
    } else {
      const isArticle = page.url.startsWith('/news/article/')
      const parentDirectory = process.cwd();
      const pathIfArticle = path.join(parentDirectory, `src/app/news/articles/${page.url.slice(13)}.tsx`);
      const pathIfPage = path.join(parentDirectory, `src/app/${page.url}/page.tsx`);
      const tsxFile = isArticle ? pathIfArticle: pathIfPage;

      const fsStats = fs.statSync(tsxFile);
      const mTime = fsStats.mtime;

      siteArray.push({
        url: `${urlPrefix}${page.url}`,
        lastModified: mTime,
        changeFrequency: 'monthly',
        priority: getPriority(page.url),
      })
    }
  }

  return siteArray;
}
