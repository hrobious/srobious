import { useEffect, useRef, useState } from "react";
import { skills } from "../data";
import { SectionTitle } from "./Ornaments";

const tools = [
  "Test Cases",
  "Bug Reports",
  "JIRA",
  "Excel / Sheets",
  "SQL",
  "Python (basics)",
  "Power BI",
  "Data Labeling",
  "Statistics",
  "Documentation",
  "Agile / Scrum",
  "Attention to Detail",
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="relative mx-auto max-w-6xl scroll-mt-20 px-6 py-24 md:px-12 md:py-32"
    >
      <SectionTitle han="藝" label="Disciplines of Craft" index="III" />

      <div ref={ref} className="grid gap-14 lg:grid-cols-2">
        <div className="space-y-7">
          {skills.map((s, i) => (
            <div key={s.name} className="reveal" style={{ transitionDelay: `${i * 70}ms` }}>
              <div className="mb-2 flex items-baseline gap-3">
                <span className="font-han text-sm text-cinnabar-bright/85">
                  {s.han}
                </span>
                <span className="font-display text-[11px] uppercase tracking-[.22em] text-rice/85">
                  {s.name}
                </span>
                <span className="ml-auto font-ui text-[10px] tracking-[.2em] text-gold/60">
                  {s.level}
                </span>
              </div>
              <div className="relative h-[3px] w-full bg-rice/10">
                <div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-cinnabar via-gold to-gold-soft transition-[width] duration-[1400ms] ease-out"
                  style={{
                    width: on ? `${s.level}%` : "0%",
                    transitionDelay: `${i * 120}ms`,
                  }}
                />
                <span
                  className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 bg-gold shadow-[0_0_10px_rgba(200,162,74,.9)] transition-[left] duration-[1400ms] ease-out"
                  style={{
                    left: on ? `calc(${s.level}% - 4px)` : "-4px",
                    transitionDelay: `${i * 120}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="reveal">
          <div className="silk relative h-full border border-gold/15 bg-ink-2/60 p-8">
            <div className="writing-vertical absolute right-6 top-6 font-han text-xl tracking-[.3em] text-gold/25">
              工欲善其事
            </div>
            <h3 className="font-display text-xs uppercase tracking-[.3em] text-gold">
              Tools & Instruments
            </h3>
            <p className="mt-3 max-w-[80%] font-body text-base italic text-rice/50">
              “To do a good job, one must first sharpen one's tools.”
            </p>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {tools.map((t) => (
                <span
                  key={t}
                  className="group cursor-default border border-gold/20 px-3.5 py-1.5 font-ui text-[10px] uppercase tracking-[.18em] text-rice/65 transition-all duration-300 hover:border-cinnabar-bright/70 hover:bg-cinnabar/15 hover:text-rice"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="meander mt-10 h-4 w-full opacity-40" />
          </div>
        </div>
      </div>
    </section>
  );
}
