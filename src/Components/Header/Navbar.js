import { Link } from "react-router-dom";
import React from "react";
import Header from "./Headers";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <>
      <Header />;
      <nav className="navbar">
        <div className="container-fluid">
          <div className="container-link">
            <div className="ClickableLink">
              <Link to="/articles">Home</Link>
            </div>
            <div className="ClickableLink">
              <Link to="/topics/topic">Topics</Link>
            </div>
          </div>
          <Logo />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
