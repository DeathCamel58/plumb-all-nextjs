import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import GoogleReviewBadge from '@/components/GoogleReviewBadge';
import { serviceReviews } from '@/lib/serviceReviews';

/** Google reviews about one service, quoted without the reviewer's name */
export default function ServiceReviews({ service, title = 'What Customers Say' }: { service: string; title?: string }) {
  const reviews = serviceReviews[service];
  if (!reviews?.length) return null;

  return (
    <div className="w-full mb-16">
      <h2 className="text-3xl font-semibold mb-6 text-center">{title}</h2>
      <div className={`grid grid-cols-1 ${reviews.length > 1 ? 'md:grid-cols-2' : ''} gap-6`}>
        {reviews.map((review) => (
          <figure key={review.text} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-theme-3">
            <FaQuoteLeft className="text-theme-3 text-2xl mb-3" />
            <blockquote className="text-lg italic mb-3">&#34;{review.text}&#34;</blockquote>
            <figcaption className="text-sm text-gray-600">Google review, {review.date} · ★★★★★</figcaption>
          </figure>
        ))}
      </div>
      <div className="text-center mt-6">
        <GoogleReviewBadge />
      </div>
    </div>
  );
}
