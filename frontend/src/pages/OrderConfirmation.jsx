import { useLocation, useNavigate } from "react-router-dom";

export default function OrderConfirmation() {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div style={{ padding: 30 }}>
      <h2>Order Confirmed 🎉</h2>
      <p>Your order ID:</p>
      <h3>{state?.orderId}</h3>

      <button onClick={() => navigate("/")}>
        Continue Shopping
      </button>
    </div>
  );
}
