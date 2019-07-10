import React, { Component } from "react";
import Typed from "react-typed";
 
class Home extends Component {
  render() {
    return (
      <div class="container center-align">
        <h1 class="intro-title mb-4">I am Justin Frey</h1>
        <Typed 
          strings={[
              'Frontend Developer',
              'Web Designer',
              'Dungeon Master',
              'Backend Developer',
              'Snowboarder',
              'IT Specialist',
              'Game of Thrones Fan'
            ]}
          typeSpeed={50}
          backSpeed={60}  
          loop>
        </Typed>
      </div>
    );
  }
}

export default Home;