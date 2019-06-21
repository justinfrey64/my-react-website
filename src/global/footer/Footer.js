import React, { Component } from "react";
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Footer extends Component {
  render() {
    return (
        <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col s12">
                <h5 class="white-text">Justin Frey</h5>
              </div>
              <div class="col s12">
                <a href="https://linkedin.com/in/justinfrey64"><FontAwesomeIcon icon={['fab', 'linkedin']}/></a>
                <a href="https://github.com/justinfrey64"><FontAwesomeIcon icon={['fab', 'github']}/></a>
                <a href="https://www.hackerrank.com/justinfrey64"><FontAwesomeIcon icon={['fab', 'hackerrank']}/></a>
                <a href="mailto:justin.r.frey@outlook.com"><FontAwesomeIcon icon={['fas', 'envelope']}/></a>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2019 Justin Frey
            </div>
          </div>
        </footer>
    );
  }
}

export default Footer;