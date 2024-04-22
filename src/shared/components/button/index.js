import React from 'react';
import './cardleftanglebraketbutton.scss';
import { FaAngleRight } from "react-icons/fa6";

export default function CardLeftAngleBraketButton() {
  return (
    <div className='leftAngleButton'>
      <button className='angleBtn'>
        <FaAngleRight className='leftAngle' />
      </button>
    </div>
  )
}
