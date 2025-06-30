import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getAllArticles } from '../articles';
import { Metadata } from "next";
import { notFound } from 'next/navigation';
import {generateMetadataDict} from "@/components/header/metadata";
import BannerHeader from "@/components/BannerHeader";
import HeroImage from '../../../../public/images/formbg.jpg';

// Define Props type for the page
type Props = {
  params: Promise<{ page: string }>
}

// Generate metadata for the page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { page } = await params;
  const pageNumber = parseInt(page);

  const title = pageNumber === 1
    ? 'News'
    : `News - Page ${pageNumber}`;
  const description = 'Plumb-All\'s blog and news posts';
  const ogImageUrl = 'og-news-pipes';
  const path = pageNumber === 1 ? `/news` : `/news/${pageNumber}`;

  return generateMetadataDict(title, description, ogImageUrl, path);
}

// Generate static paths for all paginated pages
export async function generateStaticParams() {
  const allArticles = await getAllArticles();
  const postsPerPage = 12;
  const totalPages = Math.ceil(allArticles.length / postsPerPage);

  // Generate an array of page numbers from 1 to totalPages
  return Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString()
  }));
}

export default async function NewsPage({ params }: Props) {
  const { page } = await params;
  const allArticles = await getAllArticles();

  // Pagination logic
  const postsPerPage = 12;
  const pageNumber = parseInt(page);

  // Validate page number
  if (isNaN(pageNumber) || pageNumber < 1) {
    notFound();
  }

  // Calculate total pages
  const totalPages = Math.ceil(allArticles.length / postsPerPage);

  // If page number is greater than total pages and there are articles, return 404
  if (pageNumber > totalPages && totalPages > 0) {
    notFound();
  }

  // Get articles for current page
  const startIndex = (pageNumber - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentArticles = allArticles.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen">
      {/* Header Image */}
      <BannerHeader
        image={HeroImage}
        altText="Plumbing News"
        title="News & Updates"
      />

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
                  href={`/news/article/${article.slug}`}
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
            {pageNumber > 1 && (
              <Link
                href={pageNumber === 2 ? '/news' : `/news/${pageNumber - 1}`}
                className="px-4 py-2 border rounded background-theme-1 text-white hover:background-theme-2 transition"
              >
                Previous
              </Link>
            )}

            <div className="flex space-x-1">
              {[...Array(totalPages)].map((_, i) => {
                const pageNum = i + 1;
                const pageUrl = pageNum === 1 ? '/news' : `/news/${pageNum}`;

                return (
                  <Link
                    key={i}
                    href={pageUrl}
                    className={`px-3 py-1 border rounded ${
                      pageNumber === pageNum
                        ? 'background-theme-1 text-white'
                        : 'hover:background-theme-3 hover:text-white transition'
                    }`}
                  >
                    {pageNum}
                  </Link>
                );
              })}
            </div>

            {pageNumber < totalPages && (
              <Link
                href={`/news/${pageNumber + 1}`}
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
