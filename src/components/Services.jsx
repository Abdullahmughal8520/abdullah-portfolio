import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "High-performance websites built with clean architecture, responsive layouts and a strong focus on user experience.",
    tag: "DIGITAL / 01",
  },
  {
    number: "02",
    title: "Laravel Development",
    description:
      "Scalable backend systems, authentication, dashboards, databases and business applications built with Laravel.",
    tag: "SYSTEMS / 02",
  },
  {
    number: "03",
    title: "React Development",
    description:
      "Interactive interfaces built with reusable components, smooth interactions and modern frontend architecture.",
    tag: "INTERFACE / 03",
  },
  {
    number: "04",
    title: "Business Websites",
    description:
      "Professional digital experiences designed to communicate your brand, build trust and turn visitors into clients.",
    tag: "BUSINESS / 04",
  },
  {
    number: "05",
    title: "Admin Dashboards",
    description:
      "Powerful role-based dashboards that turn complex business data into clear, organized and usable interfaces.",
    tag: "CONTROL / 05",
  },
  {
    number: "06",
    title: "API Integration",
    description:
      "Connect your application with external services and APIs to create dynamic, data-driven experiences.",
    tag: "CONNECT / 06",
  },
];

function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Label reveal
      gsap.from(".services-label", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
        },
        y: 25,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Heading reveal
      gsap.from(".services-heading span", {
        scrollTrigger: {
          trigger: ".services-heading",
          start: "top 82%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power4.out",
      });

      // Cards reveal
      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 82%",
        },
        y: 70,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
      });

      // Subtle heading movement
      gsap.to(".services-highlight", {
        scrollTrigger: {
          trigger: ".services-heading",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        x: 25,
        ease: "none",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="services-section"
      id="services"
      ref={sectionRef}
    >
      {/* Header */}
      <div className="services-label">
        <span>03</span>
        WHAT I DO
      </div>

      <h2 className="services-heading">
        <span>TURNING</span>

        <span className="services-highlight">
          IDEAS
        </span>

        <span>INTO DIGITAL</span>

        <span>PRODUCTS.</span>
      </h2>

      {/* Services */}
      <div className="services-grid">
        {services.map((service) => (
          <article
            className="service-card"
            key={service.number}
          >
            <div className="service-top">
              <span className="service-number">
                {service.tag}
              </span>

              <span className="service-arrow">
                ↗
              </span>
            </div>

            <div className="service-content">
              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </div>

            <div className="service-line"></div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
