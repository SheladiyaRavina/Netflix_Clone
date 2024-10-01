import React from 'react';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
       </Routes>
    </BrowserRouter>

  );
};

export default App;