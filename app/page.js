import About from "@/components/About";
import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <div>
        <HeroSection />
        <About />
        <ProjectsSection />
        <Skills />
        <Contact />
      </div>
    </>
  );
}
