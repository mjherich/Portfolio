import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Divider, Drawer } from '@material-ui/core';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import ComputerIcon from '@material-ui/icons/Computer';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';

import { Profile, SidebarNav } from './components';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

const Sidebar = props => {
  const { open, variant, onClose, className, ...rest } = props;

  const classes = useStyles();

  const pages = [
    {
      title: 'Welcome',
      href: '/',
      icon: <EmojiPeopleIcon />
    },
    // {
    //   title: 'Dashboard',
    //   href: '/dashboard',
    //   icon: <DashboardIcon />
    // },
    {
      title: 'My Work',
      href: '/my-work',
      icon: <DeveloperBoardIcon />
    },
    // {
    //   title: 'Workstation',
    //   href: '/account',
    //   icon: <ComputerIcon />
    // },
    {
      title: 'My Story',
      href: '/my-story',
      icon: <MenuBookIcon />
    },
    {
      title: 'Contact',
      href: '/contact',
      icon: <MailOutlineIcon />
    }
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        <Profile />
        <Divider className={classes.divider} />
        <SidebarNav
          className={classes.nav}
          pages={pages}
        />
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default Sidebar;
