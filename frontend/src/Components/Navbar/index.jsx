import "./style.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../Context/cart-context";
import { useAuth } from "../../Context/auth-context";
const Navbar = () => {
  // This is Hook for Authentication.
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { totalItems } = useCart();
  const [deviceType, setDeviceType] = useState("desktop");
  useEffect(() => {
    updateDeviceType(window.innerWidth);
  });
  useEffect(() => {
    window.addEventListener("resize", () => {
      updateDeviceType(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        updateDeviceType(window.innerWidth);
      });
    };
  });
  const [showNav, setNav] = useState(false);
  const hideNav = () => {
    setNav(false);
  };
  const updateDeviceType = (width) => {
    if (width >= 900) {
      setDeviceType("desktop");
      hideNav();
      return;
    }
    setDeviceType("mobile");
  };
  return (
    <>
      {deviceType === "desktop" ? (
        <div className="navbar">
          <div className="navbar-container">
            <Link to="/">
              <div className="navbar-logo">
                <img src="/images/minilogo.png" alt="" />
                <span>ailorKart</span>
              </div>
            </Link>
            <div className="navbar-center-items">
              <p>Mens</p>
              <p>Womens</p>
              <p>Kids</p>
              <p>Footware</p>
              <p>Groceries</p>
            </div>
            <div className="navbar-items">
              <div className="search-navbar" type="search">
                <input type="text" placeholder="Search"></input>
                <svg
                  className="pre-search-input-icon"
                  fill="#111"
                  height="30px"
                  width="30px"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.39zM11 18a7 7 0 1 1 7-7 7 7 0 0 1-7 7z"></path>
                </svg>
              </div>
              <div className="badges">
                <svg width="25px" height="25px" fill="#111" viewBox="0 0 24 24">
                  <path d="M21.11 4a6.6 6.6 0 0 0-4.79-1.92A6.27 6.27 0 0 0 12 3.84 6.57 6.57 0 0 0 2.89 4c-2.8 2.68-2.45 7.3.88 10.76l6.84 6.63A2 2 0 0 0 12 22a2 2 0 0 0 1.37-.54l.2-.19.61-.57c.6-.57 1.42-1.37 2.49-2.41l2.44-2.39 1.09-1.07c3.38-3.55 3.8-8.1.91-10.83zm-2.35 9.4l-.25.24-.8.79-2.44 2.39c-1 1-1.84 1.79-2.44 2.36L12 20l-6.83-6.68c-2.56-2.66-2.86-6-.88-7.92a4.52 4.52 0 0 1 6.4 0l.09.08a2.12 2.12 0 0 1 .32.3l.9.94.9-.94.28-.27.11-.09a4.52 4.52 0 0 1 6.43 0c1.97 1.9 1.67 5.25-.96 7.98z"></path>
                </svg>
                <div className="number">40</div>
              </div>
              <div className="badges">
                <svg
                  onClick={() => navigate("/cart")}
                  width="25px"
                  height="25px"
                  fill="#111"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 7a1 1 0 0 1-1-1V3H9v3a1 1 0 0 1-2 0V3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1z"></path>
                  <path d="M20 5H4a2 2 0 0 0-2 2v13a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a2 2 0 0 0-2-2zm0 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7h16z"></path>
                </svg>
                <div className="number">{totalItems}</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mobile-menu">
          <div className="navbar">
            <div className="navbar-container">
              <Link to="/">
                <div className="navbar-logo">
                  <img src="/images/minilogo.png" alt="" />
                  <span>ailorKart</span>
                </div>
              </Link>
              <div className="navbar-items">
                <div className="badges">
                  <svg
                    width="23px"
                    height="23px"
                    fill="#111"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.11 4a6.6 6.6 0 0 0-4.79-1.92A6.27 6.27 0 0 0 12 3.84 6.57 6.57 0 0 0 2.89 4c-2.8 2.68-2.45 7.3.88 10.76l6.84 6.63A2 2 0 0 0 12 22a2 2 0 0 0 1.37-.54l.2-.19.61-.57c.6-.57 1.42-1.37 2.49-2.41l2.44-2.39 1.09-1.07c3.38-3.55 3.8-8.1.91-10.83zm-2.35 9.4l-.25.24-.8.79-2.44 2.39c-1 1-1.84 1.79-2.44 2.36L12 20l-6.83-6.68c-2.56-2.66-2.86-6-.88-7.92a4.52 4.52 0 0 1 6.4 0l.09.08a2.12 2.12 0 0 1 .32.3l.9.94.9-.94.28-.27.11-.09a4.52 4.52 0 0 1 6.43 0c1.97 1.9 1.67 5.25-.96 7.98z"></path>
                  </svg>
                  <div className="number">40</div>
                </div>
                <div className="badges">
                  <svg
                    onClick={() => navigate("/cart")}
                    width="23px"
                    height="23px"
                    fill="#111"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 7a1 1 0 0 1-1-1V3H9v3a1 1 0 0 1-2 0V3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1z"></path>
                    <path d="M20 5H4a2 2 0 0 0-2 2v13a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a2 2 0 0 0-2-2zm0 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7h16z"></path>
                  </svg>
                  <div className="number">{totalItems}</div>
                </div>
                <svg
                  className="pointer"
                  onClick={() => {
                    setNav(!showNav);
                  }}
                  width="26px"
                  height="26px"
                  fill="#111"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 13H3c-.6 0-1-.4-1-1s.4-1 1-1h18c.6 0 1 .4 1 1s-.4 1-1 1zm0-8H3c-.6 0-1-.4-1-1s.4-1 1-1h18c.6 0 1 .4 1 1s-.4 1-1 1zm0 16H3c-.6 0-1-.4-1-1s.4-1 1-1h18c.6 0 1 .4 1 1s-.4 1-1 1z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
      <AnimatePresence>
        {showNav ? (
          <motion.div
            className="mobile-nav-container"
            initial={{
              x: "100%",
            }}
            animate={{
              x: "calc(100vw - 50%)",
            }}
            exit={{
              x: "100%",
            }}
            transition={{
              type: "tween",
              // ease: [0.87, 0.07, 0.37, 0.97],
              duration: 0.3,
            }}
          >
            <motion.div className="mobnavitems">
              <svg
                onClick={() => {
                  setNav(!showNav);
                }}
                className="pointer"
                fill="#111"
                height="20px"
                width="20px"
                viewBox="0 0 24 24"
              >
                <path d="M15.04 12L24 2.96 21.04 0 12 8.96 3.04 0 0 2.96 9.04 12 0 20.96 3.04 24 12 14.96 21.04 24 24 20.96z"></path>
              </svg>
              <div className="mobile-nav-items">
                <p>Mens</p>
                <p>Womens</p>
                <p>Kids</p>
                <p>Footware</p>
                <p>Groceries</p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
