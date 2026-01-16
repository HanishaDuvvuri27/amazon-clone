import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/cart.css";

export default function Cart() {
  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeFromCart
  } = useCart();

  const navigate = useNavigate();

  // SUBTOTAL
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
  <div className="cart-container">
    <h2 className="cart-title">Shopping Cart</h2>

    {cartItems.length === 0 ? (
      <p className="empty-cart">Your cart is empty</p>
    ) : (
      <div className="cart-layout">
        
        {/* LEFT: ITEMS */}
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              
              <div className="item-info">
                <h4>{item.name}</h4>
                <p className="item-price">₹{item.price}</p>
                <button
                  className="remove-link"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>

              <div className="qty-box">
                <button onClick={() => decreaseQty(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQty(item.id)}>+</button>
              </div>

              <div className="item-total">
                ₹{item.price * item.quantity}
              </div>

            </div>
          ))}
        </div>

        {/* RIGHT: SUMMARY */}
        <div className="cart-summary">
          <h3>Order Summary</h3>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          <div className="summary-row total">
            <span>Total</span>
            <span>₹{subtotal}</span>
          </div>

          <button
            className="checkout-btn"
            onClick={() => navigate("/checkout")}
          >
            Proceed to Checkout
          </button>
        </div>

      </div>
    )}
  </div>
);

}
