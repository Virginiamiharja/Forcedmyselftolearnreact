import React from "react";

class LoginScreen extends React.Component {
  state = {
    username: "",
    password: ""
  };
  render() {
    const { username, password } = this.state;
    return (
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h4 className="mt-5"> Login Form </h4>
        <form action="" className="form-group col-4 mt-3 mb-3">
          {/* Dapetin value tanpa function */}
          <input
            className="form-control mb-3"
            value={username}
            onChange=""
            type="text"
            placeholder="Username"
          />

          <input
            className="form-control mb-3"
            value={password}
            onChange=""
            type="text"
            placeholder="Password"
          />
          <input
            className="btn btn-primary"
            style={{ width: "100%" }}
            onClick=""
            type="button"
            value="Login"
          />
        </form>
      </div>
    );
  }
}

export default LoginScreen;
