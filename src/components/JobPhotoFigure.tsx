import React from 'react';
import Image from 'next/image';
import { getJobPhoto } from '@/lib/jobPhotos';

/** One job photo with its caption; links to the full-size image */
export default function JobPhotoFigure({ slug, caption, className = '' }: { slug: string; caption?: string; className?: string }) {
  const photo = getJobPhoto(slug);
  if (!photo) return null;

  return (
    <figure className={`not-prose ${className}`}>
      <a href={`/images/jobs/${photo.slug}.webp`} target="_blank" rel="noopener">
        <Image
          src={`/images/jobs/sm/${photo.slug}.webp`}
          alt={`${photo.alt} in ${photo.town}, GA`}
          width={photo.smWidth}
          height={photo.smHeight}
          sizes="(min-width: 768px) 320px, 100vw"
          className="w-full rounded-lg shadow-md"
          loading="lazy"
        />
      </a>
      <figcaption className="text-sm text-gray-600 mt-2">
        {caption ?? photo.alt} <span className="text-gray-400">· Plumb-All job in {photo.town}</span>
      </figcaption>
    </figure>
  );
}
