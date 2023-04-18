import React from 'react';
import Routes from './routes/Routes';
import { Header } from './components/';
import 'antd/dist/reset.css';
import { GlobalStyles } from './styles/GlobalStyles';
import { useLocation } from 'react-router-dom';
import { EmployeeProvider, ServicesProvider } from './contexts';

function App() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <EmployeeProvider>
      <ServicesProvider>
        <GlobalStyles />
        {pathname !== '/employee/login' && <Header />}

        <main>
          <Routes />
        </main>
      </ServicesProvider>
    </EmployeeProvider>
  );
}

export default App;
