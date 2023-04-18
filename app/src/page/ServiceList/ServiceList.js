import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Table } from 'antd';
import { EmployeeContext, ServicesContext } from '../../contexts';

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Cliente',
    dataIndex: 'client',
    key: 'client',
  },
  {
    title: 'Funcionário',
    dataIndex: 'employee',
    key: 'employee',
  },
  {
    title: 'Valor',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Início',
    dataIndex: 'startDate',
    key: 'startDate',
  },
  {
    title: 'Término',
    dataIndex: 'endDate',
    key: 'endDate',
  },
];

const ServiceList = () => {
  const history = useHistory();

  const { employeeName } = useContext(EmployeeContext);

  const {
    filteredServiceList,
    filterServiceListByEmployee,
    filterServiceListByAll,
  } = useContext(ServicesContext);

  const [filter, setFilter] = useState('filter-employee');

  const filterOptions = {
    employee: 'filter-employee',
    all: 'filter-all',
  };

  const handleInputChange = (event) => {
    const { value } = event.target;

    if (value === filterOptions.employee) {
      filterServiceListByEmployee(employeeName);
    }

    if (value === filterOptions.all) {
      filterServiceListByAll();
    }

    setFilter(value);
  };

  useEffect(() => {
    filterServiceListByEmployee(employeeName);
  }, [employeeName]);

  return (
    <section>
      <button
        type="button"
        onClick={() => history.push('/employee/area')}
      >{`< Voltar`}</button>

      <h1>Lista de serviços</h1>

      <div>
        <label htmlFor={filterOptions.employee}>
          <input
            type="radio"
            name="filter"
            value={filterOptions.employee}
            id={filterOptions.employee}
            checked={filter === filterOptions.employee}
            onChange={handleInputChange}
          />
          Meus serviços
        </label>

        <label htmlFor={filterOptions.all}>
          <input
            type="radio"
            name="filter"
            value={filterOptions.all}
            id={filterOptions.all}
            checked={filter === filterOptions.all}
            onChange={handleInputChange}
          />
          Todos os serviços
        </label>
      </div>

      <Table dataSource={filteredServiceList} columns={columns} />
    </section>
  );
};

export default ServiceList;