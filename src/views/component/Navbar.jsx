import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutHandler } from "../../redux/actions";

const Navbar = props => {
  return (
    <div className="d-flex justify-content-around m-3">
      <Link to="/registration"> Sign Up </Link>
      <Link to="/login"> Sign In </Link>
      <p> User ID : {props.user.id}</p>
      {props.user.id ? (
        <a href="" onClick={props.onLogout}>
          Logout
        </a>
      ) : null}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {
  onLogout: logoutHandler
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
