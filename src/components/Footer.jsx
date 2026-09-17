import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-brand", {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });

      gsap.from(".footer-content p", {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.15,
        ease: "power3.out",
      });

      gsap.from(".footer-links a", {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
        },
        x: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.from(".footer-bottom", {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 95%",
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer className="footer" ref={footerRef}>
      {/* Main Footer */}
      <div className="footer-content">

        <div className="footer-brand">
          ABDULLAH<span>.</span>
        </div>

        <p>
          Full Stack Web Developer building modern digital
          experiences, business platforms and powerful web
          applications.
        </p>

        <div className="footer-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">

        <span>
          © 2026 ABDULLAH. ALL RIGHTS RESERVED.
        </span>

        <span>
          BUILT WITH{" "}
          <strong>REACT</strong>
          {" + "}
          <strong>GSAP</strong>
        </span>

        <a href="#top" className="back-top">
          BACK TO TOP ↗
        </a>

      </div>
    </footer>
  );
}

export default Footer;
