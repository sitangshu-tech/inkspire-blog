import React from "react";
import "../styles//TermsPage.css";

const TermsPage = () => {
  return (
    <div className="terms-container">
      <div className="terms-header">
        <h1>Terms & Conditions</h1>
        <p>Effective Date: July 19, 2025</p>
      </div>

      <div className="terms-section">
        <h2>1. Introduction</h2>
        <p>
          Welcome to <strong>Inkspire</strong>. By accessing or using our
          website, you agree to comply with and be bound by the following Terms
          and Conditions. Please read them carefully.
        </p>
      </div>

      <div className="terms-section">
        <h2>2. Use of the Website</h2>
        <p>
          You agree to use Inkspire only for lawful purposes. You must not use
          the website in any way that could damage, disable, or impair it.
        </p>
      </div>

      <div className="terms-section">
        <h2>3. User Accounts</h2>
        <ul>
          <li>Users must register to post blogs or leave comments.</li>
          <li>You are responsible for maintaining the confidentiality of your account.</li>
          <li>We reserve the right to suspend or terminate accounts for violating our terms.</li>
        </ul>
      </div>

      <div className="terms-section">
        <h2>4. Intellectual Property</h2>
        <p>
          All content on Inkspire, unless submitted by users, is our property or
          licensed to us. Do not copy or reuse it without permission.
        </p>
      </div>

      <div className="terms-section">
        <h2>5. User-Generated Content</h2>
        <p>
          You retain ownership of your content, but by posting on Inkspire, you
          grant us a non-exclusive license to use, display, and distribute it on our platform.
        </p>
      </div>

      <div className="terms-section">
        <h2>6. Prohibited Activities</h2>
        <ul>
          <li>Harassment, abuse, or threats to other users.</li>
          <li>Posting illegal or harmful content.</li>
          <li>Attempting to access unauthorized data or servers.</li>
        </ul>
      </div>

      <div className="terms-section">
        <h2>7. Termination</h2>
        <p>
          We may suspend or terminate your access at any time if you breach
          these terms or behave inappropriately.
        </p>
      </div>

      <div className="terms-section">
        <h2>8. Changes to Terms</h2>
        <p>
          Inkspire reserves the right to modify these Terms at any time. We will
          notify users by updating this page and changing the effective date.
        </p>
      </div>

      <div className="terms-section">
        <h2>9. Disclaimer</h2>
        <p>
          Inkspire is provided “as is”. We do not guarantee that the site will
          always be available, secure, or error-free.
        </p>
      </div>

      <div className="terms-section">
        <h2>10. Governing Law</h2>
        <p>
          These Terms are governed by and interpreted under the laws of India.
          Any disputes will be subject to the jurisdiction of the courts in West Bengal.
        </p>
      </div>

      <div className="terms-section">
        <h2>11. Contact</h2>
        <p>
          For any questions about these Terms, please contact us via our{" "}
          <a href="/contact">Contact Page</a>.
        </p>
      </div>
    </div>
  );
};

export default TermsPage;
