import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    // Get title and image path from the URL query parameters
    const title = searchParams.get('title') || 'Plumb-All';
    const imagePath = searchParams.get('image') || '/images/pipes.jpg';

    // Construct the full image URL based on environment
    const env = process.env.NODE_ENV;
    const baseUrl = env === 'production' ? 'https://plumb-all.com' : 'http://127.0.0.1:3000';
    const imageUrl = `${baseUrl}${imagePath}`;

    // Create the Open Graph image with the title overlaid on the image
    return new ImageResponse(
      (
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
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    console.error(e);
    return new Response('Failed to generate the image', { status: 500 });
  }
}
