const pillars = [
  {
    number: '01',
    title: 'We don\'t fill roles — we change careers.',
    body: 'Every candidate we work with receives the same care and attention as our most valued client. Real relationships, honest advice, long-term thinking.',
  },
  {
    number: '02',
    title: 'Authentic expertise, not just a database.',
    body: 'Our consultants are genuine specialists. They\'ve worked in the industries they recruit for — meaning faster shortlists and better cultural fit.',
  },
  {
    number: '03',
    title: 'Long-term partnerships, not one-off transactions.',
    body: 'We measure our success by yours. Whether it\'s 3 months or 3 years later, we\'re still here to support your hiring journey.',
  },
  {
    number: '04',
    title: 'Inclusive hiring is non-negotiable.',
    body: 'We actively champion diversity at every step — from job design to final offer — building teams that reflect the world we live in.',
  },
];

export default function BrandPromise() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: 'var(--navy)' }}>
      {/* Decorative background */}
      <div
        className="absolute right-0 top-0 w-1/2 h-full opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 70% 50%, white 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <span
              className="text-xs font-bold uppercase tracking-widest mb-3 block"
              style={{ color: 'var(--orange)' }}
            >
              Our Promise
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
              What sets myhr apart.
            </h2>
          </div>
          <div className="lg:pt-10">
            <p className="text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
              In a world of algorithmic matching and bulk applications, we bring back what
              recruitment has always been about — human connection and genuine care.
            </p>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.number} className="flex flex-col">
              <span
                className="text-5xl font-black mb-4 leading-none"
                style={{ color: 'var(--orange)', opacity: 0.5 }}
              >
                {pillar.number}
              </span>
              <h3 className="text-base font-bold text-white mb-3 leading-snug">
                {pillar.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
