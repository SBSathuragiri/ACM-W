import React from 'react';
import '../home/home.css';
import bg from '../../assets/KLU-image.jpg'


function Home() {
  return (
    <section className="App">
      <div className='image-bg'>
        <img src={bg} alt='bg' className='bg-img' />
      </div>

      <div className='img-text'>
        <h2>KARE ACM - W STUDENT CHAPTER</h2>
      </div>

      <div>
        <div className='About'>
        {/* <div className="line About-line"></div> */}
          <div className='heading'>
            <h2 className='about-heading'>About Us</h2>
          </div>
          <div className='about-content'>
            <p className='about-describe'>ACM - W Student Chapter at KARE campus is aimed to serve as a gateway of forums,panel discussions,and symposia that further a student’s proffesional development. Encouraging students to take an active interest in the emerging and exciting world of computing preparations and presentations of the technical reports and papers,and cooperative effforts on research projects allow students to test their technical expertise</p>
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
            <p>Our mission is to support, celebrate, and advocate internationally for the full engagement of women in all aspects of the computing field, provide a wide range of programs and services to ACM members and work in the larger community to advance the contributions of technical women.</p>
          </div>
        </div>
      </div>


    </section>
  );
}

export default Home;
