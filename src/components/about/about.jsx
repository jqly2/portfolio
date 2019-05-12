import React, { Component } from 'react';
import '../../stylesheets/main.scss';

class About extends Component {
    
    render() {
    return (
      <div className="about">
          <div>
                <h1>My Skills</h1>
          </div>
          <div className="about-tabs">  
              <div className="about-tabs-nav">
                <h2> Languages I know:</h2>
                <ul>
                  <li>HTML, CSS</li>
                  <li>Sass</li>
                  <li>Javascript</li>
                </ul>
              </div> 
              <div className="about-tabs-nav">
                <h2>Technological Web Knowledge</h2>
                <ul>
                  <li>Frameworks: React, Angular</li>
                  <li></li>
                </ul>
              </div>          
          </div>
      </div>
    );
  }
}

export default About;