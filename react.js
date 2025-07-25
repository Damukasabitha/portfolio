// File: src/App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

// File: src/components/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">MyPortfolio</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

// File: src/components/Home.js
import React from 'react';
import './Home.css';
import homeBg from '../assets/home-bg.jpg';

const Home = () => {
  return (
    <section id="home" className="home" style={{ backgroundImage: `url(${homeBg})` }}>
      <div className="home-content">
        <h1>Hi, I'm Sabitha Damuka</h1>
        <p>Passionate Web Developer crafting modern and responsive web experiences.</p>
      </div>
    </section>
  );
};

export default Home;

// File: src/components/About.js
import React from 'react';
import './About.css';
import myPhoto from '../assets/me.jpg';
import resumeFile from '../assets/resume.pdf';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <img src={myPhoto} alt="Myself" />
        <div>
          <p>I am a web developer with experience in building responsive websites using React, HTML, CSS, and JavaScript.</p>
          <a href={resumeFile} className="download-btn" download>Download Resume</a>
        </div>
      </div>
    </section>
  );
};

export default About;

// File: src/components/Education.js
import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education">
      <h2>Education</h2>
      <ul>
        <li><strong>B.Tech in CSE</strong> - XYZ University (2021 - 2025)</li>
        <li><strong>Intermediate</strong> - ABC Junior College (2019 - 2021)</li>
        <li><strong>SSC</strong> - Govt High School (2018 - 2019)</li>
      </ul>
    </section>
  );
};

export default Education;

// File: src/components/Projects.js
import React from 'react';
import './Projects.css';
import proj1 from '../assets/proj1.jpg';
import proj2 from '../assets/proj2.jpg';
import proj3 from '../assets/proj3.jpg';
import proj4 from '../assets/proj4.jpg';

const Projects = () => {
  const projects = [
    { img: proj1, title: 'Portfolio Website', desc: 'Personal website built with React.' },
    { img: proj2, title: 'Malware Detection', desc: 'Machine learning project to detect malware.' },
    { img: proj3, title: 'Car Price Predictor', desc: 'ML project to predict car prices.' },
    { img: proj4, title: 'Library Chatbot', desc: 'Chatbot that helps users find books.' },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <img src={proj.img} alt={proj.title} />
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

// File: src/components/Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <div className="contact-container">
        <div className="contact-left">
          <h3>Let's connect</h3>
          <p>Email: sabitha@example.com</p>
          <p>Phone: +91 9876543210</p>
        </div>
        <form className="contact-right">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

// File: src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 Sabitha Damuka</p>
      <div className="footer-links">
        <a href="https://github.com/username" target="_blank">GitHub</a>
        <a href="https://linkedin.com/in/username" target="_blank">LinkedIn</a>
        <a href="mailto:sabitha@example.com">Email</a>
      </div>
    </footer>
  );
};

export default Footer;
