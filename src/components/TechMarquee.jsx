function TechMarquee() {
  const technologies = [
    "REACT",
    "LARAVEL",
    "JAVASCRIPT",
    "PHP",
    "MYSQL",
    "REST API",
    "HTML",
    "CSS",
  ];

  return (
    <section className="tech-marquee">
      <div className="marquee-track">
        {[...technologies, ...technologies].map((tech, index) => (
          <div className="tech-item" key={index}>
            <span>{tech}</span>
            <b>✦</b>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechMarquee;