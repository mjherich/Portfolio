import React from 'react';

import Welcome from '../welcome/Welcome'
import About from '../about/About';
import Projects from '../projects/Projects';
import './main.scss';

export default function Main() {
  return (
    <div className="portfolio-main">
      <Welcome />
      <Projects />
      <About />
    </div>
  )
}