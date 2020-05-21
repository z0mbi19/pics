import React from "react";

import SearchBar from "./SearchBar";
import unsplash from "./../api/unsplash";
import ImageList from "./ImageList";
import "./css.css";

class App extends React.Component {
  state = { images: [], pages: 1 };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("search/photos", {
      params: { query: term, page: this.state.pages },
    });
    this.setState({ images: response.data.results });
  };

  renderButton = () => {
    if (this.state.pages > 1) {
      return (
        <button className="ui labeled icon button">
          <i className="left chevron icon" />
          Back
        </button>
      );
    }
    if (this.state.images.length > 1) {
      return (
        <button
          onClick={this.handleClick}
          className="ui right labeled icon button"
        >
          Forward
          <i className="right chevron icon" />
        </button>
      );
    }
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
        <div className="ui buttons">{this.renderButton()}</div>
      </div>
    );
  }
}

export default App;
