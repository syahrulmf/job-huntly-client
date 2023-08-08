import { Button } from "antd";
import { Link, useNavigate } from "react-router-dom";

import { useTypedSelector } from "../../../redux/app/hooks";
import "./style.css";

export default function Navbar() {
  const navigate = useNavigate();
  const { user } = useTypedSelector((state) => state.auth);

  return (
    <div className="navbar-wrapper">
      <div className="nav-logo-link">
        <img
          className="logo-img"
          src="/images/Logo.png"
          alt="/images/Logo.png"
        />
        <div>
          <Link className="nav-link" to="/find-jobs">
            Find Jobs
          </Link>
          <Link className="nav-link" to={"#"}>
            Browse Companies
          </Link>
        </div>
      </div>
      {user ? (
        <div className="username">Hai, {user.name}</div>
      ) : (
        <div className="auth">
          <Button
            onClick={() => navigate("/signin")}
            className="btn-link"
            type="link"
          >
            Login
          </Button>
          <Button onClick={() => navigate("/signup")} type="primary">
            Sign Up
          </Button>
        </div>
      )}
    </div>
  );
}
