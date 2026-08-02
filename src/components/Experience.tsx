import { experience } from "../data";
import { CornerFrame, SectionTitle } from "./Ornaments";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative mx-auto max-w-6xl scroll-mt-20 px-6 py-24 md:px-12 md:py-32"
    >
      <SectionTitle han="歷" label="Path of Service" index="II" />

      <div className="relative pl-10 md:pl-16">
        {/* the pillar */}
        <div className="absolute bottom-0 left-[13px] top-0 w-px bg-gradient-to-b from-transparent via-gold/35 to-transparent md:left-[21px]" />

        <ol className="space-y-10">
          {experience.map((job, i) => (
            <li
              key={`${job.company}-${job.period}`}
              className="reveal relative"
              style={{ transitionDelay: `${(i % 3) * 90}ms` }}
            >
              {/* node lantern */}
              <span className="absolute -left-10 top-6 md:-left-16">
                <span className="relative grid h-7 w-7 place-items-center md:h-11 md:w-11">
                  <span className="absolute inset-0 rotate-45 border border-gold/40" />
                  <span
                    className={`h-2 w-2 rotate-45 ${
                      i === 0
                        ? "bg-cinnabar-bright shadow-[0_0_14px_2px_rgba(211,63,46,.75)]"
                        : "bg-gold/70"
                    }`}
                  />
                </span>
              </span>

              <article className="silk group relative border border-gold/15 bg-ink-2/60 p-6 transition-all duration-500 hover:border-gold/40 hover:bg-ink-3/70 md:p-8">
                <CornerFrame size={18} />
                <span className="pointer-events-none absolute right-4 top-2 font-han text-6xl text-gold/[.06] transition-colors duration-700 group-hover:text-gold/[.13] md:text-7xl">
                  {job.han}
                </span>

                <div className="relative flex flex-wrap items-center gap-3">
                  <span className="border border-cinnabar/50 bg-cinnabar/10 px-2.5 py-1 font-ui text-[9px] uppercase tracking-[.28em] text-cinnabar-bright">
                    {job.period}
                  </span>
                  <span className="font-ui text-[9px] uppercase tracking-[.28em] text-rice/40">
                    {job.duration} · {job.type}
                    {job.place ? ` · ${job.place}` : ""}
                  </span>
                  {i === 0 && (
                    <span className="ml-auto font-han text-[11px] text-gold">
                      現任
                    </span>
                  )}
                </div>

                <h3 className="relative mt-4 font-display text-lg tracking-[.06em] text-rice md:text-xl">
                  {job.role}
                </h3>
                <div className="relative mt-1.5 font-body text-lg italic text-gold/80">
                  {job.company}
                </div>

                <ul className="relative mt-4 space-y-1.5">
                  {job.notes.map((n) => (
                    <li
                      key={n}
                      className="flex gap-3 font-body text-base leading-snug text-rice/55"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rotate-45 bg-gold/60" />
                      {n}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
