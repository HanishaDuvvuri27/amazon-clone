import { Link, useNavigate } from "react-router-dom";
import api from "../api/api";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  const addToCart = async () => {
    await api.post("/cart/add", {
      product_id: product.id,
      quantity: 1
    });
    alert("Added to cart");
  };

  const buyNow = async () => {
    await api.post("/cart/add", {
      product_id: product.id,
      quantity: 1
    });
    navigate("/cart");
  };

  return (
    <div className="product-card">
      <img src={product.images?.[0]} alt={product.name} />
      <h4>{product.name}</h4>
      <p>₹{product.price}</p>

      <div className="actions">
        <button onClick={addToCart}>Add to Cart</button>
        <button onClick={buyNow}>Buy Now</button>
        <Link to={`/product/${product.id}`}>View</Link>
      </div>
    </div>
  );
}
