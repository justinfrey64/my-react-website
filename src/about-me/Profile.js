import React, { Component } from "react";

class Profile extends Component {
  render() {
    return (
        <div class="col m6 s12">
                <div class="row">
                  <div class="col s6 m5">
                    <div class="about-img">
                      <img src="#" class="img-fluid rounded b-shadow-a" alt=""/>
                    </div>
                  </div>
                  <div class="col s6 m7">
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
                        <span class="ico-circle"><i class="fab fa-html5"></i></span>
                      </div>
                      <div class="service-content">
                        <label>HTML</label>
                      </div>
                    </div>
                    <div class="col s3 m4 l2 skill-box">
                      <div class="skill-ico">
                        <span class="ico-circle"><i class="fab fa-css3-alt"></i></span>
                      </div>
                      <div class="service-content">
                        <label>CSS</label>
                      </div>
                    </div>
                    <div class="col s3 m4 l2 skill-box">
                      <div class="skill-ico">
                        <span class="ico-circle"><i class="fab fa-js"></i></span>
                      </div>
                      <div class="service-content">
                        <label>Javascript</label>
                      </div>
                    </div>
                    <div class="col s3 m4 l2 skill-box">
                      <div class="skill-ico">
                        <span class="ico-circle"><i class="fab fa-java"></i></span>
                      </div>
                      <div class="service-content">
                        <label>JAVA</label>
                      </div>
                    </div>
                    <div class="col s3 m4 l2 skill-box">
                      <div class="skill-ico">
                        <span class="ico-circle"><i class="fas fa-database"></i></span>
                      </div>
                      <div class="service-content">
                        <label>SQL</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="skill-sf">
                  <p class="title-s">Other Skills</p>
                  <div class="row">
                    <div class="col s6 skill-box">
                      <div>PHP</div>
                      <div>Git</div>
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