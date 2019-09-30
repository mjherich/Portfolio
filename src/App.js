import React from 'react';
import './index.scss';

function App() {
  return (
    <div className="App">
      <div className="portfolio-grid">
        <div className="portfolio-nav">
          <h2>Matt Herich</h2>
          <span>Full Stack Engineer</span>
          <div className="nav-links">
            <ul className="portfolio-links">
              <li>Skills</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="main">
          Main content
        </div>
      </div>
    </div>
  );
}

export default App;
