import { useState, useEffect } from "react";
import "../css/NewsletterPopup.css";

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

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

        <div className="newsletter-left">
          {submitted ? (
            <p className="newsletter-success">
              You're now signed up!{" "}
              <b>You'll receive the discount on your mail!</b>
            </p>
          ) : (
            <>
              <h2 className="newsletter-title">
                Want a <span className="newsletter-highlight">10%</span>{" "}
                discount?
              </h2>
              <p className="newsletter-subtitle">
                Sign up to get exclusive discounts, early access to collections,
                and much more.
              </p>
              <p className="newsletter-question">
                Where would you like to receive your code?
              </p>
              <form className="newsletter-form" onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-btn">
                  Send 10% off
                </button>
              </form>
              <button
                className="newsletter-dismiss"
                onClick={() => setIsOpen(false)}
              >
                No thanks, I hate discounts
              </button>
            </>
          )}
        </div>

        <div className="newsletter-right">
          <img src="/img/NewsLetterBillede.svg" alt="Newsletter visual" />
        </div>
      </div>
    </div>
  );
}
