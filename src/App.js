import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.scss';
import Main from './components/main/Main';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="portfolio-grid">
            <Navigation/>
            <Main />
        </div>
      </Router>
    </div>
  );
}

export default App;
