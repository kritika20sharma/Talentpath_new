import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col" style={{ paddingTop: '72px' }}>
      {/* Background pattern */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, #0F2B50 0%, #1A3A6B 50%, #0F2B50 100%)',
        }}
      >
        {/* Geometric pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(232,96,28,0.4) 0%, transparent 50%),
                              radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 40%),
                              radial-gradient(circle at 60% 80%, rgba(232,96,28,0.2) 0%, transparent 40%)`,
          }}
        />
        {/* Grid lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {/* Top label */}
        <div className="flex items-center gap-3 mb-8">
          <span
            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
            style={{ backgroundColor: 'var(--orange)', color: 'white' }}
          >
            Australia&apos;s Specialist Recruiter
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 max-w-4xl">
          Connecting
          <span style={{ color: 'var(--orange)' }}> people</span>
          <br />
          with purpose.
        </h1>
        <p className="text-lg sm:text-xl text-white/70 max-w-2xl mb-16 leading-relaxed">
          We don&apos;t just fill roles — we shape careers and build teams that drive organisations
          forward. Specialist recruitment across 8 industries, 15+ years of people-powered expertise.
        </p>

        {/* Dual CTA cards */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">
          {/* For Employers */}
          <div
            className="group relative rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            style={{ backgroundColor: 'var(--orange)' }}
          >
            <div className="mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white fill-white" viewBox="0 0 24 24">
                  <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM4 5h16V4a1 1 0 00-1-1H5a1 1 0 00-1 1v1z" />
                </svg>
              </div>
              <h2 className="text-2xl font-black text-white mb-2">Looking to hire?</h2>
              <p className="text-white/80 text-sm leading-relaxed">
                Access our curated talent network and industry experts who understand your business
                inside out.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-white font-bold text-sm group-hover:gap-3 transition-all"
            >
              Find your next hire
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* For Job Seekers */}
          <div
            className="group relative rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl border border-white/20"
            style={{ backgroundColor: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)' }}
          >
            <div className="mb-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(232,96,28,0.3)' }}>
                <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                </svg>
              </div>
              <h2 className="text-2xl font-black text-white mb-2">Looking for a role?</h2>
              <p className="text-white/70 text-sm leading-relaxed">
                Explore hundreds of opportunities with top organisations. Let us match you to your
                perfect next career move.
              </p>
            </div>
            <Link
              href="/jobs"
              className="inline-flex items-center gap-2 font-bold text-sm group-hover:gap-3 transition-all"
              style={{ color: 'var(--orange)' }}
            >
              Browse current roles
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom trust badges */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap gap-8 items-center">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" style={{ color: 'var(--orange)' }} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-white/60 text-sm font-medium">Women-led agency</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" style={{ color: 'var(--orange)' }} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-white/60 text-sm font-medium">Diversity & inclusion committed</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" style={{ color: 'var(--orange)' }} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-white/60 text-sm font-medium">15+ years experience</span>
          </div>
        </div>
      </div>
    </section>
  );
}
