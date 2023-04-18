import React, { createContext, useEffect, useState } from 'react';
import { node } from 'prop-types';

export const EmployeeContext = createContext();

export function EmployeeProvider({ children }) {
  const [employeeName, setEmployeeName] = useState('');

  const getEmployeeFromLocalStorage = () => {
    const localEmployee = localStorage.getItem('employee');
    if (!localEmployee) return localStorage.setItem('employee', employeeName);
    setEmployeeName(localEmployee);
  };

  useEffect(() => {
    getEmployeeFromLocalStorage();
  }, []);

  const value = {
    employeeName,
    setEmployeeName,
  };

  return (
    <EmployeeContext.Provider value={value}>
      {children}
    </EmployeeContext.Provider>
  );
}

EmployeeProvider.propTypes = {
  children: node.isRequired,
};
