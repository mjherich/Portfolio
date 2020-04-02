import React from 'react';
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Typography } from '@material-ui/core';

const Projects = ({data: { loading, error, projects }}) => {
  console.log(projects)
  return (
    <section id="projects">
      <Typography variant="h2">Projects</Typography>
      <p>Projects description</p>
      <p>List projects here...</p>
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
    }
  }
`

export default graphql(getProjects)(Projects);