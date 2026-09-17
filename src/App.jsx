import { useEffect, useRef } from "react";
import gsap from "gsap";
import Lenis from "lenis";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechMarquee from "./components/TechMarquee";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Smooth anchor scrolling
    const handleAnchorClick = (e) => {
      const link = e.target.closest('a[href^="#"]');

      if (!link) return;

      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);

      if (!target) return;

      e.preventDefault();

      lenis.scrollTo(target, {
        offset: -80,
        duration: 1.5,
      });
    };

    document.addEventListener("click", handleAnchorClick);

    // Custom cursor
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      window.removeEventListener("mousemove", moveCursor);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <div className="custom-cursor" ref={cursorRef}></div>

      <Navbar />

      <main>
        <Hero />
        <TechMarquee />
        <About />
        <Projects />
        <Services />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;