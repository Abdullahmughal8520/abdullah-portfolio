import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-label", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".about-heading span", {
        scrollTrigger: {
          trigger: ".about-heading",
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power4.out",
      });

      gsap.from(".about-text p", {
        scrollTrigger: {
          trigger: ".about-content",
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(".about-stat", {
        scrollTrigger: {
          trigger: ".about-stats",
          start: "top 85%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="about-section"
      id="about"
      ref={sectionRef}
    >
      {/* Section Label */}
      <div className="about-label">
        <span>01</span>
        ABOUT ME
      </div>

      {/* Main Heading */}
      <h2 className="about-heading">
        <span>I DON'T JUST</span>
        <span>WRITE CODE.</span>
        <span>I BUILD</span>
        <span className="about-highlight">
          DIGITAL EXPERIENCES.
        </span>
      </h2>

      {/* Content */}
      <div className="about-content">

        {/* Description */}
        <div className="about-text">
          <p>
            I'm a <strong>Full Stack Web Developer</strong> focused
            on building modern websites, web applications and
            digital platforms that solve real-world problems.
          </p>

          <p>
            My development journey started with HTML, CSS,
            JavaScript, PHP and MySQL. I later moved into
            <strong> Laravel and React</strong> to build more
            powerful, scalable and interactive applications.
          </p>

          <p>
            I care about more than just making something work.
            I focus on clean interfaces, useful experiences,
            organized code and products that are actually
            valuable to the people using them.
          </p>
        </div>

        {/* Stats */}
        <div className="about-stats">

          <div className="about-stat">
            <strong>10+</strong>
            <span>TECHNOLOGIES</span>
          </div>

          <div className="about-stat">
            <strong>05+</strong>
            <span>PROJECTS BUILT</span>
          </div>

          <div className="about-stat">
            <strong>100%</strong>
            <span>PASSION FOR CODE</span>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;