import { Layers, Speaker, AudioWaveform, Volume2, CircuitBoard, Gauge, BatteryCharging, Bluetooth } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const specs = [
  { icon: Layers, label: "Configuration", value: "2.1 Channel" },
  { icon: Speaker, label: "Satellite Drivers", value: "6-inch full-range" },
  { icon: AudioWaveform, label: "Tweeters", value: "2-inch" },
  { icon: Volume2, label: "Subwoofer", value: "8-inch" },
  { icon: CircuitBoard, label: "Amplifier", value: "TPA3116D2-based 2.1" },
  { icon: Gauge, label: "Driver Impedance", value: "4 Ω" },
  { icon: BatteryCharging, label: "Power Supply", value: "24V DC" },
  { icon: Bluetooth, label: "Audio Sources", value: "Bluetooth / AUX" },
]

export function SystemConfig() {
  return (
    <section id="configuration" className="relative py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="System Configuration"
          title="Specifications at a glance"
          description="The core parameters that define how Project Resonance is built and driven."
          align="center"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {specs.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="glass-card group rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_20px_45px_-18px_oklch(0.52_0.19_262_/_0.45)]"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <p className="mt-5 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">{label}</p>
              <p className="mt-1.5 font-display text-lg font-semibold text-foreground">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
