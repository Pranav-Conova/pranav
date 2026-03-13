const skillCategories = [
  { label: '// LANGUAGES', items: ['PYTHON 3.12', 'JAVASCRIPT (ES6)', 'TYPESCRIPT'], bg: 'bg-[#1A1A1A] text-[#F0EAD6]', rot: '1deg' },
  { label: '// FRAMEWORKS', items: ['DJANGO / DRF', 'FASTAPI', 'REACT.JS'], bg: 'bg-[#F0EAD6] border-2 border-[#1A1A1A]', rot: '-3deg' },
  { label: '// STORAGE', items: ['POSTGRESQL', 'MYSQL', 'REDIS'], bg: 'bg-[#C5A945] text-[#1A1A1A] border-2 border-[#1A1A1A]', rot: '2deg' },
  { label: '// CLOUD_TOOLS', items: ['AWS S3/EC2', 'DOCKER', 'LANGGRAPH'], bg: 'bg-[#DC143C] text-white border-2 border-[#1A1A1A]', rot: '-1deg' },
]

export default function Skills() {
  return (
    <section className="relative">
      <h2 className="font-[Oswald] uppercase tracking-[-0.05em] text-7xl md:text-9xl mb-16 text-center">SKILLS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((cat, i) => (
          <div key={i} className="relative">
            <span className="absolute -top-6 left-2 font-mono text-[10px] font-bold text-[#DC143C]">{cat.label}</span>
            <div className="card-stack" style={{ '--bg-rot': cat.rot } as React.CSSProperties}>
              <div className={`torn-paper ${cat.bg} p-6 relative z-10 flex flex-col gap-2`}>
                {cat.items.map((item, j) => (
                  <span key={j} className="text-xl font-bold">{item}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
