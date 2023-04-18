import React from 'react';
import { act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../../utils/renderWithRouter';
import App from '../../App';

describe('Integration test for "ServiceList" page', () => {
  it('should render the "Header" component', () => {
    const { getByRole } = renderWithRouter(<App />, '/employee/service/all');
    expect(getByRole('banner')).toBeInTheDocument();
  });

  it('should render the "go back" button', () => {
    const { getByRole } = renderWithRouter(<App />, '/employee/service/all');
    expect(getByRole('button', { name: '< Voltar' })).toBeInTheDocument();
  });

  it('should redirect to route "/employee/area" when "go back" button is clicked', () => {
    const { getByRole, history } = renderWithRouter(
      <App />,
      '/employee/service/all'
    );
    const button = getByRole('button', { name: '< Voltar' });
    act(() => userEvent.click(button));
    const { pathname } = history.location;
    expect(pathname).toBe('/employee/area');
  });

  it('should render page title', () => {
    const { getByRole } = renderWithRouter(<App />, '/employee/service/all');
    expect(
      getByRole('heading', { name: 'Lista de serviços' })
    ).toBeInTheDocument();
  });

  it('should render radio input "my service" and "all services"', () => {
    const { getByRole } = renderWithRouter(<App />, '/employee/service/all');
    const filterEmployeeInput = getByRole('radio', { name: /meus serviços/i });
    const filterAllInput = getByRole('radio', {
      name: /todos os serviços/i,
    });
    expect(filterEmployeeInput).toBeInTheDocument();
    expect(filterAllInput).toBeInTheDocument();
  });

  it('should render a table with correct column headers', () => {
    const { getAllByRole } = renderWithRouter(<App />, '/employee/service/all');
    const columnHeaderList = getAllByRole('columnheader');

    const columnHeaderListMock = [
      'ID',
      'Status',
      'Cliente',
      'Funcionário',
      'Valor',
      'Início',
      'Término',
    ];

    columnHeaderList.forEach((columnHeader, index) => {
      expect(columnHeader).toHaveTextContent(columnHeaderListMock[index]);
    });
  });

  it('should render a table with all services', () => {
    const { getByRole } = renderWithRouter(<App />, '/employee/service/all');

    const input = getByRole('radio', {
      name: /todos os serviços/i,
    });

    act(() => userEvent.click(input));

    const trs = document.querySelectorAll('tbody tr');
    expect(trs.length).toBe(3);
  });

  it.skip('should render a table with services filtered by employee', () => {
    const { getByRole } = renderWithRouter(<App />, '/employee/service/all');

    const filterEmployeeInput = getByRole('radio', { name: /meus serviços/i });

    const filterAllInput = getByRole('radio', {
      name: /todos os serviços/i,
    });

    act(() => {
      userEvent.click(filterAllInput);
      userEvent.click(filterEmployeeInput);
    });

    const trs = document.querySelectorAll('tbody tr');
    expect(trs.length).toBe(2);
  });
});
