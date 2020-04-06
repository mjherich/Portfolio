import React from 'react';
import { Typography } from '@material-ui/core';

import './welcome.scss';

export default function Welcome() {
  return (
    <section id="welcome">
      <Typography variant="h2"><span role="img" aria-label="welcome icon">🙋‍♂️</span> Welcome</Typography>
      <Typography variant="body1" className="welcome-body">
        My name is Matt and I'm a full stack developer who enjoys making cool stuff with code.<br/><br/>
        I'm currently attending <a href="https://lambdaschool.com/" target="_blank" rel="noopener noreferrer">Lambda School</a>, an intensive coding bootcamp designed to give students the skills necessary for working effectively on a software development team.<br/><br/>
        Seeking new opportunities Spring 2020.
      </Typography>
    </section>
  )
}