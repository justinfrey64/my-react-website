import React, { Component } from "react";
import SendMessage from "./SendMessage";
import ContactInfo from "./ContactInfo"
 
class Contact extends Component {
  render() {
    return (
      <div class="row">
        <div class="col s12">
          <div class="contact-mf">
            <div id="contact" class="box-shadow-full">
              <div class="row">
                <SendMessage></SendMessage>
                <ContactInfo></ContactInfo>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Contact;