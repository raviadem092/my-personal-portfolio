import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa"; // icon for link
import "./Projects.css";

const projects = [
  {
    title: "Cricket Scoreboard App",
    description:
      "A local cricket scorecard app using React Native, Node.js, and MySQL. Score your local tournaments with ease and track live updates.",
    url: "https://cricketscorecardravikumaradem.vercel.app/",
    img: "https://www.dpolohotels.com/wp-content/uploads/2025/04/Dharamshala-Cricket-Stadium_-Upcoming-Matches-Events-Best-Places-to-Stay-%E2%80%93-A-Guide-by-DPolo-Club-Spa-Resort.jpg",
  },
  {
    title: "Personal Portfolio",
    description:
      "Modern React portfolio with Bootstrap and Framer Motion animations showcasing projects and skills in a creative layout.",
    url: "https://github.com/ravikumaradem/portfolio",
    img: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Recordent Platform",
    description:
      "Collections and Management & analytics platform for Recordent Pvt Ltd, a leading credit management service provider.",
    url: "https://recordent.com",
    img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80",
    isExternalSite: true,
  },
];

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map(({ title, description, url, img, }) => (
          <div key={title} className="project-card">
            <div className="project-img-wrapper">
              <img src={img} alt={title} />
            </div>
            <div className="project-info">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
            <hr />
            <div className="project-link-wrapper">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Know More <FaExternalLinkAlt className="link-icon" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
