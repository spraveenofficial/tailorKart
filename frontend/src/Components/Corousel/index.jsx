import { Link } from "react-router-dom";
import "./style.css";
import { setCorousel } from "../../Hooks/corousel";
const Carousel = ({ name }) => {
  // Using custom hook for Next and Previous buttons
  const { next, prev } = setCorousel();

  return (
    <div className="carousel-main-container">
      <div className="carousel-wrapper">
        <div className="carousel-main">
          <div className="carousel-content">
            {name.map((item) => {
              // Destructuring Items
              const { title, image, id } = item;
              return (
                <Link key={id} to={`categories/${title.toLowerCase()}`}>
                  <div className="carousel-items">
                    <img src={image} alt="" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <button className="carousel-prev" onClick={prev}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path fill="none" d="M0 0h24v24H0V0z" />
            <path d="M15.61 7.41L14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z" />
          </svg>
        </button>
        <button className="carousel-next" onClick={next}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path fill="none" d="M0 0h24v24H0V0z" />
            <path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
