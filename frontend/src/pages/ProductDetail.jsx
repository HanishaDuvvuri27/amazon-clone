import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/api";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import "../styles/productDetail.css";
import { productImages } from "../data/productImages";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();

  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  // Fetch product
  useEffect(() => {
    api
      .get(`/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch(() => setProduct(null));
  }, [id]);

  if (!product) {
    return <h2 style={{ padding: 20 }}>Loading product...</h2>;
  }

  // ✅ LOCAL IMAGES (SAFE)
  const images = productImages[product.id] || [];

  return (
    <div className="product-detail-page">
      {/* LEFT: IMAGE CAROUSEL */}
      <div className="product-images">
        <img
          src={images[activeImage]}
          alt={product.name}
          className="main-image"
        />

        <div className="thumbnail-row">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${product.name}-${index}`}
              className={
                index === activeImage ? "thumbnail active" : "thumbnail"
              }
              onClick={() => setActiveImage(index)}
            />
          ))}
        </div>
      </div>

      {/* RIGHT: PRODUCT INFO */}
      <div className="product-info">
        <h2>{product.name}</h2>

        <p className="price">₹{product.price}</p>

        <p className={product.stock > 0 ? "in-stock" : "out-stock"}>
          {product.stock > 0 ? "In Stock" : "Out of Stock"}
        </p>

        <p className="description">{product.description}</p>

        {/* ACTION BUTTONS */}
        <div className="product-actions">
          <button
            className="add-cart-btn"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>

          <button
            className="buy-now-btn"
            onClick={() => {
              addToCart(product);
              navigate("/cart");
            }}
          >
            Buy Now
          </button>

          {/* WISHLIST */}
          <button
            className={`wishlist-btn ${
              isWishlisted(product.id) ? "active" : ""
            }`}
            onClick={() => toggleWishlist(product)}
            title={
              isWishlisted(product.id)
                ? "Remove from Wishlist"
                : "Add to Wishlist"
            }
          >
            {isWishlisted(product.id) ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
    </div>
  );
}
