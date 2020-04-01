import React from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';

import './index.scss';
import Main from './components/main/Main';
import MiniDrawer from './components/navigation/Drawer';

const theme = createMuiTheme({
  typography: {
    h1: {
      fontFamily: '"Big Shoulders Display"',
    },
    h2: {
      fontFamily: '"Big Shoulders Display"',
      fontWeight: 'bold',
    },
  },
});

const drawerWidth = 300;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <MiniDrawer open={open} setOpen={setOpen}/>
        <main className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}>
          <Main />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
