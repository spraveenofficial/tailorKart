import { createContext, useContext, useReducer } from "react";
import { productReducer } from "../Reducers/products";
import { compose, sortedPrice } from "../Utils/products";
const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, {
    loading: false,
    product: [],
    error: false,
    sort_price: null,
    inStock: null,
    sort_by_fast_delivery: null,
  });
  const { loading, error, product } = state;
  const filteredProducts = compose(state, sortedPrice)(product);

  return (
    <ProductContext.Provider
      value={{ loading, error, products: filteredProducts, dispatch }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);

export { ProductProvider, useProduct };
