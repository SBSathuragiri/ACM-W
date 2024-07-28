import React from 'react';
import '../home/home.css';
import bg from '../../assets/KLU-image.jpg'
import sI from '../../assets/ACM-BG.jpg'


function Home() {
  return (
    <section className="App">
      <div className='image-bg'>
        <img src={bg} alt='bg' className='bg-img' />
      </div>

      <div className='img-text'>
        <h2>KARE ACM - W STUDENT CHAPTER</h2>
      </div>

      <div className='About-ACM'>
        <div className='clearfix'>
          <div className='img-sec'></div>
          <div className="line"></div>
          <div className='about-us-text'>
            <h2>About Us</h2>
          </div>
          <div className='describe'>
            <p>ACM - W Student Chapter at KARE campus is aimed to serve as a gateway of forums,panel discussions,and symposia that further a student’s proffesional development. Encouraging students to take an active interest in the emerging and exciting world of computing preparations and presentations of the technical reports and papers,and cooperative effforts on research projects allow students to test their technical expertise</p>
          </div>
        </div>
      </div>

      <div className='About-ACM-IC'>
        <div className='clearfix'>
          <div className='img-sec'></div>
          <div className="line"></div>
          <div className='about-the-ACM'>
            <h2>About the ACM India Council</h2>
          </div>
          <div className='describe-AMC'>
            <p>The ACM India Council is an effort of ACM aimed at increasing the level and visibility of ACM activities across India. The ACM community in India is growing in membership, number of chapters, sponsored conferences and symposia. The ACM India Council comprises a cross section of the computer science and information technology community committed to increasing the visibility and relevance of ACM in India. The council is focused on a wide range of ACM activities including: serving as a professional network for individuals who are involved with the science and technology of computing encouraging students to take an active interest in the emerging and exciting world of computing facilitating the organization of high-quality ACM conferences in India providing logistical support to grow more ACM professional and student chapters enhancing access to the ACM Digital Library and publications for ACM members in India increasing the participation of ACM members in India across all dimensions of ACM.</p>
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
            <h2>Our Mission Statement</h2>
          </div>
          <div className='describe-mission'>
            <p><mark>Our mission is to support, celebrate, and advocate internationally for the full engagement of women in all aspects of the computing field, provide a wide range of programs and services to ACM members and work in the larger community to advance the contributions of technical women.</mark></p>
          </div>
        </div>
      </div>

      <div className='why'>
        <div className='clearfix'>
          {/* <img className='img-sec' src={sI} /> */}
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

export default Home;
