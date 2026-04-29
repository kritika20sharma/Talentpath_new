'use client';

import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Jobs', href: '/jobs' },
  { label: 'What We Do', href: '/what-we-do' },
  { label: 'Specialisations', href: '/specialisations' },
  { label: 'About Us', href: '/about' },
  { label: 'Insights', href: '/insights' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex items-center">
              <span
                className="text-3xl font-black tracking-tight leading-none"
                style={{ color: 'var(--navy)' }}
              >
                my
              </span>
              <span
                className="text-3xl font-black tracking-tight leading-none"
                style={{ color: 'var(--orange)' }}
              >
                hr
              </span>
            </div>
            <span
              className="hidden sm:block text-xs font-medium tracking-widest uppercase ml-2 border-l pl-2"
              style={{ color: 'var(--text-mid)', borderColor: 'var(--border)' }}
            >
              Recruitment
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
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

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90 hover:shadow-md"
              style={{ backgroundColor: 'var(--orange)' }}
            >
              Find Talent
            </Link>
            <Link
              href="/jobs"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border-2 transition-all hover:bg-navy hover:text-white hover:border-navy"
              style={{ borderColor: 'var(--navy)', color: 'var(--navy)' }}
            >
              Find a Role
            </Link>
            <button
              className="lg:hidden p-2 rounded-md"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5 w-6">
                <span
                  className={`block h-0.5 w-full transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}
                  style={{ backgroundColor: 'var(--navy)' }}
                />
                <span
                  className={`block h-0.5 w-full transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}
                  style={{ backgroundColor: 'var(--navy)' }}
                />
                <span
                  className={`block h-0.5 w-full transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}
                  style={{ backgroundColor: 'var(--navy)' }}
                />
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
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium py-2 border-b transition-colors hover:text-orange"
                style={{ color: 'var(--text-dark)', borderColor: 'var(--border)' }}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-2">
              <Link
                href="/contact"
                className="text-center px-5 py-3 rounded-full text-sm font-semibold text-white"
                style={{ backgroundColor: 'var(--orange)' }}
                onClick={() => setMobileOpen(false)}
              >
                Find Talent
              </Link>
              <Link
                href="/jobs"
                className="text-center px-5 py-3 rounded-full text-sm font-semibold border-2"
                style={{ borderColor: 'var(--navy)', color: 'var(--navy)' }}
                onClick={() => setMobileOpen(false)}
              >
                Find a Role
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
