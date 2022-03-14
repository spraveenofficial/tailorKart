import "./style.css";
import Button from "../../Components/Button";
import { useNavigate } from "react-router-dom";
const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="error-page">
      <h1>404 || Not Found</h1>
      <p>Lost in Space...</p>
      <Button
        onClick={() => navigate("/")}
        className="mt-10 btn"
        name="Back To Home"
      />
    </div>
  );
};

export default ErrorPage;
