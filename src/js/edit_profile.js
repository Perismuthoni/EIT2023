import React, { useState } from 'react';
import ImageUpload from './image_upload';
import SkillDropdown from './skill_options_ds';
import RoleDropdown from './role_options_ds';
import TskillDropdown from './tskill_options_ds';

import '../css/edit_profile.css';
import mest_logo from '../images/mest_logo.png';

function edit_profile() {
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    funfact: '',
    skills: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSkillsChange = (selectedSkills) => {
    setFormData({
      ...formData,
      skills: selectedSkills,
    });
  };

  return (
    <div className="profile-editor">
      <p>Edit Profile</p>
      <ImageUpload />
      <form>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Country:</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleInputChange}
          >
            {/* Render the country options dynamically */}
          </select>
        </div>
        <div className="form-group">
          <label>Fun Fact:</label>
          <textarea
            name="funfact"
            value={formData.funfact}
            onChange={handleInputChange}
          />
        </div>


        <div className="form-group">
          <label>Skills:</label>
          <SkillDropdown
            selectedSkills={formData.skills}
            onSkillsChange={handleSkillsChange}
          />
        </div>

        <div className="form-group">
          <label>Skills:</label>
          <RoleDropdown
            selectedSkills={formData.skills}
            onSkillsChange={handleSkillsChange}
          />
        </div>

        <div className="form-group">
          <label>Skills:</label>
          <
            selectedSkills={formData.skills}
            onSkillsChange={handleSkillsChange}
          />
        </div>



        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default edit_profile;
