import React from 'react';
import './main.scss';

export default function Main() {
  return (
    <div className="portfolio-main">
      <section id="welcome">
        <h1>Welcome!</h1>
        <p>Thanks for checking out my portfolio!</p>
        <p>Current Lambda School student seeking opportunities in blockstack technology.</p>
      </section>
      <section id="skills">
        <h1>Technical Skills</h1>
        <p>Below are my skills</p>
        <p>List skills here...</p>
      </section>
      <section id="projects">
        <h1>Projects</h1>
        <p>Projects description</p>
        <p>List projects here...</p>
      </section>
    </div>
  )
}