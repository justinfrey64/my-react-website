import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../Portfolio.css"

import myDevWebsitePic from "../../assets/images/justinfrey-dev.jpg";

class MyDevWebsiteCard extends Component {
    render() {
      return (
        <div class="col s12 m6 l4">
          <div class="card large z-depth-5">
            <div class="card-image">
              <img src={myDevWebsitePic} class="responsive-img materialboxed" data-caption="My dev website" alt="My website"/>
              <span class="card-title white black-text">My Dev Website</span>
            </div>
            <div class="card-content">
              <p>Wow you are already here! Thanks for being awesome <FontAwesomeIcon icon={['far', 'thumbs-up']}/>.</p>
            </div>
            <div class="card-action">
              <a href="https://justinfrey.dev">justinfrey.dev</a>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default MyDevWebsiteCard;