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
        <p> Este site foi criado com o objetivo de fornecer um estudo detalhado sobre o funcionamento e a importância da memória cache
           na arquitetura de computadores. Nele, exploramos conceitos fundamentais, mecanismos de operação e práticas relacionadas ao cache,
            como mapeamentos, algoritmos de substituição e políticas de escrita. Destinado a qualquer um que esteja interessado no assunto,
             o conteúdo aqui apresentado busca esclarecer, com profundidade e clareza, 
          os principais aspectos desse elemento crucial para a Organização e Arquitetura de Computadores.</p>
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
