import { education } from "../data";
import { CornerFrame, SectionTitle } from "./Ornaments";

export default function Education() {
  return (
    <section
      id="education"
      className="relative mx-auto max-w-6xl scroll-mt-20 px-6 py-24 md:px-12 md:py-32"
    >
      <SectionTitle han="學" label="Halls of Learning" index="IV" />

      <div className="grid gap-6 md:grid-cols-3">
        {education.map((e, i) => (
          <article
            key={e.degree + e.period}
            className="reveal group relative flex flex-col justify-between overflow-hidden border border-gold/15 bg-ink-2/60 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold/45"
            style={{ transitionDelay: `${i * 110}ms` }}
          >
            <CornerFrame size={18} />
            <span className="pointer-events-none absolute -bottom-6 -right-2 font-han text-8xl text-gold/[.06] transition-colors duration-700 group-hover:text-cinnabar/15">
              {e.han}
            </span>

            <div className="relative">
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center border border-gold/35 font-han text-sm text-gold">
                  {e.han}
                </span>
                <span className="h-px flex-1 bg-gold/20" />
              </div>
              <h3 className="font-display text-sm uppercase leading-relaxed tracking-[.16em] text-rice">
                {e.degree}
              </h3>
              <p className="mt-3 font-body text-lg italic leading-snug text-gold/75">
                {e.school}
              </p>
            </div>

            <div className="relative mt-8 font-ui text-[10px] uppercase tracking-[.28em] text-rice/40">
              {e.period}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
