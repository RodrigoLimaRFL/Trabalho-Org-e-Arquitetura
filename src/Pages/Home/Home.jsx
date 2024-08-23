import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

import './Home.css';

import Header from '../../Components/Header/Header';
import Button from '../../Components/Button/Button';

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className={'description'}> 
        <h1> RISC-V e a sua Cache </h1>
      </div>
      <div className={'button-container'}>
        <Button className={'home-button'} onClick={() => navigate('/Trabalho-Org-e-Arquitetura/o-que-e')}>
          O que é o cache?
        </Button>
        <br />
        <Button className={'home-button'} onClick={() => navigate('/Trabalho-Org-e-Arquitetura/estrutura')}>
          Estrutura do cache
        </Button>
        <br />
        <Button className={'home-button'} onClick={() => navigate('/Trabalho-Org-e-Arquitetura/como-inserir')}>
          Como inserir no cache?
        </Button>
      </div>
    </>
  );
};

export default Home;
