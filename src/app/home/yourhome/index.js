import React from 'react';
import './yourhome.scss';
import dreamhome from '../../../assets/images/your_home.webp';
import StartNowButton from '../../../shared/components/startnowbutton';
import Fade from 'react-reveal/Fade';

export default function YourHome() {
    return (
        <div className='yourHome'>
            <div className="container">
                <div className="innerYourHome">
                    <div className="dreamHome">
                            <p>CREATE YOUR</p>
                            <h6>Dream Home</h6>
                            <Fade bottom>
                            <p className='dream-desciption'>We are founded on the belief that our collaborative nature and the journey we take with our clients is reflected in every project by creating exciting, functional, modern spaces.</p>
                            <StartNowButton />
                            </Fade>

                    </div>
                    <div className="enginiearImg">
                        <img src={dreamhome} alt="dream name" />
                </div>
                </div>
            </div>
        </div>
    )
}
