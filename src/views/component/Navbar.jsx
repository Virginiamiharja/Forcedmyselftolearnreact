import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="d-flex justify-content-around m-3">
      <Link to="/registration"> Sign Up </Link>
      <Link to="/login"> Sign In </Link>
    </div>
  );
};

export default Navbar;
