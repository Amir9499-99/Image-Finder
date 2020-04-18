import React, { Component } from "react";
import "./App.css";
import SignupForm from "./components/SignupForm/SignupForm";
import userService from "./utils/userService";
import { Switch, Route, withRouter } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import favoriteList from "./utils/favoriteList";
import FavoritePage from "./pages/FavoritePage/FavoritePage";
import searchApiResult from "./utils/searchService";

class App extends Component {
  state = {
    user: userService.getUser(),
    favoriteImage: [],
    favorites: [],
    results: [],
    searchResult: [],
  };

  handleChange = (e) => {
    this.setState({ searchResult: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const results = await searchApiResult.searchApi(this.state.searchResult);
    this.setState({ results: results });
  };

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = async () => {
    let favorites = await favoriteList.getMyfavorites();
    this.setState({ favorites, user: userService.getUser() });
  };

  componentDidMount = async () => {
    let favorites = await favoriteList.getMyfavorites();
    this.setState({ favorites });
    console.log(favorites);
  };

  handleSubmitFavorite = async (e, src) => {
    e.preventDefault();
    let term = {
      url: src,
      user: this.state.user,
    };
    try {
      let favorites = [...this.state.favorites, term];
      const result = await favoriteList.favoriteDataList(term);
      this.setState({ favorites });
      console.log("this is my result", this.state.favorites);
      // this.props.history.push("/favoritePage");
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div className="App">
        <NavBar user={this.state.user} handleLogout={this.handleLogout} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <HomePage
                user={this.state.user}
                handleSubmitFavorite={this.handleSubmitFavorite}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                results={this.state.results}
                searchResult={this.state.searchResult}
              />
            )}
          />
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
          <Route
            exact
            path="/favoritePage"
            render={() => (
              <FavoritePage
                user={this.state.user}
                favoriteImage={this.state.favoriteImage}
                favorites={this.state.favorites}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
