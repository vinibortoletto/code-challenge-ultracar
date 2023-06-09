import React, { useContext } from 'react';
import { Form, Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { ServicesContext } from '../../contexts/ServicesContext';
import { EmployeeContext } from '../../contexts';
import { getCurrentDateAndTime } from '../../utils';
import { Button, GoBackButton, HorizontalLine, Title } from '../../components';
import ClientForm from './ClientForm/ClientForm';
import ServiceForm from './ServiceForm/ServiceForm';
import * as S from './NewService.styles';

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
  const { createNewService, carPartList, setCarPartList, serviceList } =
    useContext(ServicesContext);
  const { employeeName } = useContext(EmployeeContext);
  const history = useHistory();

  const getNewServiceKey = () => {
    const newKey = Number(serviceList[serviceList.length - 1].key) + 1;
    return String(newKey);
  };

  const getNewServiceId = () => {
    return serviceList[serviceList.length - 1].id + 1;
  };

  const sumServicePrice = () => {
    return carPartList.reduce((acc, carPart) => acc + carPart.price, 0);
  };

  const handleNewServiceObject = (values) => {
    const newServiceObj = {
      ...values,
      key: getNewServiceKey(),
      id: getNewServiceId(),
      employee: employeeName,
      client: values.fullname,
      price: sumServicePrice(),
      startDate: getCurrentDateAndTime(),
      endDate: 'Em andamento',
      status: 'Em andamento',
    };

    delete newServiceObj.requireCarParts;

    return newServiceObj;
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      const newServiceObj = handleNewServiceObject(values);
      createNewService(newServiceObj);
      setCarPartList([]);

      history.push('/employee/service/new/qrcode');

      setSubmitting(false);
      resetForm();
    }, 400);
  };

  return (
    <S.Section>
      <GoBackButton />

      <Title text="Novo serviço" />
      <HorizontalLine />

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, values }) => (
          <Form>
            <ClientForm />
            <HorizontalLine />
            <ServiceForm requireCarParts={values.requireCarParts} />
            <HorizontalLine />

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
