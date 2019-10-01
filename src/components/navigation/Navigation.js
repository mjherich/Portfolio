import React from 'react';
import './navigation.scss';

export default function Navigation() {
  return (
    <div className="portfolio-nav">
      <div className="site-title">
        <h1>Matt Herich</h1>
        <span>Full Stack Engineer</span>
      </div>
      <div className="nav-links">
        <ul className="portfolio-links">
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  )
}