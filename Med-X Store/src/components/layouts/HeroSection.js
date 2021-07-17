import React from 'react';
import './HeroSection.css';
import '../../App.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted />
      <h1>Med-X Store<i class='fab fa-typo3' /></h1>
      <p>Health Assist</p>
      <p>We care about your happiness</p>
      
    </div>
  );
}

export default HeroSection;
