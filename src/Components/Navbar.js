import { Link } from "react-router-dom";
import React from "react";
import SortArticles from "./Sortby";
import Header from "./Headers";

const Navbar = () => {
  return (
    <>
      <Header />;
      <nav className="navbar">
        <div className="container-fluid">
          <div className="ClickableLink">
            <Link to="/articles">Home</Link>
          </div>
          <div className="ClickableLink">
            <Link to="/topics/topic">Topics</Link>
          </div>

          <SortArticles />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
