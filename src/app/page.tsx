import CanvasSequence from "@/components/CanvasSequence";
import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative bg-black w-full min-h-screen relative">
      <Navigation />

      {/* 3D Background Canvas Layer */}
      <CanvasSequence frameCount={216} />

      {/* Dark overlay to make content more readable against the background */}
      <div className="fixed inset-0 pointer-events-none z-[5] bg-black/70"></div>

      {/* Scrollable Content Container */}
      <div className="relative z-20 w-full flex flex-col items-center">
         <Hero />
         <About />
         <Skills />
         <Projects />
         <Experience />
         <Education />
         <Certifications />
         <Contact />
      </div>
    </main>
  );
}
