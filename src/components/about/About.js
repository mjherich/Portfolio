import React from 'react';
import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

export default function About() {
  return (
    <section id="about">
      <Typography variant="h2"><span role="img" aria-label="about icon">📜</span> About</Typography>
      <Typography variant="h3">Entrepreneurship</Typography>
      <Typography variant="body1">
        I have a long history of working for myself and building my own businesses. In high school and throughout college I repaired/modded Xbox 360 game consoles and was quite successful!
        Later on in life I got into the digital marketing game and co-founded a digital agency focused on helping local service providers build their online presence. I'm incredibly proud of what my co-founder <a href="https://www.linkedin.com/in/justinlewisweb/" target="_blank" >Justin Lewis</a> and I were able to accomplish during this endeavor.
        You can read more about my Business Optimizer story <a href="https://medium.com/business-optimizer/matt-herich-introduction-e7bf907f001a">here</a>.
      </Typography>
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