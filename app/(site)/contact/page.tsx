import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | myhr Recruitment',
  description:
    'Get in touch with myhr — whether you\'re looking to hire top talent or find your next role, our specialist consultants are ready to help.',
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="pt-36 pb-20"
        style={{ background: 'linear-gradient(135deg, #0F2B50 0%, #1A3A6B 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest mb-4 block" style={{ color: 'var(--orange)' }}>
            Get in Touch
          </span>
          <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight mb-4 max-w-2xl">
            Let&apos;s start a conversation.
          </h1>
          <p className="text-xl text-white/70 max-w-xl">
            No automated responses. A real consultant will reply within one business day.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <h2 className="text-2xl font-black mb-8" style={{ color: 'var(--navy)' }}>
              Send us a message
            </h2>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--navy)' }}>
                    First name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all focus:border-orange"
                    style={{ borderColor: 'var(--border)' }}
                    placeholder="Sarah"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--navy)' }}>
                    Last name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all focus:border-orange"
                    style={{ borderColor: 'var(--border)' }}
                    placeholder="Johnson"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--navy)' }}>
                  Email address *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all focus:border-orange"
                  style={{ borderColor: 'var(--border)' }}
                  placeholder="sarah@company.com.au"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--navy)' }}>
                  Phone number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all focus:border-orange"
                  style={{ borderColor: 'var(--border)' }}
                  placeholder="+61 4XX XXX XXX"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--navy)' }}>
                  I am a... *
                </label>
                <select
                  className="w-full px-4 py-3 rounded-xl border text-sm outline-none"
                  style={{ borderColor: 'var(--border)' }}
                >
                  <option value="">Please select</option>
                  <option>Employer / Hiring manager</option>
                  <option>Job seeker / Candidate</option>
                  <option>Contractor / Temp worker</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--navy)' }}>
                  Specialisation of interest
                </label>
                <select
                  className="w-full px-4 py-3 rounded-xl border text-sm outline-none"
                  style={{ borderColor: 'var(--border)' }}
                >
                  <option value="">Select a division</option>
                  <option>Accounting & Finance</option>
                  <option>Technology</option>
                  <option>Sales</option>
                  <option>Marketing & Digital</option>
                  <option>Human Resources</option>
                  <option>Customer Experience</option>
                  <option>Business Services</option>
                  <option>Projects & Change</option>
                  <option>Executive Search</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--navy)' }}>
                  Message *
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all focus:border-orange resize-none"
                  style={{ borderColor: 'var(--border)' }}
                  placeholder="Tell us what you're looking for..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full font-bold text-white text-sm transition-all hover:opacity-90"
                style={{ backgroundColor: 'var(--orange)' }}
              >
                Send message
              </button>

              <p className="text-xs text-center" style={{ color: 'var(--text-light)' }}>
                By submitting this form you agree to our Privacy Policy. We will not share your details
                with third parties.
              </p>
            </form>
          </div>

          {/* Info panel */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-2xl font-black mb-6" style={{ color: 'var(--navy)' }}>
                Our offices
              </h2>
              <div className="space-y-6">
                {[
                  {
                    city: 'Sydney (HQ)',
                    address: 'Level 18, 201 Kent Street\nSydney NSW 2000',
                    phone: '+61 2 8XXX XXXX',
                  },
                  {
                    city: 'Melbourne',
                    address: 'Level 9, 500 Collins Street\nMelbourne VIC 3000',
                    phone: '+61 3 9XXX XXXX',
                  },
                  {
                    city: 'Brisbane',
                    address: 'Level 14, 1 Eagle Street\nBrisbane QLD 4000',
                    phone: '+61 7 3XXX XXXX',
                  },
                ].map((office) => (
                  <div
                    key={office.city}
                    className="p-6 rounded-2xl"
                    style={{ backgroundColor: 'var(--light-bg)' }}
                  >
                    <h3 className="font-bold mb-2" style={{ color: 'var(--navy)' }}>
                      {office.city}
                    </h3>
                    <p className="text-sm mb-1 whitespace-pre-line" style={{ color: 'var(--text-mid)' }}>
                      {office.address}
                    </p>
                    <p className="text-sm font-semibold" style={{ color: 'var(--orange)' }}>
                      {office.phone}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="rounded-2xl p-7"
              style={{ backgroundColor: 'var(--navy)', color: 'white' }}
            >
              <h3 className="font-bold text-lg mb-3">Need someone urgently?</h3>
              <p className="text-white/65 text-sm mb-5">
                For urgent staffing requests, call our dedicated client line and we&apos;ll have a
                consultant available within the hour.
              </p>
              <a
                href="tel:+61280000000"
                className="inline-flex items-center gap-2 font-bold text-sm px-5 py-2.5 rounded-full transition-all hover:opacity-90"
                style={{ backgroundColor: 'var(--orange)' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                1800 MYHR 00
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
