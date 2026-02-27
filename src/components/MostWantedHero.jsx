import React, { useState, useEffect } from "react";
import "./MostWantedHero.css";

const HEIGHTS = [
  '5\'0"', '5\'2"', '5\'4"', '5\'6"', '5\'8"',
  '5\'10"', '6\'0"', '6\'2"', '6\'4"', '6\'6"',
];

function MostWantedHero() {
  const [products, setProducts] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      const url = "https://raw.githubusercontent.com/Magecties/customer-experience-exam/refs/heads/main/public/products.json";
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  const handleCardClick = (id) => {
    setSelectedId(selectedId === id ? null : id);
  };

  return (
    <section className="wanted-hero">
      <h1 className="wanted-hero-title">
        This Weeks Most <span className="wanted-hero-accent">Wanted</span>
      </h1>

      <div className="wanted-hero-cards">
        {products.map((product) => (
          <div
            key={product.id}
            className={`wanted-card ${selectedId === product.id ? "wanted-card--selected" : ""}`}
            onClick={() => handleCardClick(product.id)}
          >
            <div className="wanted-card-lines">
              {HEIGHTS.map((height, i) => (
                <div className="wanted-card-line" key={i}>
                  <span className="wanted-card-height left">{height}</span>
                  <div className="wanted-card-ruler" />
                  <span className="wanted-card-height right">{height}</span>
                </div>
              ))}
            </div>

            <div className="wanted-card-header">
              <h2 className="wanted-card-title">WANTED</h2>
              <p className="wanted-card-name">{product.title}</p>
            </div>

            <div className="wanted-card-image-wrapper">
              <img
                className="wanted-card-image"
                src={product.image}
                alt={product.title}
              />
            </div>

            <div className="wanted-card-price">{product.price} DKK</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MostWantedHero;