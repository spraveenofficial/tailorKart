import "./style.css";
import Input from "../../Components/Input";
import { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };
  console.log(userData);
  return (
    <div className="login-page">
      <div className="login">
        <div className="login-header">
          <h2>Login</h2>
        </div>
        <div className="login-items">
          <Input
            label="Enter Email"
            type="email"
            placeholder="Johndoe@gmail.com"
            name="email"
            onChange={handleChange}
          />
          <Input
            label="Enter Password"
            type="password"
            placeholder="*********"
            name="password"
            onChange={handleChange}
          />
          <div className="remember-options mt-10">
            <div className="remember">
              <input
                type="checkbox"
                id="checkbox"
                name="checkbox"
                value="Bike"
                className="checkbox"
              />
              <label htmlFor="checkbox">Remember me</label>
              <br />
            </div>
            <div className="forgot">
              <p>Forgot Password?</p>
            </div>
          </div>
          <button className="btn">Login</button>
          <div className="have-account flex">
            <Link to="/signup">
              <p>Create New Account</p>
            </Link>
            <i className="fa-solid fa-angle-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
