import { Award, ShieldCheck } from 'lucide-react'

export default function Education() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-16">
      {/* Education Card */}
      <div className="card-stack" style={{ '--bg-rot': '-2deg' } as React.CSSProperties}>
        <div className="torn-paper bg-[#C5A945] p-12 border-2 border-[#1A1A1A] relative z-10 grain-texture">
          <h2 className="font-[Oswald] uppercase tracking-[-0.05em] text-5xl mb-8">EDUCATION</h2>
          <div className="space-y-10 font-bold uppercase">
            <div className="border-b-4 border-[#1A1A1A] pb-6">
              <p className="text-3xl mb-1">B.Tech in CSE</p>
              <p className="text-lg opacity-80">KMCT College of Engineering (2021-25)</p>
              <p className="mt-3 text-[#F0EAD6] bg-[#1A1A1A] inline-block px-3 py-1 text-xl">CGPA: 8.02</p>
            </div>
            <div>
              <p className="text-3xl mb-1">Higher Secondary</p>
              <p className="text-lg opacity-80">Govt Boys HSS Parayanchery (2019-21)</p>
              <p className="mt-3 text-[#F0EAD6] bg-[#1A1A1A] inline-block px-3 py-1 text-xl">Mark: 86%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Credentials Card */}
      <div className="card-stack" style={{ '--bg-rot': '3deg' } as React.CSSProperties}>
        <div className="torn-paper bg-[#F0EAD6] border-2 border-[#1A1A1A] p-12 relative z-10 grain-texture">
          <h2 className="font-[Oswald] uppercase tracking-[-0.05em] text-5xl mb-8">CREDS_DATA</h2>
          <div className="space-y-6 font-mono text-sm uppercase">
            <div className="p-6 bg-white border-2 border-[#1A1A1A] relative">
              <Award className="absolute top-4 right-4 w-8 h-8 text-[#DC143C]" />
              <p className="font-bold text-2xl text-[#DC143C] mb-2">PUBLICATION</p>
              <p className="text-lg font-bold">Live Image Processing Website Report</p>
              <p className="opacity-70 mt-1">(IRJMETS, Vol. 7, 2025)</p>
              <p className="mt-2 bg-[#C5A945] px-2 py-0.5 inline-block">Impact Factor: 8.187</p>
            </div>
            <div className="p-6 bg-white border-2 border-[#1A1A1A] relative">
              <ShieldCheck className="absolute top-4 right-4 w-8 h-8 text-[#DC143C]" />
              <p className="font-bold text-2xl text-[#DC143C] mb-2">CERTIFICATION</p>
              <p className="text-lg font-bold">Python Core Certification</p>
              <p className="opacity-70 mt-1">One Roadmap Skill (MAY 2025)</p>
              <p className="mt-2 bg-[#1A1A1A] text-white px-2 py-0.5 inline-block">ID: CERT-088C43ED</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
