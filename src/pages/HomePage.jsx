import "../css/HomePage.css";
import NavbarHero from "../components/homepage/NavbarHero";
import TheMostWantedText from "../components/homepage/themostwantedtext";
import CardSlider from "../components/homepage/CardSlider";
import ProductCarousel from "../components/homepage/ProductCarousel";
import CategoryCardTop from "../components/homepage/CategoryCardTop";
import CategoryCardBot from "../components/homepage/CategoryCardBot";

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
      <ProductCarousel />
      <CardSlider />
      <CategoryCardTop />
      <CategoryCardBot />
    </div>
  );
}
