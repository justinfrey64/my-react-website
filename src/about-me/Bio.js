import React, { Component } from "react";

class Bio extends Component {
  render() {
    return (
        <div class="col s12 m6">
                <div class="about-me pt-4 pt-md-0">
                  <div class="title-box-2">
                    <h5 class="title-left">
                      About me
                    </h5>
                  </div>
                  <p class="lead">
                    Hello! My name is Justin Frey and I'm a Fullstack Developer and 
                    Web Designer. I'm currently employed by a large corporation as a Programmer but I'm always
                    looking for new and exciting oppurtunities.
                  </p>
                  <p class="lead">
                    I have a passion for creating websites that are both engaging and pleasing to the eye. I 
                    enjoy writing clean and responsive front-ends to pair with intuitive and functional back-ends.
                  </p>
                  <p class="lead">
                    When I'm not coding, I enjoy going snowboarding, adventuring with friends in Dungeons 
                    and Dragons, reading Game of Thrones, and playing video games.
                  </p>
                </div>
              </div>
    );
  }
}

export default Bio;