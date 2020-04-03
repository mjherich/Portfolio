import React from 'react';

import Welcome from '../welcome/Welcome'
import Projects from '../projects/Projects';
import About from '../about/About';
import Contact from '../contact/Contact';

// import './main.scss';
// import '../navigation/navigation.scss';

export default function Main() {
  return (
    <div className="portfolio-main">
      <Welcome />
      <Projects />
      <About />
      <Contact />
    </div>
  )
}