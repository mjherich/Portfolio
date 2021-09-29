import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import './projects.scss';
import ProjectCard from './ProjectCard';

const Projects = ({data: { loading, error, projects }}) => {
  console.log(projects)
  return (
    <section id="projects">
      <Typography variant="h2"><span role="img" aria-label="projects icon">✨</span> Projects</Typography>
      <Typography variant="body1" style={{margin: "20px 0"}}>Check out these projects from my time studying at Lambda School and beyond!</Typography>
      <Grid container spacing={3}>
        {!loading ? 
          projects.map( project => (
            <Grid item key={project.title}>
              <ProjectCard project={project} />
            </Grid>
          )) : <p>Loading...</p>
        }
      </Grid>
    </section>
  )
}

export const getProjects = gql`
  query GetProjects {
    projects {
      title
      description {
        text
      }
      githubLink
      deploymentLink
      screenshot {
        url
      }
      tech
    }
  }
`

export default graphql(getProjects)(Projects);