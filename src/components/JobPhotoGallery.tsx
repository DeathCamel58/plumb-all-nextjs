import React from 'react';
import Image from 'next/image';
import { getJobPhoto } from '@/lib/jobPhotos';

/** Grid of job photos with captions; each links to the full-size image */
export default function JobPhotoGallery({ slugs, title }: { slugs: string[]; title: string }) {
  const photos = slugs
    .map((s) => getJobPhoto(s))
    .filter((p) => p !== undefined);
  if (photos.length === 0) return null;

  return (
    <div className="w-full mb-16">
      <h2 className="text-3xl font-semibold mb-6 text-center">{title}</h2>
      <ul className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((photo) => (
          <li key={photo.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
            <a href={`/images/jobs/${photo.slug}.webp`} target="_blank" rel="noopener">
              <Image
                src={`/images/jobs/sm/${photo.slug}.webp`}
                alt={`${photo.alt} in ${photo.town}, GA`}
                width={photo.smWidth}
                height={photo.smHeight}
                sizes="(min-width: 1024px) 33vw, 50vw"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
            </a>
            <p className="p-3 text-sm">
              {photo.alt} <span className="text-gray-500">· {photo.town}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
