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
                <li><FontAwesomeIcon icon={['fas', 'map-marker-alt']}/><a class="location-url" href="https://www.google.com/maps/place/Reading,+PA/@40.3337622,-75.9603197,13z/data=!3m1!4b1!4m5!3m4!1s0x89c670ca5086a8b9:0xe2eea549f5bf19f0!8m2!3d40.3356483!4d-75.9268747"> READING,PA 19607</a></li>
                <li><FontAwesomeIcon icon={['fas', 'phone-alt']}/> (610) 223-7935</li>
                <li><FontAwesomeIcon icon={['fas', 'envelope']}/> justin.r.frey@outlook.com</li>
            </ul>
            </div>
            <div class="socials">
            <ul>
                <li><a href="https://linkedin.com/in/justinfrey64"><span class="ico-circle"><FontAwesomeIcon icon={['fab', 'linkedin']}/></span></a></li>
                <li><a href="https://github.com/justinfrey64"><span class="ico-circle"><FontAwesomeIcon icon={['fab', 'github']}/></span></a></li>
                <li><a href="https://www.hackerrank.com/justinfrey64"><span class="ico-circle"><FontAwesomeIcon icon={['fab', 'hackerrank']}/></span></a></li>
                <li><a href="mailto:justin.r.frey@outlook.com"><span class="ico-circle"><FontAwesomeIcon icon="envelope"/></span></a></li>
            </ul>
            </div>
        </div>
    );
  }
}
 
export default ContactInfo;