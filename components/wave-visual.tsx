export function WaveField({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 1200 300"
      fill="none"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="waveGrad" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="oklch(0.62 0.15 250)" stopOpacity="0" />
          <stop offset="0.5" stopColor="oklch(0.52 0.19 262)" stopOpacity="0.55" />
          <stop offset="1" stopColor="oklch(0.62 0.15 250)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 150 C 150 60, 250 240, 400 150 S 650 60, 800 150 S 1050 240, 1200 150"
        stroke="url(#waveGrad)"
        strokeWidth="2"
      />
      <path
        d="M0 150 C 120 110, 280 190, 400 150 S 680 110, 800 150 S 1080 190, 1200 150"
        stroke="url(#waveGrad)"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <path
        d="M0 150 C 180 30, 220 270, 400 150 S 620 30, 800 150 S 1020 270, 1200 150"
        stroke="url(#waveGrad)"
        strokeWidth="1"
        opacity="0.35"
      />
    </svg>
  )
}

const BARS = [0, 0.2, 0.45, 0.15, 0.6, 0.35, 0.75, 0.3, 0.5, 0.1, 0.4]

export function Equalizer({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`flex items-end gap-1 ${className}`}>
      {BARS.map((delay, i) => (
        <span
          key={i}
          className="animate-eq w-1 rounded-full bg-primary/70"
          style={{
            height: `${16 + (i % 4) * 8}px`,
            animationDelay: `${delay}s`,
          }}
        />
      ))}
    </div>
  )
}
