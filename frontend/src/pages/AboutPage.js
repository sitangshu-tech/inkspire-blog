import React from "react";
import "../styles/AboutPage.css"; // Custom CSS for styling

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Inkspire</h1>
        <p>Your voice. Your stories. Your inspiration.</p>
      </div>

      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          At <strong>Inkspire</strong>, we aim to empower voices around the world
          through a beautifully simple and powerful blogging experience. Whether you’re an educator,
          a learner, or a passionate thinker, Inkspire provides a platform to share, connect, and grow.
        </p>
      </div>

      <div className="about-section">
        <h2>What We Do</h2>
        <p>
          Inkspire offers an intuitive space for writers to create, readers to engage,
          and ideas to flourish. From personal experiences to educational insights,
          our platform is designed for expression without boundaries.
        </p>
      </div>

      <div className="about-section">
        <h2>Our Values</h2>
        <ul>
          <li>🌟 Creativity: We believe every idea has value.</li>
          <li>🌍 Community: We encourage respectful and meaningful interactions.</li>
          <li>🔒 Trust: Your content and data are safe with us.</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
