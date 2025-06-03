// src/components/ScrollToTopArrow.jsx
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopArrow = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 500) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    toggleVisibility();

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!visible) return null;

  return (
    <div
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "40px",
        right: "40px",
        backgroundColor: "#588157",
        color: "#dad7cd",
        cursor: "pointer",
        padding: "12px",
        borderRadius: "50%",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
        zIndex: 9999,
        transition: "opacity 0.3s ease-in-out",
      }}
      aria-label="Scroll to top"
    >
      <FaArrowUp size={22} />
    </div>
  );
};

export default ScrollToTopArrow;
