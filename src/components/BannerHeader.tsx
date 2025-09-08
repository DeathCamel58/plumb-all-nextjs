'use client'

import React from 'react';
import Image, {StaticImageData} from "next/image";
import {FaPhone} from "react-icons/fa";

export default function BannerHeader({
                                       image,
                                       altText,
                                       title,
                                       showCTA = true,
                                     }: {
  image: StaticImageData;
  altText: string;
  title: string;
  showCTA?: boolean;
}) {
  return (
    <div className="relative w-full h-64 md:h-96">
      <Image
        src={image}
        alt={altText}
        fill
        className="object-cover object-center w-full"
        priority
        placeholder="blur"
      />
      <div className="absolute inset-0 background-theme-4/50 bg-opacity-50 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
          {showCTA && (
            <a
              href="tel:+17709143877"
              className="inline-block background-theme-1 text-white px-6 py-3 rounded-lg hover:background-theme-2 transition text-lg font-semibold shadow"
            >
                <FaPhone className="inline-block mr-2" /> Call (770) 914-3877
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
