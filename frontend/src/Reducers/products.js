import {
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_FAIL,
  LOAD_PRODUCTS_SUCCESS,
  PRODUCT_HIGH_TO_LOW,
  PRODUCT_LOW_TO_HIGH,
} from "../Constants/products";

export const productReducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return { ...state, loading: true };
    case LOAD_PRODUCTS_SUCCESS:
      return { ...state, product: action.payload, loading: false };
    case LOAD_PRODUCTS_FAIL:
      return { ...state, error: action.payload, loading: false };
    case PRODUCT_HIGH_TO_LOW:
      return { ...state, sort_price: "high-low" };
    case PRODUCT_LOW_TO_HIGH:
      return { ...state, sort_price: "low-high" };
    default:
      return state;
  }
};
