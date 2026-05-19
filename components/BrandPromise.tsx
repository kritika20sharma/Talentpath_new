import FadeUp from './FadeUp';

const pillars = [
  {
    number: '01',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    ),
    title: 'Trustworthy',
    body: 'Every engagement is built on transparency and accountability. We say what we mean, do what we promise, and stand behind every placement we make.',
  },
  {
    number: '02',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    ),
    title: 'Focused',
    body: 'We stay laser-focused on your brief — no shortcut shortlists, no volume-over-quality. Each search is purpose-built around your specific role, culture and goals.',
  },
  {
    number: '03',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
        d="M13 10V3L4 14h7v7l9-11h-7z" />
    ),
    title: 'Empowering',
    body: 'We empower both sides of the hiring equation — giving organisations the talent to grow, and candidates the career opportunities to thrive.',
  },
  {
    number: '04',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
    title: 'Best TAT',
    body: 'Speed is our competitive edge. Our structured search process delivers quality shortlists faster than the market standard — without cutting corners on due diligence.',
  },
];

export default function BrandPromise() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: 'var(--navy)' }}>
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, white 0%, transparent 70%)' }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest mb-3 block" style={{ color: 'var(--orange)' }}>
              Why TalentPath
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
              What sets us apart.
            </h2>
          </div>
          <div className="lg:pt-12">
            <p className="text-lg leading-relaxed font-medium" style={{ color: 'rgba(255,255,255,0.65)' }}>
              We help organisations tackle their most critical talent challenges — with innovation,
              commitment, and genuine accountability at every step.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <FadeUp key={pillar.number} delay={i * 0.1}>
            <div className="rounded-2xl p-6 flex flex-col h-full" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}>
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: 'var(--orange)' }}>
                <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24">
                  {pillar.icon}
                </svg>
              </div>
              <span className="text-4xl font-black mb-2 leading-none" style={{ color: 'rgba(255,255,255,0.1)' }}>
                {pillar.number}
              </span>
              <h3 className="text-base font-bold text-white mb-3">{pillar.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                {pillar.body}
              </p>
            </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
