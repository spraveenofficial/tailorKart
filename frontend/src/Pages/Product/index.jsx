import "./style.css";
import Button from "../../Components/Button";
import { useEachProduct } from "../../Hooks/products";
import { loadEachProduct } from "../../Actions/products";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../Components/Loader";
import NotFoundPage from "../404";
const Product = () => {
  const { id } = useParams();
  const { loading, success, product, dispatch } = useEachProduct();
  console.log(product);
  useEffect(() => {
    loadEachProduct(id, dispatch);
  }, []);
  return loading ? (
    <Loader />
  ) : !loading && success ? (
    <div className="product group">
      <div className="col-1-2 product-image">
        <div>
          <img className="product-bg" src={product.image} alt="" />
        </div>
        <div className="indicator">
          <div className="dot one"></div>
          <div className="dot two"></div>
          <div className="dot three"></div>
          <div className="dot four"></div>
          <div className="dot five"></div>
        </div>
      </div>
      <div className="col-1-2 product-info">
        <h1>{product.title}</h1>
        <h2>₹{product.price} <span className="price-before">₹{product.originalPrice}</span></h2>
        <div className="select-dropdown">
          <select>
            <option defaultValue="" disabled selected hidden>
              Select Size
            </option>
            <option defaultValue="size">Small</option>
            <option defaultValue="size">Medium</option>
            <option defaultValue="size">Large</option>
          </select>
        </div>

        <Button name="Add to Cart" />

        <p>{product.description}</p>

        <ul>
          <li>Graph paper 40-page memo book.</li>
          <li>3 book per pack. Banded and shrink-wrapped</li>
          <li>Three great memo books worth fillin' up with information</li>
          <li>Red cherry wood covers</li>
        </ul>
      </div>
    </div>
  ) : (
    <NotFoundPage />
  );
};

export default Product;
