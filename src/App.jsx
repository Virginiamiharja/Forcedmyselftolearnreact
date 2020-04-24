import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./bootstrap.css";
import { Route, Switch, withRouter } from "react-router-dom";
import Cookie from "universal-cookie";
import { keepLoginHandler } from "./redux/actions";
import { connect } from "react-redux";

// Component
import Navbar from "./views/component/Navbar";

// Screen
import RegistrationScreen from "./views/screen/RegistrationScreen";
import HomeScreen from "./views/screen/HomeScreen";
import LoginScreen from "./views/screen/LoginScreen";
import ProfileScreen from "./views/screen/ProfileScreen";

// Urutan package yang harus diinstall
// Router => npm install react-router-dom => Ini buat routing
// Json Server => npm install -g json-server => Buat nyimpen data sementara
// Axios => npm install axios => Untuk manipulasi json server
// Redux => npm install reactstrap redux react-redux redux-thunk => Untuk global state and functions
// Cookie => npm install universal-cookie => Untuk nyimpen data di client server

const cookieObject = new Cookie();

class App extends React.Component {
  // Kenapa ditaro di app, biar disemua component atau screen kalau misalnya dia masih ada cookienya ya dia bisa akses
  componentDidMount() {
    // Kita bikin variable disini, biar bisa bikin kondisi, kalo misalnya ada cookie dia tetep login kalo gaada ya gausah login
    let cookieResult = cookieObject.get("authData");
    console.log(cookieResult);
    if (cookieResult) {
      this.props.onKeepLogin(cookieResult);
    }
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/hallo/:user" component={HomeScreen} />
          <Route exact path="/registration" component={RegistrationScreen} />
          <Route exact path="/login" component={LoginScreen} />
          {/* Ini namanya route param */}
          <Route exact path="/profile/:username" component={ProfileScreen} />
        </Switch>
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
  onKeepLogin: keepLoginHandler
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
