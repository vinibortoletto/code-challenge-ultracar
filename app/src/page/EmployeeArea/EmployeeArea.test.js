import React from 'react';
import { act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../../utils/renderWithRouter';
import App from '../../App';

describe('Integration test for "EmployeeArea" page', () => {
  it('should render the "Header" component', () => {
    const { getByRole } = renderWithRouter(<App />, '/employee/area');
    expect(getByRole('banner')).toBeInTheDocument();
  });

  it('should render a greeting with the logged employee name', () => {
    const { getByLabelText, getByRole } = renderWithRouter(
      <App />,
      '/employee/login'
    );

    act(() => {
      userEvent.type(getByLabelText('Nome do funcionário'), 'Fulano');
      userEvent.click(getByRole('button', { name: 'Entrar' }));
    });

    expect(getByRole('heading', { name: /olá, fulano/i })).toBeInTheDocument();
  });

  it('should render "new service" button', () => {
    const { getByRole } = renderWithRouter(<App />, '/employee/area');
    const button = getByRole('button', { name: 'Novo serviço' });
    expect(button).toBeInTheDocument();
  });

  it('should redirect to route "/employee/service/new" when "new service" button is clicked', () => {
    const { getByRole, history } = renderWithRouter(<App />, '/employee/area');
    const button = getByRole('button', { name: 'Novo serviço' });

    act(() => userEvent.click(button));
    const { pathname } = history.location;

    expect(pathname).toBe('/employee/service/new');
  });

  it('should render "service list" button', () => {
    const { getByRole } = renderWithRouter(<App />, '/employee/area');
    const button = getByRole('button', { name: 'Lista de serviços' });
    expect(button).toBeInTheDocument();
  });

  it('should redirect to route "/employee/service/all" when "service list" button is clicked', () => {
    const { getByRole, history } = renderWithRouter(<App />, '/employee/area');
    const button = getByRole('button', { name: 'Lista de serviços' });

    act(() => userEvent.click(button));
    const { pathname } = history.location;

    expect(pathname).toBe('/employee/service/all');
  });
});
