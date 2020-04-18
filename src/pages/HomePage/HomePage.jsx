import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import searchApiResult from "../../utils/searchService";
import FavoritePage from "../FavoritePage/FavoritePage";
import favoriteList from "../../utils/favoriteList";
import "./HomePage.css";

export default class HomePage extends Component {
  state = {
    searchResult: "",
    result: [],
  };

  componentDidMount = async () => {
    console.log(this.state.searchResult);
  };

  // handleChange = (e) => {
  //   this.setState({ searchResult: e.target.value });
  // };

  // handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const result = await searchApiResult.searchApi(this.state.searchResult);
  //   this.setState({ result: result });
  // };

  imageList = () => {
    const resultsArray = this.props.results;
    const resultsMapped = resultsArray.map((img, x) => {
      let src = img.path;
      return (
        <div className="image-div">
          <img key={x} src={src}></img>
          <button
            className="save-button"
            onClick={(e) => {
              this.props.handleSubmitFavorite(e, src);
            }}
          >
            
            Save Image
          </button>
        </div>
      );
    });
    return resultsMapped;
  };

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit} className="search-form">
          <input
            className="search-bar"
            type="text"
            onChange={this.props.handleChange}
          />
          <input className="search-button" type="submit" value="Search" />
        </form>
        <div className="image-list">{this.imageList()}</div>
      </div>
    );
  }
}
