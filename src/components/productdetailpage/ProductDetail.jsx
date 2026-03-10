import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductGallery from "./ProductGallery";
import ProductSidebar from "./ProductSidebar";
import "../../css/ProductDetail.css";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      const response = await fetch("/products.json");
      const data = await response.json();
      const found = data.find((p) => p.id === Number(id));
      setProduct(found);
    }
    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <article className="product-detail">
      <ProductGallery images={product.images ?? [product.image, product.imageHover]} title={product.title} />
      <ProductSidebar product={product} />
    </article>
  );
}
