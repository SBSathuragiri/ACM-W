import React from 'react';
import '../theBoard/board.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedinIn, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Sponcer = [
    {
        name: 'Dr.P.Anitha',
        clubposition: 'Faculty Sponcer',
        image: require('../../assets/Anitha.jpg'),
        position: 'Associate Professor',
        bio: 'Kalasalingam Academy of Research and Education.',
        linkedin: 'https://www.linkedin.com/in/dr-anitha-ponraj-a0661a283/',
    },
];

const coordinator = [
    {
        name: 'Mrs.A.M.Gurusigaamani',
        clubposition: 'Faculty Coordinator',
        image: require('../../assets/GURUSIGAAMANI.JPG'),
        position: 'Assistant Professor',
        bio: 'Kalasalingam Academy of Research and Education.',
        linkedin: 'https://www.linkedin.com/in/gurusigaamani-a-m-60928489/',
    },
    {
        name: 'Mrs.N.Kardeepa',
        clubposition: 'Faculty Coordinator',
        image: require('../../assets/P.Kardeepa.jpg'),
        position: 'Assistant Professor',
        bio: 'Kalasalingam Academy of Research and Education',
        linkedin: 'https://www.linkedin.com/in/',
    },
];

const Students = [
    {
        name: 'P.Lohitha Lakshmi',
        clubposition: 'Chair',
        image: require('../../assets/P-LOHITHA-LAKSHMI.png'),
        position: 'Student',
        bio: 'Kalasalingam Academy of Research and Education.',
        linkedin: 'https://www.linkedin.com/in/',
    },
    {
        name: 'Pranaya',
        clubposition: 'Vice Chair',
        // image: require('../../assets/'),
        position: 'Student',
        bio: 'Kalasalingam Academy of Research and Education',
        linkedin: 'https://www.linkedin.com/in/pranaya-subramani-164670268/',
    },
    {
        name: 'S.Sandhiya',
        clubposition: 'Secretary',
        image: require('../../assets/Sandhiya-S.jpg'),
        position: 'Student',
        bio: 'Kalasalingam Academy of Research and Education.',
        linkedin: 'https://www.linkedin.com/in/sandhiya-s-1409b7262/',
    },
    {
        name: 'Ailu Gowthami',
        clubposition: 'Membership Chair',
        image: require('../../assets/Ailu-Gowthami.jpg'),
        position: 'Student',
        bio: 'Kalasalingam Academy of Research and Education',
        linkedin: 'https://www.linkedin.com/in/ailu-gowthami-464629251/',
    },
    {
        name: 'D.Aashritha',
        clubposition: 'Treasure',
        image: require('../../assets/D.Aashritha.jpg'),
        position: 'Student',
        bio: 'Kalasalingam Academy of Research and Education',
        linkedin: 'https://www.linkedin.com/in/aashritha-danthala/',
    },
];

const webdevelopment = [
    {
        name: 'P.Thavamani',
        clubposition: 'web developer',
        image: '../../assets/acm-logo.png',
        position: 'Student',
        bio: 'Kalasalingam Academy of Research and Education.',
        linkedin: 'https://www.linkedin.com/in/',
    },
    {
        name: 'S.B.Sathuragiri',
        clubposition: 'Web developer',
        image: '../../assets/acm-logo.png',
        position: 'Student',
        bio: 'Kalasalingam Academy of Research and Education',
        linkedin: 'https://www.linkedin.com/in/',
    },
    {
        name: 'alan Mechanzie',
        clubposition: 'Web developer',
        image: '../../assets/acm-logo.png',
        position: 'Student',
        bio: 'Kalasalingam Academy of Research and Education.',
        linkedin: 'https://www.linkedin.com/in/',
    },
];

const eventMaster = [
    {
        name: 'nagasai venkatesh',
        clubposition: 'Event Coordinator',
        image: '../../assets/acm-logo.png',
        position: 'Student',
        bio: 'Kalasalingam Academy of Research and Education',
        linkedin: 'https://www.linkedin.com/in/',
    },
    {
        name: 'M.Gokul Reddy',
        clubposition: 'Event Coordinator',
        image: '../../assets/acm-logo.png',
        position: 'Student',
        bio: 'Kalasalingam Academy of Research and Education.',
        linkedin: 'https://www.linkedin.com/in/',
    },
    {
        name: 'rishika',
        clubposition: 'Event Coordinator',
        image: '../../assets/acm-logo.png',
        position: 'Student',
        bio: 'Kalasalingam Academy of Research and Education',
        linkedin: 'https://www.linkedin.com/in/',
    },
    {
        name: 'harshavardhan',
        clubposition: 'Event Coordinator',
        image: '../../assets/acm-logo.png',
        position: 'Student',
        bio: 'Kalasalingam Academy of Research and Education',
        linkedin: 'https://www.linkedin.com/in/',
    },
];

const UIUX = [
    {
        name: 'A.K.anith',
        clubposition: 'Designer',
        image: '../../assets/acm-logo.png',
        position: 'Student',
        bio: 'Kalasalingam Academy of Research and Education',
        linkedin: 'https://www.linkedin.com/in/',
    },
    {
        name: 'Adithya',
        clubposition: 'Designer',
        image: '../../assets/acm-logo.png',
        position: 'Student',
        bio: 'Kalasalingam Academy of Research and Education.',
        linkedin: 'https://www.linkedin.com/in/',
    },
    {
        name: 'karthikayen',
        clubposition: 'Designer',
        image: '../../assets/acm-logo.png',
        position: 'Student',
        bio: 'Kalasalingam Academy of Research and Education',
        linkedin: 'https://www.linkedin.com/in/',
    },
    {
        name: 'Muppidi Jagruthi',
        clubposition: 'Designer',
        image: '../../assets/acm-logo.png',
        position: 'Student',
        bio: 'Kalasalingam Academy of Research and Education',
        linkedin: 'https://www.linkedin.com/in/',
    },
];

function Board() {
    return (
        <div className="board">
            <h1>Faculty Sponcer</h1>
            <div className="board-members">
                {Sponcer.map((member, index) => (
                    <div key={index} className="board-member">
                        <div className="member-photo" style={{ backgroundImage: `url(${member.image})` }}></div>
                        <div className="member-info">
                            <h2 className="member-name">{member.name}</h2>
                            <h4 className="member-position">{member.clubposition}</h4>
                            {/* <h3 className="member-position">{member.position}</h3> */}
                            <p className="member-bio">{member.bio}</p>
                            <div className="connect">
                                <a href={member.linkedin} target='_blank'><FontAwesomeIcon icon={faLinkedinIn} /></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="board">
                <h1>Faculty Coordinator</h1>
                <div className="board-members">
                    {coordinator.map((member, index) => (
                        <div key={index} className="board-member">
                            <div className="member-photo" style={{ backgroundImage: `url(${member.image})` }}></div>
                            <div className="member-info">
                                <h2 className="member-name">{member.name}</h2>
                                <h4 className="member-position">{member.clubposition}</h4>
                                <h3 className="member-position">{member.position}</h3>
                                <p className="member-bio">{member.bio}</p>
                                <div className="connect">
                                    <a href={member.linkedin} target='_blank'><FontAwesomeIcon icon={faLinkedinIn} /></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="board">
                <h1>Officials</h1>
                <div className="board-members">
                    {Students.map((member, index) => (
                        <div key={index} className="board-member">
                            <div className="member-photo" style={{ backgroundImage: `url(${member.image})` }}></div>
                            <div className="member-info">
                                <h2 className="member-name">{member.name}</h2>
                                <h4 className="member-position">{member.clubposition}</h4>
                                {/* <h3 className="member-position">{member.position}</h3> */}
                                <p className="member-bio">{member.bio}</p>
                                <div className="connect">
                                    <a href={member.linkedin} target='_blank'><FontAwesomeIcon icon={faLinkedinIn} /></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>


    );
}

export default Board;
