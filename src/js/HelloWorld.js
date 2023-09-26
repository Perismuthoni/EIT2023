import React, { useState } from 'react';

import '../css/home.css';

import mest_logo from '../images/mest_logo.png';

function HelloWorld() {
  const dummyuserdetails = [
    {
      username: 'PERIS',
      fullname: 'PERIS MUTHONI MURIUKI',
      imageurl: '../images/complaint.jpeg',
      nationality: 'Kenyan',
    },
    {
      username: 'ROY',
      fullname: 'ROY  Junior Ricardo MOHUBU ',
      imageurl: '../images/complaint.jpeg',
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

  const handleUserClick = (user) => {
    setUserDataIsVisible(true);
    setSelectedUser(user);
  };
  handleexit

  return (
    <div>
      <nav className="navbar">
        <div className="nav-logo">
          {' '}
          <img className="logo" src={mest_logo} alt="logo" />
        </div>
        <ul className="nav-links">
          <li>MEST CLASS OF 2023</li>
        </ul>
        <div className="search-bar">
          <input type="text" placeholder="Search..." value={inputValue}
              onChange={handleInputChange} />
          <button  type="submit"
              onClick={handlesearch}>Search</button>
        </div>
      </nav>

      <div className="list-container">
        {dummyuserdetails.map((user, index) => (
          <div
            key={index}
            onClick={() => handleUserClick(user)}
            className="user-list-item"
          >
            <img src={user.imageurl} alt="Profile" />
            <p>Name : {user.username}</p>
            <p>Country: {user.nationality}</p>
          </div>
        ))}
      </div>

      <div>
    

        {UserDataIsVisible && (
          <div>
            <div className="detailed_container">
              <button className="back_button" onClick={handleexit} > Back</button>
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

export default HelloWorld;
