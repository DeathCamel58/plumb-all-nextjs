// Dynamically import all article metadata
import fs from 'fs';
import path from 'path';

// Cache for article metadata
let articlesCache: Article[] | null = null;

// Export a function to get all articles
export async function getAllArticles(): Promise<Article[]> {
  // Return cached articles if available
  if (articlesCache) {
    return articlesCache;
  }

  try {
    // Get the directory path for the articles
    const articlesDirectory = path.join(process.cwd(), 'src/app/news/articles');

    // Read all files in the directory
    const fileNames = fs.readdirSync(articlesDirectory);

    // Filter out non-tsx files and index.ts
    const articleFiles = fileNames.filter(
      fileName => fileName.endsWith('.tsx') && fileName !== 'index.tsx'
    );

    // Import metadata from each article file
    const articles: Article[] = [];

    for (const fileName of articleFiles) {
      try {
        // Remove the file extension to get the module name
        const moduleName = fileName.replace(/\.tsx$/, '');

        // Dynamically import the metadata using ES module import
        const pageData = await import(`./${moduleName}`);
        const { metadata } = pageData as { metadata: Article };

        articles.push(metadata);
      } catch (error) {
        console.error(`Error importing metadata from ${fileName}:`, error);
        // Continue with other files even if one fails
      }
    }

    // Sort articles by date (newest first)
    const sortedArticles = articles.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    // Cache the sorted articles
    articlesCache = sortedArticles;

    return sortedArticles;
  } catch (error) {
    console.error('Error reading articles directory:', error);
    // Return an empty array if there's an error
    return [];
  }
}

// Export a function to get an article by slug
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const articles = await getAllArticles();
  return articles.find(article => article.slug === slug) || null;
}

// Export a function to get related articles
export async function getRelatedArticles(currentSlug: string, limit = 3): Promise<Article[]> {
  const articles = await getAllArticles();
  const filteredArticles = articles.filter(article => article.slug !== currentSlug);
  return filteredArticles.slice(0, limit);
}

// Export article type
export interface Article {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
}
