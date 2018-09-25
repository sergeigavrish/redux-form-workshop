import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';

export default class UncontrolledNameForm extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.input.current.value);
    event.preventDefault();
  }

  focusInput = () => {
    this.input.current.focus();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={
        {display: 'flex', height: '100vh', alignItems: 'center', justifyContent:'center'}
      }>
        <input type="text" ref={this.input} placeholder='Name' />
        <input type="text" onClick={this.focusInput} placeholder='Name' />
        <Button type="submit" value="Submit">Submit</Button>
      </form>
    );
  }
}