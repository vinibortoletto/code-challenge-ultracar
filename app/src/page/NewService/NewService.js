import React, { useContext } from 'react';
import { Button, GoBackButton, Title } from '../../components';
import ClientForm from './ClientForm/ClientForm';
import * as S from './NewService.styles';
import ServiceForm from './ServiceForm/ServiceForm';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { ServicesContext } from '../../contexts/ServicesContext';
import { EmployeeContext } from '../../contexts';
import { getCurrentDateAndTime } from '../../utils';

const requiredField = 'Campo obrigatório';
const phoneRegExp = /^[0-9]{10,11}$/;
const cepRegExp = /^\d{5}-\d{3}$/;
const carPlateRegExp = /^[a-zA-Z0-9]+$/;

const initialValues = {
  fullname: '',
  phone: '',
  cep: '',
  street: '',
  number: '',
  carModel: '',
  carPlate: '',
  carColor: '',
  serviceDescription: '',
  requireCarParts: false,
};

const validationSchema = Yup.object().shape({
  fullname: Yup.string().required(requiredField),
  phone: Yup.string()
    .required(requiredField)
    .matches(phoneRegExp, 'Telefone inválido'),
  cep: Yup.string().required(requiredField).matches(cepRegExp, 'CEP inválido'),
  street: Yup.string().required(requiredField),
  number: Yup.number()
    .typeError('Deve ser um número')
    .required(requiredField)
    .positive('Deve ser um número positivo')
    .integer('Deve ser um número'),
  carModel: Yup.string().required(requiredField),
  carPlate: Yup.string()
    .required(requiredField)
    .matches(carPlateRegExp, 'Placa inválida'),
  carColor: Yup.string().required(requiredField),
  serviceDescription: Yup.string().required(requiredField),
});

const NewService = () => {
  const { createNewService } = useContext(ServicesContext);
  const { employeeName } = useContext(EmployeeContext);

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      const newServiceObj = {
        ...values,
        employee: employeeName,
        startDate: getCurrentDateAndTime(),
      };
      delete newServiceObj.requireCarParts;
      createNewService(newServiceObj);

      alert(JSON.stringify(newServiceObj, null, 2));
      setSubmitting(false);
      resetForm();
    }, 400);
  };

  return (
    <S.Section>
      <GoBackButton />

      <Title text="Novo serviço" />

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, values }) => (
          <Form>
            <ClientForm />
            <ServiceForm requireCarParts={values.requireCarParts} />

            <Button type="submit" disabled={isSubmitting}>
              Iniciar serviço
            </Button>
          </Form>
        )}
      </Formik>
    </S.Section>
  );
};

export default NewService;
