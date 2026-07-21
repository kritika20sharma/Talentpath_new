import Link from 'next/link';

const services = [
  { label: 'Lateral Hiring', href: '/what-we-do#lateral' },
  { label: 'Executive Search', href: '/what-we-do#executive' },
  { label: 'Managed Recruitment (RPO)', href: '/what-we-do#rpo' },
  { label: 'Green Field Hiring', href: '/what-we-do#greenfield' },
  { label: 'RPO Hiring', href: '/what-we-do#rpo-hiring' },
  { label: 'Gender Diversification', href: '/what-we-do#gender-diversification' },
];

const industries = [
  { label: 'IT & Telecom', href: '/specialisations#it' },
  { label: 'Banking & Financial Services', href: '/specialisations#bfsi' },
  { label: 'Pharmaceutical & Healthcare', href: '/specialisations#pharma' },
  { label: 'FMCG & Consumer Durables', href: '/specialisations#fmcg' },
  { label: 'Automobile & Automotive', href: '/specialisations#auto' },
  { label: 'EV Hiring', href: '/specialisations#ev' },
  { label: 'Oil, Gas & EPC', href: '/specialisations#oil' },
  { label: 'Research & Analytics', href: '/specialisations#research' },
  { label: 'Retail & Textile', href: '/specialisations#retail' },
];

const company = [
  { label: 'About Us', href: '/about' },
  { label: 'Insights', href: '/insights' },
  { label: 'Jobs', href: '/jobs' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--navy)', color: 'white' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-10 lg:mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-1">
              <span className="text-3xl font-black tracking-tight text-white">Talent</span>
              <span className="text-3xl font-black tracking-tight" style={{ color: 'var(--orange)' }}>Path</span>
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: 'var(--orange)' }}>
              Unlock Potential, Empower People.
            </p>
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#A0AEBF' }}>
              A global management consulting organisation specialising in Lateral Hiring, Executive Search
              and Managed Recruitment Services.
            </p>
            {/* Contact */}
            <div className="space-y-2 text-sm mb-6" style={{ color: '#A0AEBF' }}>
              <p>📍 302, Procapitus Business Park,<br />Sector 63, Noida, UP 201301</p>
              <p>📞 9654902143 / 7428120251</p>
              <p>✉️ career@talentpath.co.in</p>
            </div>
            <div className="flex gap-3">
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:opacity-80" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              <a href="https://www.facebook.com/talentpathsolutions" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:opacity-80" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 5.022 3.657 9.184 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.877h2.773l-.443 2.91h-2.33V22c4.78-.756 8.437-4.918 8.437-9.94z" /></svg>
              </a>
              <a href="https://www.instagram.com/talentpath_management/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:opacity-80" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.332.014 7.052.072 2.695.272.273 2.69.073 7.052.014 8.332 0 8.741 0 12s.014 3.668.072 4.948c.2 4.358 2.618 6.78 6.98 6.98C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948s-.014-3.668-.072-4.948C23.73 2.7 21.31.273 16.951.073 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-5" style={{ color: 'var(--orange)' }}>Services</h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm transition-colors hover:text-white" style={{ color: '#A0AEBF' }}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-5" style={{ color: 'var(--orange)' }}>Industries</h3>
            <ul className="space-y-3">
              {industries.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm transition-colors hover:text-white" style={{ color: '#A0AEBF' }}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-5" style={{ color: 'var(--orange)' }}>Company</h3>
            <ul className="space-y-3 mb-8">
              {company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm transition-colors hover:text-white" style={{ color: '#A0AEBF' }}>{item.label}</Link>
                </li>
              ))}
            </ul>
            <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}>
              <p className="text-xs font-semibold text-white mb-1">WhatsApp Us</p>
              <a href="https://wa.me/918076519001" target="_blank" rel="noopener noreferrer" className="text-sm font-bold" style={{ color: 'var(--orange)' }}>+91 8076519001</a>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
          <p className="text-xs" style={{ color: '#A0AEBF' }}>
            © {new Date().getFullYear()} TalentPath Management Services Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs transition-colors hover:text-white" style={{ color: '#A0AEBF' }}>Privacy Policy</Link>
            <Link href="/terms" className="text-xs transition-colors hover:text-white" style={{ color: '#A0AEBF' }}>Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
