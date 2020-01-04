import React from 'react';
import './main.scss';

export default function Main() {
  return (
    <div className="portfolio-main">
      <section id="welcome">
        <h2 className="section-title">Welcome,</h2>
        <p>My name is Matt and I'm a full stack engineer who likes making cool stuff with code.</p>
        <p>I'm currently attending <a href="https://lambdaschool.com/" target="_blank" rel="noopener noreferrer">Lambda School</a>, an intensive coding bootcamp designed to give students the skills necessary for working effectively on a software development team.</p>
        <p>Seeking new opportunities Spring 2020.</p>
      </section>
      <section id="skills">
        <h2 className="section-title">Technical Skills</h2>
        <h3>Core Competencies</h3>
        <ul className="skills-list">
          <li>HTML</li>
          <li>CSS/LESS/SASS</li>
          <li>Javascript</li>
          <li>React JS</li>
          <li>Java Spring</li>
        </ul>
        <h3>Some Experience</h3>
        <ul className="skills-list">
          <li>Ruby on Rails</li>
        </ul>
      </section>
      <section id="projects">
        <h2 className="section-title">Projects</h2>
        <p>Projects description</p>
        <p>List projects here...</p>
      </section>
    </div>
  )
}