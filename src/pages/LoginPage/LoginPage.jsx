import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";
import userService from "../../utils/userService";
import "./LoginPage.css"

class LoginPage extends Component {
  state = {
    email: "",
    pw: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      this.props.handleSignupOrLogin();
      this.props.history.push("/");
    } catch (err) {
      // Use a modal or toast in your apps instead of alert
      alert("Invalid Credentials!");
    }
  };

  render() {
    return (
      <div className="LoginPage">
        <header className="header-footer">Log In</header>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <div className="col-sm-12">
              <TextField
                type="email"
                className="form-control"
                placeholder="Email"
                value={this.state.email}
                name="email"
                onChange={this.handleChange}
                id="outlined-basic"
                label="Email"
                variant="outlined"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <TextField
                type="password"
                className="form-control"
                placeholder="Password"
                value={this.state.pw}
                name="pw"
                onChange={this.handleChange}
                id="outlined-basic"
                label="Password"
                variant="outlined"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <Button type="submit" variant="contained" color="secondary">
                Log in
              </Button>
              &nbsp;&nbsp;&nbsp;
              <Link to="/">Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginPage);
