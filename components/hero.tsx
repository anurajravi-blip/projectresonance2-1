import Image from "next/image"
import { Equalizer, WaveField } from "@/components/wave-visual"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* ambient background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-[-10%] top-1/3 h-80 w-80 rounded-full bg-chart-2/10 blur-3xl" />
        <WaveField className="absolute inset-x-0 top-1/2 h-64 w-full -translate-y-1/2 opacity-70" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-16 lg:grid-cols-2 lg:gap-8 lg:pb-28 lg:pt-24">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-3 py-1 text-xs font-medium text-primary shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Prototype &amp; Testing
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              Started September 2026
            </span>
          </div>

          <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-foreground text-balance sm:text-5xl">
            Project <span className="text-gradient-blue">Resonance</span> — A DIY 2.1 Audio System
          </h1>
          <p className="mt-4 max-w-xl text-lg font-medium text-foreground text-pretty">
            Built, tested, and tuned as a hands-on audio project.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty">
            A hands-on project exploring speaker design, amplification, power delivery and enclosure integration.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#configuration"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_10px_30px_-10px_oklch(0.52_0.19_262_/_0.7)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-12px_oklch(0.52_0.19_262_/_0.8)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              View specifications
            </a>
            <a
              href="#components"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition hover:border-primary/40 hover:text-primary"
            >
              Explore components
            </a>
            <Equalizer className="ml-1 hidden h-10 sm:flex" />
          </div>
        </div>

        <div className="relative animate-float-slow">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 mx-auto h-[85%] w-[85%] translate-y-6 rounded-[3rem] bg-primary/15 blur-3xl"
          />
          <div className="glass-card overflow-hidden rounded-[2rem] p-3">
            <Image
              src="/images/resonance-hero.png"
              alt="Render of the Project Resonance 2.1 channel audio system with two satellite speakers and a subwoofer"
              width={720}
              height={720}
              priority
              className="h-auto w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
