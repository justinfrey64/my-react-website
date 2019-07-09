import React, { Component } from "react";
import Typed from "react-typed"
import $ from "jquery";
 
class Home extends Component {
  render() {
    return (
      <div class="container">
        <h1 class="intro-title mb-4">I am Justin Frey</h1>
        <Typed 
          strings={[
              'Frontend Developer',
              'Web Designer',
              'Backend Developer',
              'IT Specialist']}
          typeSpeed={50}
          backSpeed={60} 
          loop >
        </Typed>
      </div>
    );
  }
  componentDidMount(){
    // var bodyheight = $(".page-main-inner").height();
    // $('.main-content').height(bodyheight);
  }
}

export default Home;