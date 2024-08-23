import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home/Home';
import OQueE from './Pages/OQueE/OQueE';
import Estrutura from './Pages/Estrutura/Estrutura';
import ComoInserir from './Pages/ComoInserir/ComoInserir';

const App = () => {
  return (
    <Routes>
      <Route path="/" exact element = {
        <>
          <Home />
        </>
      }></Route>

      <Route path="/o-que-e" exact element = {
        <>
          <OQueE />
        </>
      }></Route>

      <Route path="/estrutura" exact element = {
        <>
          <Estrutura />
        </>
      }></Route>

      <Route path="/como-inserir" exact element = {
        <>
          <ComoInserir />
        </>
      }></Route>

    </Routes>
  )
}

export default App;