import React, { Component } from 'react';
import Select from 'react-select';

class tskill_options_ds extends Component {
  state = {
    tskill_options_ds: [
        { value: 'option1', label: 'Java ' },
        { value: 'option2', label: 'HTML ' },
        { value: 'option3', label: 'Canva ' },
        { value: 'option4', label: 'Adobe XD ' },

    ], // Change the name here
  };

  // Fetch skills from a remote store and set them in the state
  componentDidMount() {
    // Fetch skills and update this.state.skill_options_ds
  }

  render() {
    const { selectedTskills, onTskillsChange } = this.props;

    return (
        <div>
      <Select
        isMulti
        options={this.state.tskill_options_ds} // Update the reference to the state property
        value={selectedTskills}
        onChange={onTskillsChange}   
        placeholder="What skill can you teach a fellow EIT ?"
      />

      </div>
    );
  }
}

export default tskill_options_ds;
