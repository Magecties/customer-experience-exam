import "../css/HomePage.css";
import NavbarHero from "../components/homepage/NavbarHero";
import TheMostWantedText from "../components/homepage/themostwantedtext";
import CardSlider from "../components/homepage/CardSlider";

const CATEGORIES = [
  { label: "All Items", image: "../public/home-img/1.svg" },
  { label: "Tops", image: "../public/home-img/2.svg" },
  { label: "Bottoms", image: "../public/home-img/3.svg" },
  { label: "Footwear", image: "../public/home-img/4.svg" },
  {
    label: "Accessories",
    image: "../public/home-img/5.svg",
  },
  {
    label: "New Arrivals",
    image: "../public/home-img/6.svg",
  },
];

export default function HomePage() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <NavbarHero />
        <div className="hero-content">
          <div className="hero-label">
            <span>New Arrivals</span>
          </div>
        </div>
      </section>
      <TheMostWantedText />
      <CardSlider />

      <div className="category-grid">
        {CATEGORIES.map((cat) => (
          <div className="category-card" key={cat.label}>
            <img src={cat.image} alt={cat.label} />
            <span className="category-label">{cat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
