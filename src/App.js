import React from 'react';

import './index.scss';
import Main from './components/main/Main';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <div className="App">
      <div className="portfolio-grid">
        <Navigation/>
        <Main />
      </div>
    </div>
  );
}

export default App;
