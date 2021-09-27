import React from 'react';
import { Typography } from '@material-ui/core';

export default function Contact() {
  return (
    <section id="contact">
      <Typography variant="h2"><span role="img" aria-label="mailbox icon">📬</span> Contact</Typography>
      <Typography variant="body1" style={{marginTop: 35}}>
        <a href="mailto:matt@mattherich.com">Email me</a>
      </Typography>
    </section>
  )
}