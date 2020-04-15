import React, { Component } from "react";
import searchApi from "../../utils/searchService";

const API = "https://wallhaven.cc/api/v1/search?q=";
const params = "&categories=100&purity=110&sorting=relevance&order=desc&page=1";

class HomePage extends Component {
  state = {
    searchResult: '',
  };

  handleChange = (e) => {
    this.setState({ searchResult: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const result = await searchApi(this.state.searchResult);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default HomePage;
