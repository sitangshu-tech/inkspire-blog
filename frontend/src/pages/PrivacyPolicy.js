import React from "react";
import "../styles/PrivacyPolicyPage.css";

const PrivacyPolicyPage = () => {
  return (
    <div className="privacy-container">
      <div className="privacy-header">
        <h1>Privacy Policy</h1>
        <p>Effective Date: July 19, 2025</p>
      </div>

      <div className="privacy-section">
        <h2>1. Introduction</h2>
        <p>
          Welcome to <strong>Inkspire</strong>. Your privacy is important to us.
          This Privacy Policy outlines how we collect, use, and protect your
          information when you use our website.
        </p>
      </div>

      <div className="privacy-section">
        <h2>2. Information We Collect</h2>
        <ul>
          <li><strong>Personal Data</strong> – like name, email, profile image when you register.</li>
          <li><strong>Content</strong> – blog posts, comments, reactions, and interactions.</li>
          <li><strong>Usage Data</strong> – IP address, browser type, device info, and visit duration.</li>
        </ul>
      </div>

      <div className="privacy-section">
        <h2>3. How We Use Your Data</h2>
        <ul>
          <li>To provide, personalize, and improve your Inkspire experience.</li>
          <li>To communicate with you regarding updates or important notifications.</li>
          <li>To ensure safety and prevent abuse on the platform.</li>
        </ul>
      </div>

      <div className="privacy-section">
        <h2>4. Cookies & Tracking</h2>
        <p>
          Inkspire uses cookies to remember your preferences and improve your
          browsing experience. You can disable cookies via your browser settings.
        </p>
      </div>

      <div className="privacy-section">
        <h2>5. Sharing of Information</h2>
        <p>
          We never sell your personal data. We may share limited data with
          third-party services like analytics or hosting providers, only to
          support core functionality.
        </p>
      </div>

      <div className="privacy-section">
        <h2>6. Data Security</h2>
        <p>
          We take your data security seriously. Your information is stored
          securely and encrypted where possible. However, no method of
          transmission is 100% secure.
        </p>
      </div>

      <div className="privacy-section">
        <h2>7. Your Rights</h2>
        <p>
          You have the right to access, update, or delete your data anytime. If
          you need help, feel free to contact us.
        </p>
      </div>

      <div className="privacy-section">
        <h2>8. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be
          posted here with a revised date. We encourage you to review it regularly.
        </p>
      </div>

      <div className="privacy-section">
        <h2>9. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, reach out to us
          via the <a href="/contact">Contact Page</a>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
