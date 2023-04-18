import React from 'react';
import Routes from './routes/Routes';
import { Header } from './components/';
import 'antd/dist/reset.css';
import { GlobalStyles } from './styles/GlobalStyles';
import { useLocation } from 'react-router-dom';
import { EmployeeProvider } from './contexts';

function App() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <EmployeeProvider>
      <main>
        <GlobalStyles />
        {pathname !== '/employee/login' && <Header />}
        <Routes />
      </main>
    </EmployeeProvider>
  );
}

export default App;
