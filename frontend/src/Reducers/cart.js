import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "../Constants/cart";

export const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let productArr = state.cart;
      const item = productArr.find((item) => item.id === action.payload.id);
      if (!item) {
        productArr = [...productArr, { ...action.payload, quantity: 1 }];
      } else {
        productArr = productArr.map((product) => {
          if (action.payload.id === product.id) {
            product = {
              ...product,
              quantity: product.quantity + 1,
              price: product.price + action.payload.price,
            };
          }
          return product;
        });
      }
      localStorage.setItem("cart", JSON.stringify(productArr));
      state.cart = productArr;
      return {
        ...state,
        totalItems: state.totalItems + 1,
        price: state.price + action.payload.price,
      };
    case REMOVE_FROM_CART:
      let productData = state.cart;
      productData = productData.filter(
        (product) => product.id !== action.payload.id
      );
      localStorage.setItem("cart", JSON.stringify(productData));
      state.cart = productData;
      return {
        ...state,
        totalItems: state.totalItems - 1,
        price: state.price - action.payload.price,
      };
    case INCREASE_QUANTITY:
      let productData1 = state.cart;
      productData1 = productData1.map((product) => {
        if (action.payload.id === product.id) {
          product = {
            ...product,
            quantity: product.quantity + 1,
            price: product.price + action.payload.price,
          };
        }
        return product;
      });
      localStorage.setItem("cart", JSON.stringify(productData1));
      state.cart = productData1;
      return {
        ...state,
        totalItems: state.totalItems + 1,
        price: state.price + action.payload.price,
      };
    case DECREASE_QUANTITY:
      let productData2 = state.cart;
      productData2 = productData2.map((product) => {
        if (action.payload.id === product.id) {
          product = {
            ...product,
            quantity: product.quantity - 1,
            price: product.price - action.payload.price,
          };
        }
        return product;
      });
      localStorage.setItem("cart", JSON.stringify(productData2));
      state.cart = productData2;
      return {
        ...state,
        totalItems: state.totalItems - 1,
        price: state.price - action.payload.price,
      };
    default:
      return state;
  }
};
