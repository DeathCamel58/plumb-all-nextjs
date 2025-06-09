import { ImageResponse } from 'next/og';
import { getAllArticles } from '@/app/news/articles';

// Type for OG image parameters
export interface OgImageParams {
  title: string;
  image: string;
}

// Function to generate the OG image JSX
export function generateOgImageJsx(params: OgImageParams) {
  const { title, image } = params;

  // Construct the full image URL based on environment
  const env = process.env.NODE_ENV;
  const baseUrl = env === 'production' ? 'https://plumb-all.com' : 'http://127.0.0.1:3333';
  const imageUrl = `${baseUrl}${image}`;

  return (
    <div
      style={{
        display: 'flex',
        fontSize: 60,
        color: 'white',
        background: '#000',
        width: '100%',
        height: '100%',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageUrl}
        alt="Background"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.7,
        }}
      />

      {/* Semi-transparent overlay for better text readability */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.5)',
        }}
      />

      {/* Title text */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '90%',
          padding: '20px',
          borderRadius: '10px',
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
        }}
      >
        <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>Plumb-All</div>
        <div style={{ fontSize: 40 }}>{title}</div>
      </div>
    </div>
  );
}

// Function to generate an OG image with the given parameters
export async function generateOgImage(params: OgImageParams) {
  try {
    const jsx = generateOgImageJsx(params);

    return new ImageResponse(jsx, {
      width: 1200,
      height: 630,
    });
  } catch (e) {
    console.error('Failed to generate OG image:', e);
    throw e;
  }
}

// Function to get all OG image configurations that need to be generated
export async function getAllOgImageConfigs(): Promise<OgImageParams[]> {
  const configs: OgImageParams[] = [
    // Static pages
    { title: 'Home Page', image: '/images/formbg.jpg' },
    { title: 'About Us', image: '/images/our-team.jpg' },
    { title: 'Contact Us', image: '/images/our-team.jpg' },
    { title: 'Financing', image: '/logo/plumb-all-banner.png' },
    { title: 'News', image: '/images/pipes.jpg' },
    { title: 'Privacy Policy', image: '/images/our-team.jpg' },
    { title: 'Services', image: '/images/toilet-flapper.jpg' },
    { title: 'Alternative Septic', image: '/images/septic-system-overview.jpg' },
    { title: 'Backflow', image: '/images/backflow.jpg' },
    { title: 'Commercial Services', image: '/images/backflow.jpg' },
    { title: 'Drain Cleaning', image: '/images/drain-cleaning.jpg' },
    { title: 'Eljen Septic', image: '/images/septic-system-overview.jpg' },
    { title: 'Emergency Services', image: '/images/vans.jpg' },
    { title: 'Expert Plumbers in Atlanta', image: '/images/slab-leak.jpg' },
    { title: 'Hydro Jetting', image: '/images/hydro-jetting-nozzle.jpg' },
    { title: 'Leak Detection', image: '/images/spraying-pipe.jpg' },
    { title: 'Plumbing Installation', image: '/images/gray-pipes.jpg' },
    { title: 'Plumbing Repair', image: '/images/spraying-pipe.jpg' },
    { title: 'Plumbing Service Agreement', image: '/images/spraying-pipe.jpg' },
    { title: 'Residential Services', image: '/images/slab-leak.jpg' },
    { title: 'Septic Repair', image: '/images/septic-system-overview.jpg' },
    { title: 'Septic Tank Pumping', image: '/images/septic-pumping.jpg' },
    { title: 'Water Heater Replacement', image: '/images/water-heater-wrench.jpg' },
    { title: 'Sink Repair', image: '/images/sink-drain.jpg' },
    { title: 'Bathroom Plumbing', image: '/images/toilet.jpg' },
    { title: 'Faucet Repair', image: '/images/running-faucet.jpg' },
    { title: 'Garbage Disposal Repair', image: '/images/garbage-disposal.jpg' },
  ];

  // Add dynamic article pages
  const articles = await getAllArticles();
  for (const article of articles) {
    configs.push({
      title: article.title,
      image: article.image || '/images/pipes.jpg',
    });
  }

  return configs;
}

// Function to generate a unique filename for each OG image
export function getOgImageFilename(params: OgImageParams): string {
  const titleSlug = params.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const imageSlug = params.image.split('/').pop()?.split('.')[0] || 'default';
  return `og-${titleSlug}-${imageSlug}.png`;
}
