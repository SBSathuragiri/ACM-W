import React from 'react';
import '../theBoard/board.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedinIn, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const boardMembers = [
    {
        name: 'Dr. P.Deepalakshmi',
        clubposition: 'Chair',
        image: '../../assets/acm-logo.png',
        position: 'Dean/SOC & Director',
        bio: 'Kalasalingam Academy of Research and Education.',
        linkedin: 'https://www.linkedin.com/in/sathuragiri22',
    },
    {
        name: 'Mr.S.Sathyanarayanan',
        clubposition: 'Vice Chair',
        image: '../../assets/acm-logo.png',
        position: 'Senior Technical Specialist ',
        bio: 'HCL Technologies, Madurai.',
        linkedin: 'https://www.linkedin.com/in/sathuragiri22',
    },
    {
        name: 'Dr.N.Suresh Kumar',
        clubposition: 'Treasurer',
        image: '../../assets/acm-logo.png',
        position: 'HoD/CSE',
        bio: 'Kalasalingam Academy of Research and Education.',
        linkedin: 'https://www.linkedin.com/in/sathuragiri22',
    },
    {
        name: 'Dr.P.Nagaraj',
        clubposition: 'Secretary',
        image: '../../assets/acm-logo.png',
        position: 'Associate Professor',
        bio: 'Kalasalingam Academy of Research and Education.',
        linkedin: 'https://www.linkedin.com/in/sathuragiri22',
    },
    {
        name: 'Dr.P.Anitha',
        clubposition: 'Web Master',
        image: '../../assets/acm-logo.png',
        position: 'Associate Professor',
        bio: 'Kalasalingam Academy of Research and Education.',
        linkedin: 'https://www.linkedin.com/in/sathuragiri22',
    },
    {
        name: 'Mrs.S.Shanmugapriya',
        clubposition: 'Membership - Chair',
        image: '../../assets/acm-logo.png',
        position: 'Assistant Professor',
        bio: 'Kalasalingam Academy of Research and Education.',
        linkedin: 'https://www.linkedin.com/in/sathuragiri22',
    },
    {
        name: 'Mrs.N.Kirthiga',
        clubposition: 'Organizing Secretary',
        image: '../../assets/acm-logo.png',
        position: 'Assistant Professor',
        bio: 'Kalasalingam Academy of Research and Education',
        linkedin: 'https://www.linkedin.com/in/sathuragiri22',
    },
    {
        name: 'Mrs.S.Reshni',
        clubposition: 'Organizing Secretary',
        image: '../../assets/acm-logo.png',
        position: 'Assistant Professor',
        bio: 'Kalasalingam Academy of Research and Education',
        linkedin: 'https://www.linkedin.com/in/sathuragiri22',
    },
    {
        name: 'Mrs.B.Lavanya',
        clubposition: 'Organizing Secretary',
        image: '../../assets/acm-logo.png',
        position: 'Assistant Professor',
        bio: 'Kalasalingam Academy of Research and Education',
        linkedin: 'https://www.linkedin.com/in/sathuragiri22',
    },


];


function Board() {
    return (
        <div className="board">
            <div className="board-members">
                {boardMembers.map((member, index) => (
                    <div key={index} className="board-member">
                        <div className="member-photo" style={{ backgroundImage: `url(${member.image})` }}></div>
                        <div className="member-info">
                            <h2 className="member-name">{member.name}</h2>
                            <h4 className="member-position">{member.clubposition}</h4>
                            <h3 className="member-position">{member.position}</h3>
                            <p className="member-bio">{member.bio}</p>
                            <div className="connect">
                                {/* <span className="connect-text">Connect</span> */}
                                <a href={member.linkedin} target='_blank'><FontAwesomeIcon icon={faLinkedinIn} /></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Board;
