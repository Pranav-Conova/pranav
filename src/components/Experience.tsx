import { useRef } from 'react'

const experiences = [
  {
    company: 'Nucore Software Solutions',
    role: 'Senior Python Developer',
    period: 'JULY 2025 - PRESENT',
    periodBg: 'bg-[#1A1A1A]',
    cardBg: 'bg-white',
    rot: '1deg',
    markerColor: '[#C5A945]',
    items: [
      'Backend development using FastAPI & Microservices',
      'Multi-tenant system architecture & scaling',
      'Database schema optimization for multi-tenancy',
      'WhatsApp and Instagram business API integrations',
    ],
  },
  {
    company: 'Freelance Developer',
    role: 'Full-Stack Solutions',
    period: 'MAY 2025 - JULY 2025',
    periodBg: 'bg-[#DC143C]',
    cardBg: 'bg-[#F0EAD6]',
    rot: '-1.5deg',
    markerColor: '[#DC143C]',
    items: [
      'Built OLDREPORT.IN (Django + React + PostgreSQL)',
      'Secure payment flows via Razorpay & Clerk Auth',
      'Production AWS deployment (EC2/S3/CloudFront)',
    ],
    intro: 'Delivered high-stakes web applications for local and international clients.',
  },
]

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null)

  return (
    <section className="space-y-16" id="experience-section">
      <h2 className="font-[Oswald] uppercase tracking-[-0.05em] text-7xl md:text-9xl flex items-baseline gap-4">
        EXP <span className="text-2xl font-mono opacity-50">[02_ENTRIES]</span>
      </h2>

      <div className="relative pl-10 space-y-24 border-l-[12px] border-transparent">
        <div ref={timelineRef} className="absolute left-0 top-0 w-[12px] bg-[#DC143C]" style={{ height: '0%' }} data-timeline-bar />

        {experiences.map((exp, i) => (
          <div key={i} className="relative">
            <div className="absolute -left-[58px] top-6 w-8 h-8 bg-[#1A1A1A] border-4 border-[#F0EAD6] rotate-45 z-20" />
            <div className="card-stack" style={{ '--bg-rot': exp.rot } as React.CSSProperties}>
              <div className={`torn-paper ${exp.cardBg} p-10 md:p-12 border-2 border-[#1A1A1A] relative z-10 grain-texture`}>
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
                  <div>
                    <h3 className="font-[Oswald] uppercase tracking-[-0.05em] text-5xl mb-2 tracking-tight">{exp.company}</h3>
                    <p className={`font-bold text-2xl ${i === 0 ? 'text-[#DC143C]' : 'text-[#C5A945]'} italic`}>{exp.role}</p>
                  </div>
                  <span className={`font-mono text-sm ${exp.periodBg} text-white px-4 py-2 self-start`}>{exp.period}</span>
                </div>
                {exp.intro && <p className="text-lg font-bold mb-6">{exp.intro}</p>}
                <ul className="list-none space-y-4 font-mono text-lg uppercase">
                  {exp.items.map((item, j) => (
                    <li key={j} className="flex gap-4">
                      <span className={`text-${exp.markerColor}`}>{i === 0 ? '[+]' : '[-]'}</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
