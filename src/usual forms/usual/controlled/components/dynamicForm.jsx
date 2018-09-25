import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';

export default class DynamicForm extends Component {
  constructor() {
    super();
    this.state = {
      field: [{ name: '' }],
    };
  }
  
  handleChange = (element) => (event) => {
    const newField = this.state.field.map((field, sidx) => {
      if (element !== sidx) return field;
      return { ...field, name: event.target.value };
    });
    
    this.setState({ field: newField });
  }
  
  handleSubmit = () => {
    const { field } = this.state;
    window.alert(JSON.stringify(field, null, 2));
  }
  
  handleAdd = () => {
    this.setState({ field: this.state.field.concat([{ name: '' }]) });
  }
  
  handleRemove = (element) => () => {
    this.setState({ field: this.state.field.filter((item, index) => element !== index) });
  }
  
  render() {    
    return (
      <form onSubmit={this.handleSubmit}>
        {this.state.field.map((field, index) => (
          <div key={index}>
            <TextField
              type="text"
              placeholder={`Field número ${index + 1}`}
              value={field.name}
              onChange={this.handleChange(index)}
            />
            <Button type="button" onClick={this.handleRemove(index)} className="small">X</Button>
          </div>
        ))}
        <Button type="button" onClick={this.handleAdd} className="small">Add field</Button>
        <Button type='submit'>Submit</Button>
      </form>
    )
  }
}
