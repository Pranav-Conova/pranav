import { useEffect, useRef } from 'react'

export default function Footer() {
  const counterRef = useRef<HTMLSpanElement>(null)
  const animated = useRef(false)

  useEffect(() => {
    const el = counterRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true
          let count = 0
          const target = 1337
          const steps = 30
          const increment = target / steps
          const interval = 1500 / steps
          const timer = setInterval(() => {
            count += increment
            if (count >= target) {
              count = target
              clearInterval(timer)
            }
            el.innerText = Math.floor(count).toString().padStart(7, '0')
          }, interval)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div className="w-full h-12 bg-[#F0EAD6] torn-paper -mb-6 relative z-10" />
      <footer className="bg-[#1A1A1A] text-[#F0EAD6] pt-24 pb-12 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full halftone opacity-10 pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 font-[Oswald] uppercase text-[25vw] opacity-5 select-none">PRANAV</div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative z-10">
          {/* Identity & Stamp */}
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="font-[Oswald] uppercase text-4xl text-white">PRANAV T</p>
              <p className="font-mono text-sm text-[#C5A945]">// PYTHON BACKEND SPECIALIST</p>
              <p className="font-mono text-xs opacity-60">KOZHIKODE, KERALA, INDIA</p>
            </div>
            <div className="pt-4">
              <div className="rubber-stamp">
                VERIFIED // 2025<br />
                PORTFOLIO_REV_02
              </div>
            </div>
          </div>

          {/* Link Blocks */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: '01_EMAIL', text: 'PRANAVT108@GMAIL', href: 'mailto:pranavt108@gmail.com' },
              { label: '02_GIT', text: 'GITHUB/PRANAV-C', href: 'https://github.com/Pranav-Conova' },
              { label: '03_LN', text: 'LINKEDIN/PRANAV-T', href: 'https://linkedin.com/in/pranav-t-273155292' },
              { label: '04_TEL', text: '+91-6238992425', href: 'tel:+916238992425' },
            ].map((link, i) => (
              <a key={i} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="bg-[#2A2A2A] p-6 border-l-4 border-[#DC143C] group hover:bg-[#DC143C] transition-colors">
                <span className="block font-mono text-[10px] text-[#C5A945] group-hover:text-white">{link.label}</span>
                <span className="font-[Oswald] uppercase text-2xl">{link.text}</span>
              </a>
            ))}
          </div>

          {/* Sitemap & Counter */}
          <div className="space-y-8 flex flex-col justify-between">
            <div className="space-y-4 font-mono text-xs">
              <p className="text-[#C5A945] font-bold">// SITE MAP</p>
              <ul className="space-y-1 opacity-70">
                <li><button onClick={() => window.scrollTo({ top: 0 })} className="hover:text-[#DC143C]">&gt; RETURN_TO_TOP</button></li>
                <li><a href="#experience-section" className="hover:text-[#DC143C]">&gt; WORK_HISTORY</a></li>
              </ul>
            </div>
            <div className="bg-white/5 p-4 border border-white/10">
              <p className="font-mono text-[9px] mb-1 opacity-50 uppercase">VISITOR_LOG_SERIAL</p>
              <div className="flex items-baseline gap-2">
                <span ref={counterRef} className="text-4xl font-[Oswald] uppercase tracking-tighter">0000000</span>
                <span className="text-[10px] text-[#DC143C] font-bold uppercase">[LIVE]</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[10px] opacity-40 uppercase">
          <p>&copy; 2025 PRANAV T // ALL RIGHTS RESERVED // DISTRESSED IN INDIA</p>
          <p>// BUILT WITH RAW CODE // NO FRAMEWORKS WERE HARMED //</p>
          <p>REV. 2.0.4-STABLE</p>
        </div>
      </footer>
    </>
  )
}
