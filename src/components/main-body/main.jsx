import React, { Component } from 'react';
import '../../stylesheets/main.scss';
import Project from '../projects/projects.jsx';
import Contact from '../contact/contact.jsx';
import Header from '../header/header.jsx';

class Main extends Component {

  render() {
    return (
        <div className="main">
          <div className="main-header">
            <Contact />
            <Header />
            {/* <div></div> */}
          </div>
          <div className="main-body">
            <Project />
          </div>
        </div>
    );
  }
}

export default Main;
