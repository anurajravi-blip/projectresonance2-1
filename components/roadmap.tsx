import { Paintbrush, SlidersHorizontal, LineChart, Headphones } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const items = [
  { icon: Paintbrush, title: "Enclosure finishing", detail: "Refining the cabinet surfaces and fit." },
  { icon: SlidersHorizontal, title: "Crossover tuning", detail: "Dialing in the driver-to-tweeter handoff." },
  { icon: LineChart, title: "Frequency-response testing", detail: "Measuring output across the spectrum." },
  { icon: Headphones, title: "Final listening tests", detail: "Confirming the sound by ear." },
]

export function Roadmap() {
  return (
    <section id="roadmap" className="relative py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Roadmap"
          title="What's next"
          description="The remaining steps to take Project Resonance from prototype to finished system."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, detail }, i) => (
            <div key={title} className="glass-card relative overflow-hidden rounded-2xl p-6">
              <span className="font-display text-sm font-semibold text-primary/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="mt-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="mt-4 font-display text-base font-semibold text-foreground">{title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
