import { profile, virtues } from "../data";
import { Panel, Ring, SectionTitle, Seal } from "./Ornaments";

const facts = [
  { k: "Born", v: profile.birthday, han: "生" },
  { k: "Base", v: "Dhaka, Bangladesh", han: "居" },
  { k: "Focus", v: "Quality Assurance", han: "業" },
  { k: "Degree", v: "B.Sc. Computer Eng.", han: "位" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-6xl scroll-mt-20 px-6 py-24 md:px-12 md:py-32"
    >
      <SectionTitle han="志" label="The Scroll of Self" index="I" />

      <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr]">
        {/* the scroll */}
        <div className="reveal">
          <Panel className="p-8 md:p-12">
            <div className="meander mb-8 h-4 w-full opacity-40" />
            <p className="font-body text-lg leading-relaxed text-rice/85 md:text-xl">
              <span className="float-left mr-3 mt-1 font-han text-5xl leading-none text-cinnabar-bright">
                精
              </span>
              {profile.about}
            </p>
            <p className="mt-6 font-body text-lg leading-relaxed text-rice/70 md:text-xl">
              {profile.about2}
            </p>
            <div className="mt-10 flex items-end justify-between gap-6">
              <div className="gold-rule h-px flex-1" />
              <Seal chars="羅比" size={62} />
            </div>
          </Panel>
        </div>

        {/* portrait medallion + facts */}
        <div className="reveal space-y-8" style={{ transitionDelay: "120ms" }}>
          <div className="relative mx-auto grid h-60 w-60 place-items-center">
            <Ring className="absolute inset-0 h-full w-full" />
            <div className="grid h-40 w-40 place-items-center rounded-full border border-gold/30 bg-[radial-gradient(circle_at_30%_25%,rgba(200,162,74,.20),rgba(8,7,10,.9))]">
              <div className="text-center">
                <div className="font-han text-4xl text-gold-soft">羅比烏斯</div>
                <div className="mt-2 font-ui text-[8px] uppercase tracking-[.35em] text-rice/45">
                  Robious
                </div>
              </div>
            </div>
          </div>

          <ul className="divide-y divide-gold/10 border-y border-gold/15">
            {facts.map((f) => (
              <li key={f.k} className="flex items-center gap-4 py-3.5">
                <span className="font-han text-base text-cinnabar-bright/80">
                  {f.han}
                </span>
                <span className="font-ui text-[10px] uppercase tracking-[.3em] text-rice/40">
                  {f.k}
                </span>
                <span className="ml-auto font-display text-xs uppercase tracking-[.16em] text-rice/85">
                  {f.v}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* four virtues */}
      <div className="mt-16 grid gap-px border border-gold/15 bg-gold/10 sm:grid-cols-2 lg:grid-cols-4">
        {virtues.map((v, i) => (
          <div
            key={v.han}
            className="reveal group relative overflow-hidden bg-ink-2 p-7 transition-colors duration-500 hover:bg-ink-3"
            style={{ transitionDelay: `${i * 90}ms` }}
          >
            <span className="pointer-events-none absolute -right-2 -top-4 font-han text-7xl text-gold/[.07] transition-all duration-700 group-hover:text-cinnabar/20">
              {v.han}
            </span>
            <div className="font-han text-2xl text-gold">{v.han}</div>
            <h3 className="mt-4 font-display text-xs uppercase tracking-[.3em] text-rice">
              {v.title}
            </h3>
            <p className="mt-3 font-body text-base leading-snug text-rice/55">
              {v.text}
            </p>
            <span className="absolute bottom-0 left-0 h-px w-0 bg-cinnabar-bright transition-all duration-500 group-hover:w-full" />
          </div>
        ))}
      </div>
    </section>
  );
}
