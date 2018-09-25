import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderTextField from '../components/customTextField';
import { Button } from '@material-ui/core';
import validate from '../validate';

let ContactForm = props => {
  console.log(props);
    const { handleSubmit, reset, pristine, submitting } = props;
    return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="firstName" component={renderTextField} label='First Name' type="text"/>
      </div>
      <div>
        <Field name="lastName" component={renderTextField} label='Last Name' type="text"/>
      </div>
      <div>
        <Field name="email" component={renderTextField} label='Email' type="email"/>
      </div>
      <Button type="submit">Submit</Button>
      <Button disabled={pristine || submitting} onClick={reset}>Clear</Button>
    </form>)
};

ContactForm = reduxForm({
  form: 'contact',
  validate
})(ContactForm);

export default ContactForm;