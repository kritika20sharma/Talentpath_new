import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Specialisations | myhr Recruitment',
  description:
    'Deep specialist recruitment expertise across Accounting & Finance, Technology, Sales, Marketing, HR, Customer Experience, Business Services and Projects & Change.',
};

const divisions = [
  {
    id: 'accounting',
    title: 'Accounting & Finance',
    description:
      'From bookkeepers to CFOs, we understand the technical depth, commercial acumen and leadership qualities required at every level of finance.',
    roles: ['CFO / Finance Director', 'Financial Controller', 'Management Accountant', 'Senior Analyst', 'Finance Business Partner', 'Bookkeeper / AP/AR', 'Treasury & Tax'],
    color: 'var(--navy)',
  },
  {
    id: 'technology',
    title: 'Technology',
    description:
      'Our tech consultants are former practitioners — they understand full-stack from the back-end to the boardroom, and can assess cultural fit alongside technical skill.',
    roles: ['Software Engineer (all stacks)', 'Data Scientist / Engineer', 'DevOps / Cloud', 'Product Manager', 'UX / UI Designer', 'CTO / VP Engineering', 'Cybersecurity'],
    color: '#1A3A6B',
  },
  {
    id: 'sales',
    title: 'Sales',
    description:
      'Sales performance starts with hiring the right character, not just the right track record. We go deeper than the CV to find commercial talent that sticks.',
    roles: ['BDM / Account Executive', 'Account Manager', 'Sales Director', 'Inside Sales', 'Channel & Partnerships', 'Pre-Sales / Solutions', 'VP Sales'],
    color: 'var(--orange)',
  },
  {
    id: 'marketing',
    title: 'Marketing & Digital',
    description:
      'Brand builders, performance marketers, content strategists and CMOs — we place the talent driving Australia\'s most recognised marketing functions.',
    roles: ['CMO / Marketing Director', 'Brand Manager', 'Digital & Performance', 'Content & SEO', 'CRM & Automation', 'PR & Communications', 'Creative Director'],
    color: 'var(--navy)',
  },
  {
    id: 'hr',
    title: 'Human Resources',
    description:
      'Who better to place HR professionals than a people-first recruiter? We genuinely understand the craft of HR and what great looks like at every level.',
    roles: ['CHRO / HR Director', 'HR Business Partner', 'L&D Manager', 'Talent Acquisition Lead', 'Reward & Remuneration', 'WHS / Safety', 'ER Specialist'],
    color: '#1A3A6B',
  },
  {
    id: 'cx',
    title: 'Customer Experience',
    description:
      'CX is where brands win or lose their customers. We place the leaders and specialists who make every touchpoint count.',
    roles: ['CX Director', 'Customer Success Manager', 'Contact Centre Manager', 'Support Lead', 'Voice of Customer', 'Service Design', 'Retention Specialist'],
    color: 'var(--orange)',
  },
  {
    id: 'business',
    title: 'Business Services',
    description:
      'The operational backbone of every organisation — we place the professionals who keep businesses running smoothly and efficiently.',
    roles: ['EA / PA / Executive Assistant', 'Office Manager', 'Operations Manager', 'Legal Secretary', 'Reception & Administration', 'Facilities', 'Procurement'],
    color: 'var(--navy)',
  },
  {
    id: 'projects',
    title: 'Projects & Change',
    description:
      'Transformation initiatives live or die by the quality of their leadership. We place project and change professionals who deliver.',
    roles: ['Programme / Project Manager', 'Change Manager', 'Business Analyst', 'PMO Lead', 'Agile Coach / Scrum Master', 'Process Improvement', 'ERP Implementation'],
    color: '#1A3A6B',
  },
];

export default function SpecialisationsPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="pt-36 pb-20"
        style={{ background: 'linear-gradient(135deg, #0F2B50 0%, #1A3A6B 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest mb-4 block" style={{ color: 'var(--orange)' }}>
            Specialisations
          </span>
          <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight mb-6 max-w-3xl">
            Eight divisions. One standard of excellence.
          </h1>
          <p className="text-xl text-white/70 max-w-2xl">
            Our consultants are genuine specialists — they know your market, your competition, and the
            talent hiding in plain sight.
          </p>
        </div>
      </section>

      {/* Divisions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-6">
          {divisions.map((division) => (
            <div
              key={division.id}
              id={division.id}
              className="rounded-2xl overflow-hidden border"
              style={{ borderColor: 'var(--border)' }}
            >
              <div className="grid lg:grid-cols-3">
                {/* Left: colour panel */}
                <div className="p-8 lg:p-10" style={{ backgroundColor: division.color }}>
                  <h2 className="text-2xl font-black text-white mb-3">{division.title}</h2>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
                    {division.description}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white/80 hover:text-white transition-all hover:gap-3"
                  >
                    Speak to a consultant
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>

                {/* Right: roles */}
                <div className="lg:col-span-2 p-8 lg:p-10" style={{ backgroundColor: 'var(--light-bg)' }}>
                  <h3 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: 'var(--text-mid)' }}>
                    Roles we place
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {division.roles.map((role) => (
                      <span
                        key={role}
                        className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white border"
                        style={{ borderColor: 'var(--border)', color: 'var(--navy)' }}
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-4">
                    <Link
                      href="/jobs"
                      className="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3"
                      style={{ color: 'var(--orange)' }}
                    >
                      View current {division.title} roles
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
