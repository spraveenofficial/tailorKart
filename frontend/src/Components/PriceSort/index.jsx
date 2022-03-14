export const PriceSort = ({ radioInputValue, changeRadioInputvalue }) => {
  return (
    <div>
      <label className="filters filter-block">
        <input
          name="price-sort"
          checked={radioInputValue === "price-low-high"}
          value="price-low-high"
          onChange={changeRadioInputvalue}
          type="checkbox"
        />
        Price Low to High
      </label>
      <label className="filters filter-block">
        <input
          name="price-sort"
          checked={radioInputValue === "price-high-low"}
          value="price-high-low"
          onChange={changeRadioInputvalue}
          type="checkbox"
        />
        Price High to Low
      </label>
    </div>
  );
};
