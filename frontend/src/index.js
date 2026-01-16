import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CartProvider } from "./context/CartContext";
import { OrderProvider } from "./context/OrderContext";
import "./index.css";
import { WishlistProvider } from "./context/WishlistContext";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <CartProvider>
      <OrderProvider>
        <WishlistProvider>
          <App />
        </WishlistProvider>
      </OrderProvider>
    </CartProvider>
  </BrowserRouter>
);

