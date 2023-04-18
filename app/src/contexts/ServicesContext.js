import React, { createContext, useEffect, useState } from 'react';
import { node } from 'prop-types';
import { serviceListMock } from '../utils';

export const ServicesContext = createContext();

export function ServicesProvider({ children }) {
  const [filteredServiceList, setFilteredServiceList] = useState([]);
  const [newService, setNewService] = useState({});
  const [serviceList, setServiceList] = useState([...serviceListMock]);
  const [carPartList, setCarPartList] = useState([]);

  const filterServiceListByEmployee = (employee) => {
    console.log(serviceList);

    const newFilteredServiceList = serviceList.filter(
      (service) => service.employee === employee
    );

    setFilteredServiceList(newFilteredServiceList);
  };

  const filterServiceListByAll = () => {
    setFilteredServiceList([...serviceList]);
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
    carPartList,
    setCarPartList,
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
