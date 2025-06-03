import React from "react";
import "./Skills.css";

const skills = [
  {
    name: "Node.js",
    description: "JavaScript runtime built on Chrome's V8 engine.",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Java",
    description: "Object-oriented programming language used in enterprise apps.",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
  },
  {
    name: "HTML5",
    description: "Standard markup language for creating web pages.",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    description: "Style sheet language used for describing presentation of a document.",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    description: "Programming language that conforms to the ECMAScript specification.",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },
  {
    name: "Angular",
    description: "TypeScript-based open-source web application framework.",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg",
  },
  {
    name: "React",
    description: "JavaScript library for building user interfaces.",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
  },
  {
    name: "MySQL",
    description: "Open-source relational database management system.",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
  },
  {
    name: "Azure",
    description: "Cloud computing service created by Microsoft.",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg",
  },
  {
    name: "Express",
    description: "Fast, minimalist web framework for Node.js.",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
  },
  {
    name: "Spring",
    description: "Application framework and inversion of control container for Java.",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg",
  },
  {
    name: "Postman",
    description: "API platform for building and using APIs.",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postman/postman-original.svg",
  },
  {
    name: "GitHub",
    description: "Platform for version control and collaboration.",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>Tech Stack & Skills</h2>
      <div className="skills-grid">
        {skills.map(({ name, description, img }) => (
          <div className="skill-card" key={name}>
            <img src={img} alt={name} className="skill-img" width="40" height="40" />
            <h4>{name}</h4>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
