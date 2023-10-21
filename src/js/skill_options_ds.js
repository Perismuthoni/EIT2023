import React, { Component } from 'react';
import Select from 'react-select';

class skill_options_ds extends Component {
  state = {
    skill_options_ds: [
        { value: 'option1', label: 'marketing' },
        { value: 'option2', label: 'front-end ' },
        { value: 'option3', label: 'backend-end ' },
        { value: 'option4', label: 'product-management ' },
    ], // Change the name here
  };

  // Fetch skills from a remote store and set them in the state
  componentDidMount() {
    // Fetch skills and update this.state.skill_options_ds
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
