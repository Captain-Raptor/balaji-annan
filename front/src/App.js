import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    fetch('http://13.202.59.39:5000/')
      .then(response => response.json())
      .then(data => {
        setStatus(data.status);
      })
      .catch(error => {
        console.error('Error fetching status:', error);
        setStatus('not connected',error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {status ? (
          <p>Status: {status}</p>
        ) : (
          <p>Loading...</p>
        )}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
