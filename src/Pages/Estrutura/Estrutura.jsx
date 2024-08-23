import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../Components/Button/Button";
import Header from "../../Components/Header/Header";

import "./Estrutura.css";

import image5 from "../../Images/image5.png";

const Estrutura = () => {
    const navigate = useNavigate();

    return (
        <>
            <Header />
            <div className={"description"}>
                <h1> Estrutura do Cache </h1>
                <p>
                Todo cache é composto por várias linhas, cada uma com os seguintes dados e,
                 às vezes, até mais: tag, bit de validade, bit  de modificação, algoritmo de substituição, bloco.
                </p>
                <p>
                O que cada um desses campos representa são o seguinte:
                </p>
                <ul>
                    <li>Tag: Identifica exatamente o endereço de onde veio o bloco que está presente no cache.</li>
                    <li>Bit de Validade: Indica se os bits que estão dentro daquela linha do cache são uma entrada válida ou lixo.</li>
                    <li>Bit de Modificação: Indica se os dados que estão na linha do cache coincidem ou não com os dados na memória, de onde a informação se originou.</li>
                    <li>Algoritmo de Substituição: Quando o cache está cheio, mas se quer adicionar uma nova linha, 
                        é necessário remover uma das outras linhas. Isto indica qual o método utilizado para decidir qual das linhas remover.</li>
                    <li>Bloco: o conjunto de palavras que o cache recebe de uma vez e armazena em uma linha, 
                        pois é mais eficiente receber e armazenar um conjunto de palavras do que uma palavra de cada vez. 
                        Normalmente se utilizam potências de 2, como 4 ou 8 palavras por bloco.
                    </li>
                    <img src={image5} alt="Blocos" />
                </ul>

                <h2>Os 3 caches (L1, L2 e L3)</h2>

                <p>
                O cache, assim como toda memória, tem que fazer o compromisso entre capacidade e velocidade, mas por um novo motivo. 
                Quanto maior o cache, maior a chance do dado necessário estar presente nele, porém, mais lento ele fica.
                </p>
                <p>
                Por isso que geralmente há 3 caches, cada um com uma velocidade e capacidade diferentes, indo de poucos KB no L1,
                 o menor e mais rápido dos caches, até alguns MB no L3, o maior e mais lento.
                </p>
                <p>
                O padrão é uma L1 e uma L2 para cada núcleo do processador e apenas uma L3 para o processador todo.
                </p>

                <h2>Algoritmos de Substituição</h2>

                <p>Há 4 algoritmos de substituição normalmente usados, FIFO, LRU, LFU e aleatório.</p>


                <ul>
                <li>FIFO: first in, first out.  
                Tradução: primeiro a entrar, primeiro a sair.  
                Significa que o cache sabe qual a linha mais antiga e,  
                quando necessário remover uma linha, removerá ela.</li>

                <li>LRU: least recently used.  
                Tradução: menos recentemente utilizado.  
                Significa que o cache sabe qual linha não foi utilizada a mais tempo,  
                e a removerá quando necessário.</li>

                <li>LFU: least frequently used.  
                Tradução: menos frequentemente utilizado.  
                Significa que o cache sabe o quão frequentemente cada linha foi utilizada  
                e removerá a menos frequente quando necessário.</li>

                <li>Aleatório: quando necessário remover uma linha,  
                escolhe uma aleatoriamente.</li>
                </ul>
            </div>
        </>
    );
}

export default Estrutura;