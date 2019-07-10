import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Services.css";

class Services extends Component {
  render() {
    return (
      <div class="container services-container">
        <div class="row">
          <div class="col m4">
            <div class="card z-depth-3">
              <div class="card-icon center-align">
                <FontAwesomeIcon icon={['fas', 'laptop-code']}/>
              </div>
              <div class="card-content">
              <span class="card-title">Front-end Development</span>
                <p>
                  Designing front-ends is my favorite part of coding. Whether it be a website for the world to see or the front-end to an enterprise application, 
                  I like being able to see what all my hard work made. The tools I use to do this include HTML, CSS, JavaScript and frameworks like jQuery and Bootstrap. 
                  I'm also currently in the process of learning Angular, React, and Sass. 
                </p>
              </div>
            </div>
          </div>
          <div class="col m4">
            <div class="card z-depth-3">
              <div class="card-icon center-align">
                <FontAwesomeIcon icon={['fas', 'database']}/>
              </div>
              <div class="card-content">
                <span class="card-title">Back-end Development</span>
                <p>
                  Can't have a polished front-end without a functional back-end. Most of the time, my application/logic layer coding is done with Java but I also have 
                  experience with Python, Ruby, and C++. As for my data access layer, I mainly use SQL and have learned PHP as well. I have worked with both DB2 and 
                  Microsoft SQL databases. 
                </p>
              </div>
            </div>
          </div>
          <div class="col m4">
            <div class="card z-depth-3">
              <div class="card-icon center-align">
                <FontAwesomeIcon icon={['fas', 'mobile-alt']}/>
              </div>
              <div class="card-content">
                <span class="card-title">Responsive Design</span>
                <p>
                  I feel like responsive design is the best way to get people to take a look at a website. Responsive design ensures that no matter what device 
                  someone is using, everything looks good and well organized. The tools I have used to accomplish this include Bootstrap and Content Management 
                  Systems (CMS) like WordPress and Drupal. 
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
        <div class="col m4 offset-m2">
            <div class="card z-depth-3">
              <div class="card-icon center-align">
                <FontAwesomeIcon icon={['fas', 'cogs']}/>
              </div>
              <div class="card-content">
                <span class="card-title">IT Support</span>
                <p>
                  Providing software and hardware support is a great way to share my technical knowledge with people. These days it mostly helping family 
                  and friends but I enjoy solving IT related issues that put my problem solving to the test. I've learned Google is my best tool, but I've 
                  also become familiar with command line, Active Directory, and some Visual Basic and Powershell 
                </p>
              </div>
            </div>
          </div>
          <div class="col m4">
            <div class="card z-depth-3">
              <div class="card-icon center-align">
                <FontAwesomeIcon icon={['fas', 'desktop']}/>
              </div>
              <div class="card-content">
                <span class="card-title">System Building</span>
                <p>
                  Building systems is a favorite hobby of mine (but not my wallet's favorite hobby). I have built several different computers for myself, 
                  friends, and family. I have also tinkered with Raspberry Pis and had fun with those. 
                </p>
              </div>
              <div class="card-action">
                <a href="https://pcpartpicker.com/list/fz6N4q">My Current Build</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;