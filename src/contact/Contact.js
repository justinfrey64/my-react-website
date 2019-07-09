import React, { Component } from "react";
import SendMessage from "./SendMessage";
import ContactInfo from "./ContactInfo"
import "./Contact.css"
import $ from "jquery";
 
class Contact extends Component {
  render() {
    return (
      <div class="container content-margin-top">
        <div class="row z-depth-3">
          <SendMessage></SendMessage>
          <ContactInfo></ContactInfo>
        </div>
      </div>
    );
  }
  componentDidMount(){
    // var bodyheight = $(".page-main-inner").height();
    // $('.main-content').height(bodyheight);
  }
}
 
export default Contact;