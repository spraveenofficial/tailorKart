import axios from "axios";
import {
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_FAIL,
} from "../Constants/products";
const useProductsByCategory = async (path, dispatch) => {
  try {
    dispatch({ type: LOAD_PRODUCTS });
    const { data } = await axios.get("https://fakestoreapi.com/products");
    dispatch({ type: LOAD_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOAD_PRODUCTS_FAIL, payload: error.message });
  }
};
export { useProductsByCategory };
