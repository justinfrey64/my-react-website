import React, { Component } from "react";
import Typed from "react-typed"
 
class Home extends Component {
  render() {
    return (
      <div>
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
}

export default Home;