import React from 'react';
import './header.scss';
import logo from '../../../assets/images/logo192.png';
import { FaGithub } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

export default function Header() {
  return (
    <div className='mainHeader'>
        <div className="innerHeader">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="menu">
                <a href="https://www.facebook.com/gautam.ranpariya.12" target='_blank'><span className="feshbookIcon"><FaFacebookF className='icon' /></span></a>

                <a href="https://www.linkedin.com/in/gautam-ranpariya-88b1a2304/" target='_blank'><span className="linkedInIcon"><FaLinkedinIn className='icon' /></span></a>

                <a href="https://github.com/Gautam-Ranpariya" target='_blank'><span className="githubIcon"><FaGithub className="icon" /></span></a>

                <a href="https://www.instagram.com/_.gautam.23_/" target='_blank'><span className="instagramIcon"><FaInstagram className='icon' /></span></a>
            </div>
        </div>
      </div>
  )
}
