export default (values) => {
  const errors = {};
  
  const requiredFields = [
    'firstName',
    'lastName',
    'email',
  ];
  
  const membersArrayErrors = [];
  
  if (values.members) {
    values.members.forEach( (member, index) => {
        const memberErrors = {};
        requiredFields.forEach(requiredField => {
          if (!member[requiredField]) {
            memberErrors[requiredField] = 'Required';
            membersArrayErrors[index] = memberErrors;
          }
        })
      })
  }

  if (membersArrayErrors.length) {
    errors.members = membersArrayErrors;
  }

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });

  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }
  return errors;
}
