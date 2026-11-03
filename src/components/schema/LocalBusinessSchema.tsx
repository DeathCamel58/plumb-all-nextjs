import React from 'react';
import { areaServedSchema } from '@/lib/serviceArea';

export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Plumber',
    '@id': 'https://plumb-all.com/#organization',
    name: 'Plumb-All',
    url: 'https://plumb-all.com',
    logo: 'https://plumb-all.com/logo/wide-logo.png',
    image: [
      'https://plumb-all.com/images/our-team.webp',
      'https://plumb-all.com/images/vans.webp',
    ],
    telephone: '+1-770-914-3877',
    email: 'info@plumb-all.com',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '218 N McDonough St',
      addressLocality: 'Jonesboro',
      addressRegion: 'GA',
      postalCode: '30236',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 33.5218,
      longitude: -84.3538,
    },
    areaServed: areaServedSchema,
    // Plumbers are on call 24/7 (matches "Open 24 hours" on the Business Profile)
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    // The office is staffed Mon–Fri 8–4
    department: {
      '@type': 'LocalBusiness',
      name: 'Plumb-All Office',
      telephone: '+1-770-914-3877',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '16:00',
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.6',
      reviewCount: '334',
      bestRating: '5',
    },
    sameAs: [
      'https://g.page/r/Cbrr7EyVgUNcEBA',
      'https://www.yelp.com/biz/plumb-all-jonesboro',
      'https://nextdoor.com/page/plumb-all-jonesboro-ga',
      'https://www.facebook.com/plumball.jonesboro',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
