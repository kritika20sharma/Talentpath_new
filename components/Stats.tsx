const stats = [
  { value: '20+', label: 'Years advising global businesses' },
  { value: '9', label: 'Specialist industry verticals' },
  { value: '24/7', label: 'Client support availability' },
  { value: '100%', label: 'Commitment to best TAT' },
];

export default function Stats() {
  return (
    <section style={{ backgroundColor: 'var(--cream)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center lg:border-r last:border-r-0" style={{ borderColor: 'var(--border)' }}>
              <span className="text-5xl font-black leading-none mb-2" style={{ color: 'var(--navy)' }}>
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
