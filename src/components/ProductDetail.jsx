import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductGallery from "./ProductGallery";
import ProductSidebar from "./ProductSidebar";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      const url = "https://raw.githubusercontent.com/Magecties/customer-experience-exam/refs/heads/main/public/products.json";
      const response = await fetch(url);
      const data = await response.json();
      const found = data.find((p) => p.id === Number(id));
      setProduct(found);
    }
    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <article className="product-detail">
      <ProductGallery images={[product.image]} title={product.title} />
      <ProductSidebar product={product} />
    </article>
  );
}