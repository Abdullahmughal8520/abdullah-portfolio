import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-label", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".contact-heading span", {
        scrollTrigger: {
          trigger: ".contact-heading",
          start: "top 82%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power4.out",
      });

      gsap.from(".contact-text", {
        scrollTrigger: {
          trigger: ".contact-text",
          start: "top 85%",
        },
        y: 35,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".contact-button", {
        scrollTrigger: {
          trigger: ".contact-button",
          start: "top 90%",
        },
        y: 30,
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        ease: "back.out(1.7)",
      });

      gsap.to(".contact-glow", {
        x: -80,
        y: 60,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="contact-section"
      id="contact"
      ref={sectionRef}
    >
      <div className="contact-glow"></div>

      {/* Section Label */}
      <div className="contact-label">
        <span>04</span>
        LET'S WORK TOGETHER
      </div>

      {/* Main Content */}
      <div className="contact-content">
        <h2 className="contact-heading">
          <span>HAVE A PROJECT</span>

          <span>IN MIND?</span>

          <span className="contact-highlight">
            LET'S BUILD IT.
          </span>
        </h2>

        <p className="contact-text">
          Have an idea, business website or web application
          in mind? Let's turn it into something modern,
          functional and built around your goals.
        </p>

       
      <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=abdullah.mughal8520@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="contact-button"
>
  <span>START A PROJECT</span>
  <span className="contact-button-arrow">↗</span>
</a>
      </div>

      {/* Bottom Meta */}
      <div className="contact-bottom">
        <span>
          AVAILABLE FOR FREELANCE PROJECTS
        </span>

        <span>
          BASED IN PAKISTAN
        </span>
      </div>
    </section>
  );
}

export default Contact;
