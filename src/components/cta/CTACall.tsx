'use client'

import React from 'react';

export default function CTACall({
  headerText,
  buttonText,
  showQuoteButton = true,
}: {
  headerText?: string;
  buttonText?: string;
  showQuoteButton?: boolean;
}) {
  return (
    <div className="w-full text-center mb-8">
      <p className="text-xl mb-4">{headerText}</p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
        <a
          href="tel:+17709143877"
          className="inline-block background-theme-1 text-white px-4 py-2 rounded shadow hover:background-theme-2 transition"
        >
          {buttonText}
        </a>
        {showQuoteButton && (
          <a
            href="https://clienthub.getjobber.com/client_hubs/4015938f-cada-4cbe-9e0f-3fa27b028598/public/work_request/new?utm_source=website"
            className="inline-block border-2 border-gray-800 text-gray-800 px-4 py-2 rounded shadow hover:bg-gray-800 hover:text-white transition"
          >
            Get a Free Quote &rarr;
          </a>
        )}
      </div>
    </div>
  );
}
