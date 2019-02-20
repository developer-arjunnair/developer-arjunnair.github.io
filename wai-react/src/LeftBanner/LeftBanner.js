import React, { Component } from 'react';
import './leftBanner.scss';
import { styler,
  value,
  physics,
  pointer,
  spring,
  listen,
easing,
keyframes } from 'popmotion';
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

  componentDidMount() {
    // this.technologiesWorked.forEach( t => {this.animate(t.id)});
    // this.animateDiv('leftBanner');
  }

  animateDiv(id) {
    const bodyStyler = styler(document.getElementById(id));
    keyframes({
      values: ['#FF1C68', '#14D790', '#198FE3','#FF1C68'],
      duration: 10000,
      ease: easing.linear,
      loop: Infinity
    }).start(bodyStyler.set('background'));
  }

  animate(id) {
    const ball = document.getElementById(id);
    const ballStyler = styler(ball);
    const ballXY = value({ x: 0, y: 0 }, ballStyler.set);

    let activeAction;
    let pointerTracker;

    function startTracking() {
      activeAction = physics({
        velocity: ballXY.getVelocity(),
        friction: 0.8,
        springStrength: 300,
        to: ballXY.get(),
        restSpeed: false
      }).start(ballXY);
      pointerTracker = pointer(ballXY.get())
        .start((v) => activeAction.setSpringTarget(v));
    }
    function stopTracking() {
      if (activeAction) activeAction.stop();
      if (pointerTracker) pointerTracker.stop();
      spring({
        velocity: ballXY.getVelocity(),
        from: ballXY.get(),
        stiffness: 300,
        damping: 10
      }).start(ballXY);
    }

    listen(ball, 'mousedown touchstart').start(startTracking);
    listen(document, 'mouseup touchend').start(stopTracking);
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