import React, { Component } from "react";
import M from "materialize-css";
import {
  NavLink,
} from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <header>
          <nav>
          <div class="nav-wrapper container">
            <NavLink className="brand-logo" exact to="/">Justin Frey</NavLink>
            <a class="sidenav-trigger clickable" data-target="mobile-menu"><i class="material-icons">menu</i></a>
            <ul class="right hide-on-med-and-down">
              <li><NavLink exact activeClassName='is-active' to="/">Home</NavLink></li>
              <li><NavLink activeClassName='is-active' to="/about-me">About Me</NavLink></li>
              <li><NavLink activeClassName='is-active' to="/services">Services</NavLink></li>
              <li><NavLink activeClassName='is-active' to="/portfolio">Portfolio</NavLink></li>
              <li><NavLink activeClassName='is-active' to="/timeline">Timeline</NavLink></li>
              <li><NavLink activeClassName='is-active' to="/contact">Contact</NavLink></li>
            </ul>
            <ul class="sidenav sidenav-close" ref={ (sidenav) => {this.sidenav = sidenav} } id="mobile-menu">
              <li><NavLink exact activeClassName='is-active-mobile' to="/">Home</NavLink></li>
              <li><NavLink activeClassName='is-active-mobile' to="/about-me">About Me</NavLink></li>
              <li><NavLink activeClassName='is-active-mobile' to="/services">Services</NavLink></li>
              <li><NavLink activeClassName='is-active-mobile' to="/portfolio">Portfolio</NavLink></li>
              <li><NavLink activeClassName='is-active-mobile' to="/timeline">Timeline</NavLink></li>
              <li><NavLink activeClassName='is-active-mobile' to="/contact">Contact</NavLink></li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
  componentDidMount() {
    M.Sidenav.init(this.sidenav,'draggable');
  }
}

export default Navbar;