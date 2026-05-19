'use client';

import { useState } from 'react';
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">

          <Link href="/">
            <Image src="/logo.png" alt="TalentPath" width={140} height={56} className="h-10 w-auto" priority />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-orange"
                style={{ color: 'var(--text-dark)' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTAs */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90 hover:shadow-md"
              style={{ backgroundColor: 'var(--orange)' }}
            >
              Hire Talent
            </Link>
            <Link
              href="/jobs"
              className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold border-2 transition-all hover:bg-navy hover:text-white"
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
