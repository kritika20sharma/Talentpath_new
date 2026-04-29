import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Current Jobs | myhr Recruitment',
  description:
    'Browse the latest roles across Accounting, Technology, Sales, Marketing, HR, Customer Experience, Business Services and Projects. Specialist recruitment Australia-wide.',
};

const jobs = [
  {
    title: 'Senior Financial Controller',
    company: 'ASX-Listed Retail Group',
    location: 'Sydney CBD',
    type: 'Permanent',
    division: 'Accounting & Finance',
    salary: '$160,000 – $185,000 + super',
    posted: '2 days ago',
  },
  {
    title: 'Senior Software Engineer – React / Node.js',
    company: 'Fintech Scale-Up',
    location: 'Melbourne (Hybrid)',
    type: 'Permanent',
    division: 'Technology',
    salary: '$140,000 – $165,000 + equity',
    posted: '3 days ago',
  },
  {
    title: 'National Sales Manager',
    company: 'Leading SaaS Business',
    location: 'Brisbane (Hybrid)',
    type: 'Permanent',
    division: 'Sales',
    salary: '$130,000 + uncapped commission',
    posted: '4 days ago',
  },
  {
    title: 'HR Business Partner',
    company: 'Global Professional Services',
    location: 'Sydney (Hybrid)',
    type: 'Permanent',
    division: 'Human Resources',
    salary: '$110,000 – $130,000 + super',
    posted: '5 days ago',
  },
  {
    title: 'Head of Digital Marketing',
    company: 'Consumer Brand — Confidential',
    location: 'Melbourne CBD',
    type: 'Permanent',
    division: 'Marketing & Digital',
    salary: '$150,000 – $170,000',
    posted: '1 week ago',
  },
  {
    title: 'Project Manager – Digital Transformation',
    company: 'Government Agency',
    location: 'Canberra',
    type: 'Contract',
    division: 'Projects & Change',
    salary: '$120 – $140/hour',
    posted: '1 week ago',
  },
  {
    title: 'Customer Experience Manager',
    company: 'E-Commerce Leader',
    location: 'Sydney (Remote)',
    type: 'Permanent',
    division: 'Customer Experience',
    salary: '$95,000 – $110,000 + super',
    posted: '2 weeks ago',
  },
  {
    title: 'Accounts Payable Officer',
    company: 'Infrastructure Company',
    location: 'Perth',
    type: 'Temporary',
    division: 'Accounting & Finance',
    salary: '$38 – $42/hour',
    posted: '2 weeks ago',
  },
];

const divisionColors: Record<string, string> = {
  'Accounting & Finance': 'var(--navy)',
  'Technology': '#1A3A6B',
  'Sales': 'var(--orange)',
  'Human Resources': 'var(--navy)',
  'Marketing & Digital': '#1A3A6B',
  'Projects & Change': 'var(--navy)',
  'Customer Experience': 'var(--orange)',
};

const typeColors: Record<string, { bg: string; text: string }> = {
  Permanent: { bg: 'rgba(15,43,80,0.08)', text: 'var(--navy)' },
  Temporary: { bg: 'rgba(232,96,28,0.1)', text: 'var(--orange)' },
  Contract: { bg: 'rgba(26,58,107,0.1)', text: '#1A3A6B' },
};

export default function JobsPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="pt-36 pb-20"
        style={{ background: 'linear-gradient(135deg, #0F2B50 0%, #1A3A6B 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest mb-4 block" style={{ color: 'var(--orange)' }}>
            Current Opportunities
          </span>
          <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight mb-6 max-w-3xl">
            Your next role is here.
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mb-8">
            Browse roles across 8 specialist divisions — or tell us what you&apos;re looking for and
            we&apos;ll match you to the right opportunity.
          </p>

          {/* Search bar */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-2xl">
            <input
              type="text"
              placeholder="Job title, keyword or division..."
              className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/40 outline-none text-sm"
            />
            <select className="px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white text-sm outline-none">
              <option value="">All locations</option>
              <option>Sydney</option>
              <option>Melbourne</option>
              <option>Brisbane</option>
              <option>Perth</option>
              <option>Canberra</option>
              <option>Remote</option>
            </select>
            <button
              className="px-6 py-3.5 rounded-full font-bold text-sm text-white transition-all hover:opacity-90 flex-shrink-0"
              style={{ backgroundColor: 'var(--orange)' }}
            >
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Job listings */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <p className="text-sm font-semibold" style={{ color: 'var(--text-mid)' }}>
              Showing {jobs.length} roles
            </p>
            <select
              className="text-sm border rounded-lg px-3 py-2 outline-none"
              style={{ borderColor: 'var(--border)' }}
            >
              <option>Most recent</option>
              <option>Salary: high to low</option>
            </select>
          </div>

          <div className="space-y-4">
            {jobs.map((job, i) => (
              <div
                key={i}
                className="group rounded-2xl p-6 border transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
                style={{ borderColor: 'var(--border)' }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  {/* Avatar */}
                  <div
                    className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center text-white font-black text-sm"
                    style={{ backgroundColor: divisionColors[job.division] || 'var(--navy)' }}
                  >
                    {job.division.slice(0, 2).toUpperCase()}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3
                      className="font-bold text-base mb-1 group-hover:text-orange transition-colors"
                      style={{ color: 'var(--navy)' }}
                    >
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs" style={{ color: 'var(--text-mid)' }}>
                      <span>{job.company}</span>
                      <span>·</span>
                      <span>{job.location}</span>
                      <span>·</span>
                      <span>{job.salary}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 sm:flex-nowrap sm:items-center">
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={typeColors[job.type] || { bg: '#eee', text: '#333' }}
                    >
                      {job.type}
                    </span>
                    <span
                      className="text-xs px-3 py-1 rounded-full font-medium"
                      style={{ backgroundColor: 'var(--light-bg)', color: 'var(--text-mid)' }}
                    >
                      {job.division}
                    </span>
                    <span className="text-xs hidden sm:block" style={{ color: 'var(--text-light)' }}>
                      {job.posted}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Register interest CTA */}
          <div
            className="mt-12 rounded-2xl p-10 text-center"
            style={{ backgroundColor: 'var(--light-bg)' }}
          >
            <h3 className="text-2xl font-black mb-3" style={{ color: 'var(--navy)' }}>
              Don&apos;t see the right role?
            </h3>
            <p className="mb-6" style={{ color: 'var(--text-mid)' }}>
              Register your interest and we&apos;ll match you to opportunities as they arise — including
              roles we haven&apos;t advertised yet.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: 'var(--orange)' }}
            >
              Register your interest
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
