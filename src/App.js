// src/App.js

import React from 'react';
import './App.css';
import Slideshow from './components/Slideshow';

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <div className="navbar-left">
          <a href="/" className="home-link">
            Buyfi
          </a>
        </div>
        <div className="navbar-center">
          <div className="dropdown">
            <button className="dropbtn">
              Products
              <div className="dropdown-content">
                <a href="/category/mens">Men's Wear</a>
                <a href="/category/womens">Women's Wear</a>
                <a href="/category/summer">Summer Wearables</a>
                <a href="/category/winter">Winter Wearables</a>
              </div>
            </button>
          </div>
        </div>
        <div className="navbar-right">
          <div className="search-container">
            <input type="text" placeholder="Search" className="search-box" />
          </div>
          <button className="nav-button">Support</button>
          <button className="nav-button">Cart</button>
          <div className="user-dropdown">
            <button className="nav-button">User</button>
            <div className="user-dropdown-content">
              <a href="/">Sign In</a>
              <a href="/">Sign Up</a>
            </div>
          </div>
        </div>
      </header>
      <Slideshow />
      {/* Your other components and content go here */}
    </div>
  );
}

export default App;
