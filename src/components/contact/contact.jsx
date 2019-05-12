import React, { Component } from 'react';
import '../../stylesheets/main.scss';
import linkIcon1 from '../../img/link.png';
import gitIcon1 from '../../img/git.png';
// import linkIcon2 from '../../img/link.png';
// import gitIcon2 from '../../img/git.png';

class Contact extends Component {
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     linkColor: true,
  //     gitColor: true,
  //     link: linkIcon1,
  //     git: gitIcon1
  //   }

  //   this.linkChange = this.linkChange.bind(this);
  //   this.gitChange = this.gitChange.bind(this);
  // }

    //   linkChange() {
    //       this.setState(prevState => ({ linkColor: !prevState.linkColor }));
    //       if(this.state.linkColor === true){
    //         this.setState({link: linkIcon2});
    //       }
    //       else{
    //         this.setState({link: linkIcon1});
    //       }
    //   }
    //   gitChange() {
    //     this.setState(prevState => ({ gitColor: !prevState.gitColor }));
    //     if(this.state.gitColor === true){
    //       this.setState({git: gitIcon2});
    //     }
    //     else{
    //       this.setState({git: gitIcon1});
    //     }
    // }


    render() {
    return (
      <div className="about">
          <div className="contact-tabs">  
              <div className="contact-tabs-nav" ><a href='https://www.linkedin.com/in/jonathan-q-ly/'> <img src={linkIcon1} alt="Link" /></a></div> 
              <div className="contact-tabs-nav" ><a href='https://github.com/jqly2'> <img src={gitIcon1} alt="Github" /></a></div>   
          </div>
      </div>
    );
  }
}

export default Contact;