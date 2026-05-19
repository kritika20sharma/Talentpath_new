import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col" style={{ paddingTop: '72px' }}>
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{ background: 'linear-gradient(135deg, #004bb2 0%, #1a63d4 60%, #003d94 100%)' }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 15% 50%, rgba(222,132,15,0.35) 0%, transparent 50%),
                            radial-gradient(circle at 85% 15%, rgba(255,255,255,0.12) 0%, transparent 40%)`,
        }} />
        {/* Subtle grid */}
        <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col flex-1 max-w-7xl mx-auto px-6 lg:px-8 py-24">
        {/* Tag */}
        <div className="mb-6">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest" style={{ backgroundColor: 'var(--orange)', color: 'white' }}>
            India&apos;s Specialist Recruitment Partner
          </span>
        </div>

        {/* Main headline — from blueprint */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.08] mb-6 max-w-4xl" style={{ fontFamily: 'var(--font-poppins)' }}>
          Find the Right Talent,
          <br />
          <span style={{ color: 'var(--orange)' }}>Build a Better Future.</span>
        </h1>

        {/* Brand tagline from blueprint */}
        <p className="text-xl font-semibold mb-3" style={{ color: 'rgba(255,255,255,0.85)' }}>
          Connecting Talent, Creating Futures.
        </p>
        <p className="text-base text-white/55 max-w-xl mb-14 leading-relaxed">
          TalentPath delivers Lateral Hiring, Executive Search and Managed Recruitment Services
          across 9 specialist industries — with precision, speed and genuine care.
        </p>

        {/* Dual CTA cards */}
        <div className="grid sm:grid-cols-2 gap-5 max-w-2xl">
          {/* Employers */}
          <div className="group rounded-2xl p-7 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl" style={{ backgroundColor: 'var(--orange)' }}>
            <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM4 5h16V4a1 1 0 00-1-1H5a1 1 0 00-1 1v1z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Looking to hire?</h2>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Access India&apos;s top talent across 9 industries. We fill roles with precision — not just speed.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 text-white font-bold text-sm group-hover:gap-3 transition-all">
              Hire with TalentPath
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Job seekers */}
          <div className="group rounded-2xl p-7 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl border border-white/20" style={{ backgroundColor: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)' }}>
            <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(222,132,15,0.3)' }}>
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Your dream job awaits.</h2>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Browse live opportunities or send your CV to career@talentpath.co.in — a consultant will reach out.
            </p>
            <Link href="/jobs" className="inline-flex items-center gap-2 font-bold text-sm group-hover:gap-3 transition-all" style={{ color: 'var(--orange)' }}>
              Browse current roles
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-wrap gap-8 items-center">
          {[
            'Trustworthy & Reliable',
            'Industry-Specific Experts',
            'Best Turn-Around Time',
            '24/7 Support',
          ].map((badge) => (
            <div key={badge} className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--orange)' }}>
                <svg className="w-3 h-3 fill-white" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-white/65 text-sm font-medium">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
