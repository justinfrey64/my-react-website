import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Portfolio.css"

import resumePic from "../assets/images/killington.jpg";
import myWebsitePic from "../assets/images/inside-computer-square.jpg";
import resumeLink from "../assets/files/Resume - December 2016.pdf";

class PortFolio extends Component {
  render() {
    return (
      <div> 
        <div class="row">
          <div class="col s12 m6 l4">
            <div class="card card-large z-depth-5">
              <div class="card-image">
                <img src={resumePic} class="responsive-img" alt="My résumé"/>
                <span class="card-title white black-text">Résumé</span>
                <a href={resumeLink} class="btn-floating halfway-fab waves-effect waves-light red center-align"><FontAwesomeIcon icon={['fas', 'file-pdf']}/></a>
              </div>
              <div class="card-content">
                <p>This is my current resume. Feel free to download/print it.</p>
                <p><label>Last Updated: 1/1/2019</label></p>
              </div>
            </div>
          </div>
          <div class="col s12 m6 l4">
            <div class="card card-large z-depth-5">
              <div class="card-image">
                <img src={myWebsitePic} class="responsive-img" alt="My website"/>
                <span class="card-title white black-text">My Webiste</span>
              </div>
              <div class="card-content">
                <p>Wow you are already here! Thanks for being awesome <FontAwesomeIcon icon={['far', 'thumbs-up']}/>.</p>
              </div>
              <div class="card-action">
                <a href="https://justinfrey.com">justinfrey.com</a>
              </div>
            </div>
          </div>
          <div class="col s12 m6 l4">
            <div class="card card-large z-depth-5">
              <div class="card-image">
                <img src={myWebsitePic} class="responsive-img" alt="My Github profile avatar"/>
                <span class="card-title white black-text">My Github</span>
              </div>
              <div class="card-content">
                <p>There is plenty of code examples on my Github page with more being added everyday!</p>
              </div>
              <div class="card-action">
                <a href="https://github.com/justinfrey64"><FontAwesomeIcon icon={['fab', 'github-alt']}/> justinfrey64</a>
              </div>
            </div>
          </div>
        </div>
      </div>
          
    );
  }
}

export default PortFolio;