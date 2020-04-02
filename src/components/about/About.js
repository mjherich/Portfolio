import React from 'react';
import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

export default function About() {
  return (
    <section id="about">
      <Typography variant="h2">About</Typography>
      <Typography variant="h3">Entrepreneurship</Typography>
      <Typography variant="body1">I've always enjoyed working for myself and making my own schedule...</Typography>
      <Divider style={{margin: "25px 0"}} />
      <Typography variant="h3">Home Workstation</Typography>
      <Typography variant="body1">I've been building my own PC's for over 15 years.</Typography>
      <ul className="skills-list">
        <li>HTML</li>
        <li>CSS/LESS/SASS</li>
        <li>Javascript</li>
        <li>React JS</li>
        <li>Java Spring</li>
      </ul>
    </section>
  )
}