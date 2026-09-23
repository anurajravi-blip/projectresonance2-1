import Image from "next/image"
import { Speaker, AudioWaveform, CircuitBoard, BatteryCharging, SlidersHorizontal, Box } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const parts = [
  {
    icon: Speaker,
    name: "6-inch full-range drivers",
    detail: "Handle the core midrange and vocal band for each satellite channel.",
  },
  {
    icon: AudioWaveform,
    name: "2-inch tweeters",
    detail: "Extend the high frequencies for detail and air.",
  },
  {
    icon: CircuitBoard,
    name: "2.1 channel amplifier board",
    detail: "TPA3116D2-based board driving both satellites and the subwoofer.",
  },
  {
    icon: BatteryCharging,
    name: "24V power supply",
    detail: "Delivers stable DC power to the amplifier stage.",
  },
  {
    icon: SlidersHorizontal,
    name: "Passive crossover components",
    detail: "Split the signal between full-range drivers and tweeters.",
  },
  {
    icon: Box,
    name: "Speaker enclosure",
    detail: "Custom cabinets tuned to house the drivers and control resonance.",
  },
]

export function ComponentsSection() {
  return (
    <section id="components" className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Components"
            title="The parts that make it play"
            description="Every element is an individual component, chosen and integrated by hand."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {parts.map(({ icon: Icon, name, detail }) => (
              <div
                key={name}
                className="flex gap-4 rounded-2xl border border-border/70 bg-card/70 p-5 transition hover:border-primary/40 hover:bg-card"
              >
                <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-display text-sm font-semibold text-foreground">{name}</p>
                  <p className="mt-1 text-sm leading-snug text-muted-foreground">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:sticky lg:top-8">
          <div className="glass-card overflow-hidden rounded-3xl p-3">
            <Image
              src="/images/component-subwoofer.png"
              alt="Close-up of the 8-inch subwoofer driver used in Project Resonance"
              width={560}
              height={560}
              className="h-auto w-full rounded-2xl object-cover"
            />
          </div>
          <p className="mt-4 px-1 text-sm text-muted-foreground">
            The 8-inch subwoofer driver — the low-frequency heart of the 2.1 system.
          </p>
        </div>
      </div>
    </section>
  )
}
