import React from 'react';
import '../about-acm/Aboutacm.css';

function Aboutacm() {
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

      <div className='why'>
        <div className='clearfix'>
          <div>
            <div className='line'></div>
            <div className='Why-ACM'>
              <h2>Why ACM?</h2>
            </div>
            <div className='describe-why'>
              <p>ACM, the world’s largest educational and scientific computing society, delivers resources that advance computing as a science and a profession…</p>
              <a href='https://www.acm.org/' target='_blank'><button className='Read-more'>Read More</button></a>
            </div>
          </div>
        </div>
      </div>

      <div className='About-Mission'>
        <div className='clearfix'>
          <div className='img-sec'>
            <img src='' />
          </div>
          <div className="line"></div>
          <div className='our-mission'>
            <h2>Membership Benefits</h2>
          </div>
          <div className='describe-mission'>
            <p>ACM provides enormous ways to enhance your career by providing resources, communication tools, along with its online courses, books and learning paths etc!!…</p>
            <a href='https://www.acm.org/membership' target='_blank'><button className='Read-more'>Read More</button></a> <a href='https://services.acm.org/public/qj/proflevel/proflevel_control.cfm?level=3&country=India&form_type=Student&promo=LEVEL&pay=DD' target='_blank'><button className='Read-more'>Become a Member</button></a>
          </div>
        </div>
      </div>

      <div className='why'>
        <div className='clearfix'>
          {/* <img className='img-sec' src={sI} /> */}
          <div className='line'></div>
          <div className='Why-ACM'>
            <h2>ACM awards</h2>
          </div>
          <div className='describe-why'>
            <p>ACM recognizes excellence through its eminent series of awards for technical and professional achievements and contributions in computer science and information technology…</p>
            <a href='https://services.acm.org/public/qj/proflevel/proflevel_control.cfm?level=3&country=India&form_type=Student&promo=LEVEL&pay=DD' target='_blank'><button className='Read-more'>Become a Member</button></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutacm;
