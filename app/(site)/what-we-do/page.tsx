import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'What We Do | TalentPath Management Services',
  description:
    'TalentPath offers Lateral Hiring, Executive Search, Managed Recruitment (RPO), Green Field Hiring, RPO Hiring and Gender Diversification across 10 specialist industries in India.',
};

const services = [
  {
    id: 'lateral',
    number: '01',
    title: 'Lateral Hiring',
    tagline: 'The right person, not just the available one.',
    body: [
      'Targeted search for mid to senior professionals moving across industries and functions. We run comprehensive candidate searches across multiple channels — proactive headhunting, talent pools, referrals, and precision job advertising — to surface candidates who fit your role and your culture.',
      'Our consultants manage the entire process: briefing, search, shortlisting, interview coordination, reference checking, and offer management, so you stay focused on running your business.',
    ],
    features: [
      'Role scoping and job brief workshops',
      'Multi-channel candidate search',
      'Behavioural and values-based interviews',
      'Reference and background checking',
      'Offer management and onboarding support',
    ],
  },
  {
    id: 'executive',
    number: '02',
    title: 'Executive Search',
    tagline: 'Leadership that transforms organisations.',
    body: [
      'Senior appointments require a different approach. Our executive search practice combines research-led candidate mapping, discreet outreach, and deep market intelligence to identify leaders who aren\'t actively looking — but are absolutely right for your role.',
      'We partner with Boards, CEOs, and People leaders to ensure full role and organisation alignment before the first conversation.',
    ],
    features: [
      'Confidential search and candidate mapping',
      'C-suite and Board level placements',
      'Executive assessment and psychometric profiling',
      'Market intelligence and competitor analysis',
      'Retained and contingency engagement models',
    ],
  },
  {
    id: 'rpo',
    number: '03',
    title: 'Managed Recruitment (RPO)',
    tagline: 'A hiring engine, not just an agency.',
    body: [
      'End-to-end Recruitment Process Outsourcing — we embed within your organisation to manage the entire hiring lifecycle, from sourcing and screening to onboarding, as a seamless extension of your HR team.',
      'You get predictable cost-per-hire, consistent quality, and a dedicated team that lives inside your process — not a rotating cast of external recruiters.',
    ],
    features: [
      'Dedicated embedded recruiter pods',
      'Full-lifecycle process ownership',
      'ATS and workflow integration',
      'SLA-backed turnaround times',
      'Hiring analytics and reporting dashboards',
    ],
  },
  {
    id: 'greenfield',
    number: '04',
    title: 'Green Field Hiring',
    tagline: 'Building a workforce before the first brick is laid.',
    body: [
      'New plants, facilities and business units need a workforce built from zero — with no legacy team to lean on. We plan and execute complete build-outs, from site leadership down to shop-floor roles, phased against your commissioning timeline.',
      'We combine local labour-market mapping with our specialist industry networks to hire at speed without compromising on quality — critical when a delayed hire can delay a plant opening.',
    ],
    features: [
      'Workforce planning against commissioning timelines',
      'Leadership-to-shop-floor hiring in one engagement',
      'Local labour-market and wage benchmarking',
      'Phased, milestone-based delivery',
      'On-ground hiring drives and assessment days',
    ],
  },
  {
    id: 'rpo-hiring',
    number: '05',
    title: 'RPO Hiring',
    tagline: 'High-volume hiring, without a bigger TA team.',
    body: [
      'For organisations that need to hire fast and at scale — seasonal ramp-ups, new market entry, or aggressive growth targets — without permanently growing an internal talent acquisition function.',
      'We stand up dedicated recruiter pods sized to your volume, scaling up or down with demand, so you pay for hiring capacity only when you need it.',
    ],
    features: [
      'Elastic recruiter capacity, scaled to demand',
      'Structured screening and assessment at volume',
      'Digital sourcing and ATS-driven pipelines',
      'Weekly hiring velocity reporting',
      'Seamless wind-down when volume tapers',
    ],
  },
  {
    id: 'gender-diversification',
    number: '06',
    title: 'Gender Diversification',
    tagline: 'Expanding the funnel, not lowering the bar.',
    body: [
      'Targeted sourcing and outreach programs designed to help clients build genuinely balanced teams — reaching qualified women candidates who aren\'t showing up through standard channels.',
      'We work with hiring teams on inclusive job design and structured, bias-aware interview processes, so diversity hiring translates into diversity retention.',
    ],
    features: [
      'Targeted sourcing and community outreach',
      'Inclusive job description review',
      'Structured, bias-aware interview design',
      'Diversity hiring pipeline reporting',
      'Return-to-work and career-break hiring programs',
    ],
  },
];

export default function WhatWeDoPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="pt-24 pb-10 sm:pt-36 sm:pb-20"
        style={{ background: 'linear-gradient(135deg, #0F2B50 0%, #1A3A6B 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest mb-4 block" style={{ color: 'var(--orange)' }}>
            Our Services
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4 sm:mb-6 max-w-3xl">
            Recruitment built around your goals.
          </h1>
          <p className="text-base sm:text-xl text-white/70 max-w-2xl">
            Six flexible service models. One consistent promise: we find the right people, not just
            the available ones.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12 lg:space-y-20">
          {services.map((service, i) => (
            <div
              key={service.id}
              id={service.id}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-20 items-start ${i % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
            >
              {/* Text */}
              <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                <span
                  className="text-6xl font-black leading-none block mb-4"
                  style={{ color: 'var(--orange)', opacity: 0.2 }}
                >
                  {service.number}
                </span>
                <h2
                  className="text-3xl lg:text-4xl font-black mb-2 leading-tight"
                  style={{ color: 'var(--navy)' }}
                >
                  {service.title}
                </h2>
                <p className="text-lg font-semibold mb-6" style={{ color: 'var(--orange)' }}>
                  {service.tagline}
                </p>
                {service.body.map((para, p) => (
                  <p key={p} className="text-base leading-relaxed mb-4" style={{ color: 'var(--text-mid)' }}>
                    {para}
                  </p>
                ))}
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 mt-4 px-6 py-3 rounded-full text-sm font-bold text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: 'var(--orange)' }}
                >
                  Enquire about this service
                </Link>
              </div>

              {/* Features card */}
              <div
                className={`rounded-2xl p-6 sm:p-8 ${i % 2 === 1 ? 'lg:col-start-1' : ''}`}
                style={{ backgroundColor: 'var(--light-bg)' }}
              >
                <h3 className="text-sm font-bold uppercase tracking-widest mb-6" style={{ color: 'var(--navy)' }}>
                  What&apos;s included
                </h3>
                <ul className="space-y-4">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 shrink-0 mt-0.5"
                        style={{ color: 'var(--orange)' }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm" style={{ color: 'var(--text-dark)' }}>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-20" style={{ backgroundColor: 'var(--navy)' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">Not sure which service fits?</h2>
          <p className="text-white/65 mb-8">
            Tell us your challenge and we&apos;ll recommend the right approach — no commitment required.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: 'var(--orange)' }}
          >
            Talk to a consultant
          </Link>
        </div>
      </section>
    </main>
  );
}
