import "./style.css";
import { useParams } from "react-router-dom";
import { useProduct } from "../../Context/product-context";
import { useEffect, useState } from "react";
import { loadProductsByCategory } from "../../Actions/products";
import Loader from "../../Components/Loader";
import { PriceSort } from "../../Components/PriceSort";
import { useCart } from "../../Context/cart-context";
import NotFoundPage from "../404";
import {
  CLEAR_ALL_FILTERS,
  PRODUCT_HIGH_TO_LOW,
  PRODUCT_LOW_TO_HIGH,
} from "../../Constants/products";
import PriceRange from "../../Components/PriceSort/price-range";
import ProductCard from "../../Components/ProductCard";
const Category = () => {
  const [radioInputValue, setRadioInputValue] = useState(null);
  const [pricerange, setPriceRange] = useState(null);
  const { category } = useParams();
  const { setCart } = useCart();
  const { success, products, loading, dispatch } = useProduct();
  useEffect(() => {
    loadProductsByCategory(category, dispatch);
    return () => {
      console.log("returning");
      dispatch({ type: "SET_CATEGORY_PRODUCTS_NULL" });
      HandleClearFunction();
    };
  }, []);
  function HandleClearFunction() {
    setRadioInputValue(null);
    setPriceRange(null);
    dispatch({ type: CLEAR_ALL_FILTERS });
  }

  function changeRadioInputvalue(e) {
    const inputValue = e.target.value;
    if (inputValue === "price-high-low")
      dispatch({ type: PRODUCT_HIGH_TO_LOW });
    else dispatch({ type: PRODUCT_LOW_TO_HIGH });
    setRadioInputValue(inputValue);
  }
  function changeRangeValue(e) {
    setRadioInputValue(null);
    const inputValue = e.target.value;
    if (inputValue === "below-500") {
      dispatch({ type: "PRICE_BELOW_500" });
    } else if (inputValue === "500-999") {
      dispatch({ type: "PRICE_BETWEEN_500_AND_999" });
    } else if (inputValue === "1000-4999") {
      dispatch({ type: "PRICE_BETWEEN_1000_AND_4999" });
    } else if (inputValue === "above-5000") {
      dispatch({ type: "PRICE_5000_PLUS" });
    }
    setPriceRange(inputValue);
  }
  const addToCart = (product) => {
    setCart({ type: "ADD_TO_CART", payload: product });
  };
  return loading ? (
    <Loader />
  ) : !loading && success ? (
    <div className="products-page">
      <div className="filter">
        <div className="filter-heading flex justify-between">
          <p>Filters</p>
          <p onClick={() => HandleClearFunction()} className="pointer">
            Clear all
          </p>
        </div>
        <div className="all-filter">
          <div className="filter-section mt-10">
            <p className="text-bold">Filter Price</p>
            <PriceSort
              changeRadioInputvalue={changeRadioInputvalue}
              radioInputValue={radioInputValue}
            />
          </div>
          <div className="filter-section mt-10">
            <p className="text-bold">Price Range</p>
            <PriceRange
              rangeValue={pricerange}
              changeRangeValue={changeRangeValue}
            />
          </div>
          <div className="filter-section mt-10">
            <p className="text-bold">Rating</p>
            <div className="filter">
              1★
              <input
                type="range"
                min="1"
                max="5"
                id="range"
                className="slider"
              />
              5★
            </div>
          </div>
        </div>
      </div>
      <div className="product-page">
        <h2 className="ml-10 category-title">
          {category.toLocaleUpperCase()} Stores{" "}
          <span>Showing all ({products.length}) products</span>
        </h2>
        <div className="products">
          {products.length > 0
            ? products.map((product) => {
                return (
                  <ProductCard
                    product={product}
                    key={product._id}
                    addToCart={addToCart}
                  />
                );
              })
            : success &&
              products && (
                <h1>Products Not Available According to Your Filter</h1>
              )}
        </div>
      </div>
    </div>
  ) : (
    !success && !loading && <NotFoundPage />
  );
};

export default Category;
