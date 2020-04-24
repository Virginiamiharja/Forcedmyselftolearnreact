import React from "react";
import Axios from "axios";
import { API_URL } from "../../constants/API";
import swal from "sweetalert";
import { Redirect } from "react-router-dom";
// Import fungsi dari index.js di redux/action
import { loginHandler } from "../../redux/actions/";
import { connect } from "react-redux";

class LoginScreen extends React.Component {
  state = {
    username: "",
    password: "",
    isLoggedIn: false
  };

  loginHandler = () => {
    const { username, password } = this.state;
    Axios.get(`${API_URL}/users`, {
      params: {
        username,
        password
      }
    })
      .then(res => {
        console.log(res);
        if (res.data.length > 0) {
          swal("Congrats", "You are logged in", "success");
          this.setState({ isLoggedIn: true });
          this.props.onLogin();
        } else {
          swal("Oops", "Wrong username and password", "error");
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { username, password, isLoggedIn } = this.state;
    if (!isLoggedIn) {
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
              onChange={e => {
                this.setState({ username: e.target.value });
              }}
            />

            <input
              className="form-control mb-3"
              value={password}
              onChange=""
              type="text"
              placeholder="Password"
              onChange={e => {
                this.setState({ password: e.target.value });
              }}
            />
            <input
              className="btn btn-primary"
              style={{ width: "100%" }}
              onClick={this.loginHandler}
              type="button"
              value="Login"
            />
          </form>
        </div>
      );
    } else {
      return <Redirect to={`/profile/${username}`} />;
    }
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {
  onLogin: loginHandler
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
