import React from 'react';
import './constructions.scss';
// import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';
import ReadMore from '../../../shared/components/readbutton';

export default function Constructions() {
  return (
    <div className='mainConstructions'>
      <div className="constructionHeadingText">
        <h2>We are sustainable construction</h2>
      </div>
      <Fade bottom>
      <div className="constructionSubHeadingText">
        <span>We are the authority for completing construction projects in environmentally sensitive surroundings. Our team is focused on finding innovative solutions to the most complex construction projects while ensuring that we limit our environmental footprint and impact.</span>
      </div>
      <div className="constructionReadButton">
        <ReadMore />
      </div>
      </Fade>
    </div>
  )
}
