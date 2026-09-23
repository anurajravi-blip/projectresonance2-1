import { Scale, Mic2, Waves, ShieldCheck, Sofa } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const goals = [
  { icon: Scale, title: "Balanced sound", detail: "Even response across the frequency range." },
  { icon: Mic2, title: "Clean vocal reproduction", detail: "Natural, uncolored midrange clarity." },
  { icon: Waves, title: "Controlled bass", detail: "Tight, defined low end without boom." },
  { icon: ShieldCheck, title: "Reliable power delivery", detail: "Stable performance under load." },
  { icon: Sofa, title: "Compact, living-room friendly", detail: "A footprint that fits real spaces." },
]

export function DesignGoals() {
  return (
    <section id="goals" className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
      <SectionHeading
        eyebrow="Design Goals"
        title="What the system is tuned to achieve"
        align="center"
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {goals.map(({ icon: Icon, title, detail }, i) => (
          <div
            key={title}
            className={`glass-card rounded-2xl p-7 transition duration-300 hover:-translate-y-1 hover:border-primary/50 ${
              i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
            }`}
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon className="h-6 w-6" aria-hidden="true" />
            </span>
            <p className="mt-5 font-display text-lg font-semibold text-foreground">{title}</p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
