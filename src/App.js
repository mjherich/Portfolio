import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { isMobile } from 'react-device-detect';

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
    subtitle1: {
      fontFamily: '"Big Shoulders Display"',
      textTransform: "uppercase",
      fontSize: 26,
    },
    body1: {
      fontFamily: '"Ubuntu"',
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
  const [open, setOpen] = React.useState(!isMobile);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <MiniDrawer open={open} setOpen={setOpen}/>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Main />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
