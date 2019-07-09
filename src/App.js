import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';

import Navbar from "./global/header/Navbar";
import MainContent from "./MainContent";
import Footer from "./global/footer/Footer";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fab, fas, far);

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <MainContent></MainContent>
      <Footer></Footer>
    </div>
  );
}

export default App;
