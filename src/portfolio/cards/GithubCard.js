import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../Portfolio.css"

import githubPic from "../../assets/images/github.jpg";

class GithubCard extends Component {
    render() {
      return (
        <div class="col s12 m6 l4">
          <div class="card large z-depth-5">
            <div class="card-image">
              <img src={githubPic} class="responsive-img materialboxed" data-caption="My Github profile avatar" alt="My Github profile avatar"/>
              <span class="card-title white black-text">Github</span>
            </div>
            <div class="card-content">
              <p>There is plenty of code examples on my Github page with more being added everyday!</p>
            </div>
            <div class="card-action">
              <a href="https://github.com/justinfrey64"><FontAwesomeIcon icon={['fab', 'github-alt']}/> justinfrey64</a>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default GithubCard;