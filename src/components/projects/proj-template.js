import React from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeInUp } from 'react-animations';

const fadeAnimation = keyframes`${fadeInUp}`;

const FadeyDiv = styled.div`
  animation: 1s ${fadeAnimation};
`;

const projTemplate = () => (
    <div className="project-tabs-nav" >
    <a href="https://www.eurekainv.com">
    <div className="project-tabs-nav-img" id="first-proj"></div>

    <div className="project-tabs-nav-info">
    <FadeyDiv>
      <h1>City and Real Estate Aggerator.</h1>
      <h3>Eureka Investment Inc.</h3>
      <p></p>
      </FadeyDiv> 
    </div>
    </a>
  </div>     
)

export default projTemplate;