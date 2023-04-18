import React, { createContext, useEffect, useState } from 'react';
import { node } from 'prop-types';
import { serviceListMock } from '../utils';

export const ServicesContext = createContext();

export function ServicesProvider({ children }) {
  const [filteredServiceList, setFilteredServiceList] = useState([]);
  const [newService, setNewService] = useState({});
  const [serviceList, setServiceList] = useState([]);

  const filterServiceListByEmployee = (employee) => {
    const newFilteredServiceList = serviceListMock.filter(
      (service) => service.employee === employee
    );

    setFilteredServiceList(newFilteredServiceList);
  };

  const filterServiceListByAll = () => {
    setFilteredServiceList([...serviceListMock]);
  };

  const getLocalServiceList = () => {
    const localServiceList = JSON.parse(localStorage.getItem('serviceList'));

    if (!localServiceList) {
      localStorage.setItem('serviceList', JSON.stringify(serviceList));
    }

    setServiceList(localServiceList);
  };

  const createNewService = (service) => {
    const newServiceList = [...serviceList, service];
    localStorage.setItem('serviceList', JSON.stringify(newServiceList));
    setNewService(service);
    setServiceList(newServiceList);
  };

  useEffect(() => {
    getLocalServiceList();
  }, []);

  const value = {
    filteredServiceList,
    filterServiceListByEmployee,
    filterServiceListByAll,
    newService,
    setNewService,
    serviceList,
    setServiceList,
    createNewService,
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
