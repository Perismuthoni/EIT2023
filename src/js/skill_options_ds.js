import React, { Component } from 'react';
import Select from 'react-select';

class skill_options_ds extends Component {


  state = {
    skill_options_ds: [],
  };

  componentDidMount() {
    fetch('https://mest2024.onrender.com/skills')
      .then(response => response.json())
      .then(data => {
       
        const skillOptions = data.map(skill => ({ value: skill.sname, label: skill.sname }));
  
        this.setState({ skill_options_ds: skillOptions });
      })
      .catch(error => console.error('Error fetching skills:', error));
  }
 
  render() {
    const { selectedSkills, onSkillsChange } = this.props;

    return (
        <div>
      <Select
        isMulti
        options={this.state.skill_options_ds} // Update the reference to the state property
        value={selectedSkills}
        onChange={onSkillsChange}   
        placeholder="What are your core skills ?"
      />

      </div>
    );
  }
}

export default skill_options_ds;
