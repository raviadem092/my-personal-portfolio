import React, { useEffect, useRef } from "react";
import "./Connect.css";
import { FaWhatsapp, FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import { useForm } from "@formspree/react";

export default function Connect() {
  const [state, handleSubmit, reset] = useForm("mwpbeddo");

  const timeoutRef = useRef(null);

  useEffect(() => {
    if (state.succeeded) {
      // After 5 seconds, reset form and show it again
      timeoutRef.current = setTimeout(() => {
        reset();
      }, 5000);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [state.succeeded, reset]);

  const getFieldError = (field) => {
    const error = state.errors?.find((err) => err.field === field);
    return error ? <p className="error">{error.message}</p> : null;
  };

  return (
    <section className="connect-section" id="contact">
      <h2>Let's Connect</h2>
      <div className="connect-container">
        <div className="contact-form">
          <h3>Contact Me</h3>

          {state.succeeded ? (
            <p style={{ color: "#a3b18a", fontWeight: "bold" }}>
              ✅ Thank you! Your message has been sent.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" name="name" required />
              {getFieldError("name")}

              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" required />
              {getFieldError("email")}

              <label htmlFor="role">Role</label>
              <select id="role" name="role" required>
                <option value="">Select your role</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="App Developer">App Developer</option>
                <option value="Full Stack Developer">Full Stack Developer</option>
                <option value="Web Developer">Web Developer</option>
                <option value="Freelancer Developer">Freelancer</option>
              </select>
              {getFieldError("role")}

              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required />
              {getFieldError("message")}

              <button type="submit" disabled={state.submitting}>Send Message</button>
            </form>
          )}
        </div>

        <div className="map-and-socials">
          <div className="map-container">
            <iframe
              title="R K Villas Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.568524330017!2d77.96685777466386!3d16.446725729222432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bca1dc95cef3bcf%3A0x173b79adc5db529e!2sR%20K%20Villas!5e0!3m2!1sen!2sin!4v1749372671913!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: "10px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
