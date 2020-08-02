import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare as email } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin as linkedin, faGithub as github } from '@fortawesome/free-brands-svg-icons';
import ralphocdol from './ralphocdol.jpg';
import './App.css';

function App() {
  const imgStyles = {
    borderRadius: '50%',
    width: '300px',
    height: '300px',
    border: '8px solid #fff',
  };
  const linkSpaces = {
    marginLeft: '5px',
    marginRight: '5px',
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={ralphocdol} alt="logo" style={imgStyles} draggable="false" />
        <h2>Ralph Ocdol</h2>
        <div>
          <a href="https://www.linkedin.com/in/ralphocdol/" target="_blank" rel="noopener noreferrer" style={linkSpaces}>
            <FontAwesomeIcon icon={linkedin} />
          </a>
          <a href="https://github.com/ralphocdol/" target="_blank" rel="noopener noreferrer" style={linkSpaces}>
            <FontAwesomeIcon icon={github} />
          </a>
          <a href="mailto:ralph.ocdol63@gmail.com" style={linkSpaces}>
            <FontAwesomeIcon icon={email} />
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
