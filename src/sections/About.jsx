import React from "react";
import { motion } from "framer-motion";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <>
      <section id="about" className="about-section">
        <div className="container about-container">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>About Me</h2>
            <p>
              Hi, I'm <strong>A Ravi Kumar</strong>, a passionate full-stack developer with a strong foundation in
              Java, Angular, React, Node.js, and MySQL. I love building elegant, fast, and user-friendly web apps.
              Currently working at Recordent, I'm exploring AI and entrepreneurship opportunities.
            </p>
            <a
              href="/assets/Ravikumar.pdf"
              className="btn-download"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Download Resume
            </a>
          </motion.div>

          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="profile-pic-wrapper">
              <img
                src="/assets/adem1.jpg"
                alt="A Ravi Kumar"
                className="profile-pic"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="edu-exp-section">
        <div className="container edu-exp-container">
          {/* Left Column: Experience */}
          <div className="column experience-column">
            <h3>Experience</h3>
            <div className="edu-exp-card">
              <ul>
                <li><strong>Software Developer</strong> - Recordent Technologies Pvt. Ltd. (2024 - Present)</li>
                <li><strong>Tech Stack</strong> - Angular, Node.js, MySQL, Azure</li>
              </ul>
            </div>
            <div className="edu-exp-card">
              <ul>
                <li><strong>FreeLancer</strong> -  (2023)</li>
                <li><strong>Tech Stack</strong> - Java, SpringBoot, Oracle DB</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Education */}
          <div className="column education-column">
            <h3>Education</h3>
            <div className="edu-exp-card">
              <ul>
                <li><strong>Bachelor of Technology</strong> - Electrical and Electronics Engineering, JNTUH University, India. (2020 - 2023)</li>
              </ul>
            </div>
            <div className="edu-exp-card">
              <ul>
                <li><strong>Diploma in Polytechnic</strong> - Electrical Engineering, TRR College of Technology, Hyderabad, India .(2017 - 2020)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
