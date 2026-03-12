import "../../css/NavbarHero.css";
import { Link } from "react-router";

export default function HeroImage({ text, image, to = "/404" }) {
  return (
    <section className="hero-section">
      <img src={image} alt={text} />
      <div className="hero-content">
        <Link
          to={to}
          className="hero-label"
          aria-label={`${text} - go to ${to}`}
        >
          <span>{text}</span>
        </Link>
      </div>
    </section>
  );
}
