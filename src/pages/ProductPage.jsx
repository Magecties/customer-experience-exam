import ProductGrid from "../components/productpage/Productgrid";
import "../css/ProductPage.css";

export default function ProductPage() {
  return (
    <>
      <header>
        <h1>Products</h1>
      </header>
      <main>
        <ProductGrid />
      </main>
    </>
  );
}
