import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';
import giphy from 'giphy-api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGifId: "eA2qEgL5mAsOk"
    }
  }

search = (query) => {

// API call

}

  render() {
    const gifs = [
      { id: "eA2qEgL5mAsOk"},
      { id: "RMtvA0H3W3a3S"}
    ];
    return(
      <div>
        <div className="left-scene">
          <SearchBar />
            <div className="selected-gif">
              <Gif id={this.state.selectedGifId}/>
            </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
