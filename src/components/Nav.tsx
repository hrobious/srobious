import { useState } from "react";
import { nav } from "../data";
import { useActiveSection } from "../hooks/useReveal";

const ids = nav.map((n) => n.id);

export default function Nav() {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);
  useActiveSection(ids, setActive);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      {/* Desktop vertical rail */}
      <nav className="fixed left-0 top-0 z-40 hidden h-full w-20 flex-col items-center justify-between border-r border-gold/15 bg-ink/80 py-8 backdrop-blur-md lg:flex">
        <button
          onClick={() => go("hero")}
          className="group relative grid h-11 w-11 place-items-center border border-gold/40"
          aria-label="Home"
        >
          <span className="font-han text-lg text-gold transition group-hover:text-gold-soft">
            羅
          </span>
          <span className="absolute inset-0 bg-cinnabar/0 transition group-hover:bg-cinnabar/15" />
        </button>

        <ul className="flex flex-col items-center gap-7">
          {nav.map((n) => {
            const on = active === n.id;
            return (
              <li key={n.id}>
                <button
                  onClick={() => go(n.id)}
                  className="group flex flex-col items-center gap-2"
                  aria-label={n.label}
                >
                  <span
                    className={`font-han text-lg transition-colors duration-500 ${
                      on ? "text-cinnabar-bright" : "text-gold/45 group-hover:text-gold"
                    }`}
                  >
                    {n.han}
                  </span>
                  <span
                    className={`h-px transition-all duration-500 ${
                      on ? "w-6 bg-cinnabar-bright" : "w-2 bg-gold/30 group-hover:w-4"
                    }`}
                  />
                </button>
              </li>
            );
          })}
        </ul>

        <div className="writing-vertical font-ui text-[9px] tracking-[.4em] text-gold/40">
          DHAKA · BD
        </div>
      </nav>

      {/* Mobile bar */}
      <div className="fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-gold/15 bg-ink/90 px-5 py-3 backdrop-blur-md lg:hidden">
        <button onClick={() => go("hero")} className="flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center border border-gold/40 font-han text-sm text-gold">
            羅
          </span>
          <span className="font-display text-xs uppercase tracking-[.25em] text-rice/80">
            R. Sunny
          </span>
        </button>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          className="grid h-9 w-9 place-items-center border border-gold/30 text-gold"
        >
          <span className="font-han text-xs">{open ? "閉" : "門"}</span>
        </button>
      </div>

      <div
        className={`fixed inset-x-0 top-[57px] z-30 origin-top border-b border-gold/15 bg-ink/97 backdrop-blur-md transition-all duration-500 lg:hidden ${
          open ? "scale-y-100 opacity-100" : "pointer-events-none scale-y-0 opacity-0"
        }`}
      >
        <ul className="divide-y divide-gold/10">
          {nav.map((n) => (
            <li key={n.id}>
              <button
                onClick={() => go(n.id)}
                className="flex w-full items-center justify-between px-6 py-4"
              >
                <span className="font-display text-sm uppercase tracking-[.25em] text-rice/85">
                  {n.label}
                </span>
                <span
                  className={`font-han text-base ${
                    active === n.id ? "text-cinnabar-bright" : "text-gold/50"
                  }`}
                >
                  {n.han}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
