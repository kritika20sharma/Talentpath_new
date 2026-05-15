import Link from 'next/link';

const industries = [
  { id: 'auto', title: 'Automobile & Automotive', roles: ['Plant Head', 'Quality Manager', 'R&D Engineer', 'Supply Chain Lead'], color: '#004bb2' },
  { id: 'bfsi', title: 'Banking & Financial Services', roles: ['CFO', 'Risk Manager', 'Credit Analyst', 'Investment Banker'], color: '#1a63d4' },
  { id: 'oil', title: 'Oil, Gas & EPC / Ceramics', roles: ['Project Director', 'HSE Manager', 'Process Engineer', 'Procurement Lead'], color: '#de840f' },
  { id: 'fmcg', title: 'FMCG & Consumer Durables', roles: ['Brand Manager', 'Sales Director', 'Category Head', 'Supply Chain'], color: '#004bb2' },
  { id: 'pharma', title: 'Pharmaceutical & Healthcare', roles: ['Medical Director', 'Regulatory Affairs', 'Clinical Research', 'QA Manager'], color: '#1a63d4' },
  { id: 'retail', title: 'Retail & Textile', roles: ['Store Operations', 'Buying & Merchandising', 'Visual Merchandiser', 'VM Head'], color: '#de840f' },
  { id: 'it', title: 'IT & Telecom', roles: ['Software Engineer', 'Product Manager', 'CTO', 'Data Scientist'], color: '#004bb2' },
  { id: 'research', title: 'Research, Analytics & Consulting', roles: ['Data Analyst', 'Research Lead', 'Strategy Consultant', 'BI Manager'], color: '#1a63d4' },
  { id: 'other', title: 'Other Industries', roles: ['Cross-sector leadership', 'Functional specialists', 'Niche domain experts'], color: '#de840f' },
];

export default function Specialisations() {
  return (
    <section className="py-24" style={{ backgroundColor: 'var(--light-bg)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest mb-3 block" style={{ color: 'var(--orange)' }}>
            Industries We Serve
          </span>
          <h2 className="text-4xl lg:text-5xl font-black mb-5" style={{ color: 'var(--navy)' }}>
            Deep expertise across
            <br />9 specialist verticals.
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-mid)' }}>
            Our consultants are embedded in their sectors — meaning faster shortlists, sharper
            candidate assessment, and talent that truly fits your context.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((ind) => (
            <Link
              key={ind.id}
              href={`/specialisations#${ind.id}`}
              className="group relative rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ backgroundColor: ind.color }}
            >
              <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full opacity-10 group-hover:opacity-20 transition-opacity" style={{ backgroundColor: 'white' }} />
              <h3 className="text-base font-bold text-white mb-3">{ind.title}</h3>
              <ul className="space-y-1 mb-4">
                {ind.roles.map((role) => (
                  <li key={role} className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.65)' }}>{role}</li>
                ))}
              </ul>
              <div className="flex items-center gap-1 text-xs font-bold text-white/80 group-hover:text-white transition-all group-hover:gap-2">
                Explore roles
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
