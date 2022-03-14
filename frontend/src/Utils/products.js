export const compose =
  (state, ...functions) =>
  (data) =>
    functions.reduce((acc, curr) => {
      return curr(state, acc);
    }, data);

export const sortedPrice = (state, data) => {
  if (state.sort_price === "high-low") {
    return data.sort((a, b) => b.price - a.price);
  } else if (state.sort_price === "low-high") {
    return data.sort((a, b) => a.price - b.price);
  }
  return data;
};

export const filterInStock = (state, data) => {
  if (state.inStock) return data.filter((product) => product.inStock);
  else return data;
};

export const filterFastDelivery = (state, data) => {
  if (state.sort_by_fast_delivery)
    return data.filter((product) => product.fastDelivery);
  else return data;
};
