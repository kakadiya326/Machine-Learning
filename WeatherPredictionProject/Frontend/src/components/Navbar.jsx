import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="nav-btn">Predict</Link>
      <Link to="/about" className="nav-btn">About Project</Link>
    </div>
  );
};

export default Navbar;