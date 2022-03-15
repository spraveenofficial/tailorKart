import {
  CLEAR_ALL_FILTERS,
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_FAIL,
  LOAD_PRODUCTS_SUCCESS,
  PRICE_5000_PLUS,
  PRICE_BELOW_500,
  PRICE_BETWEEN_1000_AND_4999,
  PRICE_BETWEEN_500_AND_999,
  PRODUCT_HIGH_TO_LOW,
  PRODUCT_LOW_TO_HIGH,
  SET_CATEGORY_PRODUCTS_NULL,
  LOAD_EACH_PRODUCT,
  LOAD_EACH_PRODUCT_SUCCESS,
  LOAD_EACH_PRODUCT_FAIL,
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
    case PRICE_BELOW_500:
      return { ...state, sort_price: "price-below-500" };
    case PRICE_BETWEEN_500_AND_999:
      return { ...state, sort_price: "price-between-500-999" };
    case PRICE_BETWEEN_1000_AND_4999:
      return { ...state, sort_price: "price-between-1000-4999" };
    case PRICE_5000_PLUS:
      return { ...state, sort_price: "price-5000-plus" };
    default:
      return state;
  }
};

export const eachProduct = (state, action) => {
  switch (action.type) {
    case LOAD_EACH_PRODUCT:
      return { ...state, loading: true, success: false };
    case LOAD_EACH_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.payload,
        loading: false,
        success: true,
      };
    case LOAD_EACH_PRODUCT_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
        success: false,
      };
    default:
      return state;
  }
};
