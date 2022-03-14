import { createContext, useContext, useReducer, useState } from "react";
import { cartReducer } from "../Reducers/cart";

const CartContext = createContext();

const useCart = () => useContext(CartContext);
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    cart: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
    wishList: localStorage.getItem("wishlist")
      ? JSON.parse(localStorage.getItem("wishlist"))
      : [],
    totalItems: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart")).reduce(
          (a, b) => Number(a) + Number(b.quantity),
          0
        )
      : 0,
    price: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart")).reduce(
          (a, b) => Number(a) + Number(b.price),
          0
        )
      : 0,
  });
  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        setCart: dispatch,
        totalItems: state.totalItems,
        price: state.price,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { useCart, CartProvider };
