import {
  CLEAR_ALL_FILTERS,
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_FAIL,
  LOAD_PRODUCTS_SUCCESS,
  PRODUCT_HIGH_TO_LOW,
  PRODUCT_LOW_TO_HIGH,
  SET_CATEGORY_PRODUCTS_NULL,
} from "../Constants/products";

export const productsByCategory = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return { ...state, loading: true, success: false };
    case LOAD_PRODUCTS_SUCCESS:
      return {
        ...state,
        product: action.payload,
        loading: false,
        success: true,
      };
    case LOAD_PRODUCTS_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
        success: false,
      };
    case CLEAR_ALL_FILTERS:
      return {
        ...state,
        sort_price: "normal",
      };
    case PRODUCT_HIGH_TO_LOW:
      return { ...state, sort_price: "high-low" };
    case PRODUCT_LOW_TO_HIGH:
      return { ...state, sort_price: "low-high" };
    case SET_CATEGORY_PRODUCTS_NULL:
      return { ...state, product: [] };
    default:
      return state;
  }
};
