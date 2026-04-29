import Link from 'next/link';

const specs = [
  {
    id: 'accounting',
    title: 'Accounting & Finance',
    roles: ['CFO', 'Financial Controller', 'Management Accountant', 'Bookkeeper'],
    color: '#1A3A6B',
  },
  {
    id: 'technology',
    title: 'Technology',
    roles: ['Software Engineer', 'Data Scientist', 'DevOps', 'Product Manager'],
    color: '#0F2B50',
  },
  {
    id: 'sales',
    title: 'Sales',
    roles: ['BDM', 'Account Manager', 'Sales Director', 'Inside Sales'],
    color: '#E8601C',
  },
  {
    id: 'marketing',
    title: 'Marketing & Digital',
    roles: ['CMO', 'Digital Strategist', 'Content Lead', 'Brand Manager'],
    color: '#1A3A6B',
  },
  {
    id: 'hr',
    title: 'Human Resources',
    roles: ['HR Director', 'L&D Manager', 'Talent Acquisition', 'HRBP'],
    color: '#0F2B50',
  },
  {
    id: 'cx',
    title: 'Customer Experience',
    roles: ['CX Manager', 'Customer Success', 'Support Lead', 'Contact Centre'],
    color: '#E8601C',
  },
  {
    id: 'business',
    title: 'Business Services',
    roles: ['EA / PA', 'Office Manager', 'Operations', 'Legal Secretary'],
    color: '#1A3A6B',
  },
  {
    id: 'projects',
    title: 'Projects & Change',
    roles: ['Project Manager', 'Change Manager', 'Business Analyst', 'PMO'],
    color: '#0F2B50',
  },
];

export default function Specialisations() {
  return (
    <section className="py-24" style={{ backgroundColor: 'var(--light-bg)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="text-xs font-bold uppercase tracking-widest mb-3 block"
            style={{ color: 'var(--orange)' }}
          >
            Our Specialisations
          </span>
          <h2 className="text-4xl lg:text-5xl font-black mb-5" style={{ color: 'var(--navy)' }}>
            Deep expertise across
            <br />8 specialist divisions.
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-mid)' }}>
            Our consultants live and breathe their markets — giving you access to insights, networks,
            and talent that generalist agencies simply can&apos;t reach.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {specs.map((spec) => (
            <Link
              key={spec.id}
              href={`/specialisations#${spec.id}`}
              className="group relative rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ backgroundColor: spec.color }}
            >
              {/* Decorative circle */}
              <div
                className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
                style={{ backgroundColor: 'white' }}
              />
              <h3 className="text-base font-bold text-white mb-3">{spec.title}</h3>
              <ul className="space-y-1">
                {spec.roles.map((role) => (
                  <li
                    key={role}
                    className="text-xs font-medium"
                    style={{ color: 'rgba(255,255,255,0.65)' }}
                  >
                    {role}
                  </li>
                ))}
              </ul>
              <div
                className="mt-5 flex items-center gap-1 text-xs font-bold text-white/80 group-hover:text-white transition-all group-hover:gap-2"
              >
                Explore roles
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
