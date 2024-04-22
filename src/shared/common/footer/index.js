import React from 'react';
import './footer.scss';

export default function Footer() {
    return (
        <div className='footer'>
            <div className='firstFooterDescription'>
                <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
            </div>
            <div className='secondFooterDescription'>
                <span><a href="https://github.com/Gautam-Ranpariya">Website Templates</a>Created with <a href="https://www.linkedin.com/in/gautam-ranpariya-88b1a2304/"> Gautam Ranpariya</a></span>
            </div>
        </div>
    )
}
