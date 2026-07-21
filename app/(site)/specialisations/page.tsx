import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Specialisations | TalentPath Management Services',
  description:
    'Deep specialist recruitment expertise across Automobile, EV, BFSI, Oil & Gas, FMCG, Pharmaceutical, Retail, IT & Telecom and Research — TalentPath\'s 10 industry verticals.',
};

const divisions = [
  {
    id: 'auto',
    title: 'Automobile & Automotive',
    description:
      'From plant leadership to R&D, we place the talent that keeps India\'s automotive manufacturing engine running — across OEMs, Tier-1s and component makers.',
    roles: ['Plant Head', 'Quality Manager', 'R&D Engineer', 'Supply Chain Lead', 'Production Manager', 'Manufacturing Excellence', 'Sales & Dealer Development'],
    color: '#004bb2',
  },
  {
    id: 'ev',
    title: 'EV Hiring',
    description:
      'Electric mobility is being built by people who didn\'t exist in this industry five years ago. We specialise in sourcing the battery, powertrain and charging-infrastructure talent this shift demands.',
    roles: ['Battery Systems Engineer', 'EV Powertrain Lead', 'Charging Infra Manager', 'Cell & Battery Supply Chain', 'BMS Software Engineer', 'EV Product Manager', 'Homologation & Compliance'],
    color: '#0e9f6e',
  },
  {
    id: 'bfsi',
    title: 'Banking & Financial Services',
    description:
      'Regulatory pressure, digital disruption and fierce competition for talent — we help BFSI organisations hire leaders and specialists who can operate under all three.',
    roles: ['CFO', 'Risk Manager', 'Credit Analyst', 'Investment Banker', 'Relationship Manager', 'Compliance Officer', 'Treasury Head'],
    color: '#1a63d4',
  },
  {
    id: 'oil',
    title: 'Oil, Gas & EPC / Ceramics',
    description:
      'Large-scale projects need leaders who can manage cost, safety and timeline simultaneously. We place the project and engineering talent behind India\'s energy and infrastructure build-out.',
    roles: ['Project Director', 'HSE Manager', 'Process Engineer', 'Procurement Lead', 'Construction Manager', 'Piping Engineer', 'Commissioning Lead'],
    color: '#de840f',
  },
  {
    id: 'fmcg',
    title: 'FMCG & Consumer Durables',
    description:
      'Category winners are built by people, not just products. We place the brand, sales and supply chain leaders who drive share in India\'s most competitive consumer markets.',
    roles: ['Brand Manager', 'Sales Director', 'Category Head', 'Supply Chain', 'Trade Marketing Manager', 'Key Account Manager', 'Demand Planning'],
    color: '#004bb2',
  },
  {
    id: 'pharma',
    title: 'Pharmaceutical & Healthcare',
    description:
      'From regulatory affairs to clinical research, pharma hiring demands precision — a single wrong hire can delay a launch or an approval. We understand the stakes.',
    roles: ['Medical Director', 'Regulatory Affairs', 'Clinical Research', 'QA Manager', 'Plant Head (API/Formulations)', 'Medical Science Liaison', 'Pharmacovigilance'],
    color: '#1a63d4',
  },
  {
    id: 'retail',
    title: 'Retail & Textile',
    description:
      'Retail talent has to understand both the shop floor and the balance sheet. We place operators and merchandisers who move fast and read numbers just as fast.',
    roles: ['Store Operations', 'Buying & Merchandising', 'Visual Merchandiser', 'VM Head', 'Category Manager', 'E-commerce Lead', 'Franchise Operations'],
    color: '#de840f',
  },
  {
    id: 'it',
    title: 'IT & Telecom',
    description:
      'Technology hiring moves fast and candidates have options. Our consultants understand the stack well enough to assess it — and move quickly enough to close it.',
    roles: ['Software Engineer', 'Product Manager', 'CTO', 'Data Scientist', 'DevOps / Cloud Engineer', 'Network Engineer', 'Cybersecurity Lead'],
    color: '#004bb2',
  },
  {
    id: 'research',
    title: 'Research, Analytics & Consulting',
    description:
      'We place the analysts and consultants who turn data into decisions — for organisations that treat insight as a competitive advantage, not a reporting exercise.',
    roles: ['Data Analyst', 'Research Lead', 'Strategy Consultant', 'BI Manager', 'Market Research Manager', 'Data Engineer', 'Insights & Analytics Head'],
    color: '#1a63d4',
  },
  {
    id: 'other',
    title: 'Other Industries',
    description:
      'Great hiring judgement travels across sectors. Where a role sits outside our nine core verticals, our consultants still bring the same rigour and network depth.',
    roles: ['Cross-sector leadership', 'Functional specialists', 'Niche domain experts'],
    color: '#de840f',
  },
];

export default function SpecialisationsPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="pt-24 pb-10 sm:pt-36 sm:pb-20"
        style={{ background: 'linear-gradient(135deg, #0F2B50 0%, #1A3A6B 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest mb-4 block" style={{ color: 'var(--orange)' }}>
            Specialisations
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4 sm:mb-6 max-w-3xl">
            Ten divisions. One standard of excellence.
          </h1>
          <p className="text-base sm:text-xl text-white/70 max-w-2xl">
            Our consultants are genuine specialists — they know your market, your competition, and the
            talent hiding in plain sight.
          </p>
        </div>
      </section>

      {/* Divisions */}
      <section className="py-12 sm:py-24 bg-white">
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
                <div className="p-5 sm:p-8 lg:p-10" style={{ backgroundColor: division.color }}>
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
                <div className="lg:col-span-2 p-5 sm:p-8 lg:p-10" style={{ backgroundColor: 'var(--light-bg)' }}>
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
