import React, { useState } from 'react';

import '../css/login.css';

function Login() {
  const [user, setUser] = useState({
    name: '',
    email: '',
  });
  return (
    <div className="login">
      <div className="login-container">
        <h2 className="login-title">Log in</h2>
        <form action="login_process.php" method="post">
          <input
            type="text"
            name="email"
            placeholder="Email"
            required
            value={user.name}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={user.email}
          />
          <input className="password" type="submit" value="Log in" />
        </form>
      </div>
    </div>
  );
}
export default Login;
