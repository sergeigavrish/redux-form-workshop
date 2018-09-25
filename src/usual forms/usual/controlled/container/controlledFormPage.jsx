import React, { Component } from 'react';
import ControlledNameForm from '../components/controlled';
import DynamicForm from '../components/dynamicForm';

export default class ControlledFormPage extends Component {

  submit = values => {
    window.alert(JSON.stringify(values, null, 2));
  }

  render() {
    return (
      <div 
        style={{
          display: 'flex',
          height: '100vh',
          justifyContent:'space-around',
        }}
      >
        <div style={{display: 'inherit', alignItems: 'center', justifyContent:'center', flexDirection: 'column'}} >
          <ControlledNameForm onSubmit={this.submit} />
        </div >
        <div style={{display: 'inherit', alignItems: 'center', justifyContent:'center', flexDirection: 'column'}}>
          <DynamicForm onSubmit={this.submit} />
        </div>
      </div>
    )
  }

}