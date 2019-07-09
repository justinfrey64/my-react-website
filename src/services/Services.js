import React, { Component } from "react";
import $ from "jquery";

class Services extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <h5>Services</h5>
        </div>
      </div>
    );
  }

  componentDidMount(){
    // var bodyheight = $(".page-main-inner").height();
    // $('.main-content').height(bodyheight);
  }
}

export default Services;