import About from "@/components/About";
import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import Skills from "@/components/Skills";

let title = "Rajib Mia Rahid - Frontend Developer Portfolio | Creative Web Solutions";
let keywords =
  "frontend developer, web designer, HTML5, CSS3, JavaScript, responsive design, UI/UX, portfolio, web development projects, Rajib Mia Rahid";
let description =
  "Explore the innovative work of Rajib Mia Rahid, a skilled frontend developer dedicated to crafting captivating and user-friendly websites.";

export const metadata = {
  title: title,
  keywords: keywords,
  description: description,
  openGraph: {
    title: title,
    description: description,
    images: ["../images/rahid.png"],
  },
  twitter: {
    title: title,
    description: description,
  },
};

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
