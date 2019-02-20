import posed from 'react-pose';
import React from 'react';
import './tech.scss';

const TechDiv = posed.li({
  draggable: true,
  dragEnd:  {
    x: 0,
    y: 0,
    transition: (obj) => {
      return (
      {
        type: 'spring',
        from: 0,
        to :0,
        stiffness: 200,
      }
    )}
  }
});

export default ({ size, tech, id }) => {

  return (
    <TechDiv className='techLi' style={{ fontSize: size + 'em'}} >
      {tech}
    </TechDiv>
  );
}