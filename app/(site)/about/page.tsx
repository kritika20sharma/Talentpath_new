import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import FounderPhotoUpload from '@/components/FounderPhotoUpload';

export const metadata: Metadata = {
  title: 'About Us | TalentPath Management Services',
  description:
    'Meet the co-founders and team behind TalentPath — India\'s specialist recruitment partner for Lateral Hiring, Executive Search and Managed Recruitment across 9 industries.',
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
  { value: '15+', label: 'Years of combined experience' },
  { value: '24/7', label: 'Consultant availability' },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="pt-40 pb-20"
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

      {/* Co-Founders */}
      <section className="py-24" style={{ backgroundColor: 'var(--light-bg)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest mb-3 block" style={{ color: 'var(--orange)' }}>
              Leadership
            </span>
            <h2 className="text-4xl font-black" style={{ color: 'var(--navy)' }}>
              Meet the Co-Founders
            </h2>
            <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: 'var(--text-mid)' }}>
              Two leaders with decades of combined experience building India&apos;s most trusted specialist recruitment practice.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">

            {/* Mamta Saharan */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
              <FounderPhotoUpload
                src="/images/founder-female.jpg"
                alt="Mamta Saharan — CEO & Co-Founder"
                name="Mamta Saharan"
                title="CEO & Co-Founder"
                slot="female"
              />
              <div className="p-8 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <div className="h-0.5 w-8 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--orange)' }} />
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--orange)' }}>About Mamta</span>
                </div>
                <p className="text-sm leading-7" style={{ color: 'var(--text-mid)' }}>
                  A graduate of Delhi University, Mamta holds a Master&apos;s degree in Management
                  from Maharshi Dayanand University, Rohtak (Haryana).
                </p>
                <p className="text-sm leading-7" style={{ color: 'var(--text-mid)' }}>
                  As Co-Founder &amp; CEO, Mamta is a core member of TalentPath&apos;s Management
                  Committee. She drives the firm&apos;s recruitment strategy across the Automotive
                  vertical, combining sharp client understanding with deep operational expertise to
                  consistently deliver quality talent at speed.
                </p>
                <p className="text-sm leading-7" style={{ color: 'var(--text-mid)' }}>
                  With <strong style={{ color: 'var(--navy)' }}>15+ years of experience</strong>, she
                  has built a strong track record of hiring across Indian companies and MNCs spanning
                  multiple domains and functions. Her expertise covers Leadership Hiring, Plant Hiring,
                  Manufacturing, Sales &amp; Marketing, and R&amp;D — across Passenger Cars,
                  Two-wheelers, Tractors, Off-Road Vehicles, Engines and Heavy Machinery.
                </p>
              </div>
            </div>

            {/* Madhukar Mishra */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
              <FounderPhotoUpload
                src="/images/founder-male.jpg"
                alt="Madhukar Mishra — CEO & Co-Founder"
                name="Madhukar Mishra"
                title="CEO & Co-Founder"
                slot="male"
              />
              <div className="p-8 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <div className="h-0.5 w-8 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--orange)' }} />
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--orange)' }}>About Madhukar</span>
                </div>
                <p className="text-sm leading-7" style={{ color: 'var(--text-mid)' }}>
                  A graduate of Magadh University, Madhukar holds a Master&apos;s degree from the
                  Institute of Management Technology, Ghaziabad (UP).
                </p>
                <p className="text-sm leading-7" style={{ color: 'var(--text-mid)' }}>
                  As Co-Founder &amp; CEO, Madhukar is a core member of TalentPath&apos;s Management
                  Committee. He oversees the firm&apos;s P&amp;L and steers its core recruitment
                  business across multiple industry verticals — bringing strategic clarity and
                  commercial discipline to every client engagement.
                </p>
                <p className="text-sm leading-7" style={{ color: 'var(--text-mid)' }}>
                  With <strong style={{ color: 'var(--navy)' }}>22+ years of experience</strong>,
                  Madhukar has built an enviable reputation in Automobile, Manufacturing and
                  Non-Banking Financial Services. He has successfully placed senior executives across
                  Automobile, FMCG, Consumer Durables, EPC, Oil &amp; Gas, Banking, NBFC, Analytics
                  &amp; Consulting — with leading organisations throughout India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Photo */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest mb-3 block" style={{ color: 'var(--orange)' }}>
              Our Team
            </span>
            <h2 className="text-4xl font-black" style={{ color: 'var(--navy)' }}>
              The people behind your next hire.
            </h2>
            <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: 'var(--text-mid)' }}>
              Our consultants are industry specialists — not generalists handing out CVs. Each one
              brings deep sector knowledge and a genuine network built over years of focused practice.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/team.jpg"
              alt="TalentPath Team"
              width={1400}
              height={800}
              className="w-full object-cover"
              style={{ maxHeight: '520px', objectPosition: 'center top' }}
            />
            <div
              className="absolute inset-0 flex items-end"
              style={{ background: 'linear-gradient(to top, rgba(0,20,70,0.75) 0%, transparent 55%)' }}
            >
              <div className="p-8 lg:p-12 w-full">
                <p className="text-white font-black text-2xl mb-1">TalentPath Management Services</p>
                <p className="text-white/70 text-sm">Noida, India — Building careers. Powering organisations.</p>
              </div>
            </div>
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
