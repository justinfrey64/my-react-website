import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../Portfolio.css"

import hackerRankPic from "../../assets/images/HackerRank_logo.jpg";

class HackerRankCard extends Component {
    render() {
      return (
        <div class="col s12 m6 l4">
          <div class="card large z-depth-5">
            <div class="card-image">
              <img src={hackerRankPic} class="responsive-img materialboxed" data-caption="My HackerRank profile avatar" alt="My HackerRank profile avatar"/>
              <span class="card-title white black-text">HackerRank</span>
            </div>
            <div class="card-content">
              <p>I'm always testing my coding and problem solving skills on HackerRank so check it out to see what I got!</p>
            </div>
            <div class="card-action">
              <a href="https://www.hackerrank.com/justinfrey64"><FontAwesomeIcon icon={['fab', 'hackerrank']}/> justinfrey64</a>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default HackerRankCard;