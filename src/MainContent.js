import React, { Component, Suspense } from "react";
import {
    Route
} from "react-router-dom";

const Home = React.lazy(() => import("./home/Home"));
const Contact = React.lazy(() => import("./contact/Contact"));
const AboutMe = React.lazy(() => import("./about-me/AboutMe"));
const Services = React.lazy(() => import("./services/Services"));
const Timeline = React.lazy(() => import("./timeline/Timeline"));
const Portfolio = React.lazy(() => import("./portfolio/Portfolio"));

class MainContent extends Component {
  render() {
    return (
        <div className="main-content">
          <Suspense fallback={<div class="loader">{loader}</div>}>
            <Route exact path="/" component={Home}/>
            <Route path="/about-me" component={AboutMe}/>
            <Route path="/services" component={Services}/>
            <Route path="/timeline" component={Timeline}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/contact" component={Contact}/>
          </Suspense>
        </div>
    );
  }
}

const loader = 
  <div class="preloader-wrapper big active">
    <div class="spinner-layer spinner-blue-only">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div><div class="gap-patch">
        <div class="circle"></div>
      </div><div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>
;

export default MainContent;