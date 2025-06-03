import React from "react";
import "./Footer.css";
import { FaWhatsapp, FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left side - your name or logo */}
        <div className="footer-brand">
          <h2>Ravi Kumar</h2>
          <p>Building beautiful & functional web experiences.</p>
        </div>

        {/* Middle - quick links */}
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About Me</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#connect">Contact</a>
        </div>

        {/* Right side - social icons */}
        <div className="footer-socials">
          <a href="mailto:raviadem8055@gmail.com" aria-label="Email"><FaEnvelope /></a>
          <a href="https://wa.me/916300686036" target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
          <a href="https://www.linkedin.com/in/ravikumaradem" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="https://github.com/ravikumaradem" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="https://www.instagram.com/ravikumaradem_17" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Ravi Kumar. All rights reserved.</p>
      </div>
    </footer>
  );
}
