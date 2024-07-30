import React from 'react';
import '../about/AboutPage.css';

function About() {
  return (
    <section>
      <div>
        <div className='India-Council Indian-Council-animation-text'>
        <div className="line"></div>
          <div className='heading'>
            <h2 className='India-Council-heading'>About the ACM India Council</h2>
          </div>
          <div className='India-Council-content'>
            <p className='India-Council-describe'>The ACM India Council is an effort of ACM aimed at increasing the level and visibility of ACM activities across India. The ACM community in India is growing in membership, number of chapters, sponsored conferences and symposia. The ACM India Council comprises a cross section of the computer science and information technology community committed to increasing the visibility and relevance of ACM in India. The council is focused on a wide range of ACM activities including: serving as a professional network for individuals who are involved with the science and technology of computing encouraging students to take an active interest in the emerging and exciting world of computing facilitating the organization of high-quality ACM conferences in India providing logistical support to grow more ACM professional and student chapters enhancing access to the ACM Digital Library and publications for ACM members in India increasing the participation of ACM members in India across all dimensions of ACM.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
