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
            <NavLink exact to="/">Justin Frey</NavLink>
            <a class="sidenav-trigger" data-target="mobile-demo"><i class="material-icons">menu</i></a>
            <ul class="right hide-on-med-and-down">
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to="/about-me">About Me</NavLink></li>
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink to="/timeline">Timeline</NavLink></li>
              <li><NavLink to="/portfolio">Portfolio</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </div>
        </nav>

        <ul class="sidenav" id="mobile-demo">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/about-me">About Me</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/timeline">Timeline</NavLink></li>
          <li><NavLink to="/portfolio">Portfolio</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </header>
    );
  }
  componentDidMount() {
    M.AutoInit();
  }
}

export default Navbar;