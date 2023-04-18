const getCurrentDateAndTime = () => {
  const today = new Date();
  const options = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };

  const formattedDate = today.toLocaleString('pt-BR', options);

  return formattedDate;
};

export default getCurrentDateAndTime;
