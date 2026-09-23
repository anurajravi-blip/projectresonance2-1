import { Hero } from "@/components/hero"
import { Overview } from "@/components/overview"
import { SystemConfig } from "@/components/system-config"
import { ComponentsSection } from "@/components/components-section"
import { Timeline } from "@/components/timeline"
import { DesignGoals } from "@/components/design-goals"
import { Roadmap } from "@/components/roadmap"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      {/* subtle geometric grid backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.55 0.05 262 / 0.06) 1px, transparent 1px), linear-gradient(90deg, oklch(0.55 0.05 262 / 0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at 50% 0%, black, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 0%, black, transparent 75%)",
        }}
      />
      <Hero />
      <Overview />
      <SystemConfig />
      <ComponentsSection />
      <Timeline />
      <DesignGoals />
      <Roadmap />
      <SiteFooter />
    </main>
  )
}
