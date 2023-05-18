import React from 'react';
import Navbar from './Navbar';
import About from './About';
import Footer from './Footer';
import BannerBackground from "../Assets/home-banner-background.png";
import { FiArrowRight } from 'react-icons/fi';

const Home = () => {
  return <div className='home-container'>
    <Navbar />
    <div className='home-banner-container'>
      <div className='home-bannerImage-container'>
        <img src={BannerBackground} alt=''/>
      </div>
      <div className='home-text-section'>
        <h1 className='primary-heading'>Welcome to TodoTastic</h1>
        <p className='primary-text'>The ultimate tool for organizing your tasks and achieving your goals!</p>
        <button className='secondary-button'>Get Started<FiArrowRight/></button>
      </div>
    </div>
    <div className='checkmark-wrapper mt-5'>
        <span className='checkmark'></span>
    </div>
    <About />
    <Footer />
  </div>
};

export default Home;