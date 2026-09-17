import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01",
    category: "WEB APPLICATION",
    title: "Academy",
    titleAccent: "Management System",
    description:
      "A complete management platform designed to simplify academy operations, student records, teachers, schedules, attendance, exams and results.",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    featured: true,
  },
  {
    number: "02",
    category: "BUSINESS WEBSITE",
    title: "Modern",
    titleAccent: "Business Platform",
    description:
      "A professional digital platform focused on presenting services, building trust and creating a strong online presence.",
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
    featured: false,
  },
  {
    number: "03",
    category: "WEB APPLICATION",
    title: "API",
    titleAccent: "Based Application",
    description:
      "A dynamic web application connected with external APIs to deliver interactive and real-time information.",
    tech: ["React", "JavaScript", "REST API"],
    featured: false,
  },
];

function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".projects-label", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
      });

      gsap.from(".projects-title-line", {
        scrollTrigger: {
          trigger: ".projects-heading",
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power4.out",
      });

      gsap.from(".featured-project", {
        scrollTrigger: {
          trigger: ".featured-project",
          start: "top 78%",
        },
        y: 100,
        opacity: 0,
        duration: 1.1,
        ease: "power4.out",
      });

      gsap.from(".small-project", {
        scrollTrigger: {
          trigger: ".projects-grid-small",
          start: "top 80%",
        },
        y: 70,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="projects-new" id="work" ref={sectionRef}>
      <div className="projects-label">
        <span>02</span>
        SELECTED WORK
      </div>

      <div className="projects-heading">
        <span className="projects-title-line">SELECTED</span>
        <span className="projects-title-line">
          <span className="projects-outline">PROJECTS.</span>
        </span>
      </div>

      <div className="featured-project">
        <div className="featured-visual">
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

            <div className="dashboard-body">
              <div className="dashboard-sidebar">
                <div className="fake-logo">AMS.</div>

                <div className="side-item active"></div>
                <div className="side-item"></div>
                <div className="side-item"></div>
                <div className="side-item"></div>
                <div className="side-item"></div>
              </div>

              <div className="dashboard-main">
                <div className="dashboard-header">
                  <div>
                    <small>OVERVIEW</small>
                    <strong>Dashboard</strong>
                  </div>

                  <div className="fake-profile"></div>
                </div>

                <div className="stat-grid">
                  <div className="fake-stat">
                    <span>STUDENTS</span>
                    <strong>1,248</strong>
                    <i></i>
                  </div>

                  <div className="fake-stat">
                    <span>TEACHERS</span>
                    <strong>48</strong>
                    <i></i>
                  </div>

                  <div className="fake-stat">
                    <span>CLASSES</span>
                    <strong>32</strong>
                    <i></i>
                  </div>
                </div>

                <div className="chart-area">
                  <div className="chart-header">
                    <span>STUDENT OVERVIEW</span>
                    <span>2026</span>
                  </div>

                  <div className="chart">
                    <div className="chart-line"></div>

                    <span className="chart-point point-one"></span>
                    <span className="chart-point point-two"></span>
                    <span className="chart-point point-three"></span>
                    <span className="chart-point point-four"></span>
                    <span className="chart-point point-five"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="visual-caption">
            <span>01 / 03</span>
            <span>ACADEMY PLATFORM</span>
          </div>
        </div>

        <div className="featured-info">
          <div className="project-number">01</div>

          <div className="project-category">
            WEB APPLICATION
          </div>

          <h3>
            Academy
            <span>Management System</span>
          </h3>

          <p>
            A full-stack academy management platform built to
            bring students, teachers and administration into one
            organized digital system.
          </p>

          <div className="project-features">
            <span>STUDENT MANAGEMENT</span>
            <span>TEACHER MANAGEMENT</span>
            <span>ATTENDANCE</span>
            <span>EXAMS & RESULTS</span>
            <span>SCHEDULES</span>
            <span>FEES</span>
          </div>

          <div className="project-tech">
           <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=abdullah.mughal8520@gmail.com&su=Academy%20Management%20System%20Inquiry"
  target="_blank"
  rel="noopener noreferrer"
  className="case-study-button"
>
  VIEW CASE STUDY
  <span>↗</span>
</a>
          </div>

 
        </div>
      </div>

      <div className="projects-grid-small">
        {projects.slice(1).map((project) => (
          <article className="small-project" key={project.number}>
            <div className="small-project-visual">
              <div className="abstract-screen">
                <div className="abstract-header"></div>

                <div className="abstract-columns">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>

                <div className="abstract-chart">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>

              <span className="small-project-number">
                {project.number}
              </span>
            </div>

            <div className="small-project-info">
              <div className="project-category">
                {project.category}
              </div>

              <h3>
                {project.title}
                <span>{project.titleAccent}</span>
              </h3>

              <p>{project.description}</p>

              <div className="project-tech">
              <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=abdullah.mughal8520@gmail.com&su=Project%20Inquiry"
  target="_blank"
  rel="noopener noreferrer"
  className="small-project-link"
>
  EXPLORE PROJECT
  <span>↗</span>
</a>
              </div>

             
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;