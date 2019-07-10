import React, { Component } from "react";
import { Route, Switch, withRouter} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from "./home/Home";
import AboutMe from "./about-me/AboutMe";
import Services from "./services/Services";
import Timeline from "./timeline/Timeline";
import Portfolio from "./portfolio/Portfolio";
import Contact from "./contact/Contact";
import $ from "jquery";

class MainContent extends Component {
  render() {
    return (
      <TransitionGroup component="div" className="main-content">
        <CSSTransition key={this.props.location.pathname.split('/')[1] || '/'} timeout={{enter:300, exit:200}} classNames="fade" appear>
          <div className="page-main-inner">
          <Switch location={this.props.location}>
              <Route exact path="/" component={Home}/>
              <Route path="/about-me" component={AboutMe}/>
              <Route path="/services" component={Services}/>
              <Route path="/timeline" component={Timeline}/>
              <Route path="/portfolio" component={Portfolio}/>
              <Route path="/contact" component={Contact}/>
          </Switch>
          </div>
          </CSSTransition>
          </TransitionGroup>
    );
  }
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      var bodyheight = $(".page-main-inner").height();
      $('.main-content').height(bodyheight);
    }
  }
}

export default withRouter(MainContent);