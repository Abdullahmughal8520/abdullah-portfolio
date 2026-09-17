import { useEffect, useRef } from "react";
import gsap from "gsap";

function Hero() {
  const heroRef = useRef(null);
  const orbRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".hero-eyebrow", {
        y: 25,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".hero-title-line",
          {
            y: 120,
            opacity: 0,
            duration: 1.1,
            stagger: 0.1,
            ease: "power4.out",
          },
          "-=0.45"
        )
        .from(
          ".hero-copy",
          {
            y: 25,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.55"
        )
        .from(
          ".hero-actions",
          {
            y: 25,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.45"
        )
        .from(
          ".hero-meta",
          {
            opacity: 0,
            duration: 0.8,
          },
          "-=0.35"
        );

      gsap.to(orbRef.current, {
        rotate: 360,
        duration: 25,
        repeat: -1,
        ease: "none",
      });
    }, heroRef);

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      gsap.to(orbRef.current, {
        x: x * 35,
        y: y * 35,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.to(glowRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 1,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="hero-new" id="top" ref={heroRef}>
      <div className="hero-noise"></div>
      <div className="hero-grid-new"></div>

      <div className="hero-mouse-glow" ref={glowRef}></div>

      <div className="hero-orb" ref={orbRef}>
        <div className="orb-ring ring-one"></div>
        <div className="orb-ring ring-two"></div>
        <div className="orb-core"></div>
        <div className="orb-dot dot-one"></div>
        <div className="orb-dot dot-two"></div>
      </div>

      <div className="hero-top-meta">
        <span>PORTFOLIO / 2026</span>
        <span>FULL STACK DEVELOPER</span>
      </div>

      <div className="hero-main">
        <div className="hero-eyebrow">
          <span className="eyebrow-line"></span>
          DIGITAL PRODUCT DEVELOPER
        </div>

        <h1 className="hero-title-new">
          <span className="hero-title-line">I BUILD</span>

          <span className="hero-title-line outline-title">
            DIGITAL
          </span>

          <span className="hero-title-line">
            <span className="accent-title">SYSTEMS</span>
            <span className="ampersand">&</span>
            EXPERIENCES.
          </span>
        </h1>

        <div className="hero-bottom">
          <p className="hero-copy">
            I design and develop modern web applications,
            business platforms and digital experiences that
            turn ideas into real products.
          </p>

          <div className="hero-actions">
            <a href="#work" className="hero-action primary-action">
              EXPLORE WORK
              <span>↗</span>
            </a>

            <a href="#contact" className="hero-action secondary-action">
              START A PROJECT
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>

      <div className="hero-meta">
        <div className="hero-location">
          <span className="status-dot"></span>
          AVAILABLE FOR PROJECTS
        </div>

        <div className="hero-scroll">
          <span>SCROLL</span>
          <div className="scroll-line"></div>
        </div>

        <div className="hero-index">
          01 <span>/</span> 06
        </div>
      </div>
    </section>
  );
}

export default Hero;