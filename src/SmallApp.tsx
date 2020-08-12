import React from 'react';
import CommonComponent from './CommonComponent';
import logo from './logo.svg';
import './App.css';

function SmallApp() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is build B. Does not use Lodash.
        </p>
        <CommonComponent/>
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

export default SmallApp;
