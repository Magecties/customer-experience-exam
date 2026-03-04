import { useState } from "react";
import "../css/NewsletterPopup.css";

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(true);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="newsletter-overlay">
      <div className="newsletter-modal">
        <button className="newsletter-close" onClick={() => setIsOpen(false)}>
          ✕
        </button>

        {submitted ? (
          <p className="newsletter-success">You're now signed up!</p>
        ) : (
          <>
            <h2 className="newsletter-title">Stay in the loop</h2>
            <p className="newsletter-subtitle">
              Subscribe to our newsletter for exclusive drops and offers.
            </p>
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn">
                Sign me up
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
