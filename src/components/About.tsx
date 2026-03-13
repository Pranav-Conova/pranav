export default function About() {
  return (
    <section className="relative">
      <div className="absolute -top-16 -left-4 font-[Oswald] uppercase tracking-[-0.05em] text-7xl md:text-9xl opacity-10 select-none">PROFILE</div>
      <div className="card-stack max-w-3xl ml-auto" style={{ '--bg-rot': '-2deg' } as React.CSSProperties}>
        <div className="torn-paper bg-[#F0EAD6] p-10 md:p-14 border-2 border-[#1A1A1A] relative z-10 grain-texture">
          <div className="absolute top-0 left-0 w-full h-full halftone pointer-events-none opacity-5"></div>
          <h2 className="font-[Oswald] uppercase tracking-[-0.05em] text-5xl mb-8 flex items-center gap-4">
            <span className="text-[#DC143C]">_</span>
            ABOUT_ME.TXT
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed font-bold">
            Python Developer experienced in building backend services using <span className="bg-[#DC143C] text-white px-2">Django</span>, FastAPI, and REST APIs. Skilled in relational databases and deploying applications on <span className="border-b-8 border-[#C5A945]">AWS</span>. Currently expanding into Data Engineering through ETL development and data modeling.
          </p>
        </div>
      </div>
    </section>
  )
}
