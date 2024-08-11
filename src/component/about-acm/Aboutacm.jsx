import React from 'react';
import '../about-acm/Aboutacm.css';
import indiancouncil from '../../assets/acmindian.jpg'
import membership from '../../assets/membership.jpg'
import awards from '../../assets/acmawards.jpg'


function Aboutacm() {
  return (
    <section>
      <div className='web-view'>
        <div className='India-Council Indian-Council-animation-text'>
          <img className='council-img' src={indiancouncil} alt="indian council" />
          <div className="council-line"></div>
          <div className='heading'>
            <h2 className='India-Council-heading'>About the ACM India Council</h2>
          </div>
          <div className='India-Council-content'>
            <p className='India-Council-describe'>The ACM India Council is an effort of ACM aimed at increasing the level and visibility of ACM activities across India. The ACM community in India is growing in membership, number of chapters, sponsored conferences and symposia. The ACM India Council comprises a cross section of the computer science and information technology community committed to increasing the visibility and relevance of ACM in India. The council is focused on a wide range of ACM activities including: serving as a professional network for individuals who are involved with the science and technology of computing encouraging students to take an active interest in the emerging and exciting world of computing facilitating the organization of high-quality ACM conferences in India providing logistical support to grow more ACM professional and student chapters enhancing access to the ACM Digital Library and publications for ACM members in India increasing the participation of ACM members in India across all dimensions of ACM.</p>
          </div>
        </div>

        <div className='Why-ACM Indian-Council-animation-text'>
          {/* <img className='Why-ACM-img' src={indiancouncil} alt="indian council" /> */}
          <div className="Why-ACM-line"></div>
          <div className='heading'>
            <h2 className='Why-ACM-heading'>Why ACM</h2>
          </div>
          <div className='Why-ACM-content'>
            <p className='Why-ACM-describe'>ACM, the world’s largest educational and scientific computing society, delivers resources that advance computing as a science and a profession…</p>
            <a className='why-acm-btn' href="https://www.acm.org/" target='_blank'><button className='Read-more'>Read more</button></a>
          </div>
        </div>

        <div className='Membership Indian-Council-animation-text'>
          <img className='membership-img' src={membership} alt="indian council" />
          <div className="Membership-line"></div>
          <div className='heading'>
            <h2 className='Membership-heading'>Membership Benefits</h2>
          </div>
          <div className='Membership-content'>
            <p className='Membership-describe'>ACM provides enormous ways to enhance your career by providing resources, communication tools, along with its online courses, books and learning paths etc!!…</p>
            <a href="https://www.acm.org/membership" target='_blank'><button className='Read-more'>Read more</button></a>
            <a href="https://services.acm.org/public/qj/proflevel/proflevel_control.cfm?level=3&&country=India&&form_type=Student&&promo=LEVEL&&pay=DD" target='_blank'><button className='Membership-btn'>Become a Member</button></a>
          </div>
        </div>

        <div className='awards Indian-Council-animation-text'>
          <img className='awards-img' src={awards} alt="indian council" />
          <div className="awards-line"></div>
          <div className='heading'>
            <h2 className='awards-heading'>ACM awards</h2>
          </div>
          <div className='awards-content'>
            <p className='awards-describe'>ACM recognizes excellence through its eminent series of awards for technical and professional achievements and contributions in computer science and information technology…</p>
            <a className='awards-btn' href="https://services.acm.org/public/qj/proflevel/proflevel_control.cfm?level=3&&country=India&&form_type=Student&&promo=LEVEL&&pay=DD" target='_blank'><button className='Membership-btn'>Become a Member</button></a>
          </div>
        </div>

      </div>

      <div className='mobile-view'>
        <div className='India-Council Indian-Council-animation-text'>
          <div className="council-line"></div>
          <div className='heading'>
            <h2 className='India-Council-heading'>About the ACM India Council</h2>
          </div>
          <img className='council-img' src={indiancouncil} alt="indian council" />
          <div className='India-Council-content'>
            <p className='India-Council-describe'>The ACM India Council is an effort of ACM aimed at increasing the level and visibility of ACM activities across India. The ACM community in India is growing in membership, number of chapters, sponsored conferences and symposia. The ACM India Council comprises a cross section of the computer science and information technology community committed to increasing the visibility and relevance of ACM in India. The council is focused on a wide range of ACM activities including: serving as a professional network for individuals who are involved with the science and technology of computing encouraging students to take an active interest in the emerging and exciting world of computing facilitating the organization of high-quality ACM conferences in India providing logistical support to grow more ACM professional and student chapters enhancing access to the ACM Digital Library and publications for ACM members in India increasing the participation of ACM members in India across all dimensions of ACM.</p>
          </div>
        </div>

        <div className='Why-ACM Indian-Council-animation-text'>
          <div className="Why-ACM-line"></div>
          <div className='heading'>
            <h2 className='Why-ACM-heading'>Why ACM</h2>
          </div>
          {/* <img className='Why-ACM-img' src={indiancouncil} alt="indian council" /> */}
          <div className='Why-ACM-content'>
            <p className='Why-ACM-describe'>ACM, the world’s largest educational and scientific computing society, delivers resources that advance computing as a science and a profession…</p>
            <a className='why-acm-btn' href="https://www.acm.org/" target='_blank'><button className='Read-more'>Read more</button></a>
          </div>
        </div>

        <div className='Membership Indian-Council-animation-text'>
          <div className="Membership-line"></div>
          <div className='heading'>
            <h2 className='Membership-heading'>Membership Benefits</h2>
          </div>
          <img className='membership-img' src={membership} alt="indian council" />
          <div className='Membership-content'>
            <p className='Membership-describe'>ACM provides enormous ways to enhance your career by providing resources, communication tools, along with its online courses, books and learning paths etc!!…</p>
            <a className='Membership-btn' href="https://www.acm.org/membership" target='_blank'><button className='Read-more'>Read more</button></a>
            <a className='Membership-btn' href="https://services.acm.org/public/qj/proflevel/proflevel_control.cfm?level=3&&country=India&&form_type=Student&&promo=LEVEL&&pay=DD" target='_blank'><button className='Read-more'>Become a Member</button></a>
          </div>
        </div>

        <div className='awards Indian-Council-animation-text'>
          <div className="awards-line"></div>
          <div className='heading'>
            <h2 className='awards-heading'>ACM awards</h2>
          </div>
          <img className='awards-img' src={awards} alt="indian council" />
          <div className='awards-content'>
            <p className='awards-describe'>ACM recognizes excellence through its eminent series of awards for technical and professional achievements and contributions in computer science and information technology…</p>
            <a className='awards-btn' href="https://services.acm.org/public/qj/proflevel/proflevel_control.cfm?level=3&&country=India&&form_type=Student&&promo=LEVEL&&pay=DD" target='_blank'><button className='Read-more'>Become a Member</button></a>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Aboutacm;
