import store from '@/redux/store';
import { ThemeProvider } from '@emotion/react';
import { SnackbarProvider } from 'notistack';
import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import { AppContainer } from './styled-components';
import theme from './theme';
import { SnackbarUtilsConfigurator } from './utilities';
import Register from './pages/register/Register';
import Loading from './components/loading/Loading';
import Documents from './pages/documents/Documents';
import Invoices from './pages/invoices/Invoces';
import Process from './pages/process/Process';
import { Navbar } from './components/navbar/NavBar';
import Profile from './pages/profile/Profile';
import Home from './pages/home/Home';
import AddDocument from './pages/documents/AddDocument';
import AddInvoice from './pages/invoices/AddInvoice';
import AddProcess from './pages/process/AddProcess';


// Routes
const DashboardSuperFix = lazy(() => import('@/pages/Dashboard/DashboardSuperFix'));
const Login = lazy(() => import('@/pages/Login/Login'));

const App = () => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <AppContainer className="">
          <SnackbarProvider>
            <SnackbarUtilsConfigurator />
            <Suspense fallback={<Loading />}>
              <Provider store={store}>
                <BrowserRouter>
                  <Navbar />
                  <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/invoices" element={<Invoices />} />
                    <Route path="/process" element={<Process />} />
                    <Route path="/documents" element={<Documents />} />
                    <Route path="/register" element={<Register />} />
                    <Route path={`dashboard/*`} element={<DashboardSuperFix />} />
                  </Routes>
                </BrowserRouter>
              </Provider>
            </Suspense>
          </SnackbarProvider>
        </AppContainer>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
