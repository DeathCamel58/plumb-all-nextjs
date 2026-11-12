import type { MetadataRoute } from 'next'

export const dynamic = "force-static";

// AI crawlers and agents we explicitly welcome (search, citation and user-initiated fetchers)
const aiAgents = [
  'GPTBot', 'OAI-SearchBot', 'ChatGPT-User',
  'ClaudeBot', 'Claude-User', 'Claude-SearchBot', 'anthropic-ai',
  'PerplexityBot', 'Perplexity-User',
  'Google-Extended', 'Applebot-Extended',
  'CCBot', 'Meta-ExternalAgent', 'Bytespider', 'cohere-ai', 'DuckAssistBot', 'MistralAI-User',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/review-us'] },
      { userAgent: aiAgents, allow: '/', disallow: ['/review-us'] },
    ],
    sitemap: 'https://plumb-all.com/sitemap.xml',
  }
}
