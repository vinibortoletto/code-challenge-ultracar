import React, { createContext, useState } from 'react';
import { node } from 'prop-types';
import { serviceListMock } from '../utils';

export const ServicesContext = createContext();

export function ServicesProvider({ children }) {
  const [filteredServiceList, setFilteredServiceList] = useState([]);
  const [newService, setNewService] = useState({});

  const filterServiceListByEmployee = (employee) => {
    const newFilteredServiceList = serviceListMock.filter(
      (service) => service.employee === employee
    );

    setFilteredServiceList(newFilteredServiceList);
  };

  const filterServiceListByAll = () => {
    setFilteredServiceList([...serviceListMock]);
  };

  const value = {
    filteredServiceList,
    filterServiceListByEmployee,
    filterServiceListByAll,
    newService,
    setNewService,
  };

  return (
    <ServicesContext.Provider value={value}>
      {children}
    </ServicesContext.Provider>
  );
}

ServicesProvider.propTypes = {
  children: node.isRequired,
};
