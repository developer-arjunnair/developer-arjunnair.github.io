import React, { Component } from 'react';
import './banner.scss';
import posed from "react-pose";
import { faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faGitSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import IconHref from '../SharedComponents/IconHref/IconHref'
class Banner extends Component {

  get Icons() {
    return posed.div();
  }

  get iconList() {
    return [
      { text:'Git repo' , icon:faGitSquare, url:'https://github.com/a3qube' ,},
      { text:'LinkedIn' , icon:faLinkedin, url:'https://www.linkedin.com/in/arjun-a-nair-74194536',},
      { text:'eMail' , icon:faEnvelope, url:'mailto:arjun.nair89@outlook.com' ,},
      { text:'Mobile' , icon:faMobileAlt, url:'tel:+1-669-241-9274'},
    ];
  }

  render() {
    const { Icons, iconList } = this;
    return (
      <header>
        <div className="heading">
          <h1> Arjun Nair </h1>
        </div>
        <div className="icons">
          <Icons>
            { iconList.map( ic =>
              <IconHref url={ic.url} icon={ic.icon}/>
            )}
          </Icons>
        </div>


      </header>

    );
  }
}

export default Banner;
