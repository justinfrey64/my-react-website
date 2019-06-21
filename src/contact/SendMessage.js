import React, { Component } from "react";
 
class Contact extends Component {
  render() {
    return (
        <div class="col s12 m6">
            <div class="title-box-2">
            <h5 class="title-left">
                Send Me A Message
            </h5>
            </div>
            <div>
                <form action="https://formspree.io/justin.r.frey@outlook.com" method="POST" role="form" class="contactForm">
                <input type="text" name="_gotcha" class="hidden"/>
                <div id="sendmessage" class="hidden">Your message has been sent. Thank you!</div>
                <div id="errormessage"></div>
                <div class="row">
                    <div class="col m12 mb-3">
                        <div class="form-group">
                        <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                        <div class="validation"></div>
                        </div>
                    </div>
                    <div class="col m12 mb-3">
                        <div class="form-group">
                        <input type="email" class="form-control" name="_replyto" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email"/>
                        <div class="validation"></div>
                        </div>
                    </div>
                    <div class="col m12 mb-3">
                        <div class="form-group">
                            <input type="text" class="form-control" name="_subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject"/>
                            <div class="validation"></div>
                        </div>
                    </div>
                    <div class="col m12 mb-3">
                        <div class="form-group">
                        <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                        <div class="validation"></div>
                        </div>
                    </div>
                    <div class="col m12">
                        <button type="submit" class="button button-a button-big button-rouded">Send Message</button>
                    </div>
                </div>
            </form>
            </div>
        </div>
    );
  }
}
 
export default Contact;