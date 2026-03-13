export default function CTA() {
  return (
    <section className="mt-40">
      <div className="bg-[#DC143C] py-32 px-4 border-y-8 border-[#1A1A1A] flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 halftone opacity-30 pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-full grain-texture opacity-10" />
        <h2 className="font-[Oswald] uppercase tracking-[-0.05em] text-6xl md:text-[10vw] text-white text-center mb-16 leading-none">
          LETS WORK TOGETHER
        </h2>
        <div className="flex flex-wrap justify-center gap-8 relative z-10">
          <a href="mailto:pranavt108@gmail.com"
            className="btn-distressed bg-[#1A1A1A] text-white px-12 py-8 font-[Oswald] uppercase text-4xl md:text-5xl">
            EMAIL_ME
          </a>
          <a href="tel:+916238992425"
            className="btn-distressed bg-white text-[#1A1A1A] px-12 py-8 font-[Oswald] uppercase text-4xl md:text-5xl">
            CALL_NOW
          </a>
        </div>
      </div>
    </section>
  )
}
