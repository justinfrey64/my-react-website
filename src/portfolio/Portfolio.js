import React, { Component } from "react";
import "./Portfolio.css";

import ResumeCard from "./cards/ResumeCard";
import MyWebsiteCard from "./cards/MyWebsiteCard";
import GithubCard from "./cards/GithubCard";

class PortFolio extends Component {
  render() {
    return (
      <div class="container"> 
        <div class="row">
          <ResumeCard></ResumeCard>
          <MyWebsiteCard></MyWebsiteCard>
          <GithubCard></GithubCard>
        </div>
      </div>
          
    );
  }
}

export default PortFolio;