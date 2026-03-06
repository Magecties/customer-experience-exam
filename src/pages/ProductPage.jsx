import ProductGrid from "../components/productpage/Productgrid";
import "../css/ProductPage.css";

export default function ProductPage() {
  return (
    <>
      <header className="product-header">
        <h1 className="product-h1">Discover</h1>
      </header>

      <main className="product-main">
        <ProductGrid />
      </main>
    </>
  );
}
