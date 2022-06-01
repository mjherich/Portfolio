import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  menuButton: {
    marginRight: 36,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
  },
  list: {
    marginTop: 'auto',
    fontFamily: '"Big Shoulders Display"'
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    margin: 'auto',
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));

export default function MiniDrawer({open, setOpen}) {
  const classes = useStyles();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, open ? 'open' : 'collapsed', {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <Container className="site-title">
        <div className="title-container">
          <div className="title-text">
            <Typography variant="h1">Matt Herich</Typography>
            <Typography variant="subtitle1">Software Engineer</Typography>
          </div>
        </div>
        <Typography className="st-links">
          <Link href="https://www.linkedin.com/in/matt-herich/" target="_blank">
            <IconButton aria-label="LinkedIn" alt="LinkedIn" title="LinkedIn">
              <LinkedInIcon />
            </IconButton>
          </Link>
          <Link href="https://github.com/mjherich" target="_blank">
            <IconButton aria-label="Github" alt="Github" title="Github">
              <GitHubIcon />
            </IconButton>
          </Link>
          <Link href="https://twitter.com/mattherich" target="_blank">
            <IconButton aria-label="Twitter" alt="Twitter" title="Twitter">
              <TwitterIcon />
            </IconButton>
          </Link>
        </Typography>
      </Container>
      <List className={classes.list}>
        <ListItem button component={AnchorLink} href="#projects">
          <ListItemText primary="Projects" />
        </ListItem>
        <ListItem button component={AnchorLink} href="#contact">
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
      <Divider />
      <div className={clsx(classes.toolbar, 'collapse-btn')}>
        <IconButton onClick={open ? handleDrawerClose : handleDrawerOpen}>
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
    </Drawer>
  );
}
