import React from 'react';
import '../css/eitview.css';
import mest_logo from '../images/mest_logo.png';

function eitview({skills}) {

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

              {skills.map((skill, index) => (
          <button key={index}>{skill}</button>
        ))}
              <button>COUNTRY</button>
              <button>COUNTRY</button>
              <button>COUNTRY</button>
              <button>COUNTRY</button>
              <button>COUNTRY</button>
              <button>COUNTRY</button>
            </span>
          </div>

          <div className="Role">
            <span>
              <h2>Role</h2>
              <button>COUNTRY</button>
              <button>COUNTRY</button>
              <button>COUNTRY</button>
              <button>COUNTRY</button>
              <button>COUNTRY</button>
              <button>COUNTRY</button>
            </span>
          </div>


          <div className="Teachable_skills">
            <span>
              <h2>Teachable skills</h2>
              <button>COUNTRY</button>
              <button>COUNTRY</button>
              <button>COUNTRY</button>
              <button>COUNTRY</button>
              <button>COUNTRY</button>
              <button>COUNTRY</button>
            </span>
          </div>

<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
   sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>


<button>Book </button>

        </div>

      </div>
    </div>
  );
}

export default eitview;
