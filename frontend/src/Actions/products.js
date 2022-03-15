import {
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_FAIL,
  LOAD_EACH_PRODUCT,
  LOAD_EACH_PRODUCT_SUCCESS,
  LOAD_EACH_PRODUCT_FAIL,
} from "../Constants/products";
import axios from "axios";
import baseUrl from "../Utils/baseurl";

export const loadProductsByCategory = async (category, dispatch) => {
  try {
    dispatch({ type: LOAD_PRODUCTS });
    const { data } = await axios({
      method: "GET",
      url: `${baseUrl}/categories/${category}`,
    });
    dispatch({ type: LOAD_PRODUCTS_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({
      type: LOAD_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const loadEachProduct = async (id, dispatch) => {
  try {
    dispatch({ type: LOAD_EACH_PRODUCT });
    const { data } = await axios({
      method: "GET",
      url: `${baseUrl}/product/${id}`,
    });
    dispatch({ type: LOAD_EACH_PRODUCT_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({
      type: LOAD_EACH_PRODUCT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
