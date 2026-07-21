'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const panelStats = [
  { value: '10+', label: 'Specialist Industries' },
  { value: '500+', label: 'Successful Placements' },
  { value: '3 Days', label: 'Avg. Shortlist Delivery' },
  { value: '24/7', label: 'Client Support' },
];

const contactDetails = [
  {
    label: 'Call Us',
    value: '+91 96549 02143',
    sub: '+91 74281 20251',
    href: 'tel:+919654902143',
    icon: (
      <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
      </svg>
    ),
  },
  {
    label: 'Email Us',
    value: 'career@talentpath.co.in',
    sub: 'We reply within 24 hrs',
    href: 'mailto:career@talentpath.co.in',
    icon: (
      <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
  {
    label: 'Visit Us',
    value: '302, Procapitus Business Park',
    sub: 'Sector 63, Noida UP 201301',
    href: 'https://maps.google.com/?q=Procapitus+Business+Park+Sector+63+Noida',
    icon: (
      <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),
  },
  {
    label: 'Business Hours',
    value: 'Mon – Sat: 9 AM – 7 PM',
    sub: 'Sunday: Closed',
    href: null,
    icon: (
      <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col" style={{ backgroundColor: 'rgba(10,15,40,0.97)' }}>

      {/* Background video — capped to viewport height so it never bleeds past the fold */}
      <div className="absolute top-0 left-0 right-0 h-screen overflow-hidden z-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/home-banner.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Lightweight vignette */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(10,15,40,0.28)' }}
        />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center flex-1 max-w-7xl mx-auto px-6 lg:px-8 pt-28 sm:pt-36 pb-16 sm:pb-24 text-center">

        {/* Badge */}
        <motion.div
          className="mb-5"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest" style={{ backgroundColor: 'var(--orange)', color: 'white' }}>
            India&apos;s Specialist Recruitment Partner
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.08] mb-5 max-w-4xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Find the Right Talent,
          <br />
          <span style={{ color: 'var(--orange)' }}>Build a Better Future.</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl font-semibold mb-3 max-w-2xl"
          style={{ color: 'rgba(255,255,255,0.90)' }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Unlock Potential, Empower People.
        </motion.p>

        <motion.p
          className="text-sm sm:text-base max-w-xl leading-relaxed mb-10 sm:mb-14"
          style={{ color: 'rgba(255,255,255,0.65)' }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          TalentPath delivers Lateral Hiring, Executive Search and Managed Recruitment Services
          across 10 specialist industries — with precision, speed and genuine care.
        </motion.p>

        {/* Premium glass information panel */}
        <motion.div
          className="relative w-full max-w-3xl mx-auto mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div
            className="relative overflow-hidden rounded-3xl px-6 sm:px-10 py-6 sm:py-8"
            style={{
              background: 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(24px) saturate(180%)',
              WebkitBackdropFilter: 'blur(24px) saturate(180%)',
              border: '1px solid rgba(255,255,255,0.18)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
            }}
          >
            {/* Top sheen for glass highlight */}
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)' }}
            />

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-5 gap-x-4">
              {panelStats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex flex-col items-center text-center ${i < panelStats.length - 1 ? 'sm:border-r' : ''}`}
                  style={i < panelStats.length - 1 ? { borderColor: 'rgba(255,255,255,0.15)' } : undefined}
                >
                  <span className="text-2xl sm:text-3xl font-black leading-none mb-1.5" style={{ color: 'var(--orange)' }}>
                    {stat.value}
                  </span>
                  <span className="text-[11px] sm:text-xs font-medium uppercase tracking-wide leading-snug" style={{ color: 'rgba(255,255,255,0.70)' }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Dual CTA */}
        <motion.div
          className="grid sm:grid-cols-2 gap-4 w-full max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Employers */}
          <div className="group rounded-2xl p-5 sm:p-7 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl text-left" style={{ backgroundColor: 'var(--orange)' }}>
            <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM4 5h16V4a1 1 0 00-1-1H5a1 1 0 00-1 1v1z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Looking to hire?</h2>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Access India&apos;s top talent across 10 industries. We fill roles with precision — not just speed.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 text-white font-bold text-sm group-hover:gap-3 transition-all">
              Hire with TalentPath
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Job seekers */}
          <div className="group rounded-2xl p-5 sm:p-7 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl text-left" style={{ backgroundColor: '#004bb2' }}>
            <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}>
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
        </motion.div>

        {/* Trust badges */}
        <motion.div
          className="mt-8 sm:mt-14 pt-6 sm:pt-8 border-t border-white/15 w-full flex flex-wrap justify-center gap-x-5 gap-y-3 sm:gap-8 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.75 }}
        >
          {['Trustworthy & Reliable', 'Industry-Specific Experts', 'Best Turn-Around Time', '24/7 Support'].map((badge) => (
            <div key={badge} className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--orange)' }}>
                <svg className="w-3 h-3 fill-white" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-white/65 text-sm font-medium">{badge}</span>
            </div>
          ))}
        </motion.div>

        {/* Contact card */}
        <motion.div
          id="hero-contact"
          className="mt-16 sm:mt-20 w-full"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-white/15" />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--orange)' }}>
              Get in Touch
            </span>
            <div className="h-px flex-1 bg-white/15" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactDetails.map((item) => {
              const inner = (
                <div
                  className="flex flex-col gap-3 p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group text-left"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.07)',
                    borderColor: 'rgba(255,255,255,0.12)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110"
                    style={{ backgroundColor: 'var(--orange)' }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'rgba(255,255,255,0.45)' }}>
                      {item.label}
                    </p>
                    <p className="text-sm font-semibold text-white leading-snug">{item.value}</p>
                    {item.sub && (
                      <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.50)' }}>{item.sub}</p>
                    )}
                  </div>
                </div>
              );
              return item.href ? (
                <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                  {inner}
                </a>
              ) : (
                <div key={item.label}>{inner}</div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
