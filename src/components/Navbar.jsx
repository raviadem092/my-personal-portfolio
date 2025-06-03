import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Sun, Moon } from "lucide-react";
import "./Navbar.css";

const MyNavbar = ({ darkMode, toggleDarkMode }) => {
  const [activeLink, setActiveLink] = useState("");

  const handleScroll = () => {
  const sections = ["contact", "projects", "skills", "about", "home"];
  for (let sec of sections) {
    const element = document.getElementById(sec);
    if (element) {
      const offsetTop = element.offsetTop;
      if (window.scrollY + 100 >= offsetTop) {
        setActiveLink(sec);
        break;
      }
    }
  }
};


useEffect(() => {
  handleScroll();
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  const getLinkClass = (link) => `nav-link ${activeLink === link ? "active" : ""}`;

  return (
    <Navbar expand="lg" className="custom-navbar" sticky="top">
      <Container>
        <Navbar.Brand href="#home" style={{ color: "#ffffff", fontWeight: "bold" }}>
          Ravi Kumar yadav
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={getLinkClass("home")}>Home</Nav.Link>
            <Nav.Link href="#about" className={getLinkClass("about")}>About</Nav.Link>
            <Nav.Link href="#skills" className={getLinkClass("skills")}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={getLinkClass("projects")}>Projects</Nav.Link>
            <Nav.Link href="#contact" className={getLinkClass("contact")}>Contact</Nav.Link>
            <Button variant="link" onClick={toggleDarkMode} className="theme-toggle-btn">
              {darkMode ? <Sun color="#a3b18a" /> : <Moon color="#a3b18a" />}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
