import React from 'react';
import '../footer/Footer.css'
import FI from '../../assets/ACM-FOOTER.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedinIn, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <footer>

    {/* web-view */}

      <div className='Footer web-view'>
        <img src={FI} alt='footer-image' className='FI'/>
        <div className='f-allign'>
          <div className='Quick_Links'>
            <h4>Quick links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/resources">Resources</a></li>
              <li><a href="/events">Events</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className='contact-us'>
            <h4>Connect</h4>
            <ul>
              <li><a href="mailto:99220041354@klu.ac.in">ACM-W@klu.ac.in</a></li>
              <li><a href="tel:9999999999">99********</a></li>
            </ul>
          </div>

          <div className='follow'>
            <h4>Follow Us</h4>
            <ul>
              <li><a href="https://www.linkedin.com/in/kare-acm-w-student-chapter-8212b8320#" target='_blank'><FontAwesomeIcon icon={faLinkedinIn} /> LinkedIn</a></li>
              <li><a href="https://www.facebook.com/share/Rmq2dZXKTUvmmUGb/?mibextid=qi2Omg" target='_blank'><FontAwesomeIcon icon={faFacebook} /> Facebook</a></li>
              <li><a href="https://www.youtube.com/@ACM-WSTUDENTCHAPTERKARE" target='_blank'><FontAwesomeIcon icon={faYoutube} /> Youtube</a></li>
              <li><a href="#"><FontAwesomeIcon icon={faXTwitter} /> Twitter</a></li>
            </ul>
          </div>
        </div>
      </div>

    {/* mobile-view */}

      <div className='Footer mobile-view'>
        <img src={FI} alt='footer-image' className='FI'/>
        <div className='f-allign'>
          <div className='Quick_Links'>
            <h4>Quick links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/resources">Resources</a></li>
              <li><a href="/events">Events</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className='contact-us'>
            <h4>Connect</h4>
            <ul>
              <li><a href="mailto:99220041354@klu.ac.in">ACM-W@klu.ac.in</a></li>
              <li><a href="tel:9999999999">99********</a></li>
            </ul>
          </div>

          <div className='follow'>
            <h4>Follow Us</h4>
            <ul>
            <li><a href="https://www.linkedin.com/in/kare-acm-w-student-chapter-8212b8320#"><FontAwesomeIcon icon={faLinkedinIn} /> LinkedIn</a></li>
              <li><a href="https://www.facebook.com/share/Rmq2dZXKTUvmmUGb/?mibextid=qi2Omg"><FontAwesomeIcon icon={faFacebook} /> Facebook</a></li>
              <li><a href="https://www.youtube.com/@ACM-WSTUDENTCHAPTERKARE"><FontAwesomeIcon icon={faYoutube} /> Youtube</a></li>
              <li><a href="#"><FontAwesomeIcon icon={faXTwitter} /> Twitter</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
