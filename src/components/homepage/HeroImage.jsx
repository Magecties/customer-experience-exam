import "../../css/NavbarHero.css";

export default function HeroImage({text, image}) {
  return (
    <section className="hero-section">
      <img src={image} alt={text} />
      <div className="hero-content">
        <div className="hero-label">
          <span>{text}</span>
        </div>
      </div>
    </section>
  );
}