import React from 'react';
import './App.css';
import RatePage from './Pages/RatePage';
import NavBar from './Components/NavBarComponent';
import GetAQuotePage from './Pages/GetAQuotePage';
import { NewCustomerProvider } from './Context/NewCustomerContext';

function App() {
  return (
    <RatePage />
  );
}

export default App;
