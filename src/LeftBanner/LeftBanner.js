import React, { Component } from 'react';
import './leftBanner.scss';
import Tech from './Tech/Tech'
import posed, { Transition } from 'react-pose';

export default class LeftBanner extends Component {

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
      opacity: 1,
      delay: 300,
    },
    exit: {
      opacity: 0,
      transition: { duration: 200 }
    }
  });
}
get UL() {
  return posed.ul({
    enter: { staggerChildren: 100}
  });
}

  render() {
    const { TechStackHeader, UL } = this;
    return (
        <React.Fragment>
          <Transition animateOnMount>
            {<TechStackHeader className="techStackHeader" key="TechStackHeader">
                Tech Stack
              </TechStackHeader>}
          </Transition>
          <div className='leftBanner'>
          <Transition animateOnMount>
            <UL key="leftBannerUL">
                {
                  this.technologiesWorked.map((t) => <Tech key={`${t.id}-ul`} {...t}/> )
                }
            </UL>
          </Transition>
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