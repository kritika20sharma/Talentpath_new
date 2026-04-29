import Link from 'next/link';

const services = [
  {
    icon: (
      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    ),
    title: 'Permanent Recruitment',
    desc: 'End-to-end hiring for full-time roles. We run multi-channel campaigns to surface the best candidates, then deliver a shortlist that&apos;s ready to interview.',
    href: '/what-we-do#permanent',
  },
  {
    icon: (
      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
    title: 'Temporary Staffing',
    desc: 'Rapid deployment of skilled contractors and temps for project peaks, parental leave cover, or surge demand — without compromising on quality.',
    href: '/what-we-do#temporary',
  },
  {
    icon: (
      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    ),
    title: 'Volume Recruitment',
    desc: 'Scale your team quickly with our high-volume hiring model — built for graduate intakes, call-centre builds, and large-scale workforce expansion.',
    href: '/what-we-do#volume',
  },
  {
    icon: (
      <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    ),
    title: 'Executive Search',
    desc: 'Discreet, research-led search for senior leaders and C-suite appointments. We access passive talent through our deep executive network.',
    href: '/what-we-do#executive',
  },
];

export default function WhatWeDo() {
  return (
    <section className="py-24" style={{ backgroundColor: 'white' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <span
              className="text-xs font-bold uppercase tracking-widest mb-3 block"
              style={{ color: 'var(--orange)' }}
            >
              What We Do
            </span>
            <h2 className="text-4xl lg:text-5xl font-black leading-tight" style={{ color: 'var(--navy)' }}>
              Recruitment designed
              <br />
              around your needs.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-mid)' }}>
              Whether you need one specialist or an entire team, we tailor our approach to your
              industry, culture, and timeline — every single time.
            </p>
            <Link
              href="/what-we-do"
              className="inline-flex items-center gap-2 mt-6 font-semibold text-sm transition-all hover:gap-3"
              style={{ color: 'var(--navy)' }}
            >
              Explore our services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <Link
              key={i}
              href={service.href}
              className="group relative rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ backgroundColor: 'var(--light-bg)' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors group-hover:bg-orange"
                style={{ backgroundColor: 'var(--navy)' }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="white"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  {service.icon}
                </svg>
              </div>
              <h3
                className="text-lg font-bold mb-3 transition-colors group-hover:text-orange"
                style={{ color: 'var(--navy)' }}
              >
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-mid)' }}
                dangerouslySetInnerHTML={{ __html: service.desc }}
              />
              <div
                className="mt-5 flex items-center gap-1 text-xs font-semibold transition-all group-hover:gap-2"
                style={{ color: 'var(--orange)' }}
              >
                Learn more
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
