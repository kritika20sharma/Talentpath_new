const pillars = [
  {
    number: '01',
    title: 'Industry-Specific Experts',
    body: 'Every consultant at TalentPath has deep domain expertise in the industry they recruit for — giving you access to insights, networks, and talent that generalists simply can\'t reach.',
  },
  {
    number: '02',
    title: 'Global Network, Local Insight',
    body: 'We serve private, public and social sector organisations across the world while maintaining the ground-level understanding of each local talent market we operate in.',
  },
  {
    number: '03',
    title: 'Best TAT — Every Time',
    body: 'Speed without quality is noise. Our structured search process is engineered to deliver a strong shortlist fast — without compromising on candidate fit or due diligence.',
  },
  {
    number: '04',
    title: 'Trusted Long-Term Partnerships',
    body: 'We don\'t disappear after the offer letter. TalentPath builds relationships that go beyond individual placements — becoming your always-on talent intelligence partner.',
  },
];

export default function BrandPromise() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: 'var(--navy)' }}>
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, white 0%, transparent 70%)' }} />
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
          <div className="lg:pt-10">
            <p className="text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
              We help global leaders tackle their organisation&apos;s most critical talent challenges — with
              innovation, commitment, and genuine accountability at every step.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.number} className="flex flex-col">
              <span className="text-5xl font-black mb-4 leading-none" style={{ color: 'var(--orange)', opacity: 0.5 }}>
                {pillar.number}
              </span>
              <h3 className="text-base font-bold text-white mb-3 leading-snug">{pillar.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{pillar.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
