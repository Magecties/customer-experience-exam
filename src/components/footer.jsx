import { NavLink } from "react-router";
import "../css/Footer.css";

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <footer className="nav-footer-main">
        <div className="footer-column">
          <span className="footer-heading">
            Newsletter | Subscribe & get 10% off
          </span>
          <p className="footer-news-text">
            Receive news about Wanted Archives <br></br>collections, restocks,
            events and sales.
          </p>
          <input
            className="email-footer-input"
            type="email"
            placeholder="Enter your email address"
          />
          <p className="footer-news-text-signup">⟶Sign up and get 10% off</p>
        </div>
        <div className="footer-column">
          <span className="footer-heading">Brand</span>
          <NavLink to="/about">About Us</NavLink>
        </div>

        <div className="footer-column">
          <span className="footer-heading">Support</span>
          <NavLink to="/return">Return & Exchanges</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <div className="footer-column">
          <span className="footer-heading">Boring stuff</span>
          <NavLink to="/privacy">Privacy Policy</NavLink>
          <NavLink to="/terms">Terms of Service</NavLink>
        </div>
      </footer>

      <div className="footer-bottom">
        <div className="footer-socials">
          <a href="#">
            <img src="/img/facebook-icon-socials.svg" alt="Facebook" />
          </a>
          <a href="#">
            <img src="/img/instagram-icon-socials.svg" alt="Instagram" />
          </a>
          <a href="#">
            <img src="/img/tiktok-icon-socials.svg" alt="Tiktok" />
          </a>
        </div>
        <span>© 2026 - Wanted Archives</span>
        <img src="/img/wanted-logo.svg" alt="Tiktok" />
      </div>
    </div>
  );
}
