import React from 'react';
import './constructionservies.scss';
import womanImg from '../../../assets/images/woman.webp';
import bookImg from '../../../assets/images/book.webp';
import homeImg from '../../../assets/images/home.webp';

export default function ConstructionServies() {
  return (
    <div className='constructionServies'>
        <div className="container">
      <div className="innerConstructionServies">
        <div className="serviesMenu">
            <span>OUR VISION</span>
            <h3>Construction Services</h3>
            <h4>We have gained experience in most major market segments, including: </h4>
            <div className="menu">
                <ul>
                    <li>Data Centres</li>
                    <li>Commercial Interiors</li>
                    <li>Financial Centres</li>
                    <li>Retail</li>
                    <li>Hospitality</li>
                    <li>Sports</li>
                    <li>Manufacturing</li>
                </ul>
            </div>
            <div className="serviesLinks">
                <p>Images from <a href="abc">Freepik</a></p>
                <span><a href="abc">LEARN MORE</a></span>
            </div>
        </div>
        <div className="womanImage">
            <img src={womanImg} alt="woman Img" />
        </div>
        <div className='book-home'>
            <div className="book">
                <img src={bookImg} alt="book img" />
            </div>
            <div className="home">
                <img src={homeImg} alt="home img" />
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}
