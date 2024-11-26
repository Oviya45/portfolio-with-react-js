import React from "react";
import "./App.css"; 

const App = () => {
  return (
    <div>
      <Header />
      <CoverPage />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

const Header = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    window.scrollTo({
      top: section.offsetTop - 60, // Adjust for header height
      behavior: "smooth",
    });
  };

  return (
    <header className="header">
      <div className="logo">Oviya M.S</div>
      <nav>
        <ul>
          <li><a href="#" onClick={() => scrollToSection("about")}>About</a></li>
          <li><a href="#" onClick={() => scrollToSection("skills")}>Skills</a></li>
          <li><a href="#" onClick={() => scrollToSection("projects")}>Projects</a></li>
          <li><a href="#" onClick={() => scrollToSection("contact")}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

const CoverPage = () => (
  <section className="cover-page">
    <div>
      <h1>Welcome to My Portfolio</h1>
      <p>Student at Chennai Institute of Technology</p>
      <button
        className="btn"
        onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}
      >
        Get Started
      </button>
    </div>
  </section>
);

const AboutSection = () => (
  <div id="about" className="content-section">
    <h2>About Me</h2>
    <p>
      Hello! I’m Oviya M.S., a passionate and driven second-year student at Chennai Institute of Technology, with a focus on web development and software engineering...
    </p>
  </div>
);

const SkillsSection = () => (
  <div id="skills" className="content-section">
    <h2>Skills</h2>
    <div className="skills-list">
      {["C", "C++", "Java", "Python", "JavaScript", "HTML", "CSS", "React", "Node.js", "SQL"].map((skill) => (
        <div className="skill-item" key={skill}>{skill}</div>
      ))}
    </div>
  </div>
);

const ProjectsSection = () => (
  <div id="projects" className="projects content-section">
    <h2>My Projects</h2>
    {[
      { title: "Weather App", description: "A dynamic weather application built with HTML, CSS, and JavaScript..." },
      { title: "Hotel Management (C++)", description: "A simple hotel management system built in C++..." },
      { title: "Bank Account System (C++)", description: "A command-line application in C++..." },
      { title: "Virtual Health Assistant (Python)", description: "A Python-based virtual assistant designed..." },
    ].map((project, index) => (
      <div className="project-item" key={index}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    ))}
  </div>
);

const ContactSection = () => (
  <div id="contact" className="content-section">
    <h2>Contact</h2>
    <form className="contact-form">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </div>
);

const Footer = () => (
  <footer>
    <p>© 2024 Oviya M.S. | All Rights Reserved</p>
  </footer>
);

export default App;


