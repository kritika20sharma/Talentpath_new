import type { Metadata } from 'next';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { insightsQuery } from '@/sanity/lib/queries';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Insights | myhr Recruitment',
  description:
    "Hiring trends, salary guides, career advice and workforce planning insights from myhr's specialist recruitment consultants.",
};

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  excerpt: string;
  readTime: string;
  featured: boolean;
  publishedAt: string;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-AU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

const categoryColors: Record<string, string> = {
  'Hiring Trends': 'var(--navy)',
  'Career Advice': 'var(--orange)',
  'Salary Guide': 'var(--navy)',
  'Leadership': '#1A3A6B',
};

export default async function InsightsPage() {
  const posts: Post[] = await client.fetch(insightsQuery);
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <main>
      {/* Hero */}
      <section
        className="pt-24 pb-10 sm:pt-36 sm:pb-20"
        style={{ background: 'linear-gradient(135deg, #0F2B50 0%, #1A3A6B 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest mb-4 block" style={{ color: 'var(--orange)' }}>
            Insights
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
            Stay ahead of the market.
          </h1>
          <p className="text-base sm:text-xl text-white/70 max-w-2xl">
            Hiring guides, salary benchmarks, career advice and workforce trends from our specialist
            consultants.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg" style={{ color: 'var(--text-mid)' }}>
                No articles published yet — check back soon.
              </p>
            </div>
          ) : (
            <>
              {/* Featured */}
              {featured && (
                <article
                  className="rounded-2xl overflow-hidden mb-12 grid lg:grid-cols-2"
                  style={{ backgroundColor: 'var(--navy)' }}
                >
                  <div className="p-6 sm:p-10 lg:p-14 flex flex-col justify-center">
                    <span
                      className="text-xs font-bold uppercase tracking-widest mb-4"
                      style={{ color: 'var(--orange)' }}
                    >
                      Featured · {featured.category}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-4">
                      {featured.title}
                    </h2>
                    <p className="text-white/65 mb-6">{featured.excerpt}</p>
                    <div className="flex items-center gap-4">
                      <Link
                        href={`/insights/${featured.slug.current}`}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white transition-all hover:opacity-90"
                        style={{ backgroundColor: 'var(--orange)' }}
                      >
                        Read article
                      </Link>
                      {featured.readTime && (
                        <span className="text-white/40 text-xs">{featured.readTime}</span>
                      )}
                    </div>
                  </div>
                  <div
                    className="min-h-48 lg:min-h-0 flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, rgba(232,96,28,0.3) 0%, rgba(15,43,80,0.8) 100%)',
                    }}
                  >
                    <div className="text-center p-10">
                      <div className="text-7xl font-black text-white/10 leading-none">myhr</div>
                      <div className="text-xl font-black mt-2" style={{ color: 'var(--orange)' }}>
                        {featured.category}
                      </div>
                    </div>
                  </div>
                </article>
              )}

              {/* Grid */}
              {rest.length > 0 && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rest.map((post) => {
                    const color = categoryColors[post.category] ?? 'var(--navy)';
                    return (
                      <article
                        key={post._id}
                        className="group rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border"
                        style={{ borderColor: 'var(--border)' }}
                      >
                        <div className="h-1.5" style={{ backgroundColor: color }} />
                        <div className="flex flex-col flex-1 p-7">
                          <div className="flex items-center gap-3 mb-4">
                            <span className="text-xs font-bold uppercase tracking-widest" style={{ color }}>
                              {post.category}
                            </span>
                            <span className="text-xs" style={{ color: 'var(--text-light)' }}>
                              · {formatDate(post.publishedAt)}
                            </span>
                          </div>
                          <h3
                            className="text-lg font-bold mb-3 leading-snug flex-1"
                            style={{ color: 'var(--navy)' }}
                          >
                            {post.title}
                          </h3>
                          <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-mid)' }}>
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <Link
                              href={`/insights/${post.slug.current}`}
                              className="inline-flex items-center gap-1.5 text-xs font-bold transition-all group-hover:gap-2.5"
                              style={{ color: 'var(--orange)' }}
                            >
                              Read article
                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </Link>
                            {post.readTime && (
                              <span className="text-xs" style={{ color: 'var(--text-light)' }}>
                                {post.readTime}
                              </span>
                            )}
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </main>
  );
}
