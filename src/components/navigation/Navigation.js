import React from 'react';
import './navigation.scss';

export default function Navigation() {
  return (
    <div className="portfolio-nav">
      {/* <div className="nav-container"> */}
        <div className="site-title">
          <h2>Matt Herich</h2>
          <span>Full Stack Engineer</span>
        </div>
        <div className="nav-links">
          <ul className="portfolio-links">
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
      {/* </div> */}
    </div>
  )
}