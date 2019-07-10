import React, { Component } from "react";
import "./Timeline.css";
class Timeline extends Component {
  render() {
    return (
      <div class="container page">
        <div class="row">
        <div class="col-sm-12">
          <div>
            {/* The Timeline */}

            <ul class="timeline">

                {/* <!-- Item 1 --> */}
                <li>
                  <div class="direction-r">
                    <div class="flag-wrapper">
                      <span class="flag">Penske Truck Leasing</span>
                      <span class="time-wrapper"><span class="time">2017 - present</span></span>
                    </div>
                    <div class="desc">
                      I'm currently working at Penske Truck Leasing as a Programmer. My resposibilities inlcude maintaining 
                      and supporting existing applications, developing brand new applications and new features for existing
                      applications, and being an active participant in refinement meetings and deploys. 
                    </div>
                  </div>
                </li>
                
                {/* <!-- Item 2 --> */}
                <li>
                  <div class="direction-l">
                    <div class="flag-wrapper">
                      <span class="flag">Dart Container Corp.</span>
                      <span class="time-wrapper"><span class="time">2015 - 2017</span></span>
                    </div>
                    <div class="desc">
                      I worked at Dart Container Corp. in Leola, PA as an IT Specialist. My main job was providing technical 
                      support for users at a large facility. This support included both hardware and software support, 
                      networking, and managing Active Directory profiles and an RFID card system. I also helped implement 
                      a SAP enterprise system.
                    </div>
                  </div>
                </li>
              
                {/* <!-- Item 3 --> */}
                <li>
                  <div class="direction-r">
                    <div class="flag-wrapper">
                      <span class="flag">Penn State University</span>
                      <span class="time-wrapper"><span class="time">2010 - 2015</span></span>
                    </div>
                    <div class="desc">
                      I attended and graduated from Penn State University with a Bachelor's Degree in Information 
                      Sciences and Technology. Here I learned a lot about coding and concepts like object-oriented
                      programming and proper web design.
                    </div>
                  </div>
                </li>
                
              </ul>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Timeline;