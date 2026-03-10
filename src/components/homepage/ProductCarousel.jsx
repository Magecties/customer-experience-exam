import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import "../../css/ProductCarousel.css";

function CarouselCard({ product }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link to={`/products/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <div className="pc-card">
        <img
          className="pc-card-img"
          src={hovered ? product.imageHover : product.image}
          alt={product.title}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        />
        <div className="pc-card-info">
          <p className="pc-card-title">{product.title}</p>
          <p className="pc-card-price">{product.price} DKK</p>
        </div>
      </div>
    </Link>
  );
}

function ProductCarousel() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/Magecties/customer-experience-exam/refs/heads/Magnusbranch/public/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  if (products.length === 0) return null;

  return (
    <section className="pc-section">
      <div className="pc-track">
        <div className="pc-strip">
          {products.map((product) => (
            <CarouselCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductCarousel;
