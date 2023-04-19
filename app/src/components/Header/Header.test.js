import React from 'react';
import { act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../../utils/renderWithRouter';
import App from '../../App';

describe('Unit test for "Header" component', function () {
  it('should render logo', () => {
    const { getByAltText, getByText } = renderWithRouter(
      <App />,
      '/employee/area'
    );

    expect(getByAltText('ultracar-logo')).toBeInTheDocument();
    expect(getByText('Sair')).toBeInTheDocument();
  });

  it('should render a logout button', () => {
    const { getByRole, history } = renderWithRouter(<App />, '/employee/area');
    const button = getByRole('button', { name: 'Sair' });

    act(() => userEvent.click(button));

    const { pathname } = history.location;
    expect(pathname).toBe('/employee/login');
  });
});
