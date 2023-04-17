import React from 'react';
import Routes from './routes/Routes';
import { Header } from './components/';
import 'antd/dist/reset.css';
import { GlobalStyles } from './styles/GlobalStyles';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div>
      <GlobalStyles />

      {pathname !== '/employee/login' && <Header />}

      <Routes />
    </div>
  );
}

export default App;
