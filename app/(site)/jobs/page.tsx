import type { Metadata } from 'next';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { jobsQuery } from '@/sanity/lib/queries';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Current Jobs | myhr Recruitment',
  description:
    'Browse the latest roles across Accounting, Technology, Sales, Marketing, HR, Customer Experience, Business Services and Projects. Specialist recruitment Australia-wide.',
};

interface Job {
  _id: string;
  title: string;
  company: string;
  location: string;
  type: 'Permanent' | 'Temporary' | 'Contract';
  division: string;
  salary: string;
  publishedAt: string;
}

const divisionColors: Record<string, string> = {
  'Accounting & Finance': 'var(--navy)',
  'Technology': '#1A3A6B',
  'Sales': 'var(--orange)',
  'Human Resources': 'var(--navy)',
  'Marketing & Digital': '#1A3A6B',
  'Projects & Change': 'var(--navy)',
  'Customer Experience': 'var(--orange)',
  'Business Services': '#1A3A6B',
};

const typeColors: Record<string, { backgroundColor: string; color: string }> = {
  Permanent: { backgroundColor: 'rgba(15,43,80,0.08)', color: 'var(--navy)' },
  Temporary: { backgroundColor: 'rgba(232,96,28,0.1)', color: 'var(--orange)' },
  Contract: { backgroundColor: 'rgba(26,58,107,0.1)', color: '#1A3A6B' },
};

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 86400000);
  if (days === 0) return 'Today';
  if (days === 1) return '1 day ago';
  if (days < 7) return `${days} days ago`;
  if (days < 14) return '1 week ago';
  return `${Math.floor(days / 7)} weeks ago`;
}

export default async function JobsPage() {
  const jobs: Job[] = await client.fetch(jobsQuery);

  return (
    <main>
      {/* Hero */}
      <section
        className="pt-24 pb-10 sm:pt-36 sm:pb-20"
        style={{ background: 'linear-gradient(135deg, #0F2B50 0%, #1A3A6B 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest mb-4 block" style={{ color: 'var(--orange)' }}>
            Current Opportunities
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4 sm:mb-6 max-w-3xl">
            Your next role is here.
          </h1>
          <p className="text-base sm:text-xl text-white/70 max-w-2xl mb-6 sm:mb-8">
            Browse roles across 8 specialist divisions — or tell us what you&apos;re looking for and
            we&apos;ll match you to the right opportunity.
          </p>
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

      {/* Listings */}
      <section className="py-12 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {jobs.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg mb-2" style={{ color: 'var(--text-mid)' }}>
                No active roles at the moment.
              </p>
              <p className="text-sm" style={{ color: 'var(--text-light)' }}>
                Register your interest below and we&apos;ll be in touch when something matches.
              </p>
            </div>
          ) : (
            <>
              <p className="text-sm font-semibold mb-8" style={{ color: 'var(--text-mid)' }}>
                Showing {jobs.length} {jobs.length === 1 ? 'role' : 'roles'}
              </p>
              <div className="space-y-4">
                {jobs.map((job) => (
                  <div
                    key={job._id}
                    className="group rounded-2xl p-6 border transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
                    style={{ borderColor: 'var(--border)' }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center text-white font-black text-sm"
                        style={{ backgroundColor: divisionColors[job.division] ?? 'var(--navy)' }}
                      >
                        {job.division.slice(0, 2).toUpperCase()}
                      </div>
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
                          {job.salary && <><span>·</span><span>{job.salary}</span></>}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 sm:flex-nowrap sm:items-center">
                        <span
                          className="text-xs font-semibold px-3 py-1 rounded-full"
                          style={typeColors[job.type]}
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
                          {timeAgo(job.publishedAt)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          <div
            className="mt-10 rounded-2xl p-6 sm:p-10 text-center"
            style={{ backgroundColor: 'var(--light-bg)' }}
          >
            <h3 className="text-xl sm:text-2xl font-black mb-3" style={{ color: 'var(--navy)' }}>
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
