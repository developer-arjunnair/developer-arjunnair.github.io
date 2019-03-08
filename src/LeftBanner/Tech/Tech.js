import posed, { Transition } from 'react-pose';
import React from 'react';
import './tech.scss';

const TechDiv = posed.li({
  enter: { opacity: 1, transition: { duration: 2000 }},
  exit: { opacity: 0 }
});

export default ({ size, tech, id }) => {

  return (
    <Transition animateOnMount>
      <TechDiv key={`${id}-li`} className='techLi' style={{ fontSize: size + 'px'}} >
        {tech}
      </TechDiv>
    </Transition>
  );
}