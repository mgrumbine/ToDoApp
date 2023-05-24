import React from 'react';
import Navbar from './Navbar';
import About from './About';
import Footer from './Footer';
import BannerBackground from "../Assets/home-banner-background.png";
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

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
        <Link to="/register" style={{ textDecoration: 'none' }}>
        <button className='secondary-button'>Get Started<FiArrowRight/></button>
        </Link>
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