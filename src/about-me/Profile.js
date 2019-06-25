import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import profilePic from  "../assets/images/old-headshot.png";

class Profile extends Component {
  render() {
    return (
        <div class="col m6 s12">
                <div class="row">
                  <div class="col s12 l6">
                    <div class="about-img">
                      <img src={profilePic} class="circle responsive-img" alt="My old headshot"/>
                    </div>
                  </div>
                  <div class="col s12 l6">
                    <div class="about-info">
                      <p><span class="title-s">Name: </span> <span>Justin Frey</span></p>
                      <p><span class="title-s">Profile: </span> <span>Full Stack Developer</span></p>
                      <p><span class="title-s">Email: </span> <span>justin.r.frey@outlook.com</span></p>
                      <p><span class="title-s">Phone: </span> <span>(610) 223-7935</span></p>
                    </div>
                  </div>
                </div>
                <div class="skill-mf">
                  <p class="title-s">Main Skills</p>
                  <div class="row">
                    <div class="col s3 m4 l2 skill-box">
                      <div class="skill-ico">
                        <span class="ico-circle tooltipped clickable" data-delay="150" data-position="bottom" data-tooltip="HTML"><FontAwesomeIcon icon={['fab', 'html5']}/></span>
                      </div>
                    </div>
                    <div class="col s3 m4 l2 skill-box">
                      <div class="skill-ico">
                        <span class="ico-circle tooltipped clickable" data-delay="150" data-position="bottom" data-tooltip="CSS"><FontAwesomeIcon icon={['fab', 'css3']}/></span>
                      </div>
                    </div>
                    <div class="col s3 m4 l2 skill-box">
                      <div class="skill-ico">
                        <span class="ico-circle tooltipped clickable" data-delay="150" data-position="bottom" data-tooltip="Javascript"><FontAwesomeIcon icon={['fab', 'js']}/></span>
                      </div>
                    </div>
                    <div class="col s3 m4 l2 skill-box">
                      <div class="skill-ico">
                        <span class="ico-circle tooltipped clickable" data-delay="150" data-position="bottom" data-tooltip="Java"><FontAwesomeIcon icon={['fab', 'java']}/></span>
                      </div>
                    </div>
                    <div class="col s3 m4 l2 skill-box">
                      <div class="skill-ico">
                        <span class="ico-circle tooltipped clickable" data-delay="150" data-position="bottom" data-tooltip="SQL"><FontAwesomeIcon icon={['fas', 'database']}/></span>
                      </div>
                    </div>
                    <div class="col s3 m4 l2 skill-box">
                      <div class="skill-ico">
                        <span class="ico-circle tooltipped clickable" data-delay="150" data-position="bottom" data-tooltip="React"><FontAwesomeIcon icon={['fab', 'react']}/></span>
                      </div>
                    </div>
                    <div class="col s3 m4 l2 skill-box">
                      <div class="skill-ico">
                        <span class="ico-circle tooltipped clickable" data-delay="150" data-position="bottom" data-tooltip="Angular"><FontAwesomeIcon icon={['fab', 'angular']}/></span>
                      </div>
                    </div>
                    <div class="col s3 m4 l2 skill-box">
                      <div class="skill-ico">
                        <span class="ico-circle tooltipped clickable" data-delay="150" data-position="bottom" data-tooltip="Git"><FontAwesomeIcon icon={['fab', 'git-alt']}/></span>
                      </div>
                    </div>
                    <div class="col s3 m4 l2 skill-box">
                      <div class="skill-ico">
                        <span class="ico-circle tooltipped clickable" data-delay="150" data-position="bottom" data-tooltip="npm"><FontAwesomeIcon icon={['fab', 'npm']}/></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="skill-sf">
                  <p class="title-s">Other Skills</p>
                  <div class="row">
                    <div class="col s6 skill-box">
                      <div>PHP</div>
                      <div>Python</div>
                      <div>C++</div>
                    </div>
                    <div class="col s6 skill-box">
                      <div>SVN</div>
                      <div>ASP.NET MVC</div>
                      <div>Ruby</div>
                    </div>
                  </div>
                </div>
</div>
    );
  }
}

export default Profile;