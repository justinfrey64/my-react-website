import React, { Component } from "react";
import "./Portfolio.css";
import M from "materialize-css";

import ResumeCard from "./cards/ResumeCard";
import MyWebsiteCard from "./cards/MyWebsiteCard";
import GithubCard from "./cards/GithubCard";
import MyDevWebSiteCard from "./cards/MyDevWebsiteCard"
import HackerRankCard from "./cards/HackerRankCard";

class PortFolio extends Component {
  render() {
    return (
      <div class="container"> 
        <div class="row">
          <ResumeCard></ResumeCard>
          <MyWebsiteCard></MyWebsiteCard>
          <MyDevWebSiteCard></MyDevWebSiteCard>
          <GithubCard></GithubCard>
          <HackerRankCard></HackerRankCard>
        </div>
      </div>
          
    );
  }
  componentDidMount(){
    M.AutoInit();
  }
}


export default PortFolio;