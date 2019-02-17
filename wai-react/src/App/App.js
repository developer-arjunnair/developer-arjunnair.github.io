import React, { Component } from 'react';
import './App.css';
import Banner from '../Banner/Banner'

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="app_banner">
        <Banner />
      </div>
      </div>
    );
  }
}

export default App;
