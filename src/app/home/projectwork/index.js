import React from 'react';
import './projectwork.scss';
import leptop from '../../../assets/images/leptop-work.webp';
import building from '../../../assets/icons/icons8-building-50.png';
import fectory from '../../../assets/icons/building_13390700.png';
import painting from '../../../assets/icons/icons8-painting-50.png';

export default function ProjectWork() {
    const data = [
        {
            id: 1,
            url: building,
            altText: "Building Icon",
            heading: "BUILDING",
            description: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
        },
        {
            id: 2,
            url: painting,
            altText: "Painting Icon",
            heading: "PLANING",
            description: "Sample text. Click to select the text box. Click again or double click to start editing the text."
        },
        {
            id: 3,
            url: fectory,
            altText: "Factory Icon",
            heading: "ABOUT US",
            description: "Sample text. Click to select the text box. Click again or double click to start editing the text."
        }
    ]
    return (
        <div className='projectWork'>
            <div className="img">
                <img src={leptop} alt="leptop" />
            </div>
            <div className="container">
                <div className="innerProject">
                    <div className="projectsCard">
                        {
                            data.map((item) => {
                                return <div key={item.id} className="card">
                                    <div className='logodiv'>
                                        <img src={item.url} alt={item.altText} className='img' />
                                    </div>
                                    <p>{item.heading}</p>
                                    <span>{item.description}</span>
                                </div>
                            })
                        }
                    </div>
                    <div className="links">
                        <p>Image from <a href="abc"> freepik</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
