import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import MiniNav from "./Components/MiniNavbar";
import Navbar from "./Components/Navbar";
import Signup from "./Pages/Signup";
import Category from "./Pages/Category";
import Cart from "./Components/CartSteps";
function App() {
  return (
    <Router>
      <MiniNav />
      <Navbar />
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/categories/:category" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
