import React from 'react';
import { Link } from 'react-router-dom'

const AppBar = () => {
  return (
    <div className="app-bar-wrapper">
      <div className="app-bar">
        <Link to="/" className="app-bar-container">
          <img className="app-bar-logo" src="/static/images/pebble.svg" alt="Telia pebble" />
          <div className="app-bar-title">DivX Boilerplate</div>
        </Link>
      </div>
    </div>
  );
};

export default AppBar;
