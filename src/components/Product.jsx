export default function Product({ product }) {


return (
<article className="product-card">
<img src={product.image} className="product-image" />
<div className="product-info">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-description">{product.description || "No descripton available"}</p>
        <p className="product-price">DKK {product.price}</p>
</div>

</article>


)

}