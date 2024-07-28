import React from 'react';
import '../Resources/Resources.css';

function Resources() {
  return (
    <section>

      <div className='Publication'>
        <div className='clearfix'>
          <div className='img-sec'></div>
          <div className="line"></div>
          <div className='Publication-text'>
            <h2>Publications</h2>
          </div>
          <div className='Publication-describe'>
            <p>For more than 60 years, the best and brightest minds in computing have come to ACM to meet, share ideas, publish their work and change the world. ACM’s publications are among the most respected and highly cited in the field…</p>
            <a href='https://services.acm.org/public/qj/proflevel/proflevel_control.cfm?level=3&country=India&form_type=Student&promo=LEVEL&pay=DD' target='_blank'><button className='link-button'>Become a Member</button></a>
          </div>
        </div>
      </div>

      <div className='Chapters'>
        <div className='clearfix'>
          <div className='img-sec'></div>
          <div className="line"></div>
          <div className='Chapters-text'>
            <h2>Chapters</h2>
          </div>
          <div className='Chapters-describe'>
            <p>ACM’s Professional and Student chapters worldwide serve as hubs of activity for ACM members and the computing community at large. They provide seminars, lectures, learning forums and networking opportunities with peers and experts across the computing spectrum…</p>
          </div>
        </div>
      </div>

      <div className='ACM-Queue'>
        <div className='clearfix'>
          <div className='img-sec'></div>
          <div className="line"></div>
          <div className='ACM-Queue-text'>
            <h2>ACM Queue</h2>
          </div>
          <div className='ACM-Queue-describe'>
            <p>Queue is the ACM’s magazine for practicing software engineers. Written by engineers for engineers, Queue focuses on the technical problems and challenges that loom ahead, helping readers to sharpen their own thinking and pursue innovative solutions. Queue does not focus on either industry news or the latest “solutions.” Rather, Queue takes a critical look at current and emerging technologies, highlighting problems that are likely to arise and posing questions that software engineers should be thinking about.</p>
          </div>
        </div>
      </div>

      <div className='Elearn'>
        <div className='clearfix'>
          <div className='img-sec'></div>
          <div className="line"></div>
          <div className='Elearn-text'>
            <h2>Explore Elearn Magazine</h2>
          </div>
          <div className='Elearn-describe'>
            <p>ELearn Magazine seeks to be the place where practice informs research and research informs practice. eLearn Magazine engages a broad set of readers to include readers interested in eLearning in higher education, K-12 educators (those interested in k-12 blended and online learning), corporate, government, not-for-profit, and non-profit. eLearn Magazine provides content for these audiences by publishing articles in specific context areas as well as content that is more general such as management, instructional design, emerging technologies, and instructor development.</p>
          </div>
        </div>
      </div>

      <div className='ACM-Queue'>
        <div className='clearfix'>
          <div className='img-sec'></div>
          <div className="line"></div>
          <div className='ACM-Queue-text'>
            <h2>Explore xrds!</h2>
          </div>
          <div className='ACM-Queue-describe'>
            <p>XRDS is the ACM’s magazine for students. It is published quarterly, both in print and online for ACM student members. The publication was previously named Crossroads and has been running since 1994, edited and maintained voluntarily by students.</p>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Resources;
