const testimonials = [
  {
    quote:
      'TalentPath found us a VP of Sales within three weeks — genuinely the right cultural fit, not just technically qualified. They understood our growth stage and delivered candidates we couldn\'t have reached on our own.',
    name: 'Rajesh Khanna',
    role: 'CEO, Vantage Retail Group',
    type: 'client',
    initials: 'RK',
    color: '#004bb2',
  },
  {
    quote:
      'After months of applying through portals with no response, TalentPath placed me in my dream role in 12 days. They understood exactly what I was looking for — not just the CTC.',
    name: 'Priya Nair',
    role: 'Senior Data Engineer, Bengaluru',
    type: 'candidate',
    initials: 'PN',
    color: '#de840f',
  },
  {
    quote:
      'We\'ve worked with many agencies across NCR. TalentPath is in a different league — proactive, honest, and they actually understand the BFSI space. Our go-to partner for leadership hires.',
    name: 'Ananya Mehta',
    role: 'Head of HR, Apex Financial Services',
    type: 'client',
    initials: 'AM',
    color: '#0F2B50',
  },
  {
    quote:
      'The consultant stayed in touch from first call through my probation. They genuinely cared about my career, not just filling a vacancy. That level of attention is rare in recruitment.',
    name: 'Suresh Iyer',
    role: 'Plant Manager, Auto OEM',
    type: 'candidate',
    initials: 'SI',
    color: '#004bb2',
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24" style={{ backgroundColor: 'white' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span
            className="text-xs font-bold uppercase tracking-widest mb-3 block"
            style={{ color: 'var(--orange)' }}
          >
            What People Say
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black" style={{ color: 'var(--navy)' }}>
            Stories that speak
            <br />for themselves.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 sm:p-8 flex flex-col"
              style={{ backgroundColor: 'var(--light-bg)' }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} className="w-4 h-4 fill-current" style={{ color: 'var(--orange)' }} viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote
                className="text-base leading-relaxed mb-6 flex-1 italic"
                style={{ color: 'var(--text-dark)' }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 flex-wrap">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-sm truncate" style={{ color: 'var(--navy)' }}>
                    {t.name}
                  </div>
                  <div className="text-xs truncate" style={{ color: 'var(--text-light)' }}>
                    {t.role}
                  </div>
                </div>
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full capitalize shrink-0"
                  style={{
                    backgroundColor: t.type === 'client' ? 'rgba(15,43,80,0.1)' : 'rgba(232,96,28,0.1)',
                    color: t.type === 'client' ? 'var(--navy)' : 'var(--orange)',
                  }}
                >
                  {t.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
