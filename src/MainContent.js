import React, { Component } from "react";
import {
    Route
} from "react-router-dom";
import Home from "./home/Home";
import Contact from "./contact/Contact";
import AboutMe from "./about-me/AboutMe";
import Services from "./services/Services";
import Timeline from "./timeline/Timeline";
import Portfolio from "./portfolio/Portfolio";

class MainContent extends Component {
  render() {
    return (
        <div className="main-content container">
            <Route exact path="/" component={Home}/>
            <Route path="/about-me" component={AboutMe}/>
            <Route path="/services" component={Services}/>
            <Route path="/timeline" component={Timeline}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/contact" component={Contact}/>
        </div>
    );
  }
}

export default MainContent;