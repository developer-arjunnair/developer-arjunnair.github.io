import React, { Component } from 'react';
import './leftBanner.scss';
import Tech from './Tech/Tech'

export default class LeftBanner extends Component {


get technologiesWorked() {
  return [
    new Technologies('React', 4),
    new Technologies('MobX', 1),
    new Technologies('Java', 3),
    new Technologies('Spring Boot', 1),
    new Technologies('Jenkins', 1.8),
  ];
}

  render() {
    return (
      <ul className='leftBanner' id="leftBanner">
          {
            this.technologiesWorked.map((t) => <Tech key={t.id} {...t}/> )
          }
      </ul>
    );
  }
}

class Technologies {

  constructor(t, size) {
    this.tech = t;
    this.size = size;
  }

  get id() {
    return `${this.tech.replace(/ /g,"-")}-tech`;
  }
}