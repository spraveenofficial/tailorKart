const useProductsByCategory = () => {
  const initialState = {
    products: [],
    loading: false,
    success: false,
    error: null,
  };
  const [state, dispatch] = useReducer(productsByCategory, initialState);
  const { products, loading, success, error } = state;
  return { products, loading, success, error, dispatch };
};

export { useProductsByCategory };
