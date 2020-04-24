import React from "react";
import Axios from "axios";
import { API_URL } from "../../constants/API";
import { connect } from "react-redux";

class ProfileScreen extends React.Component {
  state = {
    //   this.props.match.params. ini untuk manggil route params
    logUsername: this.props.match.params.username,
    logFullname: "",
    logPassword: "",
    logRole: ""
  };

  componentDidMount() {
    const { logUsername, logFullname, logPassword, logRole } = this.state;
    Axios.get(`${API_URL}/users`, {
      params: {
        username: logUsername
      }
    })
      .then(res => {
        console.log(res);
        if (res.data.length > 0) {
          const { fullName, password, role } = res.data[0];
          this.setState({
            logFullname: fullName,
            logPassword: password,
            logRole: role
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { logUsername, logFullname, logPassword, logRole } = this.state;
    return (
      <div className="d-flex flex-column align-items-center justify-content-center m-5">
        <h4>
          Welcome, {this.props.user.username} and {this.props.user.fullName}{" "}
        </h4>
        <form action="" className="form-group col-4 mt-3 mb-3">
          {/* Dapetin value tanpa function */}
          <p>
            <b> Username </b>
            <input
              className="form-control mb-3"
              value={logUsername}
              type="text"
            />
          </p>
          <p>
            <b> Password </b>
            <input
              className="form-control mb-3"
              value={logPassword}
              type="text"
            />
          </p>
          <p>
            <b> Role </b>
            <input className="form-control mb-3" value={logRole} type="text" />
          </p>
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

export default connect(mapStateToProps)(ProfileScreen);
