import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import MiniNav from "./Components/MiniNavbar";
import Navbar from "./Components/Navbar";
import Signup from "./Pages/Signup";
import Category from "./Pages/Category";
import Cart from "./Components/CartSteps";
import { useAuth } from "./Context/auth-context";
import Loader from "./Components/Loader";
import { loadUser, nullUser } from "./Actions/auth";
import { useEffect } from "react";
import { GuestRoutes } from "./Utils/routes";
function App() {
  const { loading, dispatch } = useAuth();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      loadUser(dispatch);
    } else {
      nullUser(dispatch);
    }
  }, [token]);
  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MiniNav />
          <Navbar />
          <Routes>
            <Route path="/" exact={true} element={<Home />} />
            <Route path="/categories/:category" element={<Category />} />
            <Route path="/cart" element={<Cart />} />
            <Route element={<GuestRoutes />}>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
            </Route>
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
