import React, { Component } from 'react';
import SearchingPanel from './SearchingPanel'
import './App.scss';


class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchingPanel />
      </div>
    );
  }
}

export default App;