import React, { useState, useEffect } from "react";
import "./MostWantedHero.css";

function MostWantedHero() {
  const [products, setProducts] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      const url =
        "https://raw.githubusercontent.com/Magecties/customer-experience-exam/refs/heads/main/public/products.json";
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
            <img className="wanted-card-bg" src="/img/WantedCard.svg" alt="" />

            <div className="wanted-card-overlay">
              <p className="wanted-card-name">{product.title}</p>

              <div className="wanted-card-image-wrapper">
                <img
                  className="wanted-card-image"
                  src={product.image}
                  alt={product.title}
                />
              </div>

              <div className="wanted-card-price">{product.price} DKK</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MostWantedHero;
