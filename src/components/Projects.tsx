import { ShoppingBag, Bot } from 'lucide-react'

const projects = [
  {
    name: 'OLDREPORT.IN',
    subtitle: '// FULL STACK E-COMMERCE ENGINE',
    tech: 'React.js + Django REST + Razorpay + Clerk + AWS + PostgreSQL',
    bgColor: 'bg-[#DC143C]',
    icon: ShoppingBag,
    iconColor: 'text-white',
    watermark: 'OLDREPORT',
    watermarkColor: 'text-white',
    link: 'https://oldreport.in',
    btnText: 'VISIT SITE_URL',
    btnBg: 'bg-[#1A1A1A] hover:bg-[#DC143C]',
    rot: '-2deg',
    tapeStyle: {},
  },
  {
    name: 'LLM AUTOMATION',
    subtitle: '// WORKFLOW AUTOMATION ENGINE',
    tech: 'FastAPI + LangGraph + React + OpenAI + Gemini Automation',
    bgColor: 'bg-[#1A1A1A]',
    icon: Bot,
    iconColor: 'text-[#DC143C]',
    watermark: 'LLM_FLOW',
    watermarkColor: 'text-[#DC143C]',
    link: 'https://github.com/Pranav-Conova',
    btnText: 'VIEW SOURCE_CODE',
    btnBg: 'bg-[#DC143C] hover:bg-[#1A1A1A]',
    rot: '2.5deg',
    tapeStyle: { transform: 'translateX(-50%) rotate(4deg)', background: 'rgba(220, 20, 60, 0.4)' },
  },
]

export default function Projects() {
  return (
    <section className="space-y-16">
      <h2 className="font-[Oswald] uppercase tracking-[-0.05em] text-7xl md:text-9xl text-right">PROJECTS</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {projects.map((proj, i) => (
          <div key={i} className="relative group">
            <div className="tape-effect" style={proj.tapeStyle} />
            <div className="card-stack" style={{ '--bg-rot': proj.rot } as React.CSSProperties}>
              <div className="torn-paper bg-[#F0EAD6] border-4 border-[#1A1A1A] flex flex-col relative z-10 grain-texture">
                <div className={`h-64 ${proj.bgColor} relative overflow-hidden`}>
                  <div className="absolute inset-0 halftone opacity-30" />
                  <div className="absolute inset-0 border-8 border-dashed border-white/20 m-4" />
                  <div className={`absolute inset-0 flex items-center justify-center font-[Oswald] uppercase text-7xl ${proj.watermarkColor} opacity-40`}>
                    {proj.watermark}
                  </div>
                  <proj.icon className={`absolute bottom-6 right-6 w-16 h-16 ${proj.iconColor} opacity-50`} strokeWidth={1.5} />
                  {i === 1 && (
                    <div className="absolute top-4 left-4 font-mono text-[10px] text-white opacity-40 uppercase">BUILD_ID: AI-990</div>
                  )}
                </div>
                <div className="p-10">
                  <h3 className="font-[Oswald] uppercase tracking-[-0.05em] text-5xl mb-4">{proj.name}</h3>
                  <p className="font-mono text-base mb-8 uppercase text-gray-700 leading-tight font-bold">
                    {proj.subtitle}<br />
                    {proj.tech}
                  </p>
                  <a href={proj.link} target="_blank" rel="noopener noreferrer"
                    className={`btn-distressed ${proj.btnBg} text-white px-10 py-6 inline-block font-[Oswald] uppercase text-3xl w-full text-center transition-colors`}>
                    {proj.btnText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
