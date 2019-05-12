import React, { Component } from 'react';
import '../../stylesheets/main.scss';

class Header extends Component {
  render() {
    return (
          <div className="header">
                  <h1>Jonathan Ly</h1>
                  <h3>Front-end Developer</h3>
                  <p>Based in Bay Area</p>
          </div>
    );
  }
}

export default Header;
