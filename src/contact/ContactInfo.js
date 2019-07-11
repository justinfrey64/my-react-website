import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 
class ContactInfo extends Component {
  render() {
    return (
        <div class="col s12 m6">
            <div class="title-box-2 pt-4 pt-md-0">
            <h5 class="title-left">
                Get in Touch
            </h5>
            </div>
            <div class="more-info">
            <p class="lead">
                Feel free to contact me with any comments by email. For serious inqueries,
                call/text me at the listed number or send a message to my LinkedIn profile.
                I'll try and respond as quickly as possible.
            </p>
            <ul class="list-ico">
                <li><FontAwesomeIcon icon={['fas', 'map-marker-alt']}/><span>READING,PA 19607</span></li>
                <li><FontAwesomeIcon icon={['fas', 'phone-alt']}/><a href="tel:610-223-7935"><span>(610) 223-7935</span></a></li>
                <li><FontAwesomeIcon icon={['fas', 'envelope']}/><span>justin.r.frey@outlook.com</span></li>
            </ul>
            </div>
            <div class="socials">
                <a href="https://linkedin.com/in/justinfrey64"><span class="ico-circle"><FontAwesomeIcon icon={['fab', 'linkedin']}/></span></a>
                <a href="https://github.com/justinfrey64"><span class="ico-circle"><FontAwesomeIcon icon={['fab', 'github']}/></span></a>
                <a href="https://www.hackerrank.com/justinfrey64"><span class="ico-circle"><FontAwesomeIcon icon={['fab', 'hackerrank']}/></span></a>
                <a href="mailto:justin.r.frey@outlook.com"><span class="ico-circle"><FontAwesomeIcon icon="envelope"/></span></a>
            </div>
        </div>
    );
  }
}
 
export default ContactInfo;