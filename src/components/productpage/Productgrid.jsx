import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import Product from "./Product";
import FilterDrawer from "./filter";
import "../../css/ProductPage.css";
import "../../css/filter.css";

export default function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(
        "https://raw.githubusercontent.com/Magecties/customer-experience-exam/refs/heads/main/public/products.json",
      );
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  const categories = [...new Set(products.map((p) => p.category))].sort();

  return (
    <>
      <div className="filter-bar">
        <nav className="cat-nav">
          <NavLink to="/products" end>
            All Items
          </NavLink>
          <NavLink to="/tops">Tops</NavLink>
          <NavLink to="/bottoms">Bottoms</NavLink>
          <NavLink to="/footwear">Footwear</NavLink>
          <NavLink to="/accessories">Accessories</NavLink>
          <NavLink to="/new-arrivals">New Arrivals</NavLink>
        </nav>
        <button
          className="open-filter-button"
          type="button"
          onClick={() => setIsFilterMenuOpen(true)}
          aria-controls="filter-drawer"
          aria-expanded={isFilterMenuOpen}
        >
          Filters &#9776;
        </button>
      </div>

      <FilterDrawer
        isOpen={isFilterMenuOpen}
        onClose={() => setIsFilterMenuOpen(false)}
        products={products}
        categories={categories}
        onFilterChange={setFilteredProducts}
      />

      <p className="result-count" aria-live="polite">
        Showing {filteredProducts.length} of {products.length} products
      </p>

      <section className="product-grid" aria-label="Product list">
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </section>
    </>
  );
}
