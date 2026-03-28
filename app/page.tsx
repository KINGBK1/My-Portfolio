import HeroSection from "@/components/HeroSection/HeroSection";
import AboutMe from "@/components/AboutMe/AboutMe";
import TechStack from "@/components/TechStack/TechStack";
import Experience from "@/components/Experience/Experience";
import Education from "@/components/Education/Education";
import BlogArticles from "@/components/Blogarticles/Blogarticles";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <main className="bg-[#f5f5f0] min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutMe />
      <TechStack />
      <Experience />
      <Education />
      <BlogArticles />
      <Contact />
      <Footer />
    </main>
  );
}