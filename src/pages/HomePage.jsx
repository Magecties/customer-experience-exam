import "../css/HomePage.css";
import TheMostWantedText from "../components/homepage/themostwantedtext";
import CardSlider from "../components/homepage/CardSlider";
import ProductCarousel from "../components/homepage/ProductCarousel";
import HeroImage from "../components/homepage/HeroImage";
import Ticker from "../components/Ticker";
import CategoryCard from "../components/homepage/CategoryCard";

import MainHero from "../img/hero.svg";
import LastChanceImg from "../img/last-chance.svg";
import HomeImg1 from "../../public/home-img/1.svg";
import HomeImg2 from "../../public/home-img/2.svg";
import HomeImg3 from "../../public/home-img/3.svg";
import HomeImg4 from "../../public/home-img/4.svg";
import HomeImg5 from "../../public/home-img/5.svg";
import HomeImg6 from "../../public/home-img/6.svg";
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
        image1={HomeImg4}
        label2="New Arrivals"
        image2={HomeImg5}
        label3="Sale"
        image3={HomeImg6}
      />
      <ProductCarousel />
      <CategoryCard
        label1="Clothing"
        image1={HomeImg1}
        label2="Footwear"
        image2={HomeImg2}
        label3="Accessories"
        image3={HomeImg3}
      />
      <ProductCarousel />
      <HeroImage text="Last Chance" image={LastChanceImg} />
      <Ticker />
      <DualImageHero
        label1="Our Community"
        image1={OurCommunity}
        label2="Early Access"
        image2={EarlyAccess}
      />
    </div>
  );
}
