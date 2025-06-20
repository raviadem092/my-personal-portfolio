// src/App.jsx
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import ScrollToTopArrow from "./components/ScrollToTopArrow ";
import AOS from "aos";

import "./App.css";
import CodingProfiles from "./sections/CodingProfiles";
import Connect from "./sections/Connect";
import BackgroundParticles from "./components/BackgroundParticles";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <>
    <BackgroundParticles />
    <div className="content-wrapper">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Home />
        <About />
        <Skills />
        <CodingProfiles />
        <Projects />
        <Connect />
      </main>
      <Footer />
      <ScrollToTopArrow hideOnHome={true} />
    </div>
    </>
  );
}

export default App;
