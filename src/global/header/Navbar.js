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
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to="/about-me">About Me</NavLink></li>
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink to="/timeline">Timeline</NavLink></li>
              <li><NavLink to="/portfolio">Portfolio</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <ul class="sidenav sidenav-close" ref={ (sidenav) => {this.sidenav = sidenav} } id="mobile-menu">
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to="/about-me">About Me</NavLink></li>
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink to="/timeline">Timeline</NavLink></li>
              <li><NavLink to="/portfolio">Portfolio</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
  componentDidMount() {
    M.Sidenav.init(this.sidenav);
  }
}

export default Navbar;