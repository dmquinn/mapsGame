import React from "react";
import logo from "../images/logo.svg";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-light">
        <div className="container-fluid mx-5 dflex flex-row">
          <img
            src={logo}
            alt=""
            className="d-inline-block align-text-top logo"
          />
        </div>
      </nav>
    </div>
  );
};

export default Header;
