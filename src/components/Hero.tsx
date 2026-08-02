import { profile } from "../data";
import { Ring, Seal } from "./Ornaments";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-6 pb-20 pt-28 md:px-12 lg:px-24 lg:pt-20"
    >
      {/* ink-wash backdrop */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[.30] mix-blend-screen"
        style={{ backgroundImage: "url(/images/ink-mountains.png)" }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_100%,rgba(8,7,10,.95),rgba(8,7,10,.35)_60%,transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_75%_30%,rgba(168,35,30,.18),transparent_70%)]" />

      {/* rotating ring behind */}
      <Ring className="pointer-events-none absolute -right-24 top-1/2 hidden h-[520px] w-[520px] -translate-y-1/2 opacity-50 md:block" />

      <div className="relative z-10 grid w-full max-w-6xl gap-14 lg:grid-cols-[1fr_auto] lg:items-center">
        {/* left: name block */}
        <div>
          <div className="reveal is-in mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-cinnabar-bright" />
            <span className="font-ui text-[10px] uppercase tracking-[.45em] text-gold/70">
              Portfolio · 甲辰
            </span>
          </div>

          <h1 className="font-display text-[13vw] leading-[0.92] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.4rem]">
            <span className="block gold-text">Md Robious</span>
            <span className="block gold-text">Sunny</span>
          </h1>

          <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 font-display text-[11px] uppercase tracking-[.28em] text-rice/70 md:text-xs">
            <span className="text-cinnabar-bright">
              {profile.title}
            </span>
            {profile.subtitles.map((s) => (
              <span key={s} className="flex items-center gap-4">
                <span className="h-1 w-1 rotate-45 bg-gold/60" />
                {s}
              </span>
            ))}
          </div>

          <p className="mt-8 max-w-md font-body text-xl italic text-rice/60 md:text-2xl">
            “{profile.tagline}.”
          </p>

          <div className="meander mt-10 h-4 w-56 opacity-70" />

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group relative overflow-hidden border border-gold/50 px-8 py-3.5 font-display text-[11px] uppercase tracking-[.3em] text-gold transition-colors hover:text-ink"
            >
              <span className="relative z-10">Summon Me</span>
              <span className="absolute inset-0 -translate-y-full bg-gold transition-transform duration-500 group-hover:translate-y-0" />
            </a>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 border border-transparent px-2 py-3.5 font-display text-[11px] uppercase tracking-[.3em] text-rice/60 transition hover:text-cinnabar-bright"
            >
              LinkedIn
              <span className="h-px w-8 bg-current transition-all group-hover:w-12" />
            </a>
          </div>
        </div>

        {/* right: vertical banner */}
        <div className="relative flex items-center justify-start gap-8 lg:justify-end">
          <div className="relative flex flex-col items-center">
            <span className="h-8 w-px bg-gradient-to-b from-transparent to-gold/60" />
            <div className="silk relative border border-gold/25 bg-ink-2/60 px-4 py-8 backdrop-blur-sm">
              <div className="writing-vertical font-han text-3xl leading-[1.5] tracking-[.35em] text-gold-soft/90 md:text-4xl">
                軟件質量保證
              </div>
              <span className="absolute -bottom-3 left-1/2 h-6 w-px -translate-x-1/2 bg-gradient-to-b from-gold/60 to-transparent" />
            </div>
            <div className="mt-8 animate-sway">
              <Seal chars="數據" size={70} />
            </div>
          </div>

          <div className="writing-vertical hidden font-ui text-[9px] uppercase tracking-[.5em] text-rice/35 sm:block">
            {profile.location}
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="font-ui text-[9px] uppercase tracking-[.4em] text-gold/50">
          Scroll
        </span>
        <span className="h-12 w-px bg-gradient-to-b from-gold/60 to-transparent" />
      </div>
    </section>
  );
}
