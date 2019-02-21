import React, { Component } from 'react';
import './app.scss';
import Banner from '../Banner/Banner';
import LeftBanner from '../LeftBanner/LeftBanner';
import Details from "../Details/Details";
// import posed from 'react-pose';

// const MainContainer = posed.div({
//   enter: { opacity: 1, delay: 300, beforeChildren: true },
//   exit: { opacity: 0 }
// });
class App extends Component {

  render() {
    return (
      <div className="App">
      <div className="app_banner">
        <Banner />
      </div>
      <section className = "mail_leftBanner">
        <LeftBanner />
      </section>
      <main className="mainContent"s>
        <Details />
      </main>
      </div>
    );
  }
}

export default App;
