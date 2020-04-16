import React, { Component } from "react";
import searchApi from "../../utils/searchService";
import "./index.css";

export default class HomePage extends Component {
  state = {
    searchResult: "",
    result: [],
  };

  handleChange = (e) => {
    this.setState({ searchResult: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const result = await searchApi.searchApi(this.state.searchResult);
    this.setState({ result: result });
    console.log("this is result", this.state.result);
  };

  imageList = () => {
    const resultsArray = this.state.result;
    console.log("resultsArray: ", resultsArray);
    const resultsMapped = resultsArray.map((img) => {
      let src = img.short_url;
      console.log(src);
      return <img key={src} src={src}></img>;
    });
    return resultsMapped;
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
        <div className="">Here result.. {this.imageList()}</div>
      </div>
    );
  }
}
