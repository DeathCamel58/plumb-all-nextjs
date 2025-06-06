export function generateMetadataDict(title: string, description: string, ogImage: string, path: string, article = false, dateTime = '') {
  const finalTitle = title === '' ? 'Plumb-All' : `Plumb-All: ${title}`;
  const ogImageUrl = `/og-images/${ogImage}.png`

  const env = process.env.NODE_ENV;

  return {
    metadataBase: env === 'production' ? new URL('https://plumb-all.com') : new URL('http://127.0.0.1:3000'),
    title: finalTitle,
    description: description,
    icons: {
      icon: '/logo/icon.png'
    },
    alternates: {
      canonical: path,
    },
    openGraph: !article ? {
      title: finalTitle,
      description: description,
      url: path,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: 'Plumb-All Logo'
        }
      ],
      type: 'website',
    } : {
      title: finalTitle,
      description: description,
      url: path,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: 'Plumb-All Logo'
        }
      ],
      publishedTime: dateTime,
      modifiedTime: dateTime,
      tags: [
        'plumbing',
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: finalTitle,
      description: description,
      images: [ogImageUrl],
      site: '@PlumbAll'
    }
  };
}
