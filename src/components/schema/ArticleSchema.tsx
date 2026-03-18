import React from 'react';

export default function ArticleSchema({
  headline,
  description,
  datePublished,
  image,
  url,
}: {
  headline: string;
  description: string;
  datePublished: string;
  image: string;
  url: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    datePublished,
    dateModified: datePublished,
    image: image.startsWith('http') ? image : `https://plumb-all.com${image}`,
    url: `https://plumb-all.com${url}`,
    author: {
      '@type': 'Organization',
      name: 'Plumb-All',
      url: 'https://plumb-all.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Plumb-All',
      url: 'https://plumb-all.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://plumb-all.com/logo/wide-logo.png',
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
