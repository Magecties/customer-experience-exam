import React, { useEffect, useState } from "react";
import "../../css/ProductCarousel.css";

function ProductCarousel() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  if (products.length === 0) return null;

  return (
    <section className="pc-section">
      <div className="pc-track">
        <div className="pc-strip">
          {products.map((product) => (
            <div key={product.id} className="pc-card">
              <img
                className="pc-card-img"
                src={product.image}
                alt={product.title}
              />
              <div className="pc-card-info">
                <p className="pc-card-title">{product.title}</p>
                <p className="pc-card-price">{product.price} DKK</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductCarousel;
