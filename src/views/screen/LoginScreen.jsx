import React from "react";
import Axios from "axios";
import { API_URL } from "../../constants/API";
import swal from "sweetalert";
import { Redirect } from "react-router-dom";
// Import fungsi dari index.js di redux/action
import { loginHandler } from "../../redux/actions/";
import { connect } from "react-redux";
import Cookie from "universal-cookie";

const cookieObject = new Cookie();

class LoginScreen extends React.Component {
  state = {
    username: "",
    password: ""
  };

  loginHandler = () => {
    const { username, password } = this.state;
    let userLogin = {
      username,
      password
    };
    this.props.onLogin(userLogin);
  };

  componentDidUpdate() {
    // Kalo misalnya ada id berarti dia akan execute function
    if (this.props.user.id) {
      // Kita set cookie dengan nama auth data trs kita ambil apa yang mau kita simpan yaitu si user kan
      // Tapi dia nerima hanya string jd kita parsing gitu dari object jadi string
      cookieObject.set("authData", JSON.stringify(this.props.user));
    }
  }

  render() {
    const { username, password } = this.state;
    if (!this.props.user.isLoggedIn) {
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
