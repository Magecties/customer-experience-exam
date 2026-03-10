import "../css/HomePage.css";
import TheMostWantedText from "../components/homepage/themostwantedtext";
import CardSlider from "../components/homepage/CardSlider";
import ProductCarousel from "../components/homepage/ProductCarousel";
import HeroImage from "../components/homepage/HeroImage";
import Ticker from "../components/Ticker";
import CategoryCard from "../components/homepage/CategoryCard";

import MainHero from "../img/hero.svg";
import LastChanceImg from "../img/last-chance.svg";
import DualImageHero from "../components/homepage/DualImageHero";
import EarlyAccess from "../img/Acces.svg";
import OurCommunity from "../img/Community.svg";

export default function HomePage() {
  return (
    <div className="home-page">
      <HeroImage text="New Arrivals" image={MainHero} />
      <TheMostWantedText />
      <CardSlider />
      <ProductCarousel />
      <CategoryCard
        label1="All Items"
        image1="../public/home-img/2.svg"
        label2="Sale"
        image2="../public/home-img/3.svg"
        label3="New Arrivals"
        image3="../public/home-img/6.svg"
      />
      <ProductCarousel />
      <CategoryCard
        label1="Clothing"
        image1="../public/home-img/1.svg"
        label2="Footwear"
        image2="../public/home-img/4.svg"
        label3="Accessories"
        image3="../public/home-img/5.svg"
      />
      <ProductCarousel />
      <HeroImage text="Last Chance" image={LastChanceImg} />
      <DualImageHero
        label1="Our Community"
        image1={OurCommunity}
        label2="Early Access"
        image2={EarlyAccess}
      />
      <Ticker />
    </div>
  );
}
