import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import $ from "jquery";

ReactDOM.render((
    <BrowserRouter basename="/my-react-website">
        <App />
    </BrowserRouter>
    ), document.getElementById('root')
);

$(window).resize(function() {
    var bodyheight = $(".page-main-inner").height();
    $('.main-content').height(bodyheight);
}).resize();

