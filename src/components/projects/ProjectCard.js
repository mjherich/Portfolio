import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button  from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CodeIcon from '@material-ui/icons/Code';
import LinkIcon from '@material-ui/icons/Link';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
});

export default function ProjectCard({ project }) {
  const classes = useStyles();
  console.log(project)
  return (
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={project.screenshot.url}
          title={project.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h3" component="h3">
            {project.title}
          </Typography>
          <ul className="tech-scroll">
            {project.tech["frontend"].map(el => {
              return <li>{el}</li>
            })}
            {project.tech["backend"].map(el => {
              return <li>{el}</li>
            })}
          </ul>
          <Typography variant="body1" color="textSecondary">
            {project.description.text}
          </Typography>
        </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="primary" startIcon={<CodeIcon/>} component="a" href={project.githubLink} alt="View Source" title="View Source" target="_blank">
          Source
        </Button>
        <Button size="small" variant="contained" color="primary" startIcon={<LinkIcon/>} component="a" href={project.deploymentLink} alt="View Site" title="View Site" target="_blank">
          Deployment
        </Button>
      </CardActions>
    </Card>
  );
}
