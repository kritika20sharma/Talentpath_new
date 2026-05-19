'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (email) setSubmitted(true);
  }

  return (
    <section className="py-20" style={{ backgroundColor: 'var(--navy)' }}>
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <span
          className="text-xs font-bold uppercase tracking-widest mb-3 block"
          style={{ color: 'var(--orange)' }}
        >
          Stay Informed
        </span>
        <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
          Connecting Talent,
          <br />
          <span style={{ color: 'var(--orange)' }}>Creating Futures.</span>
        </h2>
        <p className="text-base mb-10" style={{ color: 'rgba(255,255,255,0.65)' }}>
          Get hiring insights, salary benchmarks and industry trends from TalentPath experts —
          delivered to your inbox. Unsubscribe any time.
        </p>

        {submitted ? (
          <div
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold"
            style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
          >
            <svg className="w-5 h-5" style={{ color: 'var(--orange)' }} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            You&apos;re on the list — check your inbox soon!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your work email address"
              className="flex-1 px-5 py-3.5 rounded-full text-sm bg-white/10 border border-white/20 text-white placeholder-white/40 outline-none focus:border-orange focus:bg-white/15 transition-all"
            />
            <button
              type="submit"
              className="px-6 py-3.5 rounded-full text-sm font-bold text-white transition-all hover:opacity-90 hover:shadow-lg flex-shrink-0"
              style={{ backgroundColor: 'var(--orange)' }}
            >
              Send me the guide
            </button>
          </form>
        )}

        <p className="text-xs mt-4" style={{ color: 'rgba(255,255,255,0.35)' }}>
          By subscribing you agree to our Privacy Policy. We never share your data.
        </p>
      </div>
    </section>
  );
}
