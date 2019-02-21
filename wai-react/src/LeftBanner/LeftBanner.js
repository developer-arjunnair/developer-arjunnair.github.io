import React, { Component } from 'react';
import './leftBanner.scss';
import Tech from './Tech/Tech'
import posed, { PoseGroup } from 'react-pose';

export default class LeftBanner extends Component {

constructor(props) {
  super(props);
  this.state = { showTransition : false};
  setTimeout(() => {this.setState({ showTransition: true })});
}
get technologiesWorked() {
  return [
    new Technologies('React', 4),
    new Technologies('MobX', 2),
    new Technologies('Node', 1.8),
    new Technologies('Yarn', 1),
    new Technologies('Webpack', 1),
    new Technologies('Jenkins', 1),
    new Technologies('Java', 3),
    new Technologies('Spring Boot', 2),
    new Technologies('Jenkins', 1),
    new Technologies('Docker', 1),
  ];
}

get TechStackHeader() {
  return posed.div({
    enter: {
      y: 0,
      opacity: 1,
      delay: 300,
      transition: {
        y: { type: 'spring', stiffness: 1000, damping: 10 },
        default: { duration: 3000 }
      }
    },
    exit: {
      y: -100,
      opacity: 0,
      transition: { duration: 150 }
    }
  });
}
  render() {
    const { TechStackHeader, state: { showTransition } } = this;
    return (
      <div className='leftBanner'>
        <PoseGroup>
          { showTransition && <TechStackHeader className="techStackHeader" key="TechStackHeader">
              Tech Stack
            </TechStackHeader>}
        </PoseGroup>
        <ul>
            {
              this.technologiesWorked.map((t) => <Tech key={t.id} {...t}/> )
            }
        </ul>
        </div>
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