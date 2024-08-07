import React from 'react';
import '../contact/ContactPage.css';
import contactImage from '../../assets/con1.jpg'

function Contact() {
  return (
    <section>

    {/* web-view */}

      <div className='web-view'>
        <div>
          <img src={contactImage} alt='contact' className='contactImage' />

          {/* <div className='contact-place'>
            <h2>Contact</h2>
            <p>Let's Connect..!</p>
          </div> */}

        </div>

        <div className='drop-msg'>
          <h2>Drop us a Message</h2>
          <p>Let's talk about the work!</p>
        </div>

        <div>
          <div className='connect-us'>

            <div className='name-input'>
              <label htmlFor="Name">Name *</label>
              <input className='form-control' type="text" name="Name-input" id="Name-input" />
            </div>

            <div className='email-input'>
              <label htmlFor="Email">Email *</label>
              <input className='form-control' type="email" name="Email" id="msg-Emial" />
            </div>

            <div className='msg-input'>
              <label htmlFor="Message">Message *</label>
              <textarea className='form-control' name="msg-input" id="msg-input"></textarea>
            </div>

            <div className='submit-btn'>
              <button className='btn btn-primary snd-btn'>Send Message</button>
            </div>

          </div>
        </div>
      </div>

    {/* mobile-view */}

      <div className='mobile-view'>
        <div>
          <img src={contactImage} alt='contact' className='contactImage' />

          {/* <div className='contact-place'>
            <h2>Contact</h2>
            <p>Let's Connect..!</p>
          </div> */}

        </div>

        <div className='drop-msg'>
          <h2>Drop us a Message</h2>
          <p>Let's talk about the work!</p>
        </div>

        <div>
          <div className='connect-us'>

            <div className='name-input'>
              <label htmlFor="Name">Name *</label>
              <input className='form-control' type="text" name="Name-input" id="Name-input" />
            </div>

            <div className='email-input'>
              <label htmlFor="Email">Email *</label>
              <input className='form-control' type="email" name="Email" id="msg-Emial" />
            </div>

            <div className='msg-input'>
              <label htmlFor="Message">Message *</label>
              <textarea className='form-control' name="msg-input" id="msg-input"></textarea>
            </div>

            <div className='submit-btn'>
              <button className='btn btn-primary snd-btn'>Send Message</button>
            </div>

          </div>
        </div>
      </div>
    </section>

  );
}

export default Contact;
