import React from 'react';
import Logo from '../Assets/logo.png';
import { SiLinkedin } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer-wrapper'>
        <div className='footer-section-one'>
            <img src={Logo} alt=''></img>
        </div>
        <div className='footer-section-two'>
        <div className='footer-section-columns'>
            <SiLinkedin />
            <span>Karina Lage</span>
            <span>Kim Lee</span>
            <span>Megan Grumbine</span>
        </div>
        <div className='footer-section-columns'>
            <FaGithub />
            <span>@kaalage</span>
            <span>@kim-n-lee</span>
            <span>@mgrumbine</span>
        </div>
        <div className='footer-section-columns'>
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
        </div>
        </div>
    </div>
  )
}

export default Footer