import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ProductProvider } from "./Context/product-context";
import { CartProvider } from "./Context/cart-context";
import { AuthProvider } from "./Context/auth-context";
ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
