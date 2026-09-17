function Navbar() {
  return (
    <nav className="navbar">
      <a href="#top" className="logo">
        ABDULLAH<span>.</span>
      </a>

      <div className="nav-links">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>

<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=abdullah.mughal8520@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="nav-button"
>
  <span className="nav-button-text">Let's Talk</span>
  <span className="nav-button-arrow">↗</span>
</a>
    </nav>
  );
}

export default Navbar;
