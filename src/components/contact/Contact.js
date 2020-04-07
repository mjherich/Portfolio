import React from 'react';
import { Typography } from '@material-ui/core';

export default function Contact() {
  return (
    <section id="contact">
      <Typography variant="h2"><span role="img" aria-label="email icon">📧</span> Contact</Typography>
      <Typography variant="body1" style={{marginTop: 35}}>
        Form coming soon...<br/><br/>In the mean time email me: <a href="mailto:mjherich@gmail.com">mjherich@gmail.com</a>
      </Typography>
    </section>
  )
}