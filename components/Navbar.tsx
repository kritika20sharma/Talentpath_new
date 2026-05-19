'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Industries', href: '/specialisations' },
  { label: 'Services', href: '/what-we-do' },
  { label: 'Jobs', href: '/jobs' },
  { label: 'Insights', href: '/insights' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'py-1' : 'py-2'}`}>

          <Link href="/" className="flex-shrink-0 transition-transform duration-200 hover:scale-[1.03]">
            <Image
              src="/logo.png"
              alt="TalentPath"
              width={200}
              height={80}
              className={`w-auto transition-all duration-300 ${scrolled ? 'h-14' : 'h-20'}`}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium group"
                style={{ color: 'var(--text-dark)' }}
              >
                {link.label}
                <span
                  className="absolute -bottom-0.5 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-250 rounded-full"
                  style={{ backgroundColor: 'var(--orange)' }}
                />
              </Link>
            ))}
          </nav>

          {/* CTAs */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg hover:-translate-y-px"
              style={{ backgroundColor: 'var(--orange)' }}
            >
              Hire Talent
            </Link>
            <Link
              href="/jobs"
              className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold border-2 transition-all duration-200 hover:shadow-md hover:-translate-y-px"
              style={{ borderColor: 'var(--navy)', color: 'var(--navy)' }}
            >
              Find a Job
            </Link>
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5 w-6">
                <span className={`block h-0.5 w-full transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} style={{ backgroundColor: 'var(--navy)' }} />
                <span className={`block h-0.5 w-full transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} style={{ backgroundColor: 'var(--navy)' }} />
                <span className={`block h-0.5 w-full transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{ backgroundColor: 'var(--navy)' }} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t" style={{ borderColor: 'var(--border)' }}>
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
                className="text-base font-medium py-2 border-b" style={{ color: 'var(--text-dark)', borderColor: 'var(--border)' }}>
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-2">
              <Link href="/contact" className="text-center px-5 py-3 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: 'var(--orange)' }} onClick={() => setMobileOpen(false)}>Hire Talent</Link>
              <Link href="/jobs" className="text-center px-5 py-3 rounded-full text-sm font-semibold border-2" style={{ borderColor: 'var(--navy)', color: 'var(--navy)' }} onClick={() => setMobileOpen(false)}>Find a Job</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
