import React, { Component } from 'react';
import Select from 'react-select';

class role_options_ds extends Component {

  state = {
    role_options_ds: [],
  };

  componentDidMount() {
    fetch('https://mest2024.onrender.com/roles')
      .then(response => response.json())
      .then(data => {
       
        const roleOptions = data.map(role => ({ value: role.r_name, label: role.r_name }));
  
        this.setState({ role_options_ds: roleOptions });
      })
      .catch(error => console.error('Error fetching roles:', error));
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
