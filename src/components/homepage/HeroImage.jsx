import "../../css/NavbarHero.css";
import { Link } from "react-router";

export default function HeroImage({ text, image }) {
  return (
    <section className="hero-section">
      <img src={image} alt={text} />
      <div className="hero-content">
        <Link
          to="/products"
          className="hero-label"
          aria-label={`${text} - go to Product Page`}
        >
          <span>{text}</span>
        </Link>
      </div>
    </section>
  );
}
