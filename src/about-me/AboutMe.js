import React, { Component } from "react";
import Bio from "./Bio";
import Profile from "./Profile";
import "./AboutMe.css";
import M from "materialize-css";

class AboutMe extends Component {
  render() {
    return (
        <div class="container content-margin-top">
            <div class="row z-depth-3">
                <Profile></Profile>
                <Bio></Bio>
            </div>
        </div>
    );
  }
  componentDidMount(){
    M.AutoInit();
  }
}

export default AboutMe;