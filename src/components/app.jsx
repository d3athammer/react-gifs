import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar';
import GifList from './gif_list';
import Gif from './gif';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: null
    }
    this.search = this.search.bind(this);
    this.selectGif = this.selectGif.bind(this);
  }

  selectGif = (id) => {
    this.setState({ selectedGifId: id });
  }

// creating a search function to call the search for giphy-api
search = (query) => {
  // API call
  giphy('gaqBWN8l5fE73O6QPCoJDhTTN0o4x3na').search({
    q: query,
    rating: 'g',
    limit: 10
  }, (err, res) => {
    this.setState({
      gifs: res.data
    });
  });
}

render() {
  const { gifs, selectedGifId } = this.state;
  return (
    <div>
      <div className="left-scene">
        <SearchBar searchFunction={this.search} />
        <div className="selected-gif">
          <Gif id={selectedGifId} />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifs={gifs} selectGif={this.selectGif} />
      </div>
    </div>
  );
}
}

export default App;
