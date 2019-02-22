import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './iconHref.scss'

export default function IconHref({ icon, url, text}) {
  return (
    <a href={url} className='iconHref'>
      <FontAwesomeIcon icon={icon} pull="left" size='2x'/> {text}
    </a>
  )
}
