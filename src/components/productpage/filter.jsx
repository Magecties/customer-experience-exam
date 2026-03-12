import { useState, useEffect } from "react";
import "../../css/filter.css";

const SIZES = ["XS", "S", "M", "L", "XL"];

const COLORS = [
  { name: "Black", hex: "#111111" },
  { name: "White", hex: "#f5f5f5" },
  { name: "Grey", hex: "#808080" },
  { name: "Dark Blue", hex: "#1f2886" },
  { name: "Light Blue", hex: "#add8e6" },
  { name: "Brown", hex: "#744f10" },
];

export default function FilterDrawer({
  isOpen,
  onClose,
  products,
  categories,
  onFilterChange,
}) {
  const maxPrice =
    products.length > 0
      ? Math.ceil(Math.max(...products.map((p) => p.price)))
      : 200;

  const [priceMax, setPriceMax] = useState(maxPrice);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortBy, setSortBy] = useState("none");

  // Keep priceMax ceiling in sync when products load
  useEffect(() => {
    setPriceMax(maxPrice);
  }, [maxPrice]);

  useEffect(() => {
    const filtered = products
      .filter((product) => {
        const priceMatches = product.price <= priceMax;
        const categoryMatches =
          selectedCategories.length === 0 ||
          selectedCategories.includes(product.category);
        const colorMatches =
          selectedColors.length === 0 ||
          (product.colors || []).some((c) => selectedColors.includes(c));
        const sizeMatches =
          selectedSizes.length === 0 ||
          (product.sizes || []).some((s) => selectedSizes.includes(s));
        return priceMatches && categoryMatches && colorMatches && sizeMatches;
      })
      .slice();

    if (sortBy === "price-asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      filtered.sort((a, b) => b.price - a.price);
    }

    onFilterChange(filtered);
  }, [
    products,
    priceMax,
    selectedCategories,
    selectedColors,
    selectedSizes,
    sortBy,
    onFilterChange,
  ]);

  function toggleItem(setter, value) {
    setter((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );
  }

  function handleClearAll() {
    setPriceMax(maxPrice);
    setSelectedSizes([]);
    setSelectedColors([]);
    setSelectedCategories([]);
    setSortBy("none");
    onClose();
  }

  return (
    <>
      <button
        type="button"
        className={`overlay ${isOpen ? "overlay-visible" : ""}`}
        onClick={onClose}
        aria-label="Close filter menu"
      />

      <aside
        id="filter-drawer"
        className={`drawer ${isOpen ? "drawer-open" : ""}`}
        aria-label="Filter menu"
      >
        {/* Header */}
        <div className="drawer-header">
          <h2>Filter</h2>
          <button type="button" className="close-button" onClick={onClose}>
            ✕
          </button>
        </div>

        {/* Scrollable body */}
        <div className="drawer-body">
          {/* Price */}
          <section className="filter-section">
            <h3 className="filter-section-title">Price</h3>
            <div className="price-pill">{`0-${Math.round(priceMax)}`}</div>
            <input
              type="range"
              min={0}
              max={maxPrice}
              value={priceMax}
              onChange={(e) => setPriceMax(Number(e.target.value))}
              className="price-slider"
              aria-label="price slider"
            />
          </section>

          {/* Size */}
          <section className="filter-section">
            <h3 className="filter-section-title">Size</h3>
            <div className="toggle-grid">
              {SIZES.map((size) => (
                <button
                  key={size}
                  type="button"
                  className={`toggle-btn ${
                    selectedSizes.includes(size) ? "toggle-btn--active" : ""
                  }`}
                  onClick={() => toggleItem(setSelectedSizes, size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </section>

          {/* Colors */}
          <section className="filter-section">
            <h3 className="filter-section-title">Colors</h3>
            <div className="toggle-grid">
              {COLORS.map((color) => (
                <button
                  key={color.name}
                  type="button"
                  className={`toggle-btn toggle-btn--color ${
                    selectedColors.includes(color.name)
                      ? "toggle-btn--active"
                      : ""
                  }`}
                  onClick={() => toggleItem(setSelectedColors, color.name)}
                >
                  <span
                    className="color-swatch"
                    style={{ backgroundColor: color.hex }}
                  />
                  {color.name}
                </button>
              ))}
            </div>
          </section>

          {/* Categories */}
          <section className="filter-section">
            <h3 className="filter-section-title">Categories</h3>
            <div className="toggle-grid">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`toggle-btn ${
                    selectedCategories.includes(cat) ? "toggle-btn--active" : ""
                  }`}
                  onClick={() => toggleItem(setSelectedCategories, cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </section>

          {/* Sort */}
          <section className="filter-section">
            <h3 className="filter-section-title">Sort</h3>
            <div className="sort-select-wrapper">
              <select
                className="sort-select"
                aria-label="Sort products"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="none">Choose a Filter</option>
                <option value="price-asc">Price: Low to high</option>
                <option value="price-desc">Price: High to low</option>
              </select>
              <span className="sort-select-arrow">&#9662;</span>
            </div>
          </section>
        </div>

        {/* Actions */}
        <div className="drawer-actions">
          <button type="button" className="clear-btn" onClick={handleClearAll}>
            Clear All
          </button>
          <button type="button" className="apply-btn" onClick={onClose}>
            Apply Filter
          </button>
        </div>
      </aside>
    </>
  );
}
