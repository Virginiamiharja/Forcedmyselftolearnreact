import React from "react";
import Axios from "axios";
import { API_URL } from "../../constants/API";
import swal from "sweetalert";
import { registerHandler } from "../../redux/actions/";
import { connect } from "react-redux";
import { Redirect } from "react";

class RegistrationScreen extends React.Component {
  state = {
    username: "",
    fullName: "",
    password: "",
    rptPassword: "",
    role: ""
  };

  // Cara dapetin value pake function
  valueHandler = (event, field) => {
    this.setState({ [field]: event.target.value });
  };

  registrationHandler = () => {
    const { username, fullName, password, rptPassword, role } = this.state;
    let userRegister = {
      username,
      fullName,
      password,
      rptPassword,
      role
    };
    this.props.onRegister(userRegister);
  };

  render() {
    const { username, fullName, password, rptPassword, role } = this.state;
    return (
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h4 className="mt-5"> Registration Form </h4>
        <form action="" className="form-group col-4 mt-3 mb-3">
          {/* Dapetin value tanpa function */}
          <input
            className="form-control mb-3"
            value={username}
            onChange={e => {
              this.setState({ username: e.target.value });
            }}
            type="text"
            placeholder="Username"
          />
          <input
            className="form-control mb-3"
            value={fullName}
            onChange={e => {
              this.valueHandler(e, "fullName");
            }}
            type="text"
            placeholder="Full Name"
          />
          <input
            className="form-control mb-3"
            value={password}
            onChange={e => {
              this.valueHandler(e, "password");
            }}
            type="text"
            placeholder="Password"
          />
          <input
            className="form-control mb-3"
            value={rptPassword}
            onChange={e => {
              this.valueHandler(e, "rptPassword");
            }}
            type="text"
            placeholder="Repeat password"
          />
          <input
            className="form-control mb-3"
            value={role}
            onChange={e => {
              this.valueHandler(e, "role");
            }}
            type="text"
            placeholder="Role"
          />
          <input
            className="btn btn-primary"
            style={{ width: "100%" }}
            onClick={() => this.registrationHandler()}
            type="button"
            value="Sign Up"
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {
  onRegister: registerHandler
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationScreen);
