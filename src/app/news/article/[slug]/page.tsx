import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllArticles, getArticleBySlug, getRelatedArticles } from '../../articles';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';
import {generateMetadataDict} from "@/components/header/metadata";

// Function to get all article slugs for static generation
export async function generateStaticParams() {
  const articles = await getAllArticles();

  return articles.map(article => ({
    slug: article.slug
  }));
}

// Generate metadata for the page
type Props = {
  params: Promise<{ id: string, slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const article = await getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Article Not Found',
      description: 'The requested article could not be found.'
    };
  }

  const title = `${article.title}`;
  const ogTitle = article.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const ogImageName = article.image.split('/').pop()?.split('.')[0];
  const ogImageUrl = `og-${ogTitle}-${ogImageName}`;
  const dateTime = new Date(article.date).toISOString();

  const path = `/news/article/${slug}`;

  return generateMetadataDict(title, article.excerpt, ogImageUrl, path, true, dateTime);
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  // Dynamically import the article content component
  const ArticleContent = dynamic(() => import(`../../articles/${slug}`), {
    loading: () => <p>Loading article content...</p>,
    ssr: true
  });

  const relatedArticles = await getRelatedArticles(slug);

  return (
    <div className="min-h-screen">
      {/* Header Image */}
      <div className="relative w-full h-64 md:h-96">
        <Image
          src={article.image || "/images/pipes.jpg"}
          alt={article.title}
          fill
          className="object-cover object-center w-full"
          priority
        />
        <div className="absolute inset-0 background-theme-4/50 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">{article.title}</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Article Meta */}
        <div className="mb-8 flex justify-between items-center border-b pb-4">
          <div>
            <p className="text-gray-500">
              {new Date(article.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
          <Link
            href="/news"
            className="text-theme-3 hover:underline"
          >
            ← Back to News
          </Link>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <div className="whitespace-pre-line">
            <ArticleContent />
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6 border-b pb-2">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <div key={relatedArticle.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-40">
                    <Image
                      src={relatedArticle.image || "/images/pipes.jpg"}
                      alt={relatedArticle.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{relatedArticle.title}</h3>
                    <p className="text-gray-500 text-sm mb-3">
                      {new Date(relatedArticle.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                    <Link
                      href={`/news/article/${relatedArticle.slug}`}
                      className="text-theme-3 hover:underline"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
