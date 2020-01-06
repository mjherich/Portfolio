import React from 'react';
import { Link } from 'react-scroll';

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
          <li><Link to="skills">Skills</Link></li>
          <li><Link to="projects">Projects</Link></li>
          <li><Link to="#">Contact</Link></li>
        </ul>
      </div>
    </div>
  )
}