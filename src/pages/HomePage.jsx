import "../css/HomePage.css";
import TheMostWantedText from "../components/homepage/themostwantedtext";
import CardSlider from "../components/homepage/CardSlider";
import ProductCarousel from "../components/homepage/ProductCarousel";
import HeroImage from "../components/homepage/HeroImage";
import Ticker from "../components/Ticker";
import CategoryCard from "../components/homepage/CategoryCard";

import MainHero from "../img/hero.svg";
import LastChanceImg from "../img/last-chance.svg";

export default function HomePage() {
  return (
    <div className="home-page">
      <HeroImage text="New Arrivals" image={MainHero} />
      <TheMostWantedText />
      <CardSlider />
      <ProductCarousel />
      <CategoryCard
        label1="All Items"
        image1="https://raw.githubusercontent.com/Magecties/customer-experience-exam/refs/heads/main/public/home-img/2.svg"
        label2="Sale"
        image2="https://raw.githubusercontent.com/Magecties/customer-experience-exam/refs/heads/main/public/home-img/3.svg"
        label3="New Arrivals"
        image3="https://raw.githubusercontent.com/Magecties/customer-experience-exam/refs/heads/main/public/home-img/6.svg"
      />
      <ProductCarousel />
      <CategoryCard
        label1="Clothing"
        image1="https://raw.githubusercontent.com/Magecties/customer-experience-exam/refs/heads/main/public/home-img/1.svg"
        label2="Footwear"
        image2="https://raw.githubusercontent.com/Magecties/customer-experience-exam/refs/heads/main/public/home-img/4.svg"
        label3="Accessories"
        image3="https://raw.githubusercontent.com/Magecties/customer-experience-exam/refs/heads/main/public/home-img/5.svg"
      />
      <ProductCarousel />
      <HeroImage text="Last Chance" image={LastChanceImg} />
      <Ticker />
    </div>
  );
}
