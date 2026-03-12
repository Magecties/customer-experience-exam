import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import "../../css/CardSlider.css";

function CardSlider() {
  const [products, setProducts] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Magecties/customer-experience-exam/refs/heads/main/public/wanted.json",
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  if (products.length === 0) return null;

  const visible = [0, 1, 2].map((i) => products[(index + i) % products.length]);

  return (
    <section className="card-slider">
      <div className="card-slider-wrapper">
        <button
          aria-label="previous"
          className="card-slider-btn"
          onClick={() =>
            setIndex((index - 1 + products.length) % products.length)
          }
        >
          <span className="card-slider-arrow-icon">&lt;</span>
        </button>

        <div className="card-slider-cards">
          {visible.map((product) => (
            <Link
              key={product.id}
              to="/404"
              className="wanted-card"
              aria-label={`${product.title} - go to page`}
            >
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
                <div className="wanted-card-price-hover">Go to page</div>
              </div>
            </Link>
          ))}
        </div>

        <button
          className="card-slider-btn"
          onClick={() => setIndex((index + 1) % products.length)}
        >
          <span className="card-slider-arrow-icon">&gt;</span>
        </button>
      </div>

      <div className="card-slider-dots">
        {products.map((_, i) => (
          <button
            aria-label="next"
            key={i}
            className={`card-slider-dot ${i === index ? "card-slider-dot--active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}

export default CardSlider;
