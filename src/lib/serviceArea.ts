/**
 * Where Plumb-All works, from Jobber jobs Nov 2024 – Nov 2026 (most jobs first).
 * Used for the homepage service-area list and the `areaServed` schema.
 */
export const serviceAreaTowns = [
  'Jonesboro',
  'Stockbridge',
  'Riverdale',
  'McDonough',
  'Hampton',
  'Morrow',
  'Fayetteville',
  'Forest Park',
  'Conyers',
  'Griffin',
  'Rex',
  'Locust Grove',
  'Covington',
  'Ellenwood',
  'Peachtree City',
  'Newnan',
];

/** Schema.org `areaServed`: the towns above, plus a radius around the Jonesboro shop */
export const areaServedSchema = [
  ...serviceAreaTowns.map((town) => ({ '@type': 'City', name: `${town}, GA` })),
  {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 33.5218,
      longitude: -84.3538,
    },
    geoRadius: '60000',
  },
];
