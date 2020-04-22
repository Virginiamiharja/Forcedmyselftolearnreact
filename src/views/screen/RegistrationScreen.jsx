import React from "react";
import Axios from "axios";
import { API_URL } from "../../constants/API";
import swal from "sweetalert";

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
    Axios.get(`${API_URL}/users`, {
      params: {
        username
      }
    })
      .then(res => {
        if (res.data.length > 0) {
          swal("Oops !", "That username has been registered", "error");
        } else if (password != rptPassword) {
          swal("Oops !", "Password does not match", "error");
        } else {
          swal("Welcome !", "Thank you for your registration", "success");
          this.setState({
            username: "",
            fullName: "",
            password: "",
            rptPassword: "",
            role: ""
          });
          Axios.post(`${API_URL}/users`, {
            username,
            fullName,
            password,
            role
          })
            .then(res => {
              console.log(res);
            })
            .catch(err => {
              console.log(err);
            });
        }
      })
      .catch(err => {
        console.log(err);
      });
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

export default RegistrationScreen;
