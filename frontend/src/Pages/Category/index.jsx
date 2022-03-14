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
const Category = () => {
  const [radioInputValue, setRadioInputValue] = useState(null);
  const { category } = useParams();
  const { setCart } = useCart();
  const { success, products, loading, dispatch } = useProduct();
  useEffect(() => {
    loadProductsByCategory(category, dispatch);
    return () => {
      dispatch({ type: "SET_CATEGORY_PRODUCTS_NULL" });
    };
  }, []);

  function HandleClearFunction() {
    console.log("Called");
    // setRadioInputValue(null);
    dispatch({ type: CLEAR_ALL_FILTERS });
  }

  function changeRadioInputvalue(e) {
    const inputValue = e.target.value;
    if (inputValue === "price-high-low")
      dispatch({ type: PRODUCT_HIGH_TO_LOW });
    else dispatch({ type: PRODUCT_LOW_TO_HIGH });
    setRadioInputValue(inputValue);
  }
  const addToCart = (product) => {
    setCart({ type: "ADD_TO_CART", payload: product });
  };
  return loading ? (
    <Loader />
  ) : success ? (
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
            <label className="filters filter-block">
              <input type="radio" /> Below 500
            </label>
            <label className="filters filter-block">
              <input type="radio" /> 500 - 999
            </label>
            <label className="filters filter-block">
              <input type="radio" /> 1000 - 4999
            </label>
            <label className="filters filter-block">
              <input type="radio" /> 5000 +
            </label>
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
      <div className="product-page text-center">
        <h1>Products</h1>
        <div className="products">
          {products.length > 0 &&
            products.map((product) => {
              const { id, title, image, price } = product;
              return (
                <div key={id} id="card" className="card ecom">
                  <div className="product-image">
                    <img src={image} alt="image" />
                  </div>
                  <div className="cart-badge">
                    <button className="ico">
                      <i className="fa fa-heart-o" aria-hidden="true"></i>
                    </button>
                    <div className="card-text">{title}</div>
                    <div className="card-price">
                      <span className="price-now"> Rs. {price}</span>
                      <span className="price-before">Rs. 90,000</span>
                      <span className="discount">(22% Off)</span>
                    </div>
                    <button
                      onClick={() => addToCart(product)}
                      className="btn btn-primary"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  ) : (
    <NotFoundPage />
  );
};

export default Category;
