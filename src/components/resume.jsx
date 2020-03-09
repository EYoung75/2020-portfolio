import React from "react";

const Resume = () => {
  return (
    <div className="resume-container">
      <iframe
        src="https://resume.creddle.io/embed/3rwzxe9ii4o"
        width="850"
        height="1100"
        seamless
        className="resume"
      ></iframe>
      <a
        href="https://resume.creddle.io/resume/3rwzxe9ii4o"
        target="_blank"
        className="resume-button"
      >
        View Resume
      </a>
    </div>
  );
};

export default Resume;
