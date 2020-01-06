import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
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
              <Gif id="eA2qEgL5mAsOk"/>
            </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} />
        </div>
      </div>
    );
  }
}

export default App;
