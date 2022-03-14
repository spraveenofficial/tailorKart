import "./style.css";
import Input from "../../Components/Input";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../../Actions/auth";
import { useLogin } from "../../Hooks/auth";
import Spinner from "../../Components/Spinner";
import Toast from "../../Components/Toast";
const Login = () => {
  const { loading, success, message, dispatch } = useLogin();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };
  const handleSubmit = () => {
    loginUser({ email: userData.email, password: userData.password }, dispatch);
  };
  useEffect(() => {
    success === true &&
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
  }, [success]);
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
          <button onClick={() => handleSubmit()} className="btn loading-btn">
            {loading && <Spinner />} Login
          </button>
          <div className="have-account flex">
            <Link to="/signup">
              <p>Create New Account</p>
            </Link>
            <i className="fa-solid fa-angle-right"></i>
          </div>
        </div>
      </div>
      {!loading && message && <Toast message={message} success={success} />}
    </div>
  );
};

export default Login;
