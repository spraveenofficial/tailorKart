const PriceRange = ({ rangeValue, changeRangeValue }) => {
  return (
    <div>
      <label className="filters filter-block">
        <input
          checked={rangeValue === "below-500"}
          name="below-500"
          type="radio"
          value="below-500"
          onChange={changeRangeValue}
        />
        Below 500
      </label>
      <label className="filters filter-block">
        <input
          checked={rangeValue === "500-999"}
          name="500-999"
          type="radio"
          value="500-999"
          onChange={changeRangeValue}
        />
        500 - 999
      </label>
      <label className="filters filter-block">
        <input
          checked={rangeValue === "1000-4999"}
          name="1000-4999"
          type="radio"
          value="1000-4999"
          onChange={changeRangeValue}
        />
        1000 - 4999
      </label>
      <label className="filters filter-block">
        <input
          checked={rangeValue === "above-5000"}
          name="above-5000"
          type="radio"
          value="above-5000"
          onChange={changeRangeValue}
        />
        5000 +
      </label>
    </div>
  );
};

export default PriceRange;
