import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { recentInsightsQuery } from '@/sanity/lib/queries';

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  excerpt: string;
  readTime?: string;
  publishedAt: string;
}

const categoryColors: Record<string, string> = {
  'Hiring Trends': 'var(--navy)',
  'Career Advice': 'var(--orange)',
  'Salary Guide': 'var(--navy)',
  'Leadership': '#1A3A6B',
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    year: 'numeric', month: 'short', day: 'numeric',
  });
}

const fallback: Post[] = [
  {
    _id: '1',
    category: 'Hiring Trends',
    title: "India's Talent Market 2026: Where the Opportunities Are",
    excerpt: 'From the EV push in Automobile to analytics-led roles in BFSI, discover which sectors are hiring aggressively.',
    readTime: '5 min read',
    publishedAt: '2026-04-01',
    slug: { current: '#' },
  },
  {
    _id: '2',
    category: 'Career Advice',
    title: 'How to Make a Lateral Move Without Starting Over',
    excerpt: "Switching industries mid-career is possible — and lucrative when done right. Here's how to position your transferable skills.",
    readTime: '4 min read',
    publishedAt: '2026-03-01',
    slug: { current: '#' },
  },
  {
    _id: '3',
    category: 'Salary Guide',
    title: "India's 2026 Salary Benchmarks: BFSI, Pharma & Oil/Gas",
    excerpt: 'Real compensation data across 9 specialist verticals — built from active placement intelligence, not surveys.',
    readTime: '7 min read',
    publishedAt: '2026-02-01',
    slug: { current: '#' },
  },
];

export default async function InsightsPreview() {
  let posts: Post[] = [];
  try {
    posts = await client.fetch(recentInsightsQuery);
  } catch {
    // fall through to fallback
  }

  const display = posts.length > 0 ? posts : fallback;

  return (
    <section className="py-16 sm:py-24" style={{ backgroundColor: 'var(--cream)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest mb-3 block" style={{ color: 'var(--orange)' }}>
              Insights
            </span>
            <h2 className="text-3xl sm:text-4xl font-black" style={{ color: 'var(--navy)' }}>
              Stay ahead of
              <br />the market.
            </h2>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 font-semibold text-sm transition-all hover:gap-3 shrink-0"
            style={{ color: 'var(--navy)' }}
          >
            All insights

            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {display.map((post) => {
            const color = categoryColors[post.category] ?? 'var(--navy)';
            const href = post.slug.current === '#' ? '/insights' : `/insights/${post.slug.current}`;
            return (
              <article
                key={post._id}
                className="group rounded-2xl overflow-hidden bg-white flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="h-1.5" style={{ backgroundColor: color }} />
                <div className="flex flex-col flex-1 p-5 sm:p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color }}>
                      {post.category}
                    </span>
                    <span className="text-xs" style={{ color: 'var(--text-light)' }}>
                      · {formatDate(post.publishedAt)}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-3 leading-snug flex-1" style={{ color: 'var(--navy)' }}>
                    {post.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-mid)' }}>
                    {post.excerpt}
                  </p>
                  <Link
                    href={href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold transition-all group-hover:gap-2.5"
                    style={{ color: 'var(--orange)' }}
                  >
                    Read article
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
