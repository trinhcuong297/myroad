import Draggable from 'react-draggable'
import React from 'react'
import Rocket from '../public/static/images/rocket.svg'
import SocialIcon from './social-icons'

export default function Introduce() {
  return (
    <div className="fixed top-5 z-10 h-1 w-1">
      <Draggable className="scale-[0.4]">
        <Rocket />
      </Draggable>
    </div>
  )
}
