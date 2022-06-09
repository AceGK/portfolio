import React, { useState } from "react";
import styles from '../styles/Contact.module.scss'

function Contact() {

  const [showMe, setShowMe] = useState(false);

  async function handleOnSubmit(e) {
    e.preventDefault();
    const formData = {}
    Array.from(e.currentTarget.elements).forEach(field => {
      if ( !field.name ) return; 
      formData[field.name] = field.value;
    });

    fetch('/api/mail', {
      method: 'post',
      body: JSON.stringify(formData)
    })
    console.log(formData);

    setShowMe(!showMe);
  }

  

  return (
  
 
    <div id="contact" className="page-container" >
      <div className={styles.success} style={{ display: showMe ? "block" : "none" }}>
        Success
      </div>

        <form 
          name="contact" 
          method="POST" 
          onSubmit={handleOnSubmit} 
          className={styles.contact} 
          style={{ display: showMe ? "none" : "grid" }}
        >
            <input type="hidden" name="form-name" value="contact" />
            <label htmlFor="name" hidden>Name</label>
            <input type="text" name="name" placeholder="Name" required/>

            <label htmlFor="email" hidden>Email</label>
            <input type="email" name="email" placeholder="Email" required/>

            <label htmlFor="message" hidden>Message</label>
            <textarea name="message" placeholder="Message" required></textarea>
            <button type="submit" className="btn">Send</button>
        </form>
      </div>
    


  );
}

export default Contact;
