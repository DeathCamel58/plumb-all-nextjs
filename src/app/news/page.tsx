import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getAllArticles } from './articles';
import { Metadata } from "next";
import {generateMetadataDict} from "@/components/header/metadata";

// Generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  // TODO: Maybe set the canonical to the current page
  const title = 'News';
  const description = 'Plumb-All\'s blog and news posts';
  const ogImageUrl = 'og-news-pipes';
  const path = '/news';

  return generateMetadataDict(title, description, ogImageUrl, path);
}

export default async function News() {
  const allArticles = await getAllArticles();

  // Pagination logic
  const postsPerPage = 12;
  const currentPage = 1; // This is always the first page

  // Calculate total pages
  const totalPages = Math.ceil(allArticles.length / postsPerPage);

  // Get articles for current page
  const startIndex = 0; // First page starts at index 0
  const currentArticles = allArticles.slice(startIndex, postsPerPage);

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
            <div className="flex space-x-1">
              {[...Array(totalPages)].map((_, i) => {
                const pageNum = i + 1;
                const pageUrl = pageNum === 1 ? '/news' : `/news/${pageNum}`;

                return (
                  <Link
                    key={i}
                    href={pageUrl}
                    className={`px-3 py-1 border rounded ${
                      currentPage === pageNum
                        ? 'background-theme-1 text-white'
                        : 'hover:background-theme-3 hover:text-white transition'
                    }`}
                  >
                    {pageNum}
                  </Link>
                );
              })}
            </div>

            {currentPage < totalPages && (
              <Link
                href={`/news/2`}
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
