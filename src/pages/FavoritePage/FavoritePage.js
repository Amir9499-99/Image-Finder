import React, { Component } from "react";
import favoriteDataList from "../../utils/favoriteList";
import HomePage from "../HomePage/HomePage";
import "./FavoritePage.css";

class FavoritePage extends Component {
  state = {
    favoriteList: [],
    loaded: false,
    favorites: this.props.favorites,
    user: this.props.user,
  };

  componentDidMount = async () => {
    console.log("hittin favorite page componentdidmount");
    let result = await this.props.favorites;
    this.setState({ favorites: result, loaded: true });
  };

  render() {
    return (
      <div className="image-list">
      <p className="favorite-text"> MY FAVORITE IMAGES</p>
        {this.props.favorites.map((e, idx) => {
          return (
            <div className="image-div">
              <img key={idx} src={e.url} />
              <button
                className="save-button"
                onClick={() => this.props.handleRemoveFavorite(e)}
              >
                Delete Image
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default FavoritePage;
