import "./style.css";
import { Link } from "react-router-dom";
const MiniNav = () => {
  return (
    <div className="mini-nav">
      <div className="mini-nav-container">
        <div className="nav-logo">
          <img src="/images/minilogo.png" alt="" />
        </div>
        <div className="nav-items">
          <Link to="/help">
            <p>Help</p>
          </Link>
          <span className="pre-help-separator">|</span>
          <Link to="/login">
            <p>Login</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MiniNav;
