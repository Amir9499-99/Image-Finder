import React, { Component } from "react";
import userService from "../../utils/userService";
import { TextField, Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import "./SignupForm.css";

class SignupForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("button was clicked");
      await userService.signup(this.state);
      this.props.handleSignupOrLogin();
      this.props.history.push("/signin");
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      
      <form className="form-horizontal" onSubmit={this.handleSubmit}>
      <div className="SignupForm">
      <header className="header-footer">Sign Up</header>
        <div className="form-group">
          <div className="col-sm-12">
            <TextField
              className="form-control"
              type="text"
              name="name"
              placeholder="name"
              onChange={this.handleChange}
              id="outlined-basic"
              label="Name"
              variant="outlined"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12">
            <TextField
              className="form-control"
              type="email"
              name="email"
              placeholder="email"
              onChange={this.handleChange}
              id="outlined-basic"
              label="email"
              variant="outlined"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12">
            <TextField
              className="form-control"
              type="password"
              name="password"
              placeholder="password"
              onChange={this.handleChange}
              id="outlined-basic"
              label="password"
              variant="outlined"
            />
          </div>
        </div>
        <Button className="sumbit-button" type="submit" variant="contained" color="secondary">
          Submit
        </Button>
      </div>
      </form>
    );
  }
}

export default withRouter(SignupForm);
