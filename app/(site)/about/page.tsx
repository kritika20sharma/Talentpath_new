import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | TalentPath Management Services',
  description:
    'TalentPath is a modern recruitment and talent acquisition company based in Noida, India — specialising in Lateral Hiring, Executive Search and Managed Recruitment across 9 industries.',
};

const values = [
  {
    title: 'Trustworthy & Transparent',
    body: 'Every engagement is built on openness and accountability. We say what we mean, do what we promise, and stand behind every placement we make.',
  },
  {
    title: 'People First, Always',
    body: 'Behind every role is a person\'s livelihood and a team\'s future. We never forget that — for candidates and clients alike.',
  },
  {
    title: 'Industry-Specific Expertise',
    body: 'Our consultants are specialists, not generalists. Each vertical is owned by a consultant who lives and breathes that sector every day.',
  },
  {
    title: 'Best Turn-Around Time',
    body: 'Speed is our competitive edge. Our structured search process delivers quality shortlists faster than the market — without cutting corners on due diligence.',
  },
];

const milestones = [
  { value: '9+', label: 'Specialist industries served' },
  { value: '500+', label: 'Successful placements' },
  { value: '200+', label: 'Client organisations' },
  { value: '24/7', label: 'Consultant availability' },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="pt-36 pb-20"
        style={{ background: 'linear-gradient(135deg, #004bb2 0%, #1a63d4 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest mb-4 block" style={{ color: 'var(--orange)' }}>
            About TalentPath
          </span>
          <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight mb-6 max-w-3xl">
            Connecting India&apos;s best talent with organisations that deserve them.
          </h1>
          <p className="text-xl text-white/70 max-w-2xl">
            TalentPath Management Services is a specialist recruitment partner headquartered in Noida —
            built on the belief that great hiring is a human endeavour, not a transactional one.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest mb-3 block" style={{ color: 'var(--orange)' }}>
              Our Story
            </span>
            <h2 className="text-4xl font-black mb-6" style={{ color: 'var(--navy)' }}>
              Born from a frustration with transactional recruitment.
            </h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--text-mid)' }}>
              <p>
                TalentPath was founded with a clear purpose: to bring genuine expertise, speed and
                integrity to the recruitment process across India&apos;s most demanding sectors.
              </p>
              <p>
                We saw an industry dominated by volume-over-quality approaches — agencies sending
                dozens of unvetted CVs and calling it service. We set out to do the opposite: to
                understand each role deeply, build trusted relationships, and present only the
                candidates who truly fit.
              </p>
              <p>
                Today, TalentPath operates across 9 specialist verticals — from Automobile and
                Oil &amp; Gas to BFSI and Pharma — serving mid-level professionals to C-suite
                executives, with the same care at every level.
              </p>
            </div>

            <div className="mt-8 p-6 rounded-2xl" style={{ backgroundColor: 'var(--light-bg)' }}>
              <p className="text-sm font-bold mb-1" style={{ color: 'var(--navy)' }}>Our Vision</p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-mid)' }}>
                To be India&apos;s most trusted specialist recruitment partner — known for precision,
                speed and genuine care for both clients and candidates.
              </p>
            </div>
            <div className="mt-4 p-6 rounded-2xl" style={{ backgroundColor: 'var(--light-bg)' }}>
              <p className="text-sm font-bold mb-1" style={{ color: 'var(--navy)' }}>Our Mission</p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-mid)' }}>
                To unlock human potential by connecting the right people with the right opportunities —
                empowering organisations to grow and individuals to thrive.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {milestones.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl p-8 text-center"
                style={{ backgroundColor: i % 2 === 0 ? 'var(--navy)' : 'var(--light-bg)' }}
              >
                <span
                  className="text-4xl font-black block mb-2"
                  style={{ color: i % 2 === 0 ? 'var(--orange)' : 'var(--navy)' }}
                >
                  {item.value}
                </span>
                <span
                  className="text-xs font-semibold"
                  style={{ color: i % 2 === 0 ? 'rgba(255,255,255,0.65)' : 'var(--text-mid)' }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24" style={{ backgroundColor: 'var(--light-bg)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest mb-3 block" style={{ color: 'var(--orange)' }}>
              What We Stand For
            </span>
            <h2 className="text-4xl font-black" style={{ color: 'var(--navy)' }}>
              Our values aren&apos;t on a wall.
              <br />They&apos;re in every conversation.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <div key={i} className="rounded-2xl p-7 bg-white">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm mb-5"
                  style={{ backgroundColor: 'var(--orange)' }}
                >
                  0{i + 1}
                </div>
                <h3 className="font-bold text-base mb-3" style={{ color: 'var(--navy)' }}>
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-mid)' }}>
                  {value.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team placeholder */}
      <section id="team" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest mb-3 block" style={{ color: 'var(--orange)' }}>
              Our Team
            </span>
            <h2 className="text-4xl font-black" style={{ color: 'var(--navy)' }}>
              The people behind your next hire.
            </h2>
            <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: 'var(--text-mid)' }}>
              Our consultants are specialists in their industries — not generalists handing out CVs.
              Each one brings deep sector knowledge and a genuine network built over years.
            </p>
          </div>

          <div className="rounded-2xl p-10 text-center" style={{ backgroundColor: 'var(--light-bg)' }}>
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'var(--navy)' }}>
              <svg className="w-8 h-8" fill="none" stroke="white" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--navy)' }}>Team profiles coming soon</h3>
            <p className="text-sm" style={{ color: 'var(--text-mid)' }}>
              We&apos;re updating our team section — check back shortly. In the meantime, reach out directly at{' '}
              <a href="mailto:career@talentpath.co.in" className="font-semibold" style={{ color: 'var(--orange)' }}>
                career@talentpath.co.in
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: 'var(--navy)' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Ready to work with us?</h2>
          <p className="text-white/65 mb-8">
            Whether you&apos;re hiring or looking for your next opportunity, we&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: 'var(--orange)' }}
            >
              Get in touch
            </Link>
            <Link
              href="/jobs"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold border-2 text-white transition-all hover:bg-white/10"
              style={{ borderColor: 'rgba(255,255,255,0.3)' }}
            >
              Browse jobs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
