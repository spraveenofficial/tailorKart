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
  } else if (state.sort_price === "normal") {
    return data.sort((a, b) => a.title.localeCompare(b.title));
  }
  return data.sort((a, b) => a.title.localeCompare(b.title));
};

// export const filterInStock = (state, data) => {
//   if (state.inStock) return data.filter((product) => product.inStock);
//   else return data;
// };

// export const filterFastDelivery = (state, data) => {
//   if (state.sort_by_fast_delivery)
//     return data.filter((product) => product.fastDelivery);
//   else return data;
// };

// Write function to clear all filters
// export const clearAllFilters = (state, data) => {
//   if (state.clearAllFilters) {
//     // console.log(data.filter((product) => product));
//     return data;
//   } else return data;
// };
