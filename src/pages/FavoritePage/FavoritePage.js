import React, { Component } from "react";
import favoriteDataList from "../../utils/favoriteList";
import HomePage from "../HomePage/HomePage";
import "./FavoritePage.css";

class FavoritePage extends Component {
  state = {
    favoriteList: [],
    loaded: false,
    favorites: this.props.favorites,
  };

  componentDidMount = async () => {
    console.log("hittin favorite page componentdidmount");
    let result = await this.props.favorites;
    this.setState({ favorites: result, loaded: true });
    await this.handleFavoriteList();
    console.log("this is state from favorite", this.state.favorites);
  };

  handleFavoriteList = async () => {
    if (this.state.loaded) {
      let user = this.props.user;
      // let result = await this.props.favoriteImage;
      console.log(this.props.favoriteList);
      let resultMapped = await this.props.favorites.map((e, idx) => {
        console.log("this is e", e);
        return (
          <div className="image-div">
            <img key={idx} src={e.url}></img>
            <button className="delete-button"
              onClick={(e) => {
                alert("deleteeeee");
              }}
            >
              Delete Image
            </button>
          </div>
        );
      });
    } else {
      return <h1> ...Loading </h1>;
    }
  };

  render() {
    return (
      <div className="image-list">
        <div >
        {this.props.favorites.map((e, idx) => {
          return (
            <div className="image-div">
              <img key={idx} src={e.url} />
              <button onClick={(e) => alert("Delete it")}>
                Delete Image
              </button>
            </div>
          );
        })}
        </div>
      </div>
    );
    // return <div>{this.handleFavoriteList()}</div>;
  }
}

export default FavoritePage;
