import React, { useState } from 'react';

import '../css/login.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dummyUsers = [
    { id: 1, username: 'sam', password: '1234' },
    { id: 2, username: 'son', password: '1234' },
    // Add more users as needed
  ];

  const handleLogin = (e) => {

    console.log(username);
    console.log(password);

    e.preventDefault();
    // Find the user with the provided username
    const user = dummyUsers.find((user) => user.username === username);

    if (user && user.password === password) {
      onLogin(user); // Pass the authenticated user to the parent component
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <h2 className="login-title">Log in</h2>
        <form >
          <input
            type="text"
            name="username"
            placeholder="Email"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="password"
            type="submit"

            onClick={(e) => handleLogin(e)}
            value="Log in"
          />

  


        </form>
      </div>
    </div>
  );
};
export default Login;
