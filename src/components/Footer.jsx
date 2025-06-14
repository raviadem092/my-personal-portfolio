import React from "react";
import "./Footer.css";
import { FaWhatsapp, FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left side - your name or logo */}
        <div className="footer-brand">
        <h2>Ravi Kumar Yadav Adem</h2>
        <p>Experienced Full-Stack Developer specializing in modern, scalable web applications. Let’s build something impactful together.</p>
        </div>

        {/* Middle - quick links */}
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About Me</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Right side - social icons */}
        <div className="footer-socials">
          <a href="mailto:ravikumaradem1792@gmail.com" aria-label="Email"><FaEnvelope /></a>
          <a href="https://wa.me/916300686036" target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
          <a href="https://www.linkedin.com/in/ravikumaradem/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="https://github.com/raviadem092/" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="https://www.instagram.com/ravikumaradem_17" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Ravi Kumar. All rights reserved.</p>
      </div>
    </footer>
  );
}
