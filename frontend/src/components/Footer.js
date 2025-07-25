import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white pt-5 pb-3 mt-auto">
      <div className="container bg-dark">
        <div className="row">

          {/* Brand + tagline */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold text-warning">✒️ Inkspire</h5>
            <p className="text-light">
              Where Ideas Take Flight
            </p>
          </div>

          {/* Navigation columns */}
          <div className="col-md-6 mb-4">
            <div className="row">
              <div className="col-6 col-md-3">
                <h6 className="text-light fw-semibold">Inkspire</h6>
                <ul className="list-unstyled">
                  <li><Link className="footer-link" to="/">Home</Link></li>
                  <li><Link className="footer-link" to="/login">Sign In</Link></li>
                  <li><Link className="footer-link" to="/login">Sign Up</Link></li>
                </ul>
              </div>
              <div className="col-6 col-md-3">
                <h6 className="text-light fw-semibold">Support</h6>
                <ul className="list-unstyled">
                  <li><Link className="footer-link" to="/faq">FAQ</Link></li>
                  <li><Link className="footer-link" to="/contact">Contact Us</Link></li>
                </ul>
              </div>
              <div className="col-6 col-md-3">
                <h6 className="text-light fw-semibold">About</h6>
                <ul className="list-unstyled">
                  <li><Link className="footer-link" to="/about">About Us</Link></li>
                  <li><Link className="footer-link" to="/team">Team</Link></li>
                </ul>
              </div>
              <div className="col-6 col-md-3">
                <h6 className="text-light fw-semibold">Legal</h6>
                <ul className="list-unstyled">
                  <li><Link className="footer-link" to="/privacy">Privacy Policy</Link></li>
                  <li><Link className="footer-link" to="/terms">Terms & Conditions</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Social icons */}
          <div className="col-md-3 mb-4">
            <h6 className="text-light fw-semibold">Follow Us</h6>
            <div className="d-flex gap-3 fs-5">
              <a className="text-light" href="https://github.com/sitangshu-tech" target="_blank" rel="noreferrer"><FaGithub /></a>
              <a className="text-light" href="https://x.com/Sitangshu__?t=sDNFxcVDaU4gcLW0AY5nLg&s=09" target="_blank" rel="noreferrer"><FaTwitter /></a>
              <a className="text-light" href="https://www.linkedin.com/in/sitangshu-maji-42a7b0315/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
              <a className="text-light" href="https://www.instagram.com/sitangshu__?igsh=aTlwMGN4d2NsNWV1" target="_blank" rel="noreferrer"><FaInstagram /></a>
            </div>
          </div>

        </div>
        <hr className="bg-light" />
        <p className="text-center small mb-0">
          &copy; {new Date().getFullYear()} <strong>Inkspire</strong>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;