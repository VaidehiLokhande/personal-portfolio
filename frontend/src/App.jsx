import { useState, useEffect } from "react";
import "./App.css";
import myResume from "./Resume_vaidu.pdf";

import Profile from "./assets/Profile.png";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

const API = import.meta.env.VITE_API_URL;


function App() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("");
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
 fetch(`${API}/projects`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setProjects(data);
    })
    .catch(err => console.error("❌ ERROR:", err));
}, []);
  

 const staticProjects = [
  {
    title: "RemoteRehabAI",
    desc: "AI-powered rehabilitation platform for posture detection, exercise tracking, and remote patient monitoring.",
    stack: "Python · Flask · MediaPipe · React.js · SQLite · JavaScript",
    live: "#",
    github: "https://github.com/VaidehiLokhande/RemoteRehabAI"
  },

  {
    title: "Expense Tracker",
    desc: "Secure expense management system with authentication and financial tracking features.",
    stack: "Java · Spring Boot · JWT · MySQL",
    live: "#",
    github: "https://github.com/VaidehiLokhande/Expense-Tracker"
  },

  {
    title: "Hotel Management System",
    desc: "Android application for hotel booking, reservations, and customer management.",
    stack: "Android Studio · Java · MySQL · Postman",
    live: "#",
    github: "https://github.com/VaidehiLokhande/RemoteRehabAI"
  }

];
  return (
    <div className="app">
      <nav className="navbar">
  <div
    className="logo"
    onClick={() => setActiveSection("home")}
    style={{ cursor: "pointer" }}
  >
  
  </div>

  <ul className="nav-links">
  <li>
  <button
    className={activeSection === "home" ? "active-nav" : ""}
    onClick={() => setActiveSection("home")}
  >
    Home
  </button>
</li>

<li>
  <button
    className={activeSection === "about" ? "active-nav" : ""}
    onClick={() => setActiveSection("about")}
  >
    About
  </button>
</li>

<li>
  <button
    className={activeSection === "skills" ? "active-nav" : ""}
    onClick={() => setActiveSection("skills")}
  >
    Skills
  </button>
</li>

<li>
  <button
    className={activeSection === "projects" ? "active-nav" : ""}
    onClick={() => setActiveSection("projects")}
  >
    Projects
  </button>
</li>

<li>
  <button
    className={activeSection === "contact" ? "active-nav" : ""}
    onClick={() => setActiveSection("contact")}
  >
    Contact
  </button>
</li>
</ul>
</nav>

      {/* HERO */}
     
  {activeSection === "home" && (
  <div className="hero slide-section">
    <div className="hero-inner">

      {/* Left Side Content */}
      <div className="hero-content">
        <div className="hero-badge">
          <span className="dot"></span>
          Open to Opportunities
        </div>

        <h1>
          Hi, I'm <span>Vaidehi Lokhande</span>
        </h1>

        <div className="hero-text">
  <p className="hero-role">
    B.Tech CSE (AI & ML) Student
  </p>

  <p className="hero-desc">
    Aspiring Full Stack Developer passionate about
    building modern web applications and exploring
    Artificial Intelligence & Machine Learning.
  </p>
</div>

        <div className="hero-btns">
          <button
            className="btn-primary"
            onClick={() => setActiveSection("projects")}
          >
            View My Work
          </button>

          <a 
  href={myResume}
  target="_blank" 
  rel="noreferrer" 
  className="btn-ghost"
>
  Resume
</a>

           

          <a
            href="https://www.linkedin.com/in/vaidehi-lokhande-b3253b383/"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Right Side Profile Photo */}
      <div className="hero-image">
        <img src={Profile} alt="Vaidehi" />
      </div>

    </div>
  </div>
)}
      <hr className="divider" />

      {/* ABOUT */}
      {activeSection === "about" && (
<section className="section slide-section">
        <div className="section-label">About</div>
        <h2>Who I Am</h2>
        <div className="about-grid">
         <div className="about-text">
  <div className="about-text">
  <p>
    I am a B.Tech Computer Science Engineering (AI & ML) student
    with a strong interest in Web Development and Artificial
    Intelligence. I enjoy transforming ideas into practical
    applications that solve real-world problems and create
    meaningful user experiences.
  </p>

  <p>
    My expertise includes developing responsive web applications,
    working with modern technologies, and building AI/ML-based
    projects. I am passionate about continuous learning, exploring
    new technologies, and improving my technical and problem-solving
    skills.
  </p>

  <p>
    My goal is to grow as a software developer, contribute to
    innovative projects, and build solutions that make a positive
    impact through technology.
  </p>
</div>
</div>
          <div className="stats">
  {[
    ["10+", "Projects"],
    ["AI/ML", "Solutions"],
    ["5+", "Technologies"],
    ["100%", "Dedication"]
  ].map(([n, l]) => (
    <div className="stat-card" key={l}>
      <div className="stat-num">{n}</div>
      <div className="stat-label">{l}</div>
    </div>
  ))}
</div>
        </div>

      </section>
)}

      <hr className="divider" />

    {/* SKILLS */}
{activeSection === "skills" && (
  <section className="section slide-section">
    <div className="section-label">Skills</div>
    <h2>Technical Skills</h2>

    <div className="skills-grid">
      {[
        {
          title: "Programming",
          tags: ["Java", "Python", "JavaScript", "C++"]
        },
        {
          title: "Web Development",
          tags: ["HTML5", "CSS3", "React.js", "Node.js"]
        },
        {
          title: "Database",
          tags: ["MongoDB", "MySQL"]
        },
        {
          title: "AI & Machine Learning",
          tags: ["Machine Learning", "Data Analysis", "Model Development"]
        },
        {
          title: "Tools & Platforms",
          tags: ["GitHub", "VS Code", "Postman", "Vercel","Android Studio"]
        },
        {
          title: "Other Skills",
          tags: ["Problem Solving", "Teamwork", "Communication"]
        }
      ].map(({ title, tags }) => (
        <div className="skill-card" key={title}>
          <h3>{title}</h3>

          {tags.map((tag) => (
            <span className="skill-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      ))}
    </div>
  </section>
)}
      <hr className="divider" />

      {/* PROJECTS */}
{activeSection === "projects" && (
  <section className="section slide-section">
    <div className="section-label">Work</div>
    <h2>Projects</h2>

    <div className="projects-grid">

      {/* API projects */}
      {projects.length > 0 ? (
        projects.map((p) => (
          <div className="project-card" key={p.id || p.title}>

            {/* Tech Stack */}
            <div className="project-tag">
              {p.techStack?.replaceAll(",", " · ")}
            </div>

            {/* Title */}
            <h3>{p.title}</h3>

            {/* Description */}
            <p>{p.description}</p>

            {/* Links */}
            <div className="project-links">

              
              {p.githubUrl && (
                <a
                  className="project-link"
                  href={p.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              )}

            </div>
          </div>
        ))
      ) : (
        /* fallback UI */
        staticProjects.map((p) => (
          <div className="project-card" key={p.title}>

            <div className="project-tag">{p.stack}</div>

            <h3>{p.title}</h3>

            <p>{p.desc}</p>

            <div className="project-links">
              
              <a className="project-link" href={p.github} target="_blank" rel="noreferrer">
               <FaGithub /> GitHub
              </a>
            </div>

          </div>
        ))
      )}

    </div>
  </section>
)}
      <hr className="divider" />

{activeSection === "contact" && (
  <section className="contact-premium">

    <h2>Let’s Work Together </h2>

    <p className="subtitle">
      Open for internships, freelance & collaboration opportunities
    </p>

    <div className="contact-grid">

      <div className="contact-box">
        <FaEnvelope size={24} />
        <h3>Email</h3>
        <a href="mailto:lokhandevaidehi0@gmail.com">
         lokhandevaidehi0
         @gmail.com
        </a>
      </div>

      <div className="contact-box">
        <FaPhone size={24} />
        <h3>Phone</h3>
        <p>+91 7506808321</p>
      </div>

      <div className="contact-box">
        <FaMapMarkerAlt size={24} />
        <h3>Location</h3>
        <p>Pune, India</p>
      </div>

    </div>

    <div className="contact-actions">

      <a href="mailto:lokhandevaidehi0@gmail.com">
        <FaEnvelope /> Send Email
      </a>

      <a href="https://linkedin.com" target="_blank" rel="noreferrer">
        <FaLinkedin /> LinkedIn
      </a>

      <a href="https://github.com" target="_blank" rel="noreferrer">
        <FaGithub /> GitHub
      </a>

    </div>

  </section>
)}

      <footer>Built with React + Node.js + MySQL &nbsp;·&nbsp; © 2026 Vaidehi Lokhande</footer>
    </div>
  );
}

export default App;
