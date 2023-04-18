import React, { useContext } from 'react';
import { EmployeeContext } from '../../contexts';
import { useHistory } from 'react-router-dom';
import { Button } from '../../components';

const EmployeeArea = () => {
  const history = useHistory();
  const { employeeName } = useContext(EmployeeContext);

  return (
    <section>
      <div>
        <h1>Olá, {employeeName}</h1>
      </div>

      <div>
        <Button
          type="button"
          onClick={() => history.push('/employee/service/new')}
        >
          Novo serviço
        </Button>

        <Button
          type="button"
          onClick={() => history.push('/employee/service/all')}
        >
          Lista de serviços
        </Button>
      </div>
    </section>
  );
};

export default EmployeeArea;
