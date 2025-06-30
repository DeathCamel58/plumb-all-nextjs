'use client'

import React from 'react';
import Image, {StaticImageData} from "next/image";

export default function BannerHeader({
                                       image,
                                       altText,
                                       title,
                                     }: {
  image: StaticImageData;
  altText: string;
  title: string;
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
        <h1 className="text-4xl md:text-5xl font-bold text-white">{title}</h1>
      </div>
    </div>
  );
}
