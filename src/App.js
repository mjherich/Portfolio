import React from 'react';
import { Switch, BrowserRouter as Router } from 'react-router-dom';

import './index.scss';
import Main from './components/main/Main';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <div className="portfolio-grid">
              <Navigation/>
              <Main />
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
