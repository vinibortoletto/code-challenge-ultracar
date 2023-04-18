import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { node } from 'prop-types';

export const EmployeeContext = createContext();

export function EmployeeProvider({ children }) {
  const [employeeName, setEmployeeName] = useState('');

  const getEmployeeFromLocalStorage = useCallback(() => {
    const localEmployee = localStorage.getItem('employee');
    if (!localEmployee) return localStorage.setItem('employee', employeeName);
    setEmployeeName(localEmployee);
  }, []);

  useEffect(() => {
    getEmployeeFromLocalStorage();
  }, []);

  const value = useMemo(
    () => ({
      employeeName,
      setEmployeeName,
    }),
    [employeeName, setEmployeeName]
  );

  return (
    <EmployeeContext.Provider value={value}>
      {children}
    </EmployeeContext.Provider>
  );
}

EmployeeProvider.propTypes = {
  children: node.isRequired,
};
