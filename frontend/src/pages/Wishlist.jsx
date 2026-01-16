import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

export default function Wishlist() {
  const { wishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  if (!wishlist.length) {
    return <h2 style={{ padding: 20 }}>Your wishlist is empty</h2>;
  }

  return (
    <div className="product-grid">
      {wishlist.map(p => (
        <div key={p.id} className="product-card">
          <img src={p.images?.[0]} alt={p.name} />
          <h4>{p.name}</h4>
          <p className="price">₹{p.price}</p>

          <div className="actions">
            <button onClick={() => addToCart(p)}>
              Add to Cart
            </button>

            <button onClick={() => {
              addToCart(p);
              navigate("/cart");
            }}>
              Buy Now
            </button>

            <button onClick={() => navigate(`/product/${p.id}`)}>
              View
            </button>

            <span
              className="wishlist-heart"
              onClick={() => toggleWishlist(p)}
            >
              ❤️
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
