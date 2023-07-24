import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/login.css';

const Login = ({ onLogin, username }) => {

    const dummyCredentials = [
        { username: 'LKINYUA', password: '1234' },
        { username: 'MJOHNSON', password: '1234' },
        { username: 'OCLARK', password: '1234' },
        { username: 'WWANGU', password: '1234' },
        { username: 'SOMONDI', password: '1234' },
        { username: 'IWANJIRU', password: '1234' },
        { username: 'DJOHN', password: '1234' }

    ];

    const [enteredUsername, setEnteredUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleUsernameChange = (event) => {
        setEnteredUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = () => {
        onLogin(enteredUsername, password); // Pass the entered username and password to the onLogin prop
    };


    if (username) {
            navigate('/dashboard');
        } else {
            // Failed login logic (e.g., show an error message)
            console.log('Login failed');
        }





    return (
        <div>



            <div className="login-container">
                <h2>Login</h2>
                <form>
                    <div className="form-group">
                        <label>Username:</label>
                        <input type="text"
                               placeholder="Enter your username"
                               value={enteredUsername}
                               onChange={handleUsernameChange}/>
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input type="password"
                               placeholder="Enter your password"
                               value={password}
                               onChange={handlePasswordChange} />
                    </div>
                    <button type="submit" onClick={handleLogin}>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
