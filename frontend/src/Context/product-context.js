import { createContext, useContext, useReducer } from "react";
import { productsByCategory } from "../Reducers/products";
import { compose, sortedPrice } from "../Utils/products";
const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsByCategory, {
    loading: true,
    product: [],
    success: false,
    error: false,
    sort_price: "normal",
    maxPrice: 5000
  });
  const { success, loading, error, product } = state;
  const filteredProducts = compose(state, sortedPrice)(product);
  return (
    <ProductContext.Provider
      value={{ loading, success, error, products: filteredProducts, dispatch }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);

export { ProductProvider, useProduct };
