import { groq } from 'next-sanity';

export const jobsQuery = groq`
  *[_type == "jobListing" && isActive == true] | order(publishedAt desc) {
    _id,
    title,
    company,
    location,
    type,
    division,
    salary,
    publishedAt
  }
`;

export const insightsQuery = groq`
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    category,
    excerpt,
    readTime,
    featured,
    publishedAt,
    author,
    "mainImage": mainImage.asset->url
  }
`;

export const singlePostQuery = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    category,
    excerpt,
    body,
    readTime,
    featured,
    publishedAt,
    author,
    "mainImage": mainImage.asset->url
  }
`;

export const recentInsightsQuery = groq`
  *[_type == "blogPost"] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    category,
    excerpt,
    readTime,
    featured,
    publishedAt,
    author,
    "mainImage": mainImage.asset->url
  }
`;
