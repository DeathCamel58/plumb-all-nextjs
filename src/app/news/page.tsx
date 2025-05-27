import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getAllArticles } from './articles';
import {Metadata} from "next";

// Generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const finalTitle = 'Plumb-All: News';
  const description = 'Plumb-All\'s blog and news posts';

  // Create URL for the dynamically generated OG image with title overlay
  const ogImageUrl = '/api/og?title=news&image=/images/pipes.jpg';

  const env = process.env.NODE_ENV;

  return {
    metadataBase: env === 'production' ? new URL('https://plumb-all.com') : new URL('http://127.0.0.1:3000'),
    title: finalTitle,
    description: description,
    icons: {
      icon: '/logo/icon.png'
    },
    openGraph: {
      title: finalTitle,
      description: description,
      url: `/news`,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: 'Plumb-All Logo'
        }
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: finalTitle,
      description: description,
      images: [ogImageUrl],
      site: '@PlumbAll'
    }
  };
}

export default async function News({ searchParams }: { searchParams: { page?: string } }) {
  const allArticles = await getAllArticles();

  // Pagination logic
  const postsPerPage = 12;
  const pageParam = searchParams.page ? parseInt(searchParams.page) : 1;
  // Ensure current page is valid (not less than 1 or greater than total pages)
  const totalPages = Math.ceil(allArticles.length / postsPerPage);
  const currentPage = pageParam < 1 || isNaN(pageParam) ? 1 :
                     (pageParam > totalPages && totalPages > 0) ? totalPages :
                     pageParam;

  // Get articles for current page
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentArticles = allArticles.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen">
      {/* Header Image */}
      <div className="relative w-full h-64 md:h-96">
        <Image
          src="/images/formbg.jpg"
          alt="Plumbing News"
          fill
          className="object-cover object-center w-full"
          priority
        />
        <div className="absolute inset-0 background-theme-4/50 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">News & Updates</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="w-full mb-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Latest News</h2>
          <p className="text-xl max-w-4xl mx-auto">
            Stay up to date with the latest plumbing tips, industry news, and updates from our team at Plumb-All.
          </p>
        </div>

        {/* News Articles List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {currentArticles.map((article) => (
            <div key={article.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src={article.image || "/images/pipes.jpg"}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-gray-500 text-sm mb-2">{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
                <p className="text-gray-700 mb-4">{article.excerpt}</p>
                <Link
                  href={`/news/${article.slug}`}
                  className="inline-block background-theme-1 text-white px-4 py-2 rounded shadow hover:background-theme-2 transition"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2 mb-16">
            {currentPage > 1 && (
              <Link
                href={`/news?page=${currentPage - 1}`}
                className="px-4 py-2 border rounded background-theme-1 text-white hover:background-theme-2 transition"
              >
                Previous
              </Link>
            )}

            <div className="flex space-x-1">
              {[...Array(totalPages)].map((_, i) => (
                <Link
                  key={i}
                  href={`/news?page=${i + 1}`}
                  className={`px-3 py-1 border rounded ${
                    currentPage === i + 1
                      ? 'background-theme-1 text-white'
                      : 'hover:background-theme-3 hover:text-white transition'
                  }`}
                >
                  {i + 1}
                </Link>
              ))}
            </div>

            {currentPage < totalPages && (
              <Link
                href={`/news?page=${currentPage + 1}`}
                className="px-4 py-2 border rounded background-theme-1 text-white hover:background-theme-2 transition"
              >
                Next
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
