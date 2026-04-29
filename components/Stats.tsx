const stats = [
  { value: '15+', label: 'Years of specialist expertise' },
  { value: '4,200+', label: 'Successful placements' },
  { value: '98%', label: 'Client retention rate' },
  { value: '300+', label: 'Hiring partners nationwide' },
];

export default function Stats() {
  return (
    <section style={{ backgroundColor: 'var(--cream)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center lg:border-r last:border-r-0"
              style={{ borderColor: 'var(--border)' }}
            >
              <span
                className="text-5xl font-black leading-none mb-2"
                style={{ color: 'var(--navy)' }}
              >
                {stat.value}
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
