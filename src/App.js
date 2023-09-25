import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import HelloWorld from './js/HelloWorld';
// import Somameter from './js/Somameter';
// import ViewBillPage from './js/ViewBillPage';
// import Footer from './js/ViewBillPage';
// import Header from './js/header';
// import Tariff from './js/tariff';
// import Raiseticket from "./js/ticket";
// import Login from './js/login';


function App() {

    // const dummyCredentials = [
    //     { username: 'LKINYUA', password: '1234' },
    //     { username: 'MJOHNSON', password: '1234' },
    //     { username: 'OCLARK', password: '1234' },
    //     { username: 'WWANGU', password: '1234' },
    //     { username: 'SOMONDI', password: '1234' },
    //     { username: 'IWANJIRU', password: '1234' },
    //     { username: 'DJOHN', password: '1234' }

    // ];
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const [username, setUsername] = useState('');
    //const navigate = useNavigate();

    // const handleLogin = (enteredUsername, enteredPassword) => {
    //     // Check if the entered username and password match any dummy credentials
    //     const user = dummyCredentials.find(
    //         (cred) => cred.username === enteredUsername && cred.password === enteredPassword
    //     );

    //     if (user) {
    //         setIsLoggedIn(true);
    //         setUsername(enteredUsername);
    //     } else {
    //         // Failed login logic (e.g., show an error message)
    //         console.log('Login failed');
    //     }
    // };
  return (
      <Router>
        <Routes>
          <Route path="/" element={<HelloWorld/>} />
          {/*<Route path="/somameter" element={<Somameter/>} />*/}
          {/*<Route path="/viewbill" element={<ViewBillPage/>} />*/}
          {/*<Route path="/footer" element={<Footer/>} />*/}
          {/*<Route path="/header" element={<Header/>} />*/}
          {/*<Route path="/tariff" element={<Tariff/>} />*/}
          {/*<Route path="/raiseticket" element={<Raiseticket/>} />*/}
          {/*<Route*/}
          {/*    path="/login"*/}
          {/*    element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />}*/}

          {/*/>*/}

          {/*<Route*/}
          {/*    path="/dashboard"*/}
          {/*    element= {isLoggedIn ? <Dashboard username={username} /> :  <Navigate to="/login" /> }*/}
          {/*/>*/}

        </Routes>
      </Router>
  )
}

export default App;
