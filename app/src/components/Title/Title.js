import React from 'react';
import { string } from 'prop-types';

const Title = ({ text }) => {
  return <h1>{text}</h1>;
};

Title.propTypes = {
  text: string.isRequired,
};

export default Title;
