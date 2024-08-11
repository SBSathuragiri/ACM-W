import React from 'react';
import '../Resources/Resources.css';
import publication from '../../assets/acmpublication.jpg';
import chapters from '../../assets/ACMChapter.png';
import queue from '../../assets/acmqueue.jpg';
import elearn from '../../assets/elearn.jpg';
import explore from '../../assets/explore.jpg'


function Resources() {
  return (
    <section>

      {/* web view */}

      <div className='web-view'>
        <div className='Publications Indian-Council-animation-text'>
          <img className='Publications-img' src={publication} alt="indian council" />
          <div className="Publications-line"></div>
          <div className='heading'>
            <h2 className='Publications-heading'>Publications</h2>
          </div>
          <div className='Publications-content'>
            <p className='Publications-describe'>For more than 60 years, the best and brightest minds in computing have come to ACM to meet, share ideas, publish their work and change the world. ACM’s publications are among the most respected and highly cited in the field…</p>
            <a className='Publications-btn' href='https://services.acm.org/public/qj/proflevel/proflevel_control.cfm?level=3&country=India&form_type=Student&promo=LEVEL&pay=DD' target='_blank'><button className='Membership-btn'>Become a Member</button></a>
          </div>
        </div>

        <div className='Chapters'>
          <img className='Chapters-img' src={chapters} alt="indian council" />
          <div className="Chapters-line"></div>
          <div className='heading'>
            <h2 className='Chapters-heading'>Chapters</h2>
          </div>
          <div className='Chapters-content'>
            <p className='Chapters-describe'>ACM’s Professional and Student chapters worldwide serve as hubs of activity for ACM members and the computing community at large. They provide seminars, lectures, learning forums and networking opportunities with peers and experts across the computing spectrum…</p>
          </div>
        </div>

        <div className='Queue Indian-Council-animation-text'>
          <img className='Queue-img' src={queue} alt="indian council" />
          <div className="Queue-line"></div>
          <div className='heading'>
            <h2 className='Queue-heading'>ACM Queue</h2>
          </div>
          <div className='Queue-content'>
            <p className='Queue-describe'>Queue is the ACM’s magazine for practicing software engineers. Written by engineers for engineers, Queue focuses on the technical problems and challenges that loom ahead, helping readers to sharpen their own thinking and pursue innovative solutions. Queue does not focus on either industry news or the latest “solutions.” Rather, Queue takes a critical look at current and emerging technologies, highlighting problems that are likely to arise and posing questions that software engineers should be thinking about.</p>
          </div>
        </div>

        <div className='Elearn Indian-Council-animation-text'>
          <img className='Elearn-img' src={elearn} alt="indian council" />
          <div className="Elearn-line"></div>
          <div className='heading'>
            <h2 className='Elearn-heading'>Explore Elearn Magazine</h2>
          </div>
          <div className='Elearn-content'>
            <p className='Elearn-describe'>ELearn Magazine seeks to be the place where practice informs research and research informs practice. eLearn Magazine engages a broad set of readers to include readers interested in eLearning in higher education, K-12 educators (those interested in k-12 blended and online learning), corporate, government, not-for-profit, and non-profit. eLearn Magazine provides content for these audiences by publishing articles in specific context areas as well as content that is more general such as management, instructional design, emerging technologies, and instructor development.</p>
          </div>
        </div>

        <div className='Explore Indian-Council-animation-text'>
          <img className='Explore-img' src={explore} alt="indian council" />
          <div className="Explore-line"></div>
          <div className='heading'>
            <h2 className='Explore-heading'>Explore xrds!</h2>
          </div>
          <div className='Explore-content'>
            <p className='Explore-describe'>XRDS is the ACM’s magazine for students. It is published quarterly, both in print and online for ACM student members. The publication was previously named Crossroads and has been running since 1994, edited and maintained voluntarily by students.</p>
          </div>
        </div>

      </div>

      {/* mobile view */}

      <div className='mobile-view'>
        <div className='Publications Indian-Council-animation-text'>
          <div className="Publications-line"></div>
          <div className='heading'>
            <h2 className='Publications-heading'>Publications</h2>
          </div>
          <img className='Publications-img' src={publication} alt="indian council" />
          <div className='Publications-content'>
            <p className='Publications-describe'>For more than 60 years, the best and brightest minds in computing have come to ACM to meet, share ideas, publish their work and change the world. ACM’s publications are among the most respected and highly cited in the field…</p>
            <a className='Publications-btn' href='https://services.acm.org/public/qj/proflevel/proflevel_control.cfm?level=3&country=India&form_type=Student&promo=LEVEL&pay=DD' target='_blank'><button className='Read-more'>Become a Member</button></a>
          </div>
        </div>

        <div className='Chapters'>
          <div className="Chapters-line"></div>
          <div className='heading'>
            <h2 className='Chapters-heading'>Chapters</h2>
          </div>
          <img className='Chapters-img' src={chapters} alt="indian council" />
          <div className='Chapters-content'>
            <p className='Chapters-describe'>ACM’s Professional and Student chapters worldwide serve as hubs of activity for ACM members and the computing community at large. They provide seminars, lectures, learning forums and networking opportunities with peers and experts across the computing spectrum…</p>
          </div>
        </div>

        <div className='Queue Indian-Council-animation-text'>
          <div className="Queue-line"></div>
          <div className='heading'>
            <h2 className='Queue-heading'>ACM Queue</h2>
          </div>
          <img className='Queue-img' src={queue} alt="indian council" />
          <div className='Queue-content'>
            <p className='Queue-describe'>Queue is the ACM’s magazine for practicing software engineers. Written by engineers for engineers, Queue focuses on the technical problems and challenges that loom ahead, helping readers to sharpen their own thinking and pursue innovative solutions. Queue does not focus on either industry news or the latest “solutions.” Rather, Queue takes a critical look at current and emerging technologies, highlighting problems that are likely to arise and posing questions that software engineers should be thinking about.</p>
          </div>
        </div>

        <div className='Elearn Indian-Council-animation-text'>
          <div className="Elearn-line"></div>
          <div className='heading'>
            <h2 className='Elearn-heading'>Explore Elearn Magazine</h2>
          </div>
          <img className='Elearn-img' src={elearn} alt="indian council" />
          <div className='Elearn-content'>
            <p className='Elearn-describe'>ELearn Magazine seeks to be the place where practice informs research and research informs practice. eLearn Magazine engages a broad set of readers to include readers interested in eLearning in higher education, K-12 educators (those interested in k-12 blended and online learning), corporate, government, not-for-profit, and non-profit. eLearn Magazine provides content for these audiences by publishing articles in specific context areas as well as content that is more general such as management, instructional design, emerging technologies, and instructor development.</p>
          </div>
        </div>

        <div className='Explore Indian-Council-animation-text'>
          <div className="Explore-line"></div>
          <div className='heading'>
            <h2 className='Explore-heading'>Explore xrds!</h2>
          </div>
          <img className='Explore-img' src={explore} alt="indian council" />
          <div className='Explore-content'>
            <p className='Explore-describe'>XRDS is the ACM’s magazine for students. It is published quarterly, both in print and online for ACM student members. The publication was previously named Crossroads and has been running since 1994, edited and maintained voluntarily by students.</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Resources;
