'use client';

import { useState, CSSProperties } from 'react';
import Image from 'next/image';

const clients = [
  { name: 'Mercedes-Benz',     logo: '/images/clients/mercedes-benz.svg',    color: '#1a1a1a' },
  { name: 'Jaguar Land Rover', logo: '/images/clients/jaguar-landrover.png',  color: '#1b3a5c' },
  { name: 'Honda',             logo: '/images/clients/honda.webp',            color: '#cc0000' },
  { name: 'Hero MotoCorp',     logo: '/images/clients/hero-motocorp.png',     color: '#cc0000' },
  { name: 'CNH Industrial',    logo: '/images/clients/cnh-industrial.png',    color: '#1a1a1a' },
  { name: 'Ashok Leyland',     logo: '/images/clients/ashok-leyland.png',     color: '#003087' },
  { name: 'MG Motors',         logo: '/images/clients/mg-motors.jpg',         color: '#1a1a1a' },
  { name: 'NeoSOFT',           logo: '/images/clients/neosoft.png',           color: '#e31e25' },
  { name: 'Q3 Technologies',   logo: '/images/clients/q3-technologies.png',   color: '#003087' },
  { name: 'Grey Orange',       logo: '/images/clients/grey-orange.png',       color: '#f57c00' },
  { name: 'Mercer',            logo: '/images/clients/mercer.png',            color: '#0066cc' },
  { name: 'Infogain',          logo: '/images/clients/infogain.png',          color: '#1a1a1a' },
  { name: 'Ciena',             logo: '/images/clients/ciena.png',             color: '#cc0000' },
  { name: 'Brainvire',         logo: '/images/clients/brainvire.png',         color: '#2196f3' },
];

const track = [...clients, ...clients];

function ClientCard({ name, logo, color }: { name: string; logo: string; color: string }) {
  const [over, setOver] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <div
      onMouseEnter={() => setOver(true)}
      onMouseLeave={() => setOver(false)}
      className="shrink-0 h-20 flex items-center justify-center px-6 rounded-2xl bg-white select-none"
      style={{
        border: `1.5px solid ${over ? color + '55' : '#E2E8F0'}`,
        boxShadow: over ? `0 6px 28px ${color}1a` : 'none',
        transform: over ? 'translateY(-2px) scale(1.03)' : 'translateY(0) scale(1)',
        transition: 'all 0.28s ease',
        minWidth: '160px',
      } as CSSProperties}
    >
      {!imgError ? (
        <Image
          src={logo}
          alt={name}
          width={140}
          height={56}
          unoptimized={logo.endsWith('.svg')}
          className="object-contain w-auto"
          style={{
            maxHeight: '44px',
            filter: over ? 'grayscale(0%) opacity(1)' : 'grayscale(100%) opacity(0.5)',
            transition: 'filter 0.3s ease',
          }}
          onError={() => setImgError(true)}
        />
      ) : (
        <span
          className="text-sm font-black text-center leading-tight whitespace-nowrap"
          style={{
            color: over ? color : '#94A3B8',
            transition: 'color 0.28s ease',
            letterSpacing: '-0.01em',
          }}
        >
          {name}
        </span>
      )}
    </div>
  );
}

export default function ClientsMarquee() {
  const [paused, setPaused] = useState(false);

  return (
    <section
      className="py-14 sm:py-20 bg-white"
      style={{ borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}
    >
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-10 sm:mb-14">
        <span
          className="text-xs font-bold uppercase tracking-widest mb-3 block"
          style={{ color: 'var(--orange)' }}
        >
          Our Clients
        </span>
        <h2
          className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4"
          style={{ color: 'var(--navy)' }}
        >
          Trusted by India&apos;s leading organisations.
        </h2>
        <p
          className="text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
          style={{ color: 'var(--text-mid)' }}
        >
          From global automotive OEMs to fast-growing technology companies — TalentPath is the
          specialist recruitment partner that top organisations across India rely on.
        </p>
      </div>

      {/* Marquee */}
      <div
        className="overflow-hidden relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Fade masks */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #ffffff, transparent)' }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #ffffff, transparent)' }}
        />

        {/* Track */}
        <div
          className="flex gap-4 py-2"
          style={{
            width: 'max-content',
            animation: 'marquee 42s linear infinite',
            animationPlayState: paused ? 'paused' : 'running',
          }}
        >
          {track.map((client, i) => (
            <ClientCard
              key={i}
              name={client.name}
              logo={client.logo}
              color={client.color}
            />
          ))}
        </div>
      </div>

      {/* Industry pills */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-10 sm:mt-12 flex flex-wrap justify-center gap-3">
        {[
          'Automobile & Manufacturing',
          'Banking & Finance',
          'IT & Technology',
          'Oil, Gas & EPC',
          'FMCG & Retail',
        ].map((cat) => (
          <span
            key={cat}
            className="text-xs font-semibold px-4 py-1.5 rounded-full"
            style={{ backgroundColor: 'var(--light-bg)', color: 'var(--text-mid)' }}
          >
            {cat}
          </span>
        ))}
        <span
          className="text-xs font-semibold px-4 py-1.5 rounded-full"
          style={{ backgroundColor: 'rgba(222,132,15,0.1)', color: 'var(--orange)' }}
        >
          And many more…
        </span>
      </div>
    </section>
  );
}
