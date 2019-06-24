import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../Portfolio.css"

import resumePic from "../../assets/images/killington.jpg";
import resumeLink from "../../assets/files/Resume - December 2016.pdf";

class ResumeCard extends Component {
    render() {
      return (
        <div class="col s12 m6 l4">
          <div class="card large z-depth-5">
            <div class="card-image">
              <img src={resumePic} class="responsive-img" alt="My résumé"/>
              <span class="card-title white black-text">Résumé</span>
              
            </div>
            <div class="card-content">
              <p>This is my current resume. Feel free to download/print it.</p>
            </div>
            <div class="card-action">
              <a href={resumeLink} class="btn-floating waves-effect waves-light red center-align"><FontAwesomeIcon icon={['fas', 'file-pdf']}/></a>
              <label class="right card-label">Last Updated: 1/1/2019</label></div>
          </div>
        </div>
      );
    }
  }
  
  export default ResumeCard;