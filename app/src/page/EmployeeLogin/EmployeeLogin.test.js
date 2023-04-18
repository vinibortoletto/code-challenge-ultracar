import React from 'react';
import { act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../../utils/renderWithRouter';
import App from '../../App';

describe('Integration test for "EmployeeLogin" page', () => {
  it('should redirect to route "/employee/login" when accessing route "/"', () => {
    const { history } = renderWithRouter(<App />, '/');
    const { pathname } = history.location;
    expect(pathname).toBe('/employee/login');
  });

  it('should render a logo', () => {
    const { getByAltText } = renderWithRouter(<App />, '/employee/login');
    expect(getByAltText('ultracar-logo')).toBeInTheDocument();
  });

  it('should render a label and text input', () => {
    const { getByLabelText } = renderWithRouter(<App />, '/employee/login');
    expect(getByLabelText('Nome do funcionário')).toBeInTheDocument();
  });

  it('should render a button', () => {
    const { getByText } = renderWithRouter(<App />, '/employee/login');
    const button = getByText('Entrar');
    expect(button).toBeInTheDocument();
    expect(button.type).toBe('submit');
  });

  it('should disable button if input is empty', () => {
    const { getByText } = renderWithRouter(<App />, '/employee/login');
    expect(getByText('Entrar')).toBeDisabled();
  });

  it('should be able to login', async () => {
    const { getByText, getByLabelText, history } = renderWithRouter(
      <App />,
      '/employee/login'
    );

    const input = getByLabelText('Nome do funcionário');
    const button = getByText('Entrar');

    act(() => {
      userEvent.type(input, 'Fulano');
      userEvent.click(button);
    });

    expect(history.location.pathname).toBe('/employee/area');
  });
});
