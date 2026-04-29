import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Insights | myhr Recruitment',
  description:
    'Hiring trends, salary guides, career advice and workforce planning insights from myhr\'s specialist recruitment consultants.',
};

const articles = [
  {
    category: 'Hiring Trends',
    title: '2026 Talent Guide: What the Best Employers Are Doing Differently',
    excerpt: 'From flexible work arrangements to skills-based hiring, discover the strategies top organisations are using to attract and retain exceptional talent in 2026.',
    date: 'April 15, 2026',
    readTime: '5 min read',
    color: 'var(--navy)',
    featured: true,
  },
  {
    category: 'Career Advice',
    title: 'How to Stand Out in a Crowded Job Market Without Overselling Yourself',
    excerpt: 'In an era of AI-generated cover letters and inflated CVs, authenticity is your greatest differentiator. Here\'s how to tell your real career story compellingly.',
    date: 'March 28, 2026',
    readTime: '4 min read',
    color: 'var(--orange)',
    featured: false,
  },
  {
    category: 'Salary Guide',
    title: 'Australia\'s 2026 Salary Benchmarks for Technology & Finance Roles',
    excerpt: 'Our annual salary data across 8 specialist divisions, updated with real placement data from 4,200+ candidates.',
    date: 'February 10, 2026',
    readTime: '7 min read',
    color: 'var(--navy)',
    featured: false,
  },
  {
    category: 'Leadership',
    title: 'The Five Qualities That Define Transformational HR Leaders in 2026',
    excerpt: 'As organisations navigate AI, remote work and changing workforce expectations, HR leadership has never mattered more. Here\'s what sets the best apart.',
    date: 'January 22, 2026',
    readTime: '6 min read',
    color: '#1A3A6B',
    featured: false,
  },
  {
    category: 'Hiring Trends',
    title: 'Why Skills-Based Hiring Is Replacing the Degree Filter',
    excerpt: 'A growing number of Australia\'s leading employers have dropped mandatory degree requirements. We explore what this means for candidates and hiring managers.',
    date: 'January 8, 2026',
    readTime: '4 min read',
    color: 'var(--orange)',
    featured: false,
  },
  {
    category: 'Career Advice',
    title: 'Negotiating Your Salary in 2026: A Complete Guide',
    excerpt: 'Salary negotiation is a skill — and most candidates leave money on the table. Our consultants share the conversations they have that candidates wish they\'d had first.',
    date: 'December 2025',
    readTime: '8 min read',
    color: 'var(--navy)',
    featured: false,
  },
];

export default function InsightsPage() {
  const featured = articles.find((a) => a.featured);
  const rest = articles.filter((a) => !a.featured);

  return (
    <main>
      {/* Hero */}
      <section
        className="pt-36 pb-20"
        style={{ background: 'linear-gradient(135deg, #0F2B50 0%, #1A3A6B 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest mb-4 block" style={{ color: 'var(--orange)' }}>
            Insights
          </span>
          <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
            Stay ahead of the market.
          </h1>
          <p className="text-xl text-white/70 max-w-2xl">
            Hiring guides, salary benchmarks, career advice and workforce trends from our specialist
            consultants.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Featured */}
          {featured && (
            <article
              className="rounded-2xl overflow-hidden mb-12 grid lg:grid-cols-2"
              style={{ backgroundColor: 'var(--navy)' }}
            >
              <div className="p-10 lg:p-14 flex flex-col justify-center">
                <span
                  className="text-xs font-bold uppercase tracking-widest mb-4"
                  style={{ color: 'var(--orange)' }}
                >
                  Featured · {featured.category}
                </span>
                <h2 className="text-3xl font-black text-white leading-tight mb-4">
                  {featured.title}
                </h2>
                <p className="text-white/65 mb-6">{featured.excerpt}</p>
                <div className="flex items-center gap-4">
                  <Link
                    href="/insights/talent-guide-2026"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white transition-all hover:opacity-90"
                    style={{ backgroundColor: 'var(--orange)' }}
                  >
                    Read the guide
                  </Link>
                  <span className="text-white/40 text-xs">{featured.readTime}</span>
                </div>
              </div>
              <div
                className="min-h-48 lg:min-h-0 flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(232,96,28,0.3) 0%, rgba(15,43,80,0.8) 100%)',
                }}
              >
                <div className="text-center p-10">
                  <div className="text-7xl font-black text-white/10 leading-none">2026</div>
                  <div
                    className="text-2xl font-black text-white mt-2"
                    style={{ color: 'var(--orange)' }}
                  >
                    Talent Guide
                  </div>
                </div>
              </div>
            </article>
          )}

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <article
                key={i}
                className="group rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border"
                style={{ borderColor: 'var(--border)' }}
              >
                <div className="h-1.5" style={{ backgroundColor: post.color }} />
                <div className="flex flex-col flex-1 p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: post.color }}>
                      {post.category}
                    </span>
                    <span className="text-xs" style={{ color: 'var(--text-light)' }}>
                      · {post.date}
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
                      href="/insights"
                      className="inline-flex items-center gap-1.5 text-xs font-bold transition-all group-hover:gap-2.5"
                      style={{ color: 'var(--orange)' }}
                    >
                      Read article
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                    <span className="text-xs" style={{ color: 'var(--text-light)' }}>
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
