import React from 'react';

import Welcome from '../welcome/Welcome'
import Skills from '../skills/Skills';
import Projects from '../projects/Projects';
import './main.scss';

export default function Main() {
  return (
    <div className="portfolio-main">
      <Welcome />
      <Skills />
      <Projects />
    </div>
  )
}