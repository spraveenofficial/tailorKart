import "./style.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/auth-context";
const MiniNav = () => {
  const { isAuthenticated, user, dispatch } = useAuth();
  const handleLogout = () => {
    dispatch({ type: "USER_LOGOUT" });
  };
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
          {isAuthenticated ? (
            <p onClick={() => handleLogout()}>
              Logout {user.name.slice(0, 5)}...
            </p>
          ) : (
            <Link to="/login">
              <p>Login</p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default MiniNav;
