import About from "./components/About";
import Contact, { Footer } from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Skills from "./components/Skills";
import { Embers } from "./components/Ornaments";
import { useReveal } from "./hooks/useReveal";

export default function App() {
  useReveal();

  return (
    <div className="grain relative min-h-screen overflow-x-hidden bg-ink text-rice">
      {/* fixed atmospheric layers */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(90%_60%_at_50%_-10%,rgba(168,35,30,.10),transparent_60%)]" />
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[.5] [background-image:linear-gradient(rgba(200,162,74,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(200,162,74,.045)_1px,transparent_1px)] [background-size:90px_90px]" />
      <Embers />

      <Nav />

      <main className="relative z-10 lg:pl-20">
        <Hero />
        <div className="gold-rule mx-auto h-px max-w-5xl" />
        <About />
        <div className="gold-rule mx-auto h-px max-w-5xl" />
        <Experience />
        <div className="gold-rule mx-auto h-px max-w-5xl" />
        <Skills />
        <div className="gold-rule mx-auto h-px max-w-5xl" />
        <Education />
        <div className="gold-rule mx-auto h-px max-w-5xl" />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
