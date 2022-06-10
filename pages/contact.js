import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import styles from '../styles/Contact.module.scss'

function Contact() {

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [hide, setHide] = useState(false);
  const recaptchaRef = React.createRef();

  async function handleOnSubmit(e) {
    e.preventDefault();
    
    recaptchaRef.current.execute();

    const formData = {}

    Array.from(e.currentTarget.elements).forEach(field => {
      if ( !field.name ) return; 
      formData[field.name] = field.value;
    });

    const res = await fetch('/api/mail', {
      method: 'post',
      body: JSON.stringify(formData)
    })

    if (res.ok) {
      setSuccess(!success);
    } else {
      setError(!error);
    }

    setHide(!hide);
  }

  const onReCAPTCHAChange = (captchaCode) => {
    // If the reCAPTCHA code is null or undefined indicating that
    // the reCAPTCHA was expired then return early
    if(!captchaCode) {
      return;
    }
    // Else reCAPTCHA was executed successfully so proceed with the 
    // alert
    alert(`Hey, ${email}`);
    // Reset the reCAPTCHA so that it can be executed again if user 
    // submits another email.
    recaptchaRef.current.reset();
  }
  
  return (
 
    <div id="contact" className="page-container" >
      <div className={styles.success} style={{ display: success ? "block" : "none" }}>
        <p>Thank you for getting in touch!</p>
      </div>
      <div className={styles.success} style={{ display: error ? "block" : "none" }}>
        <p>Error! <br/>Please refresh and try again or contact me at <a href="mailto:acekisch@gmail.com">acekisch@gmail.com</a></p>
      </div>

        <form 
          name="contact" 
          method="POST" 
          onSubmit={handleOnSubmit} 
          className={styles.contact} 
          style={{ display: hide ? "none" : "grid" }}
        >
          <ReCAPTCHA
            ref={recaptchaRef}
            size="invisible"
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            onChange={onReCAPTCHAChange}
          />
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
