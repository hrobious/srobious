import { useState } from "react";
import { profile } from "../data";
import { SectionTitle, Seal } from "./Ornaments";

const rows = [
  {
    han: "郵",
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    copy: profile.email,
  },
  {
    han: "話",
    label: "Mobile",
    value: profile.phone,
    href: `tel:${profile.phone}`,
    copy: profile.phone,
  },
  {
    han: "網",
    label: "LinkedIn",
    value: profile.linkedin,
    href: profile.linkedinUrl,
    copy: profile.linkedinUrl,
  },
  {
    han: "址",
    label: "Address",
    value: profile.address,
    href: "",
    copy: profile.address,
  },
];

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(label);
      setTimeout(() => setCopied(null), 1600);
    } catch {
      /* ignore */
    }
  };

  return (
    <section
      id="contact"
      className="relative mx-auto max-w-6xl scroll-mt-20 px-6 py-24 md:px-12 md:py-32"
    >
      <SectionTitle han="訊" label="Send a Message" index="V" />

      <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
        <ul className="divide-y divide-gold/10 border-y border-gold/15">
          {rows.map((r, i) => (
            <li
              key={r.label}
              className="reveal group relative"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 px-1 py-5 transition-colors duration-500 group-hover:bg-gold/[.04]">
                <span className="grid h-9 w-9 shrink-0 place-items-center border border-gold/30 font-han text-sm text-gold transition-colors duration-500 group-hover:border-cinnabar-bright group-hover:text-cinnabar-bright">
                  {r.han}
                </span>
                <span className="w-20 font-ui text-[10px] uppercase tracking-[.3em] text-rice/40">
                  {r.label}
                </span>
                {r.href ? (
                  <a
                    href={r.href}
                    target={r.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="font-body text-lg text-rice/90 underline-offset-4 transition hover:text-gold-soft hover:underline md:text-xl"
                  >
                    {r.value}
                  </a>
                ) : (
                  <span className="font-body text-lg text-rice/80 md:text-xl">
                    {r.value}
                  </span>
                )}
                <button
                  onClick={() => copy(r.copy, r.label)}
                  className="ml-auto font-ui text-[9px] uppercase tracking-[.28em] text-gold/45 transition hover:text-gold"
                >
                  {copied === r.label ? "✓ Copied" : "Copy"}
                </button>
              </div>
            </li>
          ))}
        </ul>

        <div className="reveal flex flex-col items-center gap-6 lg:pl-10">
          <div className="silk relative border border-gold/25 bg-ink-2/60 px-5 py-9">
            <div className="writing-vertical font-han text-2xl leading-[1.6] tracking-[.3em] text-gold-soft/85">
              以誠待人
            </div>
          </div>
          <p className="max-w-[190px] text-center font-body text-base italic text-rice/45">
            Treat others with sincerity — open to new opportunities.
          </p>
          <div className="animate-sway">
            <Seal chars="聯絡" size={72} />
          </div>
        </div>
      </div>

      <div className="reveal mt-16 flex flex-col items-center gap-6 border border-gold/15 bg-[radial-gradient(80%_120%_at_50%_0%,rgba(168,35,30,.16),transparent)] px-6 py-12 text-center">
        <h3 className="font-display text-xl uppercase tracking-[.22em] text-rice md:text-2xl">
          Ready to raise your quality standard
        </h3>
        <p className="max-w-xl font-body text-lg text-rice/55">
          Available for Software Quality Assurance, data analysis and annotation
          roles — remote or on-site in Dhaka.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="group relative overflow-hidden border border-cinnabar-bright/60 px-9 py-3.5 font-display text-[11px] uppercase tracking-[.3em] text-cinnabar-bright transition-colors hover:text-rice"
        >
          <span className="relative z-10">Write to Me</span>
          <span className="absolute inset-0 -translate-x-full bg-cinnabar transition-transform duration-500 group-hover:translate-x-0" />
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-gold/15 px-6 py-10 md:px-12">
      <div className="meander absolute inset-x-0 top-0 h-4 opacity-30" />
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <span className="font-han text-sm text-gold/50">羅比烏斯 · 質量保證</span>
        <span className="font-ui text-[9px] uppercase tracking-[.3em] text-rice/35">
          © {new Date().getFullYear()} {profile.name} · Dhaka, Bangladesh
        </span>
        <a
          href="#hero"
          className="font-ui text-[9px] uppercase tracking-[.3em] text-gold/50 transition hover:text-gold"
        >
          ↑ Back to top
        </a>
      </div>
    </footer>
  );
}
