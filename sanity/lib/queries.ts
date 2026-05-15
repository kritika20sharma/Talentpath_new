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
    publishedAt
  }
`;

export const featuredInsightQuery = groq`
  *[_type == "blogPost" && featured == true][0] {
    _id,
    title,
    slug,
    category,
    excerpt,
    readTime,
    publishedAt
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
    publishedAt
  }
`;
