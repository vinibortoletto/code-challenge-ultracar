import React from 'react';
import Header from './Header';
import { render } from '@testing-library/react';

describe('Unit test for "Header" component', function () {
  it('should render logo', () => {
    const { getByAltText, getByText } = render(<Header />);

    expect(getByAltText('ultracar-logo')).toBeInTheDocument();
    expect(getByText('Sair')).toBeInTheDocument();
  });

  it.todo('should render a logout button');
});
