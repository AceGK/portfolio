import React from "react";

function Contact() {
  return (
    
    <div id="contact" className="page-container">
        <form name="contact" method="POST" data-netlify="true" action="/contact">
            <input type="hidden" name="form-name" value="contact" />
            <label htmlFor="name" hidden>Name</label>
            <input type="text" name="name" placeholder="Name" required/>

            <label htmlFor="email" hidden>Email</label>
            <input type="email" name="email" placeholder="Email" required/>

            <label htmlFor="message" hidden>Message</label>
            <textarea name="message" placeholder="Message" required></textarea>

            {/* <div data-netlify-recaptcha="true"></div> */}
            <br></br>
            <button type="submit" className="project-btn">Send</button>
        </form>
    </div>


  );
}

export default Contact;
