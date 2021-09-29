import React from 'react';
import { Typography } from '@material-ui/core';

import './welcome.scss';

export default function Welcome() {
  return (
    <section id="welcome">
      <Typography variant="h2"><span role="img" aria-label="welcome icon">🙋‍♂️</span> Welcome</Typography>
      <Typography variant="body1" className="welcome-body">
        My name is Matt. Coding and solving challenging problems are some things I like to do.<br/>
        <br/>
        I was a part of <a href="https://lambdaschool.com/" target="_blank" rel="noopener noreferrer">Lambda School's</a> May 2019 cohort.<br/>
        <br/>
        Currently building software in real estate 🏠<br/>
      </Typography>
    </section>
  )
}