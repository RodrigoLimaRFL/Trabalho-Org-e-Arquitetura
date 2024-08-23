import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

import './OQueE.css';

import Header from '../../Components/Header/Header';

import image1 from '../../Images/image1.png';
import image11 from '../../Images/image11.png';

const OQueE = () => {
  const navigate = useNavigate();
  return (
    <>
        <Header />
        <div className={'description'}> 
            <h1> O que realmente é o cache? </h1>
            <p>
                O cache não passa de um dos tipos de memória utilizados pelos computadores, 
                assim como a memória RAM ou ROM. Mais especificamente, 
                o cache é uma memória que prioriza velocidade acima de tudo.
            </p> <br/>
            <h2> Hierarquia de memória </h2>
            <p>
                É efetivamente impossível ter uma memória cujo acesso é rápido, capacidade é grande e custo é baixo. 
                Por motivos físicos, é sempre necessário abrir mão de um dos 3 fatores.
            </p>
            <p>
                Para resolver esse problema e ter ambos: a capacidade e a velocidade, os computadores têm uma hierarquia de memória. 
                Isso significa que os computadores têm vários tipos diferentes de memória e utilizam essas várias memórias em conjunto.
            </p> 
            <img src={image1} alt="Hierarquia de memória" /> <br/>
            <br/>
            <h2> Qual a função do cache? </h2>
            <p>
                O cache fica entre o processador (também chamado de CPU) e da RAM (conhecida como memória principal), 
                lá ele armazena temporariamente todos os dados que vão da RAM para o processador.
            </p>
            <p>
                Dessa forma, quando o processador precisar de um dado que ele já recebeu recentemente no passado, 
                ele não precisa ir tão fundo buscar o dado, o que acelera a velocidade do computador praticamente como um todo.
            </p>
            <img src={image11} alt="Transferencia" /> <br/>
        </div>
    </>
  );
};

export default OQueE;
