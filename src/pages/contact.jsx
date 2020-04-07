import React from "react";
import { FaPaperPlane } from "react-icons/fa";
// import Logo from "../components/logo.jsx";

const Contact = () => {
  return (
    <div className="contact">
      {/* <Logo /> */}
      <h1 data-aos="fade-down" data-aos-offset="200" data-aos-duration="1600">Drop a line:</h1>
      <form
        name="contact"
        method="POST"
        className="contact__form"
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-duration="1600"
      >
        <input type="hidden" name="form-name" value="contact" />
        <label htmlFor="name">Name:</label>
        <input type="text" placeholder="" name="name" required />
        <label htmlFor="email">Email address:</label>
        <input type="email" placeholder="" name="email" required />
        <label htmlFor="subject">Subject:</label>
        <textarea
          name="message"
          placeholder="Include your message here... "
          required
        ></textarea>
        <button type="submit">
          <h3>
            Send <FaPaperPlane />
          </h3>
        </button>
      </form>
    </div>
  );
};

export default Contact;
