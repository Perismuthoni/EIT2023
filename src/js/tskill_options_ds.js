import React, { Component } from 'react';
import Select from 'react-select';

class tskill_options_ds extends Component {
  state = {
    tskill_options_ds: [],
  };

  componentDidMount() {
    fetch('https://mest2024.onrender.com/tskillz')
      .then(response => response.json())
      .then(data => {
       
        const tskillsOptions = data.map(role => ({ value: role.ts_name, label: role.ts_name }));
  
        this.setState({ tskill_options_ds: tskillsOptions });
      })
      .catch(error => console.error('Error fetching roles:', error));
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
