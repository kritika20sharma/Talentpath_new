'use client';

import { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

const stats = [
  { value: '9+', numeric: 9, suffix: '+', label: 'Specialist industry verticals' },
  { value: '500+', numeric: 500, suffix: '+', label: 'Successful placements' },
  { value: '3 days', numeric: null, label: 'Average shortlist delivery' },
  { value: '24/7', numeric: null, label: 'Client support availability' },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const steps = 40;
    const increment = to / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, to]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  return (
    <section style={{ backgroundColor: 'var(--cream)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center lg:border-r last:border-r-0" style={{ borderColor: 'var(--border)' }}>
              <span className="text-4xl sm:text-5xl font-black leading-none mb-2" style={{ color: 'var(--navy)' }}>
                {stat.numeric !== null
                  ? <Counter to={stat.numeric} suffix={stat.suffix ?? ''} />
                  : stat.value}
              </span>
              <span className="text-sm font-medium leading-snug" style={{ color: 'var(--text-mid)' }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
