import React from 'react';
import './aboutcompany.scss';
import StartNowButton from '../../../shared/components/startnowbutton';
import towerImg from '../../../assets/images/tower.webp';
import Fade from 'react-reveal/Fade';

export default function AboutCompany() {
  return (
    <div className='aboutCompany'>
      <div className="container">
        <div className="innerAboutCompany">
          <div className="description">
            <div className="vectorAboutCompany"></div>
            <h6 className='headingAboutCompany'>About Our Company</h6>
            <Fade bottom>
            <p className='descriptionAboutCompany'>Your dream: to make beautiful things that make life more beautiful. To capture and reflect the world in a meaningful, unique way. Our engineers facilitate project implementation from design to construction, for flawless execution and results.</p>
            <StartNowButton />
            </Fade>
          </div>
          <div className="img">
            <img src={towerImg} alt="towerImg" />
          </div>
        </div>
      </div>
    </div>
  )
}
