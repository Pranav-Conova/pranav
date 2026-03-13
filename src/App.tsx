import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

import Banner from './components/Banner'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import CTA from './components/CTA'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    // --- GSAP ScrollTrigger Animations ---

    const ctx = gsap.context(() => {
      // 1. SECTION REVEALS — torn paper slam from below
      // Target direct children of <main> as section wrappers
      const sections = gsap.utils.toArray<HTMLElement>(
        mainRef.current?.querySelectorAll('main > div') ?? []
      )
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { y: 80, opacity: 0, rotation: -1 },
          {
            y: 0,
            opacity: 1,
            rotation: 0,
            duration: 0.5,
            ease: 'steps(5)',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // 2. STAGGERED CARD ENTRY — cards slam in from alternating sides
      const cards = gsap.utils.toArray<HTMLElement>(
        mainRef.current?.querySelectorAll('.card-stack') ?? []
      )
      cards.forEach((card, i) => {
        const fromX = i % 2 === 0 ? -80 : 80
        gsap.fromTo(
          card,
          { x: fromX, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.4,
            ease: 'steps(4)',
            delay: (i % 4) * 0.12,
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // 3. HERO PARALLAX — different speeds for depth
      const heroName = document.querySelector('[data-speed="0.5"]')
      const heroScript = document.querySelector('[data-speed="0.3"]')
      const heroNotes = document.querySelectorAll('[data-speed="0.7"]')

      if (heroName) {
        gsap.to(heroName, {
          y: 200,
          ease: 'none',
          scrollTrigger: {
            trigger: heroName,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        })
      }
      if (heroScript) {
        gsap.to(heroScript, {
          y: 120,
          ease: 'none',
          scrollTrigger: {
            trigger: heroScript,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        })
      }
      heroNotes.forEach((note) => {
        gsap.to(note, {
          y: 280,
          ease: 'none',
          scrollTrigger: {
            trigger: note,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        })
      })

      // 4. INK SPLATTER POPS — sudden scale from 0 to 1
      const splatters = gsap.utils.toArray<HTMLElement>(
        document.querySelectorAll('.ink-splatter')
      )
      splatters.forEach((splatter) => {
        gsap.fromTo(
          splatter,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 0.12,
            duration: 0.01,
            ease: 'steps(1)',
            scrollTrigger: {
              trigger: splatter,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // 5. HEADING GLITCH REVEAL — clip-path wipe on section headings
      const headings = gsap.utils.toArray<HTMLElement>(
        mainRef.current?.querySelectorAll('main h2') ?? []
      )
      headings.forEach((heading) => {
        gsap.fromTo(
          heading,
          { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
          {
            clipPath: 'inset(0 0% 0 0)',
            opacity: 1,
            duration: 0.4,
            ease: 'steps(6)',
            scrollTrigger: {
              trigger: heading,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // 6. TIMELINE DRAW-IN — crimson line grows as you scroll through experience
      const timelineBar = document.querySelector('[data-timeline-bar]')
      const experienceSection = document.getElementById('experience-section')
      if (timelineBar && experienceSection) {
        gsap.fromTo(
          timelineBar,
          { height: '0%' },
          {
            height: '100%',
            ease: 'none',
            scrollTrigger: {
              trigger: experienceSection,
              start: 'top 60%',
              end: 'bottom 40%',
              scrub: 0.5,
            },
          }
        )
      }

      // 7. CTA SHAKE-IN — brief intense shake then settle
      const ctaSection = document.querySelector('[data-animate="cta"]')
      if (ctaSection) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ctaSection,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        })
        tl.fromTo(
          ctaSection,
          { x: 0, y: 0 },
          { x: 8, y: -8, duration: 0.075, ease: 'steps(1)' }
        )
          .to(ctaSection, { x: -8, y: 8, duration: 0.075, ease: 'steps(1)' })
          .to(ctaSection, { x: 8, y: 8, duration: 0.075, ease: 'steps(1)' })
          .to(ctaSection, { x: 0, y: 0, duration: 0.075, ease: 'steps(1)' })

        // Buttons pop in after shake
        const ctaButtons = ctaSection.querySelectorAll('.btn-distressed')
        gsap.fromTo(
          ctaButtons,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.1,
            ease: 'steps(1)',
            stagger: 0.15,
            delay: 0.3,
            scrollTrigger: {
              trigger: ctaSection,
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
          }
        )
      }

      // 8. PAPER FLOAT — subtle vertical float on scroll for torn-paper cards
      const paperCards = gsap.utils.toArray<HTMLElement>(
        mainRef.current?.querySelectorAll('.card-stack') ?? []
      )
      paperCards.forEach((card, i) => {
        gsap.to(card, {
          y: i % 2 === 0 ? -15 : 15,
          rotation: i % 2 === 0 ? 0.5 : -0.5,
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
        })
      })
    }, mainRef)

    return () => {
      ctx.revert()
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <div className="grunge-overlay" />

      {/* SVG Filters for Ink Splatter */}
      <svg className="absolute" style={{ width: 0, height: 0 }}>
        <defs>
          <filter id="splatterFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.05"
              numOctaves={3}
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale={60}
            />
          </filter>
        </defs>
      </svg>

      <div ref={mainRef} className="min-h-screen relative circuit-bg pb-0">
        {/* Background Ink Splatters */}
        <div className="ink-splatter" style={{ top: '15%', left: '5%' }} />
        <div
          className="ink-splatter crimson"
          style={{ top: '40%', right: '10%' }}
        />
        <div className="ink-splatter" style={{ top: '65%', left: '15%' }} />
        <div
          className="ink-splatter crimson"
          style={{ top: '85%', left: '50%' }}
        />
        <div className="ink-splatter" style={{ top: '92%', right: '5%' }} />

        <Banner />
        <Hero />

        <main className="max-w-6xl mx-auto px-4 space-y-40">
          <div>
            <About />
          </div>

          <div>
            <Skills />
          </div>

          <div>
            <Experience />
          </div>

          <div>
            <Projects />
          </div>

          <div>
            <Education />
          </div>
        </main>

        <div data-animate="cta">
          <CTA />
        </div>

        <Footer />
      </div>
    </>
  )
}
