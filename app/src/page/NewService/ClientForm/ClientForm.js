import React, { useContext } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextField from '../TextField/TextField';
import * as S from './ClientForm.styles';
import { Button } from '../../../components';
import { ServicesContext } from '../../../contexts/ServicesContext';

const requiredField = 'Campo obrigatório';
const phoneRegExp = /^[0-9]{10,11}$/;
const cepRegExp = /^\d{5}-\d{3}$/;
const carPlateRegExp = /^[a-zA-Z0-9]+$/;

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
});

const initialValues = {
  fullname: '',
  phone: '',
  cep: '',
  street: '',
  number: '',
  carModel: '',
  carPlate: '',
  carColor: '',
};

const ClientForm = () => {
  const { newService, setNewService } = useContext(ServicesContext);

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      setNewService({ ...newService, clientInfo: values });
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
      resetForm();
    }, 400);
  };

  return (
    <S.Section>
      <h2>Informações do cliente</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <S.PersonalFields>
              <TextField
                label="Nome completo"
                as="input"
                type="text"
                name="fullname"
                placeholder="Nome completo"
              />
              <TextField
                label="Telefone"
                as="input"
                type="text"
                name="phone"
                placeholder="Telefone"
              />
            </S.PersonalFields>

            <S.AddressFields>
              <TextField
                label="CEP"
                as="input"
                type="text"
                name="cep"
                placeholder="CEP"
              />
              <TextField
                label="Rua"
                as="input"
                type="text"
                name="street"
                placeholder="Rua"
              />
              <TextField
                label="Número"
                as="input"
                type="text"
                name="number"
                placeholder="Número"
              />
            </S.AddressFields>

            <S.CarFields>
              <TextField
                label="Modelo do carro"
                as="input"
                type="text"
                name="carModel"
                placeholder="Modelo do carro"
              />
              <TextField
                label="Placa"
                as="input"
                type="text"
                name="carPlate"
                placeholder="Placa"
              />
              <TextField
                label="Cor do carro"
                as="input"
                type="text"
                name="carColor"
                placeholder="Cor do carro"
              />
            </S.CarFields>

            <Button type="submit" disabled={isSubmitting}>
              Gerar QR Code
            </Button>
          </Form>
        )}
      </Formik>
    </S.Section>
  );
};

export default ClientForm;
