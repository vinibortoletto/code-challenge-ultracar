import React, { useContext } from 'react';
import QRCode from 'qrcode.react';
import { ServicesContext } from '../../contexts';
import * as S from './QrCode.styles';
import { Button, GoBackButton } from '../../components';
import { useHistory } from 'react-router-dom';

const QrCode = () => {
  const { newService } = useContext(ServicesContext);
  const history = useHistory();

  return (
    <S.Section>
      <QRCode
        value={JSON.stringify(newService)}
        size={200}
        fgColor="#000000"
        bgColor="#ffffff"
      />

      <Button
        type="button"
        onClick={() => history.push('/employee/service/all')}
      >
        Lista de serviços
      </Button>
    </S.Section>
  );
};

export default QrCode;
