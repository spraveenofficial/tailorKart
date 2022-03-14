import "./style.css";
import Input from "../../Components/Input";
import { useState } from "react";
import { Link } from "react-router-dom";
const Signup = () => {
  const [userData, setUserData] = useState({
    name: "",
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
          <h2>Signup</h2>
        </div>
        <div className="login-items">
          <Input
            label="Enter Name"
            type="text"
            placeholder="John Doe"
            name="name"
            onChange={handleChange}
          />
          <Input
            label="Enter Email"
            type="email"
            placeholder="johndoe@gmail.com"
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
              <label htmlFor="checkbox">I agree, to all the terms.</label>
              <br />
            </div>
          </div>
          <button className="btn">Signup</button>
          <div className="have-account flex">
            <Link to="/login">
              <p>Alreay have Account?</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
