import React from 'react';
import './App.css';
import RatePage from './Pages/Rate Page/RatePage';
import NavBar from './Components/NavBar/NavBarComponent';
import GetAQuotePage from './Pages/Get A Quote Page/GetAQuotePage';
import { Routes, Route } from 'react-router-dom';
import { NewCustomerProvider } from './Context/New Customer Context/NewCustomerContext';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<RatePage />} />
        <Route path='/getaquote/*' element={<NewCustomerProvider><GetAQuotePage /></NewCustomerProvider>} />
      </Routes>
    </>
    
  );
}

export default App;
