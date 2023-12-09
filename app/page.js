import About from "@/components/About";
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
      </div>
    </>
  );
}
