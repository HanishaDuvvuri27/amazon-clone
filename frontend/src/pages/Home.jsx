import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import { useCart } from "../context/CartContext";
import Toast from "../components/Toast";
import "../styles/home.css";
import { useWishlist } from "../context/WishlistContext";
import { productImages } from "../data/productImages";

export default function Home({ search = "" }) {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("All");
  const [toast, setToast] = useState("");

  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();

  const categories = ["All", "Electronics", "Books", "Fashion", "Home"];

  // Fetch products
  useEffect(() => {
    api
      .get("/products")
      .then(res => setProducts(res.data || []))
      .catch(() => setProducts([]));
  }, []);

  // Search + category filter
  const filteredProducts = products.filter(p => {
    const name = p?.name?.toLowerCase() || "";
    const searchText = search.toLowerCase();

    const searchMatch = name.includes(searchText);
    const categoryMatch =
      category === "All" || p.category === category;

    return searchMatch && categoryMatch;
  });

  // Add to cart
  const handleAddToCart = (product) => {
    addToCart(product);
    setToast("Added to cart");
    setTimeout(() => setToast(""), 2000);
  };

  // Buy now
  const handleBuyNow = (product) => {
    addToCart(product);
    navigate("/cart");
  };

  return (
    <>
      {/* CATEGORY BAR */}
      <div className="category-bar">
        {categories.map(c => (
          <button
            key={c}
            className={category === c ? "active" : ""}
            onClick={() => setCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>

      {/* PRODUCT GRID */}
      <div className="product-grid">
        {filteredProducts.length === 0 && (
          <p style={{ padding: "20px" }}>No products found</p>
        )}

        {filteredProducts.map(p => {
          const localImage = productImages[p.id]?.[0];
          const fallbackImage = "https://via.placeholder.com/200?text=No+Image";

          return (
            <div key={p.id} className="product-card">
              <img
  src={productImages[p.id]?.[0] || "/assets/placeholder.jpg"}
  alt={p.name}
  loading="lazy"
  className="product-image"
/>


              <h4>{p.name}</h4>
              <p className="price">₹{p.price}</p>

              <div className="actions">
                <button onClick={() => handleAddToCart(p)}>
                  Add to Cart
                </button>

                <button onClick={() => handleBuyNow(p)}>
                  Buy Now
                </button>

                <button onClick={() => navigate(`/product/${p.id}`)}>
                  View
                </button>

                <span
                  className="wishlist-heart"
                  onClick={() => toggleWishlist(p)}
                  title={
                    isWishlisted(p.id)
                      ? "Remove from Wishlist"
                      : "Add to Wishlist"
                  }
                >
                  {isWishlisted(p.id) ? "❤️" : "🤍"}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* TOAST */}
      <Toast message={toast} />
    </>
  );
}
