import React, { useState } from 'react';

import '../css/home.css';
import Login from './login';

import mest_logo from '../images/mest_logo.png';

function LandingPage() {
  // const [loggedInUser, setLoggedInUser] = useState(null);

  // const handleLogin = (user) => {
  //   // Handle the login logic in the parent component
  //   setLoggedInUser(user);
  //   console.log('Authenticated user:', user);
  // };

  const dummyuserdetails = [
    {
      username: 'PERIS',
      fullname: 'PERIS MUTHONI MURIUKI',
      imageurl: '../images/taarif.jpeg',
      nationality: 'Kenyan',
    },
    {
      username: 'ROY',
      fullname: 'ROY  Junior Ricardo MOHUBU ',
      imageurl: '../images/complaint.jpeg',
      nationality: 'Botswana',
    },
    {
      username: 'RAWK',
      fullname: 'Rawk Akanni',
      imageurl: '../images/mest_logo.png',
      nationality: 'Kenyan',
    },
    {
      username: 'XARRI',
      fullname: 'Randy George',
      imageurl: '../images/taarif.jpeg',
      nationality: 'Kenyan',
    },
    {
      username: 'COURTNEY',
      fullname: 'Courtney Letsa',
      imageurl: '../images/complaint.jpeg',
      nationality: 'Kenyan',
    },
    {
      username: 'DELIGHT',
      fullname: 'DELIGHT DAVID ',
      imageurl: '../images/mest_logo.png',
      nationality: 'Botswana',
    },
  ];

  const [UserDataIsVisible, setUserDataIsVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState('');
  const [selectedUserDetails, setSelectedUserDetails] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value.trim().toUpperCase());
  };

  const handlesearch = () => {
    // Check if the input value matches any username in dummyuserdetails
    const foundUser = dummyuserdetails.find(
      (data) => data.username === inputValue
    );

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

  return (
    <div className="landing_page">
      <nav className="navbar">
        <div className="landing_title">Homepage</div>

        <div className="user-profile-icon">
          <img src="" alt="" />
          {/* <span> {loggedInUser.username} </span> */}
        </div>

        <div className="user_icon">
          <img className="logo" src={mest_logo} alt="logo" />
        </div>
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
        </button>
      </div>

      <div className="filters">
        <span>
          Filter by
          <button>COUNTRY</button>
          <button>COUNTRY</button>
          <button>COUNTRY</button>
          <button>COUNTRY</button>
          <button>COUNTRY</button>
        </span>{' '}
      </div>

      <div className="list-container">
        {dummyuserdetails.map((eit, index) => (
          <div
            key={index}
            onClick={() => handleUserClick(eit)}
            className="user-list-item"
          >
            <img className="eit_image" src={eit.imageurl} alt="Profile" />

            <p>
              {' '}
              {eit.username} || {eit.nationality}{' '}
            </p>
          </div>
        ))}
      </div>

      <div>
        {UserDataIsVisible && (
          <div>
            <div className="detailed_container">
              <button className="back_button"> Back</button>
              {/* <button className="back_button" onClick={handleexit} > Back</button> */}
              <img src={selectedUser.imageurl} alt="Profile" />
              <p> Name {selectedUser.fullname}</p>
              <p>{selectedUser.nationality}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LandingPage;
