import React from 'react';
import '../css/eitview.css';
import mest_logo from '../images/mest_logo.png';

function eitview() {
  return (
    <div>
      <div className="eit-container">
        <div className="column-left">
          <img className="eit_image" src={mest_logo} alt="Profile" />
          <p>user 4</p>
        </div>
        <div className="column-right">
          <div className="skills">
            <span>
              <h2>Skills</h2>
              <button>COUNTRY</button>
              <button>COUNTRY</button>
              <button>COUNTRY</button>
              <button>COUNTRY</button>
              <button>COUNTRY</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default eitview;
