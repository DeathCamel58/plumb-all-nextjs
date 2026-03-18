import React from 'react';

export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Plumber',
    '@id': 'https://plumb-all.com/#organization',
    name: 'Plumb-All',
    url: 'https://plumb-all.com',
    logo: 'https://plumb-all.com/logo/wide-logo.png',
    image: 'https://plumb-all.com/images/vans.jpg',
    telephone: '+1-770-914-3877',
    email: 'info@plumb-all.com',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Jonesboro',
      addressRegion: 'GA',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 33.5218,
      longitude: -84.3538,
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
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '200',
      bestRating: '5',
    },
    sameAs: [
      'https://g.page/r/Cbrr7EyVgUNcEBA',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
