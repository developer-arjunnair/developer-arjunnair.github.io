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
    new Technologies('MobX', experience.BELOW_HIGH),
    new Technologies('Node', experience.BELOW_HIGH),
    new Technologies('Yarn', experience.MID),
    new Technologies('Webpack', experience.LOW),
    new Technologies('Jenkins', experience.BELOW_MID),
    new Technologies('Java', experience.BELOW_HIGH),
    new Technologies('Spring Boot', experience.BELOW_HIGH),
    new Technologies('Jenkins', experience.BELOW_MID),
    new Technologies('Docker', experience.BELOW_MID),
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