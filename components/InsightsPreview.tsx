import Link from 'next/link';

const posts = [
  {
    category: 'Hiring Trends',
    title: '2026 Talent Guide: What the Best Employers Are Doing Differently',
    excerpt:
      'From flexible work arrangements to skills-based hiring, discover the strategies top organisations are using to attract and retain exceptional talent in 2026.',
    date: 'April 2026',
    readTime: '5 min read',
    color: 'var(--navy)',
  },
  {
    category: 'Career Advice',
    title: 'How to Stand Out in a Crowded Job Market Without Overselling Yourself',
    excerpt:
      'In an era of AI-generated cover letters and inflated CVs, authenticity is your greatest differentiator. Here\'s how to tell your real career story compellingly.',
    date: 'March 2026',
    readTime: '4 min read',
    color: 'var(--orange)',
  },
  {
    category: 'Salary Guide',
    title: 'Australia\'s 2026 Salary Benchmarks for Technology & Finance Roles',
    excerpt:
      'Our annual salary data across 8 specialist divisions, updated with real placement data from 4,200+ candidates — the benchmark employers and professionals trust.',
    date: 'February 2026',
    readTime: '7 min read',
    color: 'var(--navy)',
  },
];

export default function InsightsPreview() {
  return (
    <section className="py-24" style={{ backgroundColor: 'var(--cream)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span
              className="text-xs font-bold uppercase tracking-widest mb-3 block"
              style={{ color: 'var(--orange)' }}
            >
              Insights
            </span>
            <h2 className="text-4xl font-black" style={{ color: 'var(--navy)' }}>
              Stay ahead of
              <br />the market.
            </h2>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 font-semibold text-sm transition-all hover:gap-3 flex-shrink-0"
            style={{ color: 'var(--navy)' }}
          >
            All insights
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <article
              key={i}
              className="group rounded-2xl overflow-hidden bg-white flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Colour bar */}
              <div className="h-1.5" style={{ backgroundColor: post.color }} />

              <div className="flex flex-col flex-1 p-7">
                {/* Meta */}
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ color: post.color }}
                  >
                    {post.category}
                  </span>
                  <span className="text-xs" style={{ color: 'var(--text-light)' }}>
                    · {post.date}
                  </span>
                </div>

                <h3
                  className="text-lg font-bold mb-3 leading-snug flex-1 group-hover:text-orange transition-colors"
                  style={{ color: 'var(--navy)' }}
                >
                  {post.title}
                </h3>

                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: 'var(--text-mid)' }}
                >
                  {post.excerpt}
                </p>

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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
