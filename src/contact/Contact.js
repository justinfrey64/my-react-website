import React, { Component } from "react";
import SendMessage from "./SendMessage";
import ContactInfo from "./ContactInfo"
 
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
}
 
export default Contact;