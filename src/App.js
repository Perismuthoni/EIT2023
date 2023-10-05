import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import './App.css';
import Login from './js/login';
import LandingPage from './js/landing';
import LandingPagee from './js/landing';
import Eitview from './js/eitview';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (authenticatedUser) => {
    setUser(authenticatedUser);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="/landing" /> : <Navigate to="/login" />} // Use the Navigate component for redirection
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/landing"
          element={
            user ? (
              <LandingPage user={user} onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" />
            )
          } // Redirect to login if not authenticated
        />

       <Route path="/" element={<Login />} />
        <Route path="/landingg" element={<LandingPagee />} /> 
        <Route path="/eit" element={<Eitview />} /> 
      </Routes>
    </Router>
  );
}

export default App;
