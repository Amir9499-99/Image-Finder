import React, { Component } from "react";
import "./App.css";
import SignupForm from "./components/SignupForm/SignupForm";
import userService from "./utils/userService";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import HomePage from "./pages/HomePage";

class App extends Component {
  state = {
    user: userService.getUser(),
    }


  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  render() {
    return (
      <div className="App">
        <NavBar user={this.state.user} handleLogout={this.handleLogout} />
        <Switch>
          <Route exact path="/" render={() => <HomePage />} />
          <Route
            exact
            path="/signup"
            render={() => (
              <SignupForm handleSignupOrLogin={this.handleSignupOrLogin} />
            )}
          />
          <Route
            exact
            path="/signin"
            render={() => (
              <LoginPage handleSignupOrLogin={this.handleSignupOrLogin} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
