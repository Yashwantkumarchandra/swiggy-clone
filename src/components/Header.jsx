import { useContext, useState } from "react";
import { LOGO_URL } from "../Utils/Constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";

const Header = () => {
  const [btnLogin, setBtnLogin] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-lg bg-body-secondary  ">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand ms-4">
          <img
            src={LOGO_URL}
            alt="logo"
            style={{ width: "4rem", height: "4rem" }}
          />
        </Link>
        <p className="nav-item">Online Status:{onlineStatus ? "✅" : "❌"}</p>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse  navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link " aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link">Cart</a>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-primary  "
                onClick={() => {
                  btnLogin === "Login"
                    ? setBtnLogin("Logout")
                    : setBtnLogin("Login");
                }}
              >
                {btnLogin}
              </button>
            </li>
            <li className="nav-item p-2">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
