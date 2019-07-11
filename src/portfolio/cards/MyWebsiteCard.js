import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../Portfolio.css"

import myWebsitePic from "../../assets/images/inside-computer-square.jpg";

class MyWebsiteCard extends Component {
    render() {
      return (
        <div class="col s12 m6 l4">
          <div class="card large z-depth-5">
            <div class="card-image">
              <img src={myWebsitePic} class="responsive-img materialboxed" data-caption="My website" alt="My website"/>
              <span class="card-title white black-text">My Website</span>
            </div>
            <div class="card-content">
              <p>Wow you are already here! Thanks for being awesome <FontAwesomeIcon icon={['far', 'thumbs-up']}/>.</p>
            </div>
            <div class="card-action">
              <a href="https://justinfrey.com">justinfrey.com</a>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default MyWebsiteCard;