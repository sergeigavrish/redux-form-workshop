import React from 'react';
import { TextField } from '@material-ui/core';

const renderTextField = (
  { input, label, meta: { touched, error }, ...custom },
) => {
  return (
    <TextField
      label={label}
      error={touched && error}
      helperText={touched && error}
      {...input}
      {...custom}
    />
  )
}

export default renderTextField;
