import "../css/aboutpage.css";
import wantedLogo from "../img/wanted-logo.svg";

export default function AboutPage() {
  return (
    <>
      <div className="about-page">
        <header>
          <h1 className="about-header">About us</h1>
        </header>
        <main className="about-main">
          <div className="about-text">
            <p>
              We were born from a love of strong style and sharp silhouettes.
            </p>
            <p>
              Our universe is built on a carefully curated selection of
              clothing, shoes and accessories — each piece chosen with a focus
              on attitude, quality and personality.
            </p>
            <p>
              We don't believe in excess — only in what truly deserves a place
              in your wardrobe.
            </p>
            <p>
              Inspired by the contrasts between the raw and the refined, our
              aesthetic moves at the intersection of classic tailoring and
              modern street.
            </p>
            <p>
              We dress those who dare to stand out — without making unnecessary
              noise.
            </p>
          </div>
          <img
            className="about-image"
            src={wantedLogo}
            alt="About us image"
          ></img>
        </main>
      </div>
    </>
  );
}
