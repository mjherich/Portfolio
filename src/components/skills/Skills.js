import React from 'react';
import { Typography } from '@material-ui/core';

export default function Skills() {
  return (
    <section id="skills">
      <Typography variant="h2">Technical Skills</Typography>
      <Typography variant="h4">Core Competencies</Typography>
      <ul className="skills-list">
        <li>HTML</li>
        <li>CSS/LESS/SASS</li>
        <li>Javascript</li>
        <li>React JS</li>
        <li>Java Spring</li>
      </ul>
      <Typography variant="h4">Some Experience</Typography>
      <ul className="skills-list">
        <li>Ruby on Rails</li>
      </ul>
    </section>
  )
}