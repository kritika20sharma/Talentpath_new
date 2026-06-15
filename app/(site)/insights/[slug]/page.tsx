import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import { client } from '@/sanity/lib/client';
import { singlePostQuery, insightsQuery } from '@/sanity/lib/queries';

export const revalidate = 60;

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  excerpt: string;
  body: import('@portabletext/types').PortableTextBlock[];
  readTime?: string;
  publishedAt: string;
  author?: string;
  mainImage?: string;
}

export async function generateStaticParams() {
  const posts: Post[] = await client.fetch(insightsQuery);
  return posts.map((p) => ({ slug: p.slug.current }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post: Post | null = await client.fetch(singlePostQuery, { slug });
  if (!post) return {};
  return {
    title: `${post.title} | TalentPath Insights`,
    description: post.excerpt,
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    year: 'numeric', month: 'long', day: 'numeric',
  });
}

const portableComponents = {
  block: {
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="text-2xl font-black mt-10 mb-4" style={{ color: 'var(--navy)' }}>{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="text-xl font-bold mt-8 mb-3" style={{ color: 'var(--navy)' }}>{children}</h3>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="mb-5 leading-8 text-base" style={{ color: 'var(--text-mid)' }}>{children}</p>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-4 pl-5 my-6 italic" style={{ borderColor: 'var(--orange)', color: 'var(--text-mid)' }}>{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="list-disc list-outside pl-6 mb-5 space-y-2" style={{ color: 'var(--text-mid)' }}>{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="list-decimal list-outside pl-6 mb-5 space-y-2" style={{ color: 'var(--text-mid)' }}>{children}</ol>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-bold" style={{ color: 'var(--navy)' }}>{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => <em>{children}</em>,
    link: ({ value, children }: { value?: { href: string }; children?: React.ReactNode }) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer" className="underline font-semibold" style={{ color: 'var(--orange)' }}>{children}</a>
    ),
  },
};

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post: Post | null = await client.fetch(singlePostQuery, { slug });
  if (!post) notFound();

  const categoryColor: Record<string, string> = {
    'Hiring Trends': 'var(--navy)',
    'Career Advice': 'var(--orange)',
    'Salary Guide': 'var(--navy)',
    'Leadership': '#1A3A6B',
  };
  const color = categoryColor[post.category] ?? 'var(--navy)';

  return (
    <main>
      {/* Hero */}
      <section
        className="pt-24 pb-10 sm:pt-36 sm:pb-16"
        style={{ background: 'linear-gradient(135deg, #0F2B50 0%, #1A3A6B 100%)' }}
      >
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-6 hover:opacity-80 transition-opacity"
            style={{ color: 'var(--orange)' }}
          >
            <svg className="w-3.5 h-3.5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            Back to Insights
          </Link>
          <span className="text-xs font-bold uppercase tracking-widest mb-4 block" style={{ color: 'var(--orange)' }}>
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
            {post.author && <span>{post.author}</span>}
            <span>{formatDate(post.publishedAt)}</span>
            {post.readTime && <span>{post.readTime}</span>}
          </div>
        </div>
      </section>

      {/* Cover image */}
      {post.mainImage && (
        <div className="max-w-3xl mx-auto px-6 lg:px-8 -mt-6">
          <img
            src={post.mainImage}
            alt={post.title}
            className="w-full rounded-2xl shadow-xl object-cover"
            style={{ maxHeight: '420px' }}
          />
        </div>
      )}

      {/* Body */}
      <article className="max-w-3xl mx-auto px-6 lg:px-8 py-12 sm:py-16">
        {/* Colour bar */}
        <div className="h-1 w-16 rounded-full mb-8" style={{ backgroundColor: color }} />

        {post.excerpt && (
          <p className="text-lg sm:text-xl font-semibold mb-8 leading-relaxed" style={{ color: 'var(--navy)' }}>
            {post.excerpt}
          </p>
        )}

        {post.body && (
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          <PortableText value={post.body as any} components={portableComponents as never} />
        )}

        {/* Footer */}
        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ borderColor: 'var(--border)' }}>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--orange)' }}>
              Written by
            </p>
            <p className="font-bold text-sm" style={{ color: 'var(--navy)' }}>
              {post.author ?? 'TalentPath Team'}
            </p>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: 'var(--orange)' }}
          >
            More insights
          </Link>
        </div>
      </article>
    </main>
  );
}
