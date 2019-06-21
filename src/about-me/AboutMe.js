import React, { Component } from "react";
import Bio from "./Bio";
import Profile from "./Profile";

class AboutMe extends Component {
  render() {
    return (
        <div class="row">
            <div class="col s12">
                <div class="box-shadow-full">
                    <div class="row">
                        <Profile></Profile>
                        <Bio></Bio>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default AboutMe;