import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';

export default class ControlledNameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  canBeSubmitted() {
    const { value } = this.state;
    return value.length > 3;
  }

  render() {
    const isEnable = this.canBeSubmitted();
    return (
      <form onSubmit={this.handleSubmit} style={
        {display: 'flex', height: '100vh', alignItems: 'center', justifyContent:'center', flexDirection: 'column'}
      }>
        <label>
          <TextField type="text" value={this.state.value} onChange={this.handleChange} label='Name' />
        </label>
          <Button type="submit" value="Submit" disabled={!isEnable}>Submit</Button>
      </form>
    );
  }
}
