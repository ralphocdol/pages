import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare as email } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin as linkedin, faGithub as github } from '@fortawesome/free-brands-svg-icons';
import ralphocdol from './ralphocdol.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ralphocdol} alt="logo" style={{ 'border-radius': '50%', width: '300px', border: '8px solid #fff' }} draggable="false" />
        {/*  className="App-logo" */}
        <h2>Ralph Ocdol</h2>
        <div>
          <a href="https://www.linkedin.com/in/ralphocdol/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={linkedin} style={{ margin: '5' }} />
          </a>
          <a href="https://github.com/ralphocdol/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={github} style={{ margin: '5' }} />
          </a>
          <a href="mailto:ralph.ocdol63@gmail.com">
            <FontAwesomeIcon icon={email} style={{ margin: '5' }} />
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
