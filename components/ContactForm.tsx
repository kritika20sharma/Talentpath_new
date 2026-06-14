'use client';

import { useState } from 'react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY'); // ← replace with your key from web3forms.com

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot spam protection */}
      <input type="checkbox" name="botcheck" className="hidden" />

      <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
        <div>
          <label className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--navy)' }}>First name *</label>
          <input name="first_name" type="text" required className="w-full px-4 py-3.5 rounded-xl border text-base sm:text-sm outline-none focus:border-blue-400 transition-colors" style={{ borderColor: 'var(--border)' }} placeholder="Rahul" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--navy)' }}>Last name *</label>
          <input name="last_name" type="text" required className="w-full px-4 py-3.5 rounded-xl border text-base sm:text-sm outline-none focus:border-blue-400 transition-colors" style={{ borderColor: 'var(--border)' }} placeholder="Sharma" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--navy)' }}>Email address *</label>
        <input name="email" type="email" required className="w-full px-4 py-3.5 rounded-xl border text-base sm:text-sm outline-none focus:border-blue-400 transition-colors" style={{ borderColor: 'var(--border)' }} placeholder="rahul@company.com" />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--navy)' }}>Phone</label>
        <input name="phone" type="tel" className="w-full px-4 py-3.5 rounded-xl border text-base sm:text-sm outline-none focus:border-blue-400 transition-colors" style={{ borderColor: 'var(--border)' }} placeholder="+91 98765 43210" />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--navy)' }}>Subject *</label>
        <input name="subject" type="text" required className="w-full px-4 py-3.5 rounded-xl border text-base sm:text-sm outline-none focus:border-blue-400 transition-colors" style={{ borderColor: 'var(--border)' }} placeholder="e.g. Executive Search enquiry" />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--navy)' }}>I am a... *</label>
        <select name="enquiry_type" required className="w-full px-4 py-3.5 rounded-xl border text-base sm:text-sm outline-none focus:border-blue-400 transition-colors" style={{ borderColor: 'var(--border)' }}>
          <option value="">Please select</option>
          <option>Employer / Hiring manager</option>
          <option>Active job seeker</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--navy)' }}>Attach CV</label>
        <input name="cv" type="file" accept=".pdf,.doc,.docx" className="w-full px-4 py-3 rounded-xl border text-sm" style={{ borderColor: 'var(--border)' }} />
        <p className="text-xs mt-1" style={{ color: 'var(--text-light)' }}>PDF, DOC or DOCX. Max 5MB.</p>
      </div>

      <div>
        <label className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--navy)' }}>Message *</label>
        <textarea name="message" required rows={4} className="w-full px-4 py-3.5 rounded-xl border text-base sm:text-sm outline-none resize-none focus:border-blue-400 transition-colors" style={{ borderColor: 'var(--border)' }} placeholder="Tell us what you're looking for..." />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full py-4 rounded-full font-bold text-white text-sm transition-all hover:opacity-90 disabled:opacity-60 min-h-[52px]"
        style={{ backgroundColor: 'var(--orange)' }}
      >
        {status === 'submitting' ? 'Sending…' : 'Send message'}
      </button>

      {status === 'success' && (
        <div className="rounded-xl p-4 text-sm font-semibold text-center" style={{ backgroundColor: '#ECFDF5', color: '#065F46' }}>
          Message sent! We&apos;ll get back to you within 1–2 business days.
        </div>
      )}

      {status === 'error' && (
        <div className="rounded-xl p-4 text-sm font-semibold text-center" style={{ backgroundColor: '#FEF2F2', color: '#991B1B' }}>
          Something went wrong. Please email us at career@talentpath.co.in
        </div>
      )}

      <p className="text-xs text-center" style={{ color: 'var(--text-light)' }}>
        Or email us at{' '}
        <a href="mailto:career@talentpath.co.in" className="font-semibold" style={{ color: 'var(--navy)' }}>career@talentpath.co.in</a>
      </p>
    </form>
  );
}
