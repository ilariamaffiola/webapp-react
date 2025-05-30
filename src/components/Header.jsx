import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <nav className="navbar bg-primary mb-4">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <h1>React Movies</h1>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
