'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const desktopVideos = ['/videos/v1.mp4', '/videos/v2.mp4', '/videos/v3.mp4', '/videos/v4.mp4'];
const mobileVideos = ['/videos/v5.mp4', '/videos/v6.mp4'];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [fading, setFading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const nextVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const videos = isMobile ? mobileVideos : desktopVideos;

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % videos.length);
        setNextIndex((prev) => (prev + 2) % videos.length);
        setFading(false);
      }, 1000);
    }, 6000);
    return () => clearInterval(interval);
  }, [videos.length]);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden" style={{ paddingTop: '96px' }}>

      {/* Video background — current */}
      <video
        ref={videoRef}
        key={videos[currentIndex]}
        className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000"
        style={{ opacity: fading ? 0 : 1 }}
        src={videos[currentIndex]}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Video background — next (preloaded, hidden) */}
      <video
        ref={nextVideoRef}
        key={`next-${videos[nextIndex]}`}
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ opacity: 0 }}
        src={videos[nextIndex]}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Lightweight overlay — video stays visible, text stays readable */}
      <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(160deg, rgba(0,20,70,0.38) 0%, rgba(0,30,90,0.44) 55%, rgba(0,10,50,0.58) 100%)' }} />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 z-10 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col flex-1 max-w-7xl mx-auto px-6 lg:px-8 py-24">

        {/* Tag */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest" style={{ backgroundColor: 'var(--orange)', color: 'white' }}>
            India&apos;s Specialist Recruitment Partner
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.08] mb-6 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Find the Right Talent,
          <br />
          <span style={{ color: 'var(--orange)' }}>Build a Better Future.</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-xl font-semibold mb-3"
          style={{ color: 'rgba(255,255,255,0.90)' }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Unlock Potential, Empower People.
        </motion.p>
        <motion.p
          className="text-base max-w-xl mb-14 leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.60)' }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          TalentPath delivers Lateral Hiring, Executive Search and Managed Recruitment Services
          across 9 specialist industries — with precision, speed and genuine care.
        </motion.p>

        {/* Dual CTA */}
        <motion.div
          className="grid sm:grid-cols-2 gap-5 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
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
          <div className="group rounded-2xl p-7 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl" style={{ backgroundColor: '#004bb2' }}>
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
          className="mt-14 pt-8 border-t border-white/15 flex flex-wrap gap-8 items-center"
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

        {/* Video dot indicators */}
        <div className="mt-8 flex gap-2">
          {videos.map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrentIndex(i); setNextIndex((i + 1) % videos.length); }}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === currentIndex ? '28px' : '8px',
                backgroundColor: i === currentIndex ? 'var(--orange)' : 'rgba(255,255,255,0.35)',
              }}
              aria-label={`Video ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
