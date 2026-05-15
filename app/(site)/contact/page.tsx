import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | TalentPath',
  description: 'Get in touch with TalentPath. Office in Sector 63, Noida. Call 9654902143 or email career@talentpath.co.in. WhatsApp: 8076519001.',
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-36 pb-20" style={{ background: 'linear-gradient(135deg, #004bb2 0%, #1a63d4 100%)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest mb-4 block" style={{ color: 'var(--orange)' }}>Get in Touch</span>
          <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight mb-4 max-w-2xl">
            Let&apos;s start a conversation.
          </h1>
          <p className="text-xl text-white/70 max-w-xl">
            Our team is available 24/7. Reach out and we&apos;ll respond within 1–2 business days.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <h2 className="text-2xl font-black mb-8" style={{ color: 'var(--navy)' }}>Send us a message</h2>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--navy)' }}>First name *</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-xl border text-sm outline-none" style={{ borderColor: 'var(--border)' }} placeholder="Rahul" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--navy)' }}>Last name *</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-xl border text-sm outline-none" style={{ borderColor: 'var(--border)' }} placeholder="Sharma" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--navy)' }}>Email address *</label>
                <input type="email" required className="w-full px-4 py-3 rounded-xl border text-sm outline-none" style={{ borderColor: 'var(--border)' }} placeholder="rahul@company.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--navy)' }}>Subject *</label>
                <input type="text" required className="w-full px-4 py-3 rounded-xl border text-sm outline-none" style={{ borderColor: 'var(--border)' }} placeholder="e.g. Executive Search enquiry" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--navy)' }}>I am a... *</label>
                <select className="w-full px-4 py-3 rounded-xl border text-sm outline-none" style={{ borderColor: 'var(--border)' }}>
                  <option value="">Please select</option>
                  <option>Employer / Hiring manager</option>
                  <option>Active job seeker</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--navy)' }}>Attach CV</label>
                <input type="file" accept=".pdf,.doc,.docx" className="w-full px-4 py-3 rounded-xl border text-sm" style={{ borderColor: 'var(--border)' }} />
                <p className="text-xs mt-1" style={{ color: 'var(--text-light)' }}>PDF, DOC or DOCX. Max 5MB.</p>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--navy)' }}>Message *</label>
                <textarea required rows={4} className="w-full px-4 py-3 rounded-xl border text-sm outline-none resize-none" style={{ borderColor: 'var(--border)' }} placeholder="Tell us what you're looking for..." />
              </div>
              <button type="submit" className="w-full py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-all" style={{ backgroundColor: 'var(--orange)' }}>
                Send message
              </button>
              <p className="text-xs text-center" style={{ color: 'var(--text-light)' }}>
                Or email us at{' '}
                <a href="mailto:career@talentpath.co.in" className="font-semibold" style={{ color: 'var(--navy)' }}>career@talentpath.co.in</a>
              </p>
            </form>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-black" style={{ color: 'var(--navy)' }}>Our office</h2>

            <div className="rounded-2xl p-7" style={{ backgroundColor: 'var(--light-bg)' }}>
              <h3 className="font-bold mb-4" style={{ color: 'var(--navy)' }}>Noida — Head Office</h3>
              <div className="space-y-2 text-sm" style={{ color: 'var(--text-mid)' }}>
                <p className="leading-relaxed">Office No. 302, Procapitus Business Park,<br />D-247, 4A, D Block, Sector 63,<br />Noida, Uttar Pradesh 201301</p>
                <p><span className="font-semibold" style={{ color: 'var(--navy)' }}>Phone:</span> 9654902143 / 7428120251</p>
                <p><span className="font-semibold" style={{ color: 'var(--navy)' }}>Landline:</span> 0120-4088063</p>
                <p>
                  <span className="font-semibold" style={{ color: 'var(--navy)' }}>Email:</span>{' '}
                  <a href="mailto:career@talentpath.co.in" style={{ color: 'var(--orange)' }}>career@talentpath.co.in</a>
                </p>
                <p><span className="font-semibold" style={{ color: 'var(--navy)' }}>Hours:</span> Monday – Friday, 9:00am – 5:00pm</p>
              </div>
            </div>

            {/* WhatsApp */}
            <a href="https://wa.me/918076519001" target="_blank" rel="noopener noreferrer"
              className="rounded-2xl p-7 flex items-center gap-5 transition-all hover:shadow-lg"
              style={{ backgroundColor: '#25D366', color: 'white' }}>
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-lg">WhatsApp Us</p>
                <p className="text-white/80 text-sm">+91 8076519001 — quick response guaranteed</p>
              </div>
            </a>

            <div className="rounded-2xl p-7" style={{ backgroundColor: 'var(--navy)', color: 'white' }}>
              <h3 className="font-bold text-lg mb-2">Need urgent staffing?</h3>
              <p className="text-white/65 text-sm mb-4">Call us directly and a consultant will respond within the hour.</p>
              <a href="tel:+919654902143" className="inline-flex items-center gap-2 font-bold text-sm px-5 py-2.5 rounded-full hover:opacity-90 transition-all" style={{ backgroundColor: 'var(--orange)' }}>
                Call 9654902143
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
