import React from "react";
import "../styles/TeamPage.css";

const TeamPage = () => {
  return (
    <div className="team-container">
      <div className="team-header">
        <h1>Our Team</h1>
        <p>Passion. Purpose. People. Inkspire is built by creators who care.</p>
      </div>

      <div className="team-members">
        <div className="member-card">
          <img
            src="https://via.placeholder.com/150"
            alt="Sitangshu Maji"
            className="member-photo"
          />
          <h2>Sitangshu Maji</h2>
          <p className="role">Founder & Full Stack Developer</p>
          <p className="bio">
            Sitangshu is the visionary behind Inkspire. With a strong background
            in web technologies like React.js, Node.js, Express.js, and MongoDB,
            he designed and built this platform to empower creative expression.
            His mission is to make blogging more modern, powerful, and open to
            everyone.
          </p>
          <a
            className="github-link"
            href="https://github.com/sitangshu-tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            🌐 GitHub Profile
          </a>
        </div>

        <div className="contribute-card">
          <h3>Want to Join Us?</h3>
          <p>
            We welcome passionate developers, writers, and designers who believe
            in open knowledge. If you want to contribute, connect with us on
            GitHub or drop a message via our{" "}
            <a href="/contact">Contact Page</a>.
          </p>
          <a
            className="github-contribute"
            href="https://github.com/sitangshu-tech/inkspire"
            target="_blank"
            rel="noopener noreferrer"
          >
            ⭐ Contribute on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
