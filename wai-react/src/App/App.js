import React, { Component } from 'react';
import './app.scss';
import Banner from '../Banner/Banner';
import LeftBanner from '../LeftBanner/LeftBanner';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="app_banner">
        <Banner />
      </div>
      <section calssName = "mail_leftBanner">
        <LeftBanner />
      </section>
      </div>
    );
  }
}

export default App;
