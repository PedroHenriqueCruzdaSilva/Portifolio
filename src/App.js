import React from 'react';
import Layout from './components/Layout/index';
import Home from './components/Home';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Sobre from './components/Sobre';
import Contato from './Contato';

function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='sobre' element={<Sobre />} />
            <Route path='contato' element={<Contato />} />
          </Route>
      </Routes>
    </>
  );
}

export default App;
