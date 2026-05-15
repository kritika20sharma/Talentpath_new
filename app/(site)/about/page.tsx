import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | myhr Recruitment',
  description:
    'myhr is a women-led specialist recruitment agency with 15+ years of experience connecting exceptional talent with remarkable organisations across Australia.',
};

const team = [
  {
    name: 'Sarah Mitchell',
    role: 'Founder & CEO',
    bio: '20 years in recruitment across Asia-Pacific. Passionate about building workplaces where everyone thrives.',
    initials: 'SM',
    color: 'var(--navy)',
  },
  {
    name: 'Olivia Chen',
    role: 'Head of Technology',
    bio: 'Former software engineer turned recruiter. Speaks the language of developers and CTOs alike.',
    initials: 'OC',
    color: 'var(--orange)',
  },
  {
    name: 'Daniel Reeves',
    role: 'Head of Finance',
    bio: 'CPA background with a decade placing CFOs, controllers and finance teams across ASX companies.',
    initials: 'DR',
    color: '#1A3A6B',
  },
  {
    name: 'Amara Osei',
    role: 'Head of People & Culture',
    bio: 'Champion of inclusive hiring practices with deep expertise in HR leadership and L&D recruitment.',
    initials: 'AO',
    color: 'var(--orange)',
  },
  {
    name: 'Ryan Park',
    role: 'Head of Sales & Marketing',
    bio: 'From BDMs to CMOs — Ryan has placed hundreds of commercial leaders across tech and consumer brands.',
    initials: 'RP',
    color: 'var(--navy)',
  },
  {
    name: 'Jessica Moore',
    role: 'Head of Executive Search',
    bio: 'Board-level advisor with a global network built over 15 years of C-suite and NED placements.',
    initials: 'JM',
    color: '#1A3A6B',
  },
];

const values = [
  {
    title: 'People first, always',
    body: 'Every decision we make — for candidates and clients — starts with the human impact. We never forget that behind every role is a person\'s livelihood and a team\'s future.',
  },
  {
    title: 'Radical honesty',
    body: 'We tell clients when a role brief needs rethinking. We tell candidates when they\'re not the right fit. Trust is built on truth, not on telling people what they want to hear.',
  },
  {
    title: 'Diversity without compromise',
    body: 'Inclusive hiring isn\'t a box we tick — it\'s baked into our process. We challenge unconscious bias, broaden candidate slates, and advocate for equitable workplaces.',
  },
  {
    title: 'Accountability at every step',
    body: 'We own our outcomes. If a placement isn\'t working, we engage. We don\'t disappear after the offer letter — we\'re partners for the long term.',
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="pt-36 pb-20"
        style={{ background: 'linear-gradient(135deg, #0F2B50 0%, #1A3A6B 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest mb-4 block" style={{ color: 'var(--orange)' }}>
            About myhr
          </span>
          <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight mb-6 max-w-3xl">
            15 years of putting people first.
          </h1>
          <p className="text-xl text-white/70 max-w-2xl">
            myhr was founded on a simple belief: recruitment done with genuine care for people
            produces better outcomes for everyone. Clients, candidates, and the communities they work in.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest mb-3 block" style={{ color: 'var(--orange)' }}>
              Our Story
            </span>
            <h2 className="text-4xl font-black mb-6" style={{ color: 'var(--navy)' }}>
              Born from a frustration with transactional recruitment.
            </h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--text-mid)' }}>
              <p>
                myhr was founded in 2010 by Sarah Mitchell, following 10 years working inside large
                recruitment conglomerates where the pressure to fill roles fast consistently
                undermined the quality of outcomes for candidates and clients alike.
              </p>
              <p>
                Sarah set out to build something different — a specialist agency where every
                consultant had genuine expertise in their field, every candidate was treated with
                dignity, and every placement was backed by honest advice rather than commission
                incentives.
              </p>
              <p>
                Today myhr employs 45 specialist consultants across 8 divisions, and has proudly
                placed over 4,200 professionals with organisations ranging from ASX-listed enterprises
                to purpose-driven start-ups.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '2010', label: 'Founded' },
              { value: '45+', label: 'Specialist consultants' },
              { value: '4,200+', label: 'Placements made' },
              { value: '98%', label: 'Client retention rate' },
            ].map((item, i) => (
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
                  {i + 1}
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

      {/* Team */}
      <section id="team" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest mb-3 block" style={{ color: 'var(--orange)' }}>
              Meet the Team
            </span>
            <h2 className="text-4xl font-black" style={{ color: 'var(--navy)' }}>
              The people behind your next hire.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <div
                key={i}
                className="rounded-2xl p-7 flex flex-col"
                style={{ backgroundColor: 'var(--light-bg)' }}
              >
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-white font-black text-lg flex-shrink-0"
                    style={{ backgroundColor: member.color }}
                  >
                    {member.initials}
                  </div>
                  <div>
                    <div className="font-bold text-base" style={{ color: 'var(--navy)' }}>
                      {member.name}
                    </div>
                    <div className="text-xs font-semibold" style={{ color: 'var(--orange)' }}>
                      {member.role}
                    </div>
                  </div>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-mid)' }}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Acknowledgement */}
      <section className="py-10" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-mid)' }}>
            myhr acknowledges the Traditional Custodians of Country throughout Australia and their
            connections to land, sea and community. We pay our respect to their Elders past and
            present and extend that respect to all Aboriginal and Torres Strait Islander peoples.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: 'var(--navy)' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Ready to work with us?</h2>
          <p className="text-white/65 mb-8">
            Whether you&apos;re hiring or job seeking, we&apos;d love to hear from you.
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold border-2 text-white transition-all hover:bg-white hover:text-navy"
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
