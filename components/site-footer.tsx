import { Equalizer } from "@/components/wave-visual"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-12 text-center">
        <Equalizer className="h-8" />
        <p className="font-display text-lg font-semibold tracking-tight text-foreground">
          Project <span className="text-gradient-blue">Resonance</span>
        </p>
        <p className="text-sm text-muted-foreground">Project Resonance • DIY Audio Project • 2026</p>
      </div>
    </footer>
  )
}
