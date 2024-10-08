import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home/Home';
import OQueE from './Pages/OQueE/OQueE';
import Estrutura from './Pages/Estrutura/Estrutura';
import ComoInserir from './Pages/ComoInserir/ComoInserir';

import './style.css';

const App = () => {
  return (
    <Routes>
      <Route path="/Trabalho-Org-e-Arquitetura/" exact element = {
        <>
          <Home />
        </>
      }></Route>

      <Route path="/Trabalho-Org-e-Arquitetura/o-que-e" exact element = {
        <>
          <OQueE />
        </>
      }></Route>

      <Route path="/Trabalho-Org-e-Arquitetura/estrutura" exact element = {
        <>
          <Estrutura />
        </>
      }></Route>

      <Route path="/Trabalho-Org-e-Arquitetura/como-inserir" exact element = {
        <>
          <ComoInserir />
        </>
      }></Route>

    </Routes>
  )
}

export default App;