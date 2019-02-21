import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faMobile } from '@fortawesome/free-solid-svg-icons'
import './mobileDeviceSupportError.scss';

export default class MobileDeviceSupportError extends Component {
  render() {
    return (
      <div>
        <div className="errorPageGear">
         <FontAwesomeIcon icon={faCog} spin size="6x"/>
        </div>
        <div class='errorPageBox'>
         <FontAwesomeIcon icon={faMobile}/> Friendly version under construction
        </div>
      </div>
    )
  }
}
