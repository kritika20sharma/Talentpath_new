import Link from 'next/link';
import FadeUp from './FadeUp';

const services = [
  {
    icon: <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />,
    title: 'Lateral Hiring',
    desc: 'Targeted search for mid to senior professionals moving across industries and functions. We identify candidates who bring immediate impact — not just a matching job title.',
    href: '/what-we-do#lateral',
  },
  {
    icon: <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />,
    title: 'Executive Search',
    desc: 'Confidential, research-led identification of C-suite and leadership talent. We access passive senior professionals through our deep global network and discreet outreach.',
    href: '/what-we-do#executive',
  },
  {
    icon: <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />,
    title: 'Managed Recruitment (RPO)',
    desc: 'End-to-end Recruitment Process Outsourcing — we embed within your organisation to manage the entire hiring lifecycle, from sourcing and screening to onboarding.',
    href: '/what-we-do#rpo',
  },
];

export default function WhatWeDo() {
  return (
    <section className="py-16 sm:py-24" style={{ backgroundColor: 'white' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-end mb-10 sm:mb-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest mb-3 block" style={{ color: 'var(--orange)' }}>
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight" style={{ color: 'var(--navy)' }}>
              Three services.
              <br />One promise of precision.
            </h2>
          </div>
          <div>
            <p className="text-base sm:text-lg leading-relaxed" style={{ color: 'var(--text-mid)' }}>
              Whether you need a lateral specialist, a C-suite leader, or a fully managed hiring
              partner — TalentPath delivers talent that drives real business outcomes.
            </p>
            <Link href="/what-we-do" className="inline-flex items-center gap-2 mt-6 font-semibold text-sm transition-all hover:gap-3" style={{ color: 'var(--navy)' }}>
              Explore our services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <FadeUp key={i} delay={i * 0.12}>
              <Link href={service.href} className="group relative rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col h-full" style={{ backgroundColor: 'var(--light-bg)' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors group-hover:bg-orange" style={{ backgroundColor: 'var(--navy)' }}>
                <svg className="w-6 h-6" fill="none" stroke="white" strokeWidth={1.5} viewBox="0 0 24 24">
                  {service.icon}
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 transition-colors group-hover:text-orange" style={{ color: 'var(--navy)' }}>
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-mid)' }}>
                {service.desc}
              </p>
              <div className="mt-5 flex items-center gap-1 text-xs font-semibold transition-all group-hover:gap-2" style={{ color: 'var(--orange)' }}>
                Learn more
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </div>
            </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
