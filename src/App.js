import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';

import {
  HashRouter
} from "react-router-dom";
import Navbar from "./global/header/Navbar";
import MainContent from "./MainContent";
import Footer from "./global/footer/Footer";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas)

function App() {
  return (
    <div className="App">
      <HashRouter>
          <Navbar></Navbar>
          <MainContent></MainContent>
      </HashRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
