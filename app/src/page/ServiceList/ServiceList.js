import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'antd';
import { EmployeeContext, ServicesContext } from '../../contexts';
import { GoBackButton, HorizontalLine, Title } from '../../components';
import * as S from './ServiceList.styles';

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
      <GoBackButton />

      <Title text="Lista de serviços" />
      <HorizontalLine />

      <S.FilterFields>
        <div>
          <input
            type="radio"
            name="filter"
            value={filterOptions.employee}
            id={filterOptions.employee}
            checked={filter === filterOptions.employee}
            onChange={handleInputChange}
          />
          <label htmlFor={filterOptions.employee}>Meus serviços</label>
        </div>

        <div>
          <input
            type="radio"
            name="filter"
            value={filterOptions.all}
            id={filterOptions.all}
            checked={filter === filterOptions.all}
            onChange={handleInputChange}
          />
          <label htmlFor={filterOptions.all}>Todos os serviços</label>
        </div>
      </S.FilterFields>

      <Table dataSource={filteredServiceList} columns={columns} />
    </section>
  );
};

export default ServiceList;
