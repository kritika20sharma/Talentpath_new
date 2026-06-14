import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technology Stack | TalentPath Website',
  description: 'Technical overview of the tools and technologies used to build the TalentPath website.',
};

const stack = [
  {
    category: 'Framework & Runtime',
    color: '#004BB2',
    items: [
      {
        name: 'Next.js',
        version: '16.1.4',
        role: 'Full-stack React framework',
        detail: 'Powers all pages using the App Router. Handles server-side rendering, routing, API routes, image optimisation, and font loading out of the box.',
        url: 'nextjs.org',
      },
      {
        name: 'React',
        version: '19.2.3',
        role: 'UI component library',
        detail: 'Builds every interactive element on the site — forms, navbars, animations, carousels — as reusable components.',
        url: 'react.dev',
      },
      {
        name: 'TypeScript',
        version: '5.x',
        role: 'Type-safe JavaScript',
        detail: 'Catches bugs at compile time, improves code quality, and makes the codebase easier to maintain and extend.',
        url: 'typescriptlang.org',
      },
    ],
  },
  {
    category: 'Styling & Animation',
    color: '#DE840F',
    items: [
      {
        name: 'Tailwind CSS',
        version: '4.x',
        role: 'Utility-first CSS framework',
        detail: 'Handles all layout, spacing, typography, and responsive design. No custom CSS files needed — every style is written as utility classes directly in components.',
        url: 'tailwindcss.com',
      },
      {
        name: 'Framer Motion',
        version: '12.39.x',
        role: 'Animation library',
        detail: 'Powers all entrance animations, hover effects, and page transitions — including the hero fade-ins and card hover lifts.',
        url: 'motion.dev',
      },
      {
        name: 'Poppins',
        version: 'Google Fonts',
        role: 'Primary typeface',
        detail: 'Loaded via next/font/google with weights 400–900. Used for all headings, body text, and UI elements across the site.',
        url: 'fonts.google.com',
      },
    ],
  },
  {
    category: 'Content Management',
    color: '#0F5132',
    items: [
      {
        name: 'Sanity CMS',
        version: '5.23.x',
        role: 'Headless content management system',
        detail: 'Manages all dynamic content — blog posts and job listings. Editors log in to the Sanity Studio at /studio to create, edit, and publish content without touching code.',
        url: 'sanity.io',
      },
      {
        name: 'next-sanity',
        version: '12.3.x',
        role: 'Sanity ↔ Next.js integration',
        detail: 'Connects Sanity\'s content API to Next.js pages. Handles data fetching, live previews, and the embedded Studio.',
        url: 'sanity.io/docs/next-js',
      },
    ],
  },
  {
    category: 'Forms & Communication',
    color: '#6B21A8',
    items: [
      {
        name: 'Web3Forms',
        version: 'API v1',
        role: 'Contact form submission service',
        detail: 'Receives all contact form submissions and delivers them to career@talentpath.co.in. No backend or database required — works entirely via a secure API call from the browser.',
        url: 'web3forms.com',
      },
    ],
  },
  {
    category: 'Media & Assets',
    color: '#1E293B',
    items: [
      {
        name: 'FFmpeg',
        version: '8.x',
        role: 'Video processing',
        detail: 'Used to merge and normalise the hero background video clips (meeting, mixgender, support) into a single optimised combined.mp4 at 1920×1080 / 30fps.',
        url: 'ffmpeg.org',
      },
      {
        name: 'Next.js Image',
        version: 'Built-in',
        role: 'Image optimisation',
        detail: 'Automatically serves images in WebP format, resizes them for each screen size, and lazy-loads them for faster page performance.',
        url: 'nextjs.org/docs/app/api-reference/components/image',
      },
    ],
  },
  {
    category: 'Developer Tools',
    color: '#7C3AED',
    items: [
      {
        name: 'ESLint',
        version: '9.x',
        role: 'Code quality linter',
        detail: 'Automatically flags code errors, bad patterns, and style inconsistencies during development.',
        url: 'eslint.org',
      },
      {
        name: 'GitHub',
        version: '',
        role: 'Version control & code repository',
        detail: 'All source code is tracked and stored at github.com/kritika20sharma/Talentpath_new. Every change is committed with a descriptive message.',
        url: 'github.com/kritika20sharma/Talentpath_new',
      },
    ],
  },
];

const highlights = [
  { label: 'Pages', value: '7' },
  { label: 'Components', value: '15+' },
  { label: 'Fully Responsive', value: 'Yes' },
  { label: 'TypeScript', value: '100%' },
  { label: 'CMS Ready', value: 'Yes' },
  { label: 'Build Tool', value: 'Turbopack' },
];

export default function TechStackPage() {
  return (
    <main className="bg-white min-h-screen">


      <div className="max-w-5xl mx-auto px-8 pb-16 print:px-0 print:pb-8">

        {/* Header */}
        <div className="border-b-4 pb-8 mb-10 print:mb-8" style={{ borderColor: 'var(--orange)' }}>
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div>
              {/* Logo text */}
              <div className="mb-4" style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>
                <span className="text-4xl font-black tracking-tight" style={{ color: 'var(--navy)' }}>TALENT</span>
                <span className="text-4xl font-black tracking-tight" style={{ color: 'var(--orange)' }}>PATH</span>
              </div>
              <h1 className="text-2xl font-black mb-1" style={{ color: '#1E293B' }}>
                Website Technology Stack
              </h1>
              <p className="text-sm" style={{ color: 'var(--text-mid)' }}>
                Technical specification document — prepared for client handover
              </p>
            </div>
            <div className="text-right text-sm" style={{ color: 'var(--text-mid)' }}>
              <p className="font-semibold" style={{ color: '#1E293B' }}>TalentPath Management Services</p>
              <p>talentpath.co.in</p>
              <p className="mt-1">Prepared: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
              <p>Version 1.0</p>
            </div>
          </div>
        </div>

        {/* Project highlights */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 mb-12 print:mb-8">
          {highlights.map((h) => (
            <div key={h.label} className="rounded-xl p-4 text-center" style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}>
              <p className="text-xl font-black mb-0.5" style={{ color: 'var(--navy)' }}>{h.value}</p>
              <p className="text-xs font-semibold" style={{ color: 'var(--text-mid)' }}>{h.label}</p>
            </div>
          ))}
        </div>

        {/* Overview */}
        <div className="mb-10 p-6 rounded-2xl" style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}>
          <h2 className="text-base font-black uppercase tracking-widest mb-3" style={{ color: 'var(--navy)' }}>Project Overview</h2>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-mid)' }}>
            The TalentPath website is a modern, fully responsive recruitment agency website built on the{' '}
            <strong style={{ color: '#1E293B' }}>Next.js 16 App Router</strong> with{' '}
            <strong style={{ color: '#1E293B' }}>React 19</strong> and{' '}
            <strong style={{ color: '#1E293B' }}>TypeScript</strong>. It features a video hero section,
            animated UI components, a headless CMS for blog and job content, and a live contact form.
            All content is editable without touching code via the built-in Sanity Studio.
          </p>
        </div>

        {/* Stack sections */}
        <div className="space-y-10">
          {stack.map((section) => (
            <div key={section.category} className="print:break-inside-avoid">
              {/* Section header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-sm flex-shrink-0" style={{ backgroundColor: section.color }} />
                <h2 className="text-xs font-black uppercase tracking-widest" style={{ color: section.color }}>
                  {section.category}
                </h2>
                <div className="flex-1 h-px" style={{ backgroundColor: '#E2E8F0' }} />
              </div>

              {/* Items */}
              <div className="space-y-3">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-3 p-5 rounded-xl"
                    style={{ border: '1px solid #E2E8F0' }}
                  >
                    <div>
                      <p className="font-black text-base" style={{ color: '#1E293B' }}>{item.name}</p>
                      {item.version && (
                        <p className="text-xs font-semibold mt-0.5 mb-1 inline-block px-2 py-0.5 rounded-full" style={{ backgroundColor: '#F1F5F9', color: 'var(--text-mid)' }}>
                          v{item.version}
                        </p>
                      )}
                      <p className="text-xs font-semibold mt-1" style={{ color: section.color }}>{item.role}</p>
                      <p className="text-xs mt-1" style={{ color: 'var(--text-light)' }}>{item.url}</p>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-mid)' }}>
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Recommended deployment */}
        <div className="mt-12 p-6 rounded-2xl print:break-inside-avoid" style={{ backgroundColor: 'var(--navy)' }}>
          <h2 className="text-xs font-black uppercase tracking-widest mb-3 text-white/60">Recommended Deployment</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <p className="font-black text-white text-base mb-1">Vercel</p>
              <p className="text-sm text-white/70 leading-relaxed">
                The recommended hosting platform for Next.js sites. Connects directly to GitHub — every push to{' '}
                <span className="font-semibold text-white/90">main</span> branch auto-deploys in ~60 seconds.
                Free tier available; Pro plan recommended for production.
              </p>
            </div>
            <div>
              <p className="font-black text-white text-base mb-1">Custom Domain</p>
              <p className="text-sm text-white/70 leading-relaxed">
                Point <span className="font-semibold text-white/90">talentpath.co.in</span> to Vercel via a CNAME
                record. SSL certificate is automatically provisioned. Takes under 5 minutes to configure.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 pt-6 border-t flex items-center justify-between text-xs" style={{ borderColor: '#E2E8F0', color: 'var(--text-light)' }}>
          <p>TalentPath Management Services Pvt. Ltd. — Confidential</p>
          <p>talentpath.co.in</p>
        </div>

      </div>

      {/* Print styles */}
      <style>{`
        @media print {
          @page { margin: 1.5cm; size: A4; }
          body { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
        }
      `}</style>
    </main>
  );
}
