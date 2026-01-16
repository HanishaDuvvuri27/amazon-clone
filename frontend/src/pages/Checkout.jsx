import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useOrders } from "../context/OrderContext";
import Toast from "../components/Toast";
import "../styles/checkout.css";

export default function Checkout() {
  const { cartItems, clearCart } = useCart();
  const { placeOrder } = useOrders();
  const navigate = useNavigate();
  const [toast, setToast] = useState("");

  // 🔹 Sample saved addresses (mock)
  const savedAddresses = [
    {
      id: 1,
      label: "Home",
      details: "Nirmala Duvvuri, Hyderabad, Telangana - 500081"
    },
    {
      id: 2,
      label: "Office",
      details: "Tech Park, Bangalore, Karnataka - 560103"
    }
  ];

  const [selectedAddress, setSelectedAddress] = useState(savedAddresses[0]);
  const [useNewAddress, setUseNewAddress] = useState(false);

  const [newAddress, setNewAddress] = useState("");

  const [payment, setPayment] = useState({
    card: "",
    expiry: "",
    cvv: ""
  });

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const handlePlaceOrder = () => {
    const addressToUse = useNewAddress
      ? newAddress
      : selectedAddress?.details;

    if (!addressToUse || !payment.card) {
      setToast("Please complete address and payment details");
      setTimeout(() => setToast(""), 2000);
      return;
    }

    placeOrder(cartItems, total, addressToUse);
    clearCart();

    setToast("Order placed successfully 🎉");

    setTimeout(() => {
      setToast("");
      navigate("/orders");
    }, 2000);
  };

  return (
    <div className="checkout-wrapper">
      <div className="checkout-card">
        <h2>Checkout</h2>

        {/* ADDRESS SELECTION */}
        <section>
          <h4>Delivery Address</h4>

          {!useNewAddress &&
            savedAddresses.map(addr => (
              <label key={addr.id} className="address-option">
                <input
                  type="radio"
                  checked={selectedAddress.id === addr.id}
                  onChange={() => setSelectedAddress(addr)}
                />
                <div>
                  <strong>{addr.label}</strong>
                  <p>{addr.details}</p>
                </div>
              </label>
            ))}

          <label className="address-option">
            <input
              type="radio"
              checked={useNewAddress}
              onChange={() => setUseNewAddress(true)}
            />
            <strong>Add New Address</strong>
          </label>

          {useNewAddress && (
            <textarea
              placeholder="Enter new delivery address"
              value={newAddress}
              onChange={e => setNewAddress(e.target.value)}
            />
          )}
        </section>

        <section>
          <div className="order-summary">
            <h4>Order Summary</h4>
            {cartItems.map(item => (
              <p key={item.id}>
                {item.name} × {item.qty} = ₹{item.price * item.qty}
              </p>
            ))}
          </div>
        </section>

        {/* PAYMENT */}
        <section>
          <h3>Payment Method</h3>
          <div className="payment-card">
            <div className="payment-header">
              <input type="radio" checked readOnly />
              <span>Credit / Debit Card</span>
            </div>

            <div className="payment-form">
              <input
                type="text"
                placeholder="Card Number"
                maxLength="19"
                value={payment.card}
                onChange={e => setPayment({...payment, card: e.target.value})}
              />

              <div className="payment-row">
                <input 
                  type="text" 
                  placeholder="MM / YY"
                  value={payment.expiry}
                  onChange={e => setPayment({...payment, expiry: e.target.value})}
                />
                <input 
                  type="password" 
                  placeholder="CVV"
                  value={payment.cvv}
                  onChange={e => setPayment({...payment, cvv: e.target.value})}
                />
              </div>

              <input type="text" placeholder="Name on Card" />
            </div>
          </div>
        </section>

        <div className="checkout-summary">
          <span>Total</span>
          <strong>₹{total}</strong>
        </div>

        <button className="pay-btn" onClick={handlePlaceOrder}>
          Pay ₹{total} & Place Order
        </button>
      </div>

      <Toast message={toast} />
    </div>
  );
}
