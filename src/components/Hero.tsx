export default function Hero() {
  return (
    <header className="relative flex flex-col items-center justify-center pt-24 pb-32 px-4 overflow-hidden">
      <div className="absolute top-10 left-10 text-[10px] opacity-40 font-bold uppercase tracking-widest" data-speed="0.7">S-34 // B-1</div>
      <div className="absolute bottom-20 right-10 text-[10px] opacity-40 font-bold uppercase tracking-widest" data-speed="0.7">L-99 // REV-02</div>

      <div className="relative z-10 text-center">
        <h1 className="text-[15vw] md:text-[12vw] font-[Oswald] uppercase tracking-[-0.05em] leading-[0.8] mb-4 glitch-text" data-speed="0.5">
          PRANAV T
        </h1>
        <div className="relative inline-block" data-speed="0.3">
          <p className="font-[Permanent_Marker] text-4xl md:text-6xl text-[#DC143C] -rotate-2 -mt-4 md:-mt-8">
            Python Developer
          </p>
          <div className="absolute -right-12 -top-4 w-12 h-12 halftone"></div>
        </div>
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm font-bold uppercase">
        <a href="mailto:pranavt108@gmail.com" className="hover:text-[#DC143C] underline decoration-4">pranavt108@gmail.com</a>
        <a href="https://github.com/Pranav-Conova" className="hover:text-[#DC143C] underline decoration-4">GITHUB.COM/PRANAV-CONOVA</a>
        <a href="https://linkedin.com/in/pranav-t-273155292" className="hover:text-[#DC143C] underline decoration-4">LINKEDIN/PRANAV-T</a>
      </div>
    </header>
  )
}
