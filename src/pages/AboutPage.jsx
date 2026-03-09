import "../css/aboutpage.css";

export default function AboutPage() {
  return (
    <>
      <body className="about-page">
        <header>
          <h1 className="about-header">About us</h1>
        </header>
        <main className="about-main">
          <div className="about-text">
            <p>
              Vi er skabt ud fra en kærlighed til stærk stil og skarpe
              silhuetter.
            </p>
            <p>
              Vores univers bygger på et nøje kurateret udvalg af tøj, sko og
              accessories, hvor hvert item er valgt med fokus på attitude,
              kvalitet og personlighed.
            </p>
            <p>
              Vi tror ikke på overflod – kun på det, der virkelig fortjener en
              plads i garderoben.
            </p>
            <p>
              Inspireret af kontrasterne mellem det rå og det raffinerede,
              bevæger vores æstetik sig i krydsfeltet mellem klassisk tailoring
              og moderne street.
            </p>
            <p>
              Vi klæder dem, der tør skille sig ud – uden at larme unødvendigt.
            </p>
          </div>

          <img
            className="about-image"
            src="../public/img/wanted-logo.svg"
            alt="About us image"
          ></img>
        </main>
      </body>
    </>
  );
}
