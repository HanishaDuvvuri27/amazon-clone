import { useOrders } from "../context/OrderContext";
import "../styles/orders.css";

export default function Orders() {
  const { orders } = useOrders();

  if (!orders.length) {
    return <h2 className="empty">No orders placed yet</h2>;
  }

  return (
    <div className="orders-wrapper">
      <h2>My Orders</h2>

      {orders.map(order => (
        <div key={order.id} className="order-card">
          <p><strong>Order ID:</strong> {order.id}</p>
          <p><strong>Date:</strong> {order.date}</p>
          <p><strong>Total:</strong> ₹{order.total}</p>
        </div>
      ))}
    </div>
  );
}
