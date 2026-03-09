import "../css/HomePage.css";
import TheMostWantedText from "../components/homepage/themostwantedtext";
import CardSlider from "../components/homepage/CardSlider";
import ProductCarousel from "../components/homepage/ProductCarousel";
import CategoryCardTop from "../components/homepage/CategoryCardTop";
import CategoryCardBot from "../components/homepage/CategoryCardBot";
import HeroImage from "../components/homepage/HeroImage";
import MainHero from "../img/hero.svg";
import LastChanceImg from "../img/lastchance.svg";

export default function HomePage() {
  return (
    <div className="home-page">
      <HeroImage text="New Arrivals" image={MainHero} />
      <TheMostWantedText />
      <CardSlider />
      <CategoryCardTop />
      <ProductCarousel />
      <CategoryCardBot />
      <ProductCarousel />
      <HeroImage text="Last Chance" image={LastChanceImg} />
    </div>
  );
}
