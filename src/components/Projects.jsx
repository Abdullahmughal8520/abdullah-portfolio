import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import academyDashboardImage from "../assets/academy-dashboard.png";
// import academyDemoVideo from "../assets/academy-demo.mp4";
import currencyTrackerImage from "../assets/currency-tracker.png";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01",
    category: "WEB APPLICATION",
    title: "Academy",
    titleAccent: "Management System",
    description:
      "A complete academy management platform designed to simplify student, teacher, academic, attendance, examination, scheduling and fee management.",
    tech: ["LARAVEL", "PHP", "MYSQL", "BOOTSTRAP"],
    features: [
      "STUDENT MANAGEMENT",
      "TEACHER MANAGEMENT",
      "ATTENDANCE",
      "EXAMS & RESULTS",
      "SCHEDULES",
      "FEES",
    ],
    featured: true,
  },
  {
    number: "02",
    category: "WEB APPLICATION",
    title: "Currency",
    titleAccent: "Live Tracker",
    description:
      "A modern currency tracking application with live exchange rates, historical charts, currency conversion, favorites and a simulated paper trading experience.",
    tech: ["REACT", "JAVASCRIPT", "API", "RECHARTS"],
    liveUrl: "https://currency-live-tracker.vercel.app/",
    githubUrl:
      "https://github.com/Abdullahmughal8520/currency-live-tracker",
    image: currencyTrackerImage,
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  // const [showDemo, setShowDemo] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".projects-label", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-label",
          start: "top 85%",
        },
      });

      gsap.from(".projects-title-line", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".projects-title",
          start: "top 80%",
        },
      });

      gsap.from(".featured-project", {
        y: 70,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".featured-project",
          start: "top 82%",
        },
      });

      gsap.from(".small-project", {
        y: 70,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".small-project",
          start: "top 82%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="projects-new"
      id="work"
      ref={sectionRef}
    >
      <div className="projects-container">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="projects-header">
          <div className="projects-label">
            SELECTED PROJECTS.
          </div>

          <h2 className="projects-title">
            <span className="projects-title-line">
              BUILT TO
            </span>

            <span className="projects-title-line">
              <span className="projects-title-accent">
                SOLVE.
              </span>
            </span>
          </h2>
        </div>

        {/* =====================================================
            FEATURED PROJECT — ACADEMY
        ===================================================== */}

        <div className="featured-project">

          {/* LEFT — PROJECT PREVIEW */}

          <div className="featured-project-visual">

            <div className="dashboard-window">

              <div className="window-bar">

                <div className="window-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <span className="window-title">
                  ACADEMY MANAGEMENT SYSTEM
                </span>

              </div>

              <div className="academy-screenshot">
                <img
                  src={academyDashboardImage}
                  alt="Academy Management System Dashboard"
                />
              </div>

            </div>

            <div className="visual-caption">
              <span>01 / ACADEMY MANAGEMENT SYSTEM</span>
              <span>WEB APPLICATION</span>
            </div>

          </div>

          {/* RIGHT — PROJECT INFO */}

          <div className="featured-project-info">

            <div className="project-number">
              {projects[0].number}
            </div>

            <div className="project-category">
              {projects[0].category}
            </div>

            <h3 className="featured-project-title">
              {projects[0].title}
              <span>{projects[0].titleAccent}</span>
            </h3>

            <p className="featured-project-description">
              {projects[0].description}
            </p>

            {/* FEATURES */}

            <div className="project-features">
              {projects[0].features.map((feature) => (
                <span key={feature}>
                  {feature}
                </span>
              ))}
            </div>

            {/* TECH */}

            <div className="project-tech">
              {projects[0].tech.map((tech) => (
                <span key={tech}>
                  {tech}
                </span>
              ))}
            </div>

            {/* ACTIONS */}

            <div className="project-actions">

        <button
  type="button"
  className="demo-button"
  onClick={() => setShowDemo(true)}
>
  WATCH DEMO
  <span>↗</span>
</button>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=abdullah.mughal8520@gmail.com&su=Academy%20Management%20System%20Inquiry"
                target="_blank"
                rel="noreferrer"
                className="case-study-button"
              >
                VIEW CASE STUDY
                <span>↗</span>
              </a>

            </div>

          </div>
        </div>

        {/* =====================================================
            OTHER PROJECTS
        ===================================================== */}

        <div className="projects-grid-small">

          {projects
            .filter((project) => !project.featured)
            .map((project) => (

              <article
                className="small-project"
                key={project.number}
              >

                {/* PROJECT VISUAL */}

                <div className="small-project-visual">

                  {project.image ? (

                    <div className="currency-preview">

                      <div className="currency-window-bar">

                        <div className="currency-window-dots">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>

                        <span>
                          CURRENCY LIVE TRACKER
                        </span>

                      </div>

                      <div className="currency-screen">

                        <img
                          src={project.image}
                          alt={`${project.title} ${project.titleAccent}`}
                        />

                      </div>

                    </div>

                  ) : (

                    <div className="abstract-screen">
                      <span>
                        {project.title}
                      </span>
                    </div>

                  )}

                  <span className="small-project-number">
                    {project.number}
                  </span>

                </div>

                {/* PROJECT INFO */}

                <div className="small-project-info">

                  <div className="project-category">
                    {project.category}
                  </div>

                  <h3 className="small-project-title">
                    {project.title}
                    <span>{project.titleAccent}</span>
                  </h3>

                  <p className="small-project-description">
                    {project.description}
                  </p>

                  <div className="project-tech">
                    {project.tech.map((tech) => (
                      <span key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="small-project-actions">

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="case-study-button"
                    >
                      LIVE DEMO
                      <span>↗</span>
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="case-study-button"
                    >
                      GITHUB
                      <span>↗</span>
                    </a>

                  </div>

                </div>

              </article>

            ))}

        </div>

      </div>

      {/* =====================================================
          ACADEMY DEMO MODAL
      ===================================================== */}

    </section>
  );
}