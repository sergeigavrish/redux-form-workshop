import React, { Component } from 'react';
import ContactForm from './contactForm';
import ArrayForm from './arrayForm';

export default class FormPage extends Component {

  submit = values => {
    window.alert(JSON.stringify(values, null, 2));
  }

  render() {
    return (
      <div style={{
        display: 'flex', height: '100vh', alignItems: 'center', justifyContent:'center', flexDirection: 'column'
      }}>
        <h2>ReduxForms Example</h2>
        <div style={{
          display: 'inherit', alignItems: 'center', justifyContent:'center', flexDirection: 'row'
        }}>
          <ContactForm onSubmit={this.submit} />
          <ArrayForm onSubmit={this.submit} />
        </div>
      </div>
    )
  }

}