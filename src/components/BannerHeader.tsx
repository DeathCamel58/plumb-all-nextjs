import React from 'react';
import Image, {StaticImageData} from "next/image";
import {FaPhone} from "react-icons/fa";
import {QUOTE_URL} from "@/components/cta/CTACall";

export default function BannerHeader({
                                       image,
                                       altText,
                                       title,
                                       subtitle,
                                       showCTA = true,
                                       showQuoteButton = false,
                                     }: {
  image: StaticImageData;
  altText: string;
  title: string;
  subtitle?: string;
  showCTA?: boolean;
  showQuoteButton?: boolean;
}) {
  return (
    <div className="relative w-full min-h-64 md:min-h-96 flex items-center justify-center">
      <Image
        src={image}
        alt={altText}
        fill
        className="object-cover object-center w-full"
        priority
        fetchPriority="high"
        placeholder="blur"
      />
      <div className="absolute inset-0 background-theme-4/50 bg-opacity-50" />
      <div className="relative flex flex-col items-center justify-center text-center px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-white font-semibold mb-6 max-w-3xl">{subtitle}</p>
        )}
        {(showCTA || showQuoteButton) && (
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            {showCTA && (
              <a
                href="tel:+17709143877"
                className="inline-block background-theme-1 text-white px-6 py-3 rounded-lg hover:background-theme-2 transition text-lg font-semibold shadow"
              >
                  <FaPhone className="inline-block mr-2" /> Call (770) 914-3877
              </a>
            )}
            {showQuoteButton && (
              <a
                href={QUOTE_URL}
                className="inline-block bg-white text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-100 transition text-lg font-semibold shadow"
              >
                Get a Free Quote &rarr;
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
