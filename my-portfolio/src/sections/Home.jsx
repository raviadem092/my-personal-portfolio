import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  // Scroll to contact section function
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="d-flex flex-column justify-content-center align-items-center text-center"
      style={{
        minHeight: "100vh",
        backgroundColor: "#344e41",
        color: "#dad7cd",
        padding: "0 1rem",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ fontWeight: "900", fontSize: "3.5rem", marginBottom: "1rem" }}
      >
        Hi, I'm <span style={{ color: "#a3b18a" }}>Ravi Kumar</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{ fontSize: "1.5rem", fontWeight: "500", marginBottom: "2rem" }}
      >
        Full Stack Developer | React & Node.js Enthusiast
      </motion.p>

      <motion.button
        onClick={scrollToContact}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="btn"
        style={{
          backgroundColor: "#588157",
          color: "#dad7cd",
          padding: "0.75rem 2rem",
          fontSize: "1.25rem",
          borderRadius: "30px",
          boxShadow: "0 8px 15px rgba(88, 129, 87, 0.3)",
          cursor: "pointer",
          border: "none",
        }}
      >
        Let's Connect
      </motion.button>
    </section>
  );
};

export default Home;
