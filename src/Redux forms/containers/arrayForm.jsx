import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import renderTextField from '../components/customTextField';
import { Button } from '@material-ui/core';
import validate from '../validate';

const renderMembers = ({ fields }) => (
  <ul>
    <Button onClick={() => fields.push({})}>Add</Button>
    {fields.map((member, index) => (
      <li key={index} style={{
        listStyleType: 'none'
      }}>
        <Button onClick={() => fields.remove(index)} >Remove</Button>
        <h4>Member {index + 1}</h4>
        <Field
          name={`${member}.firstName`}
          type='text'
          component={renderTextField}
          label='First Name'
        />
        <Field
          name={`${member}.lastName`}
          type='text'
          component={renderTextField}
          label='Last Name'
        />
      </li>
    ))}
  </ul>
);

let ArrayForm = ({ handleSubmit, pristine, reset, submitting }) => (
  <form onSubmit={handleSubmit}>
    <FieldArray name="members" component={renderMembers}/>
    <div>
      <Button disabled={submitting} type="submit" >Submit</Button>
      <Button disabled={pristine || submitting} onClick={reset}>Clear</Button>
    </div>
  </form>
)


ArrayForm = reduxForm({
  form: 'arrayForm',
  validate
})(ArrayForm);

export default ArrayForm;