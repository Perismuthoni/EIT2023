import React, { Component } from 'react';
import Select from 'react-select';

class role_options_ds extends Component {
  state = {
   role_options_ds: [
        { value: 'option1', label: 'CEO' },
        { value: 'option2', label: 'CTO' },
        { value: 'option2', label: 'CFO' },
        { value: 'option2', label: 'CPO' },
    ], // Change the name here
  };

  // Fetch skills from a remote store and set them in the state
  componentDidMount() {
    // Fetch skills and update this.state.skill_options_ds
  }

  render() {
    const { selectedRoles, onRolesChange } = this.props;

    return (
        <div>
      <Select
        isMulti
        options={this.state.role_options_ds} // Update the reference to the state property
        value={selectedRoles}
        onChange={onRolesChange}   
        placeholder="What role/roles can you play in a startup?"
      />

      </div>
    );
  }
}

export default role_options_ds;
