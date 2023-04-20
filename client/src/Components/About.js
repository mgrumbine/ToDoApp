import React from 'react';
import AboutBackground from '../Assets/about-background.png';
import AboutBackgroundImage from '../Assets/about-background-image.gif';
import { BsFillPlayCircleFill } from 'react-icons/bs';


const About = () => {
  return (
    <div className='about-section-container'>
      <div className='about-background-image-container'>
        <img src={AboutBackground} alt=""></img>
      </div>
      <div className='about-section-image-container'>
        <img src={AboutBackgroundImage} alt=""></img>
      </div>
      <div className='about-section-text-container'>
          <p className='primary-subheading'>About</p>
          <h1 className='primary-heading'>Organize your tasks with ease</h1>
          <p className='primary-text'>
          Our app is built with simplicity and functionality in mind, 
          allowing you to easily create and manage your to-do lists from anywhere, at any time.
          </p>
          <p className='primary-text'>
          Whether you're a busy professional, a student, or just someone who wants to stay on top 
          of their daily responsibilities, TodoTastic is the perfect solution for you. 
          </p>
          <div className='about-buttons-container'>
              <button className='watch-video-button'><BsFillPlayCircleFill/>Watch Video</button>
          </div>
      </div>
    </div>
  )
}

export default About