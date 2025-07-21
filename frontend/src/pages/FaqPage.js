// src/pages/FaqPage.js
import React from "react";
import "../styles/faq.css"; // Optional: For custom styling

const FaqPage = () => {
  return (
    <div className="container mt-5 mb-5">
      <h2 className="mb-4 text-center fw-bold text-primary">Frequently Asked Questions</h2>

      <div className="accordion" id="faqAccordion">

        {/* Q1 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="heading1">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1">
              What is Inkspire?
            </button>
          </h2>
          <div id="collapse1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              Inkspire is a creative blogging platform where you can share your thoughts, ideas, and technical knowledge with a global audience.
            </div>
          </div>
        </div>

        {/* Q2 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="heading2">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2">
              How do I create a new blog post?
            </button>
          </h2>
          <div id="collapse2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              First, sign in or create an account. Then go to your dashboard and click "Create Blog" to begin writing and publishing your post.
            </div>
          </div>
        </div>

        {/* Q3 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="heading3">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3">
              Is there any cost to use Inkspire?
            </button>
          </h2>
          <div id="collapse3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              No, Inkspire is completely free to use for readers and writers.
            </div>
          </div>
        </div>

        {/* Q4 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="heading4">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4">
              Can I edit or delete my blog posts?
            </button>
          </h2>
          <div id="collapse4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              Yes, once signed in, go to your dashboard. There you can edit or delete any blog posts that you have authored.
            </div>
          </div>
        </div>

        {/* Q5 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="heading5">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5">
              How do I contact the Inkspire team?
            </button>
          </h2>
          <div id="collapse5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              You can contact us via the <a href="/contact">Contact Us</a> page. We'll get back to you as soon as possible.
            </div>
          </div>
        </div>

        {/* Q6 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="heading6">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6">
              Are my posts visible to everyone?
            </button>
          </h2>
          <div id="collapse6" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              Yes, published blog posts are publicly visible and searchable by anyone using the platform.
            </div>
          </div>
        </div>

        {/* Q7 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="heading7">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7">
              Do I need to sign up to read blogs?
            </button>
          </h2>
          <div id="collapse7" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              No, anyone can browse and read blogs on Inkspire. However, you need to sign up to write, react, or comment.
            </div>
          </div>
        </div>

        {/* Q8 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="heading8">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8">
              How do I report inappropriate content?
            </button>
          </h2>
          <div id="collapse8" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              Please use the contact form or email the admin to report any content that violates our community guidelines.
            </div>
          </div>
        </div>

        {/* Q9 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="heading9">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9">
              Can I follow other authors?
            </button>
          </h2>
          <div id="collapse9" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              This feature is coming soon! We’re working on a follow and notification system for authors.
            </div>
          </div>
        </div>

        {/* Q10 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="heading10">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse10">
              How can I stay updated on new features?
            </button>
          </h2>
          <div id="collapse10" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              Follow us on our social platforms like Twitter, LinkedIn, and GitHub to stay updated with the latest news and updates.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FaqPage;
