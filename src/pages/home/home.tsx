import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <div className="main-container">
        <span className='title-suffix'>Hi my name is</span>
        <span className='title-name'>Angel Godinez</span>
        <span className='title'>I'm a Front End Developer.</span>
        <p>I'm a front end developer specializing in building, maintaining exceptional digital experiences. Currently, I'm focused on building full-stack web applications</p>
        <Link to="/work">Check Work</Link>
      </div>
    </div>
  )
}

export default Home;
