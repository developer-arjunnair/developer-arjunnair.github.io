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
  const experience = {
    HIGH: 31,
    BELOW_HIGH: 28,
    MID: 25,
    BELOW_MID: 22,
    LOW: 15,
  }
  return [
    new Technologies('React', experience.HIGH),
    new Technologies('MobX', experience.HIGH),
    new Technologies('Node', experience.HIGH),
    new Technologies('Yarn', experience.HIGH),
    new Technologies('Webpack', experience.HIGH),
    new Technologies('Jenkins', experience.HIGH),
    new Technologies('Java', experience.HIGH),
    new Technologies('Spring Boot', experience.HIGH),
    new Technologies('Docker', experience.HIGH),
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
        <React.Fragment>
          <PoseGroup>
            { showTransition && <TechStackHeader className="techStackHeader" key="TechStackHeader">
                Tech Stack
              </TechStackHeader>}
          </PoseGroup>
          <div className='leftBanner'>
          <ul>
              {
                this.technologiesWorked.map((t) => <Tech key={t.id} {...t}/> )
              }
          </ul>
          </div>
        </React.Fragment>
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