import React from 'react';
import Routes from './routes/Routes';
import { Header } from './components/';
import { GlobalStyles } from './styles/GlobalStyles';
import { useLocation } from 'react-router-dom';
import { EmployeeProvider, ServicesProvider } from './contexts';
import Footer from './components/Footer/Footer';

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

        <Footer />
      </ServicesProvider>
    </EmployeeProvider>
  );
}

export default App;
