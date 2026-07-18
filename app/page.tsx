import dynamic from "next/dynamic";
import { AppShell, Background, BackToTop, ScrollProgress } from "@/components/ui";
import { Navbar } from "@/components/layout";
import { Hero, Footer } from "@/components/sections";

const About = dynamic(() => import("@/components/sections/About"), {
  loading: () => <div className="min-h-screen" aria-hidden="true" />,
});
const Skills = dynamic(() => import("@/components/sections/Skills"), {
  loading: () => <div className="min-h-screen" aria-hidden="true" />,
});
const Experience = dynamic(() => import("@/components/sections/Experience"), {
  loading: () => <div className="min-h-screen" aria-hidden="true" />,
});
const Projects = dynamic(() => import("@/components/sections/Projects"), {
  loading: () => <div className="min-h-screen" aria-hidden="true" />,
});
const Contact = dynamic(() => import("@/components/sections/Contact"), {
  loading: () => <div className="min-h-screen" aria-hidden="true" />,
});

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#030712] text-white">
      <Background />
      <ScrollProgress />
      <AppShell>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </AppShell>
      <BackToTop />
    </main>
  );
}
