import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfPics: null,
      pics: []
    };

    this.onInputSubmit = this.onInputSubmit.bind(this);
  }

  async onInputSubmit(term) {
    const response = await unsplash.get("search/photos", {
      params: { query: term }
    });

    console.log(response);

    this.setState({
      numberOfPics: response.data.total,
      pics: response.data.results
    });
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onInputSubmit} />
        <ImageList images={this.state.pics} />
      </div>
    );
  }
}

export default App;
