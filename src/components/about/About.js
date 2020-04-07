import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import './about.scss';
import workstation from './workstation.jpg';
import vwd from './vwd.png';

export default function About() {
  return (
    <section id="about">
      <Typography variant="h2"><span role="img" aria-label="about icon">📜</span> About</Typography>
      <Grid container spacing={1}>
        <Grid item lg={6} md={12} sm={12} xs={12} className="img-grid">
          <img src={vwd} alt="Vacaville Web Design" title="Vacaville Web Design" className="about-img vwd-img" />
        </Grid>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <Typography variant="h3">Entrepreneurship</Typography>
          <Typography variant="body1">
            I have a long history of working for myself and building my own businesses. In high school and throughout college I repaired/modded Xbox 360 game consoles and was quite successful!
            Later on in life I got into the digital marketing game and co-founded a digital agency focused on helping local service providers build their online presence. I'm incredibly proud of what my co-founder <a href="https://www.linkedin.com/in/justinlewisweb/" target="_blank" rel="noopener noreferrer">Justin Lewis</a> and I were able to accomplish during this endeavor.
            You can read more about my Business Optimizer story <a href="https://medium.com/business-optimizer/matt-herich-introduction-e7bf907f001a" target="_blank" rel="noopener noreferrer">here</a>.
          </Typography>
          <Typography variant="body1">
            Since my time at Business Optimizer I've continued to serve clients in my local community as Vacaville Web Design, performing SEO audits, website redesigns and digital advertising campaigns. You can check out my design chops at <a href="https://vacavillewebdesign.com/our-work/">vacavillewebdesign.com/our-work</a>.
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <Typography variant="h3">Home Workstation</Typography>
          <Typography variant="body1">
            I've been building custom PC's for a decade and currently run a Ryzen 5 2600 @ 4.2GHz / GTX 2060 main tower with a 2015 Macbook Pro companion. Over the last 9 months at Lambda School I've continued to hone my workstation into what it is today. The Autonomous.ai standing desk allows me to work throughout the day at my computer without feeling locked down in my chair. I'll typically switch from sitting to standing several times throughout the day and it makes for a much more enjoyable work environment.
          </Typography>
          <Typography variant="body1">
            I thrive in a remote work environment and am ready to effectively contribute to your team from afar. Shoot me a line and let's talk!
          </Typography>
        </Grid>
        <Grid item lg={6} md={12} sm={12} xs={12} className="img-grid">
          <img src={workstation} alt="workstation" title="Workstation" className="about-img workstation-img" />
        </Grid>
      </Grid>
    </section>
  )
}