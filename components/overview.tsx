import { Speaker, Radio, Volume2 } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const channels = [
  {
    icon: Speaker,
    label: "Satellite L",
    detail: "6-inch full-range + 2-inch tweeter",
  },
  {
    icon: Speaker,
    label: "Satellite R",
    detail: "6-inch full-range + 2-inch tweeter",
  },
  {
    icon: Volume2,
    label: "Subwoofer",
    detail: "8-inch low-frequency driver",
  },
]

export function Overview() {
  return (
    <section id="overview" className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <SectionHeading
          eyebrow="Project Overview"
          title="A custom 2.1 speaker system, built from the driver up"
          description="Project Resonance is a custom 2.1 speaker system consisting of two satellite speakers and one subwoofer. Each stage — from the individual drivers to amplification, power delivery and the enclosures — is selected and assembled by hand to explore how the pieces come together into a balanced, living-room-ready system."
        />

        <div className="glass-card rounded-3xl p-6 sm:p-8">
          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <Radio className="h-4 w-4 text-primary" aria-hidden="true" />
            Signal path
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {channels.map(({ icon: Icon, label, detail }) => (
              <div
                key={label}
                className="silver-panel rounded-2xl border border-border/70 p-5 transition hover:border-primary/40"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="mt-4 font-display text-base font-semibold text-foreground">{label}</p>
                <p className="mt-1 text-sm leading-snug text-muted-foreground">{detail}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Two channels handle mids and highs while the dedicated subwoofer carries the low end — the &quot;.1&quot; in
            2.1 — for full-range sound from a compact footprint.
          </p>
        </div>
      </div>
    </section>
  )
}
