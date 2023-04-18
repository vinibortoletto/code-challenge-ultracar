import { ErrorMessage, Field } from 'formik';
import React from 'react';
import { string } from 'prop-types';

const TextField = ({ label, as, type, name, placeholder }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field type={type} as={as} name={name} placeholder={placeholder} />
      <p>
        <ErrorMessage name={name} />
      </p>
    </div>
  );
};

TextField.propTypes = {
  label: string.isRequired,
  as: string.isRequired,
  type: string.isRequired,
  name: string.isRequired,
  placeholder: string.isRequired,
};

export default TextField;
