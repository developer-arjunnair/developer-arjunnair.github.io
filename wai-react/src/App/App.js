import React, { Component } from 'react';
import './app.scss';
import deviceCheck from '../utils/deviceCheck'
import Banner from '../Banner/Banner';
import LeftBanner from '../LeftBanner/LeftBanner';
import Details from "../Details/Details";
import MobileDeviceSupportError from '../ErrorPages/MobileDeviceSupportError'
class App extends Component {

  render() {
    return (
      deviceCheck.any() ? <MobileDeviceSupportError /> :
      (
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
      </div> )
    );
  }
}

export default App;
