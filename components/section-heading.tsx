import type { ReactNode } from "react"

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string
  title: string
  description?: ReactNode
  align?: "left" | "center"
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-primary">
        <span className="h-px w-6 bg-primary/50" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground text-balance sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">{description}</p>}
    </div>
  )
}
