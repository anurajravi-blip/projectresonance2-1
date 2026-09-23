import { SectionHeading } from "@/components/section-heading"

const milestones = [
  { date: "September 2026", title: "Component selection", status: "done" },
  { date: "September 2026", title: "Amplifier and power supply integration", status: "done" },
  { date: "September 2026", title: "Speaker enclosure development", status: "active" },
  { date: "October 2026", title: "Initial acoustic testing", status: "upcoming" },
  { date: "October 2026", title: "Final tuning", status: "upcoming" },
]

export function Timeline() {
  return (
    <section id="timeline" className="relative py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          eyebrow="Build Timeline"
          title="From parts to playback"
          description="The progression of the build across the prototype phase."
          align="center"
        />

        <ol className="relative mt-14 space-y-2 border-l border-border pl-8">
          {milestones.map((m) => (
            <li key={m.title} className="relative pb-8 last:pb-0">
              <span
                aria-hidden="true"
                className={`absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                  m.status === "upcoming"
                    ? "border-border bg-background"
                    : "border-primary bg-primary shadow-[0_0_0_5px_oklch(0.52_0.19_262_/_0.15)]"
                }`}
              >
                {m.status === "active" && (
                  <span className="h-1.5 w-1.5 animate-ping rounded-full bg-primary-foreground" />
                )}
              </span>
              <div className="glass-card rounded-2xl px-5 py-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-medium uppercase tracking-[0.14em] text-primary">{m.date}</span>
                  {m.status === "active" && (
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-medium text-primary">
                      In progress
                    </span>
                  )}
                  {m.status === "done" && (
                    <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                      Complete
                    </span>
                  )}
                </div>
                <p className="mt-1.5 font-display text-base font-semibold text-foreground">{m.title}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
