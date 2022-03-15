import { eachProduct } from "../Reducers/products";
import { useReducer } from "react";
const useEachProduct = () => {
  const initialState = {
    product: [],
    loading: true,
    success: false,
    error: null,
  };
  const [state, dispatch] = useReducer(eachProduct, initialState);
  const { product, loading, success, error } = state;
  return { product, loading, success, error, dispatch };
};
export { useEachProduct };
