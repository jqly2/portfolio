import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeInUp } from 'react-animations';
import '../../stylesheets/main.scss';

const fadeAnimation = keyframes`${fadeInUp}`;

const FadeyDiv = styled.div`
  animation: 1s ${fadeAnimation};
`;

class Project extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       showAbout: false,
//       showProject: false,
//       showContact: false
//     }

//     this.pClick = this.pClick.bind(this);
//     this.cClick = this.cClick.bind(this);
//     this.aClick = this.aClick.bind(this);
//   }

//   pClick() {
//       this.setState(prevState => ({ showProject: !prevState.showProject }));
//       // if(this.state.showProject === true){
      
//       // }
//   }
//   cClick() {
//     this.setState(prevState => ({ showContact: !prevState.showContact }));
//     // if(this.state.showContact === true){
    
//     // }
// }

// aClick() {
//   this.setState(prevState => ({ showAbout: !prevState.showAbout }));
//   // if(this.state.showAbout === true){
  
//   // }
// }

    render() {
    return (
      <div className="project">
          <div className="project-tabs">  
            <div className="project-tabs-nav" >
              <a href="https://www.eurekainv.com">
              <div className="project-tabs-nav-img" id="first-proj"></div>

              <div className="project-tabs-nav-info">
                <FadeyDiv>
                    <h1>City and Real Estate Aggerator.</h1>
                    <h3>Eureka Investment Inc.</h3>
                    <p>A visiual analytics for prime real estate currently based around the Bay Area.</p>
                  </FadeyDiv> 
              </div>
              </a>
            </div> 
            <div className="project-tabs-nav">
            <a href="https://jqly2.github.io/dndAPI/spell">
              <div className="project-tabs-nav-img" id="second-proj"></div>
              <div className="project-tabs-nav-info">
              <FadeyDiv>
                <h1>Spell Compendium</h1>
                <h3>Dungeon and Dragons 5th Edition</h3>
                <p>A curated library of spells from all classes within the latest edition of the tabletop game, Dungeons and Dragons.</p>
                </FadeyDiv> 
              </div>
              </a>
            </div> 
                {/* <div className="project-tabs-nav" id="third-proj"onClick={this.props.pClick}><h2> Project 3</h2></div>  */}
                {/* <div className="project-tabs-nav" id="first-proj"onClick={this.props.pClick}><h2> Project 4</h2></div>  */}    
          </div>
      </div>
    );
  }
}

export default Project;