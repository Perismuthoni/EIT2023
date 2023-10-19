import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import '../css/home.css';

import mest_logo from '../images/mest_logo.png';
import gmail from '../images/gmailicon.png';
import whatsapp from '../images/whatsappicon.jpeg';

function LandingPage() {
  // const [loggedInUser, setLoggedInUser] = useState(null);

  // const handleLogin = (user) => {
  //   // Handle the login logic in the parent component
  //   setLoggedInUser(user);
  //   console.log('Authenticated user:', user);
  // };

  const [UserDataIsVisible, setUserDataIsVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState('');
  const [selectedUserDetails, setSelectedUserDetails] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [userDetails, setUserDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const userdetailss = [
    {
      username: 'PERIS',
      fullname: 'PERIS MUTHONI MURIUKI',
      imageurl: '../images/taarif.jpeg',
      nationality: 'Kenyan',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Python'],
      roles: ['CEO', 'CTO', 'CPO', 'NONE', 'OTHER', 'ANY'],
      tskills: ['JAVA', 'PITCHING', 'JavaScript', 'Angular', 'Java', 'Spring'],
    },
    {
      username: 'ROY',
      fullname: 'ROY  Junior Ricardo MOHUBU ',
      imageurl: '../images/complaint.jpeg',
      nationality: 'Botswana',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Python'],
      roles: ['HTML', 'CSS', 'JavaScript', 'Angular', 'Java', 'Spring'],
      tskills: ['HTML', 'CSS', 'JavaScript', 'Angular', 'Java', 'Spring'],
    },
    {
      username: 'RAWK',
      fullname: 'Rawk Akanni',
      imageurl: '../images/mest_logo.png',
      nationality: 'Kenyan',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Python'],
      roles: ['HTML', 'CSS', 'JavaScript', 'Angular', 'Java', 'Spring'],
      tskills: ['HTML', 'CSS', 'JavaScript', 'Angular', 'Java', 'Spring'],
    },
    {
      username: 'XARRI',
      fullname: 'Randy George',
      imageurl: '../images/taarif.jpeg',
      nationality: 'Kenyan',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Python'],
      roles: ['HTML', 'CSS', 'JavaScript', 'Angular', 'Java', 'Spring'],
      tskills: ['HTML', 'CSS', 'JavaScript', 'Angular', 'Java', 'Spring'],
    },
    {
      username: 'COURTNEY',
      fullname: 'Courtney Letsa',
      imageurl: '../images/complaint.jpeg',
      nationality: 'Kenyan',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Python'],
      roles: ['HTML', 'CSS', 'JavaScript', 'Angular', 'Java', 'Spring'],
      tskills: ['HTML', 'CSS', 'JavaScript', 'Angular', 'Java', 'Spring'],
    },
    {
      username: 'DELIGHT',
      fullname: 'DELIGHT DAVID ',
      imageurl: '../images/mest_logo.png',
      nationality: 'Botswana',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Python'],
      roles: ['HTML', 'CSS', 'JavaScript', 'Angular', 'Java', 'Spring'],
      tskills: ['HTML', 'CSS', 'JavaScript', 'Angular', 'Java', 'Spring'],
    },
  ];

  useEffect(() => {
    fetch('https://mest2024.onrender.com/eits')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const filteredData = data.map((eit) => ({
          username: eit.username,
          email: eit.email,
          gender: eit.gender,
          country: eit.country,
          skills: eit.skills,
          roles: eit.roles,
          tskills: eit.tskills,
          image_url: eit.image_url,
        }));

        setUserDetails(filteredData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value.trim().toUpperCase());
  };

  const handlesearch = () => {
    const foundUser = userDetails.find((data) => data.username === inputValue);

    if (foundUser) {
      setUserDataIsVisible(true);
      setSelectedUser(foundUser);
    } else {
      setUserDataIsVisible(false);
      setSelectedUser('');
    }
  };

  const handleUserClick = (eit) => {
    setUserDataIsVisible(true);
    setSelectedUser(eit);
  };

  const handleexitClick = (eit) => {
    setUserDataIsVisible(false);
    setSelectedUser(null);
  };

  return (
    <div className="landing_page">
      <nav className="navbar">
        {/* <div className="landing_title">Akwaba</div> */}

        <div className="user-profile-icon">
          <img src="" alt="" />
          {/* <span> {loggedInUser.username} </span> */}
        </div>

        <div className="user_icon">
          <img className="logo" src={mest_logo} alt="logo" />
        </div>

<a href='/profile_edit'> 
<FontAwesomeIcon icon={faCog} className="setting-icon" />
   </a>


      </nav>

      <hr className="divider"></hr>

      <div className="search-bar">
        <input
          type="text"
          placeholder="who are you looking for ?"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit" onClick={handlesearch}>
          {' '}
          search
        </button>
      </div>

      <div className="filters">
        <span>
          Filter by
          <button>COUNTRY</button>
          <button>SKILL</button>
          <button>ROLE</button>
          <button>NAME</button>
          <button>COUNTRY</button>
        </span>{' '}
      </div>

      <div className="list-container">
        {userDetails.map((eit, index) => (
          <div
            key={index}
            onClick={() => handleUserClick(eit)}
            className="user-list-item"
          >
            <img
              className="eit_image"
             src={`${eit.image_url}`}
              // src='https://drive.google.com/uc?export=view&id=126xnVgIBi9_gGtf62gIdx9JKpfo7ThQR'
             alt={`${eit.username}'s Profile`}
            />

            <p>
              {' '}
              {eit.username} || {eit.country}{' '}
            </p>
          </div>
        ))}
      </div>

      <div>
        {UserDataIsVisible && (
          <div>
            <div className="detailed_container">
              {/* <button className="back_button"> Back</button> */}
              {/* <button className="back_button" onClick={handleexit} > Back</button> */}

              <div className="column-left">
                <img
                  className="eit_image"
                  src={selectedUser.image_url}
                  alt="Profile"
                />
                <p>
                  {' '}
                  <h4> {selectedUser.username} </h4>{' '}
                </p>
                <p>{selectedUser.country}</p>

                <span> 
                  <img  
                  className="whatsapp"
                  src={whatsapp}
                  alt="whatsapp" />

<img  
                  className="gmail"
                  src={gmail}
                  alt="gmail" />
                 
                </span>
              </div>

              <div className="column-right">
                <div className="skills">
                  <h3>Skills</h3>
                  {selectedUser.skills
                    ? selectedUser.skills
                        .split(',')
                        .map((skill, skillIndex) => (
                          <button key={skillIndex}>{skill.trim()}</button>
                        ))
                    : 'No Skills Found'}
                </div>

                <div className="Role">
                  <h3>Roles</h3>
                  <div>
                    {selectedUser.roles
                      ? selectedUser.roles
                          .split(',')
                          .map((role, roleIndex) => (
                            <button key={roleIndex}>{role.trim()}</button>
                          ))
                      : 'No Roles Found'}
                  </div>
                </div>

                <div className="Teachable_skills">
                  <h3>Teachable Skills</h3>
                  <div>
                    {selectedUser.tskills
                      ? selectedUser.tskills
                          .split(',')
                          .map((tskill, tskillIndex) => (
                            <button key={tskillIndex}>{tskill.trim()}</button>
                          ))
                      : 'No Teachable Skills Found'}
                  </div>
                </div>

                <div>
                  <p>
                    {' '}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat
                  </p>
                </div>

                <button className="exit_button" onClick={handleexitClick}>
                  {' '}
                  Exit{' '}
                </button>

                <span className="exit_icon" onClick={handleexitClick}>
                  &times;
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LandingPage;
