import React from 'react';

export default function ServiceSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `https://plumb-all.com${url}`,
    provider: {
      '@type': 'Plumber',
      '@id': 'https://plumb-all.com/#organization',
      name: 'Plumb-All',
      telephone: '+1-770-914-3877',
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 33.749,
        longitude: -84.388,
      },
      geoRadius: '50000',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
