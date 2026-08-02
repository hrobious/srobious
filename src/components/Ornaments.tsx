import type { ReactNode } from "react";

/** Thin gold corner brackets used on framed panels. */
export function CornerFrame({
  className = "",
  size = 26,
}: {
  className?: string;
  size?: number;
}) {
  const c = "absolute pointer-events-none text-gold/60";
  const path = (
    <svg width={size} height={size} viewBox="0 0 26 26" fill="none">
      <path d="M1 26V1h25" stroke="currentColor" strokeWidth="1" />
      <path d="M6 26V6h20" stroke="currentColor" strokeWidth="0.6" opacity=".5" />
      <circle cx="6" cy="6" r="1.6" fill="currentColor" />
    </svg>
  );
  return (
    <span className={className}>
      <span className={`${c} left-0 top-0`}>{path}</span>
      <span className={`${c} right-0 top-0 rotate-90`}>{path}</span>
      <span className={`${c} bottom-0 right-0 rotate-180`}>{path}</span>
      <span className={`${c} bottom-0 left-0 -rotate-90`}>{path}</span>
    </span>
  );
}

/** Red seal stamp with vertical characters. */
export function Seal({
  chars = "質量",
  size = 76,
  className = "",
}: {
  chars?: string;
  size?: number;
  className?: string;
}) {
  return (
    <div
      className={`relative grid place-items-center ${className}`}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <div className="absolute inset-0 rounded-[6px] bg-cinnabar/90 shadow-[0_0_28px_-6px_rgba(211,63,46,.8)]" />
      <div className="absolute inset-[5px] rounded-[3px] border border-rice/70" />
      <div
        className="relative font-han font-bold leading-[1.05] text-rice writing-vertical tracking-[.08em]"
        style={{ fontSize: size * 0.3 }}
      >
        {chars}
      </div>
    </div>
  );
}

/** Section heading: han character + english label + rule. */
export function SectionTitle({
  han,
  label,
  index,
}: {
  han: string;
  label: string;
  index: string;
}) {
  return (
    <div className="reveal mb-14 flex items-end gap-5">
      <div className="relative shrink-0">
        <span className="font-han text-5xl leading-none text-gold/25 md:text-6xl">
          {han}
        </span>
        <span className="absolute -right-2 -top-2 font-ui text-[10px] tracking-[.3em] text-cinnabar-bright">
          {index}
        </span>
      </div>
      <div className="flex-1 pb-1">
        <h2 className="font-display text-2xl uppercase tracking-[.28em] text-rice md:text-3xl">
          {label}
        </h2>
        <div className="gold-rule mt-3 h-px w-full" />
      </div>
    </div>
  );
}

/** Framed dark panel with silk texture + corner brackets. */
export function Panel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`silk relative border border-gold/15 bg-ink-2/70 backdrop-blur-sm ${className}`}
    >
      <CornerFrame />
      {children}
    </div>
  );
}

/** Floating cinnabar embers. */
export function Embers({ count = 14 }: { count?: number }) {
  const items = Array.from({ length: count }, (_, i) => {
    const left = (i * 97) % 100;
    const dur = 18 + ((i * 7) % 22);
    const delay = (i * 3.3) % 20;
    const size = 1 + ((i * 5) % 3);
    return { left, dur, delay, size, i };
  });
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {items.map((e) => (
        <span
          key={e.i}
          className="animate-ember absolute bottom-[-10vh] rounded-full"
          style={{
            left: `${e.left}%`,
            width: e.size,
            height: e.size,
            background: e.i % 3 === 0 ? "#d33f2e" : "#c8a24a",
            boxShadow: `0 0 ${6 + e.size * 3}px ${
              e.i % 3 === 0 ? "#a8231e" : "#c8a24a"
            }`,
            animationDuration: `${e.dur}s`,
            animationDelay: `-${e.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

/** Decorative bagua-like rotating ring. */
export function Ring({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={`animate-slow-spin ${className}`}
      fill="none"
      aria-hidden
    >
      <circle cx="100" cy="100" r="96" stroke="#c8a24a" strokeWidth=".5" opacity=".35" />
      <circle
        cx="100"
        cy="100"
        r="82"
        stroke="#a8231e"
        strokeWidth=".7"
        strokeDasharray="2 10"
        opacity=".7"
      />
      <circle cx="100" cy="100" r="66" stroke="#c8a24a" strokeWidth=".4" opacity=".25" />
      {Array.from({ length: 8 }).map((_, i) => (
        <g key={i} transform={`rotate(${i * 45} 100 100)`}>
          <rect x="98.6" y="2" width="2.8" height="12" fill="#c8a24a" opacity=".55" />
        </g>
      ))}
    </svg>
  );
}
