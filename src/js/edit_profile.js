import React, { useEffect, useState } from 'react';
import ImageUpload from './image_upload';
import SkillDropdown from './skill_options_ds';
import RoleDropdown from './role_options_ds';
import TskillDropdown from './tskill_options_ds';

import '../css/edit_profile.css';
//import mest_logo from '../images/mest_logo.png';

function editProfile() {
  const [formData, setFormData] = useState({
    username: '',
    full_name:'',
    country: '',
    whatsapp_no:'',
    secondary_mobile:'',
    funfact: '',
    skills: [],
    roles: [],
    tskills: []
  });

  const [countryOptions, setCountryOptions] = useState([
    { id: '1', name: 'Algeria' },
    { id: '2', name: 'Angola' },
    { id: '3', name: 'Benin' },
    { id: '4', name: 'Botswana' },
    { id: '5', name: 'Burkina Faso' },
    { id: '6', name: 'Burundi' },
    { id: '7', name: 'Cabo Verde' },
    { id: '8', name: 'Cameroon' },
    { id: '9', name: 'Central African Republic' },
    { id: '10', name: 'Chad' },
    { id: '11', name: 'Comoros' },
    { id: '12', name: 'Congo' },
    { id: '13', name: 'Cote d Ivoire' },
    { id: '14', name: 'Djibouti' },
    { id: '15', name: 'Egypt' },
    { id: '16', name: 'Equatorial Guinea' },
    { id: '17', name: 'Eritrea' },
    { id: '18', name: 'Eswatini' },
    { id: '19', name: 'Ethiopia' },
    { id: '20', name: 'Gabon' },
    { id: '21', name: 'Gambia' },
    { id: '22', name: 'Ghana' },
    { id: '23', name: 'Guinea' },
    { id: '24', name: 'Guinea-Bissau' },
    { id: '25', name: 'Kenya' },
    { id: '26', name: 'Lesotho' },
    { id: '27', name: 'Liberia' },
    { id: '28', name: 'Libya' },
    { id: '29', name: 'Madagascar' },
    { id: '30', name: 'Malawi' },
    { id: '31', name: 'Mali' },
    { id: '32', name: 'Mauritania' },
    { id: '33', name: 'Mauritius' },
    { id: '34', name: 'Morocco' },
    { id: '35', name: 'Mozambique' },
    { id: '36', name: 'Namibia' },
    { id: '37', name: 'Niger' },
    { id: '38', name: 'Nigeria' },
    { id: '39', name: 'Rwanda' },
    { id: '40', name: 'Sao Tome and Principe' },
    { id: '41', name: 'Senegal' },
    { id: '42', name: 'Seychelles' },
    { id: '43', name: 'Sierra Leone' },
    { id: '44', name: 'Somalia' },
    { id: '45', name: 'South Africa' },
    { id: '46', name: 'South Sudan' },
    { id: '47', name: 'Sudan' },
    { id: '48', name: 'Tanzania' },
    { id: '49', name: 'Togo' },
    { id: '50', name: 'Tunisia' },
    { id: '51', name: 'Uganda' },
    { id: '52', name: 'Zambia' },
    { id: '53', name: 'Zimbabwe' },
    // Add more countries as needed
  ]);
  



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

  const handleRolesChange = (selectedRoles) => {
    setFormData({
      ...formData,
      roles: selectedRoles,
    });
  };

  const handleTskillsChange = (selectedTskills) => {
    setFormData({
      ...formData,
      tskills: selectedTskills,
    });
  };

  

  



  return (
    <div className="profile-editor">
    
<div> </div>

      <ImageUpload />


      <form className='profile-form' >
        <div className="form-group">
          <label>Preferred name</label>
          <input
            type="text"
            name= "username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="please input your preferred name"
          />
        </div>

        <div className="form-group">
          <label>Fullname:</label>
          <input
            type="text"
            name="full_name"
            value={formData.full_name}
            onChange={handleInputChange}
            placeholder="please input your full name"
          />
        </div>

        <div className="form-group">
          <label>Country:</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleInputChange}
          >
       <option value="">Select a country</option>
    {countryOptions.map((country) => (
      <option key={country.id} value={country.id}>
        {country.name}
      </option>
    ))}

          </select>
        </div>


        <div className="form-group">
          <label>Primary contact no</label>
          <input
            type="text"
            name="whatsapp_no"
            value={formData.whatsapp_no}
            onChange={handleInputChange}
            placeholder="Preferrable your whatsapp number"
          />
        </div>


        <div className="form-group">
          <label>Secondary contact no</label>
          <input
            type="text"
            name="secondary_mobile"
            value={formData.secondary_mobile}
            onChange={handleInputChange}
            placeholder="Any other number(optional)"
          />
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
          <SkillDropdown
            selectedSkills={formData.skills}
            onSkillsChange={handleSkillsChange}
          />
          
        </div>

        <div className="form-group">
          <RoleDropdown
            selectedRoles={formData.roles}
            onRolesChange={handleRolesChange}
          />
        </div>

        <div className="form-group">
          <TskillDropdown
           selectedTskills ={formData.tskills}
            onTskillsChange={handleTskillsChange}
          />
        </div>

<div className="form-submit">
<button c type="submit">Save</button>
</div>

        

      </form>
    </div>
  );
}

export default editProfile;
