import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <>
      <div>
        <HeroSection />
        <About />
        <ProjectsSection />
      </div>
    </>
  );
}