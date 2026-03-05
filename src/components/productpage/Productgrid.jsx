import { useEffect, useState } from "react";
import Product from "../productdetailpage/Product";
import "../../css/ProductPage.css";

export default function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState("none");
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

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

  const categories = [...new Set(products.map((p) => p.category))].sort();

  const filteredProducts = products.filter((product) => {
    const categoryMatches = selectedCategory === "all" || product.category === selectedCategory;
    const stockMatches = !inStockOnly || product.inStock;
    return categoryMatches && stockMatches;
  });

  if (sortBy === "price-asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-desc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating-desc") {
    filteredProducts.sort((a, b) => b.rating.rate - a.rating.rate);
  }

  return (
    <>
      <div className="filter-bar">
        <button
          className="open-filter-button"
          type="button"
          onClick={() => setIsFilterMenuOpen(true)}
          aria-controls="filter-drawer"
          aria-expanded={isFilterMenuOpen}>
          Filters
        </button>
      </div>

      <button
        type="button"
        className={`overlay ${isFilterMenuOpen ? "overlay-visible" : ""}`}
        onClick={() => setIsFilterMenuOpen(false)}
        aria-label="Close filter menu"
      />

      <aside
        id="filter-drawer"
        className={`drawer ${isFilterMenuOpen ? "drawer-open" : ""}`}
        aria-label="Filter menu">
        <div className="drawer-header">
          <h2>Filter products</h2>
          <button type="button" className="close-button" onClick={() => setIsFilterMenuOpen(false)}>
            Close
          </button>
        </div>
        <p className="helper-text">Choose filters below to narrow the list.</p>

        <section className="filters">
          <label className="filter-field" htmlFor="category-filter">
            Category
            <select
              id="category-filter"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}>
              <option value="all">All categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>

          <label className="stock-toggle" htmlFor="stock-filter">
            <input
              id="stock-filter"
              type="checkbox"
              checked={inStockOnly}
              onChange={(e) => setInStockOnly(e.target.checked)}
            />
            In stock only
          </label>

          <label className="filter-field" htmlFor="sort-filter">
            Sort by
            <select id="sort-filter" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="none">Default</option>
              <option value="price-asc">Price: Low to high</option>
              <option value="price-desc">Price: High to low</option>
              <option value="rating-desc">Rating: High to low</option>
            </select>
          </label>
        </section>

        <div className="drawer-actions">
          <button
            type="button"
            className="reset-button"
            onClick={() => {
              setSelectedCategory("all");
              setInStockOnly(false);
              setSortBy("none");
            }}>
            Reset
          </button>
          <button type="button" className="primary-close-button" onClick={() => setIsFilterMenuOpen(false)}>
            Show results
          </button>
        </div>
      </aside>

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

