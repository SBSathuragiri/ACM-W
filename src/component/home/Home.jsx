import React from 'react';
import '../home/home.css';
import bg from '../../assets/KLU-image.jpg'


function Home() {
  return (
    <section >
      <div className='web-view'>
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

        <div>
          <div className='Mission Mission-animate-text'>
            <div className="M-line autoshow"></div>
            <div className='heading'>
              <h2 className='Mission-heading autoshow'>Our Mission Statement</h2>
            </div>
            <div className='Mission-content'>
              <p className='Mission-describe autoshow'>Our mission is to support, celebrate, and advocate internationally for the full engagement of women in all aspects of the computing field, provide a wide range of programs and services to ACM members and work in the larger community to advance the contributions of technical women.</p>
            </div>
          </div>
        </div>

        <div className='home-video'>
          <iframe className='yt-video' src="https://www.youtube.com/embed/xUmCqK5TxvU?si=qX_tlFYkQpJmjaln" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

        <aside className="news-box">
          <h2>UPDATES</h2>
          <div>
            <div className="news-content">
              <p>Breaking News: Major Event Happens!</p>
              <p>Update: More Details About the Event.</p>
              <p>Exclusive: Interviews with Key Figures.</p>
              <p>Breaking News: Major Event Happens!</p>
              <p>Update: More Details About the Event.</p>
              <p>Exclusive: Interviews with Key Figures.</p>
              <p>Breaking News: Major Event Happens!</p>
              <p>Update: More Details About the Event.</p>
              <p>Exclusive: Interviews with Key Figures.</p>
            </div>
          </div>
        </aside>

        <div>
          <div className='Mission Mission-animate-text'>
            <div className="M-line autoshow"></div>
            <div className='heading'>
              <h2 className='Mission-heading autoshow'>ACM-W</h2>
            </div>
            <div className='Mission-content'>
              <p className='Mission-describe autoshow'>ACM-W advocates internationally for the full engagement of women in all aspects of the computing field, providing a wide range of programs and services to ACM members and working in the larger community to advance the contributions of technical women.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='mobile-view'>
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

        <div>
          <div className='Mission Mission-animate-text'>
            <div className="M-line autoshow"></div>
            <div className='heading'>
              <h2 className='Mission-heading autoshow'>Our Mission Statement</h2>
            </div>
            <div className='Mission-content'>
              <p className='Mission-describe autoshow'>Our mission is to support, celebrate, and advocate internationally for the full engagement of women in all aspects of the computing field, provide a wide range of programs and services to ACM members and work in the larger community to advance the contributions of technical women.</p>
            </div>
          </div>
        </div>

        <div className="news-box">
          <h2>Upcoming</h2>
          <div>
            <div className="news-content">
              <p>Breaking News: Major Event Happens!</p>
              <p>Update: More Details About the Event.</p>
              <p>Exclusive: Interviews with Key Figures.</p>
              <p>Breaking News: Major Event Happens!</p>
              <p>Update: More Details About the Event.</p>
              <p>Exclusive: Interviews with Key Figures.</p>
              <p>Breaking News: Major Event Happens!</p>
              <p>Update: More Details About the Event.</p>
              <p>Exclusive: Interviews with Key Figures.</p>
            </div>
          </div>
        </div>

        <div className='home-video'>
          <iframe className='mobile-yt-video' src="https://www.youtube.com/embed/xUmCqK5TxvU?si=qX_tlFYkQpJmjaln" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

        <div>
          <div className='Mission Mission-animate-text'>
            <div className="M-line autoshow"></div>
            <div className='heading'>
              <h2 className='Mission-heading autoshow'>ACM-W</h2>
            </div>
            <div className='Mission-content'>
              <p className='Mission-describe autoshow'>ACM-W advocates internationally for the full engagement of women in all aspects of the computing field, providing a wide range of programs and services to ACM members and working in the larger community to advance the contributions of technical women.</p>
            </div>
          </div>
        </div>
      </div>
    </section>


  );
}

export default Home;