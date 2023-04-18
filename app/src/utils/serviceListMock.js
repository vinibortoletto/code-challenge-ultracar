import getCurrentDateAndTime from './getCurrentDateAndTime';

const serviceListMock = [
  {
    key: '1',
    id: '001',
    status: 'Finalizado',
    client: 'Fulano',
    employee: 'Beltrano',
    price: 100,
    startDate: getCurrentDateAndTime(),
    endDate: getCurrentDateAndTime(),
  },
  {
    key: '2',
    id: '002',
    status: 'Em andamento',
    client: 'Fulano',
    employee: 'Sicrano',
    price: 100,
    startDate: getCurrentDateAndTime(),
    endDate: 'Em andamento',
  },
  {
    key: '3',
    id: '003',
    status: 'Finalizado',
    client: 'Fulano',
    employee: 'Beltrano',
    price: 100,
    startDate: getCurrentDateAndTime(),
    endDate: getCurrentDateAndTime(),
  },
];

export default serviceListMock;
