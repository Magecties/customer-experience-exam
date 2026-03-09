import React, { useEffect, useRef, useState } from "react";
import "../../css/ProductCarousel.css";

const SCROLL_AMOUNT = 296; // card width (280) + gap (16)

function ProductCarousel() {
  const [products, setProducts] = useState([]);
  const [scrolled, setScrolled] = useState(false);
  const trackRef = useRef(null);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  function scroll(dir) {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: dir * SCROLL_AMOUNT, behavior: "smooth" });
  }

  function handleScroll() {
    setScrolled(trackRef.current.scrollLeft > 0);
  }

  if (products.length === 0) return null;

  return (
    <section className="pc-section">
      {scrolled && (
        <button className="pc-arrow pc-arrow--left" onClick={() => scroll(-1)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      )}
      <div className="pc-track" ref={trackRef} onScroll={handleScroll}>
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
      <button className="pc-arrow pc-arrow--right" onClick={() => scroll(1)}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </section>
  );
}

export default ProductCarousel;
