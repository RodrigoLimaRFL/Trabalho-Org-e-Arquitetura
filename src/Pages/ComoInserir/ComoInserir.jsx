import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../Components/Button/Button";
import Header from "../../Components/Header/Header";

import "./ComoInserir.css";

import image2 from "../../Images/image2.png";
import image7 from "../../Images/image7.png";
import image10 from "../../Images/image10.png";
import image9 from "../../Images/image9.png";
import image6 from "../../Images/image6.png";
import image4 from "../../Images/image4.png";
import image3 from "../../Images/image3.png";
import image12 from "../../Images/image12.png";
import image8 from "../../Images/image8.png";

const ComoInserir = () => {
    return (
        <>
            <Header />
            <div className={"description"}>
                <h1> Como realizar uma inserção na cache? </h1> 
                <p> Para inserir dados na cache, é necessário o uso de uma função de mapeamento. </p>
                <h2> Funções de mapeamento </h2>
                <p>
                Elas apenas descrevem onde que o dado deve ser armazenado dentro da cache,
                essa função pode ser tão simples quando “coloque no primeiro espaço livre”
                ou tão complexa quanto “transforme o dado em um número
                e aplique uma equação matemática nele”.
                </p>

                <p>
                A cache possui algumas subdivisões
                as quais dependem do tipo de função de mapeamento sendo utilizado.
                As funções de mapeamento mais comuns são as 3 seguintes:
                direto, associativo ou associativo por conjunto.
                </p>

                <h2> Mapeamento Direto </h2>
                <p> Aplica uma conta de módulo no endereço do bloco para decidir a posição que ele deve ser salvo, 
                    isso faz vários blocos quererem ficar na mesma posição no cache, 
                    podendo causar conflitos mesmo com o cache relativamente vazio.
                </p>

                <img src={image2} alt="Mapeamento Direto" />

                <p>Nesse mapeamento, há a necessidade de um campo extra na estrutura do cache, chamado de Index, sua função é determinar o resultado da conta de módulo,
                o que indica se um bloco pode ou não ser/estar salvo naquela linha.</p>

                <p>Como, nesse mapeamento, cada dado só pode ser armazenado em uma posição no cache,
                quando outro dado precisa ser inserido, há apenas uma posição que pode ser liberada,
                por isso não há a necessidade de um algoritmo de substituição.</p>

                <h2> Mapeamento Associativo </h2>

                <p> Apenas salva na primeira posição disponível, ou seja, 
                    as linhas do cache não estarão ordenadas ou organizadas de forma alguma.
                </p>

                <img src={image7} alt="Mapeamento Associativo" />

                <h2> Mapeamento Associativo por Conjunto </h2>

                <p>
                Essa é a combinação de mapeamento associativo com direto, em os conjuntos funcionam 
                como se fossem linhas de uma mapeamento direto e dentro de cada conjunto funciona 
                como um mapeamento associativo.
                </p>

                <p>
                Se o número de conjuntos for 1, é equivalente ao mapeamento associativo, 
                se o número de conjuntos for igual ao número de linhas do cache, 
                é equivalente ao mapeamento direto.
                </p>

                <p>
                Quando este é o mapeamento utilizado, a estrutura do cache necessita de um campo a mais, 
                chamado de Set, que funciona exatamente como o Index do mapeamento direto, 
                determinando se um bloco pode ser/estar salvo em certo conjunto.
                </p>

                <img src={image10} alt="Mapeamento Associativo por Conjunto" />

                <h2> Subdivisões do endereço do bloco </h2>

                <p> Não é necessário saber todo o endereço de um bloco para saber onde ele está ou deve ser armazenado, 
                    apenas com alguns bits já são suficientes, pois eles funcionam em partes.</p>

                <ul>
                    <li> Byte Offset: o número de bits dedicado ao BO é igual ao log base 2 do número de bytes por palavra da arquitetura, 
                        ou seja, se sua arquitetura tem 4 bytes por palavra, log2 de 4 = 2, 
                        isso significa que o byte offset terá 2 bits.</li>
                    <li> Word Offset: o número de bits dedicado ao WO é igual ao log base 2 do número de palavras por bloco do cache,
                         ou seja, se seu cache tem 2 palavras por bloco, log2 de 2 = 1, 
                        isso significa que o word offset terá 1 bit.</li>
                    <li> Index ou Set: depende do tipo do mapeamento,
                         o número de bits é igual ao log base 2 do número de linhas do cache com mapeamento direto,
                         ou log base 2 do número de conjuntos do cache com mapeamento associativo por conjunto, 
                        ou 0 quando o mapeamento é associativo.</li>
                    <li> Tag: o resto dos bits, não é utilizado para saber onde um bloco pode ser/estar salvo, 
                        mas ainda é importante para ser possível acessar o endereço de origem do bloco. </li>
                </ul>

                <img src={image9} alt="Subdivisões do endereço do bloco" />

                <h2> Política de escrita </h2>

                <p> Quando se escreve um dado no cache, é preciso ter cuidado para que não haja disparidades entre o que está na cache 
                    e o que está na memória principal, 
                    por isso há métodos para evitar esse problema.</p>

                <p> Mecanismo Write-Hit </p>

                <ul>
                    <li> Write-through: Quando se escreve algo na cache, instantaneamente escreve o mesmo na memória. 
                        Este método é considerado lento.</li>
                    <li> Write-back: Após escrever algo na cache, só escreve o mesmo na memória quando a linha for removida do cache.</li>
                </ul>

                <p> Mecanismo Write-miss </p>

                <ul>
                    <li> Write allocate: Se é necessário escrever em um bloco que não está no cache, 
                        é trazido o bloco para o cache e depois a escrita é feita no cache. </li>
                    <li> No-Write allocate: Se é necessário escrever em um bloco que não está no cache, 
                        escreve diretamente na memória e não traz o bloco para o cache.</li>
                </ul>

                <h2> Exemplo </h2>

                <p>
                Para entender na prática como funciona, é possível observar o funcionamento de uma memória cache com as mesmas especificações dadas nos exemplos.
                Os endereços para acesso estão em Bytes, ou seja, busca-se pelo byte do endereço x.
                </p>

                <p>
                O computador trabalha com palavras de 32 bits (4 Bytes), conforme demonstrado no exemplo da divisão do bloco da RAM no desenho.
                Suponha que o conteúdo da palavra de memória seja o endereço do 1º byte daquela palavra multiplicado por 10.
                Há três níveis de cache (L1, L2 e L3) e a memória RAM.
                </p>

                <p>
                A cache L1 é mapeada diretamente com 4 blocos, onde cada bloco possui 2 palavras.
                A L2 tem mapeamento associativo por conjunto, com 8 conjuntos, 2 blocos por conjunto e cada bloco com 2 palavras.
                A L3 possui mapeamento associativo com 16 blocos, onde cada bloco possui 4 palavras.
                A memória RAM tem 1024 Bytes (não é necessário endereçar mais do que essa quantidade de memória).
                </p>

                <p>
                A política de substituição nas caches L1, L2 e L3 é FIFO.
                As políticas de atualização são write-back e write allocate para as três caches (1 para modificado e 0 para não modificado).
                Os acessos podem ser de Leitura ou Escrita.
                </p>

                <p>
                Quando o acesso for de Escrita, o conteúdo a ser escrito na palavra é o endereço do 1º byte.
                Inicialmente, é feita a escrita dos 3 primeiros valores apresentados no desenho da divisão de endereço, 72, 64 e 136,
                 e a seguir a leitura do byte 36.
                </p>

                <p>
                O processador é acionado para escrever um valor no endereço do byte 72.
                A memória cache inicia limpa, e L1 está vazia, portanto, é necessário verificar L2 e L3, que, por ser o primeiro acesso, também estão vazias.
                Assim, busca-se o endereço 72 na memória RAM.
                </p>

                <img src={image6} alt="Exemplo1" />

                <p>
                Após encontrar o endereço, ele é trazido para a memória cache. 
                No entanto, conforme explicado no desenho, traz-se o bloco da memória, que é colocado na memória cache L3. 
                Utilizando a divisão já mostrada para o número 72, distribui-se o valor em todas as caches, 
                respeitando para cada uma delas as regras de divisão, mapeamento e substituição.
                </p>

                <img src={image4} alt="Exemplo2" />

                <p>
                Em seguida, realiza-se uma nova busca, agora pelo endereço 64. As divisões também orientam onde deve-se buscar: 
                o índice do mapeamento direto indica a linha, e o conjunto do mapeamento associativo por conjunto corresponde ao conjunto. 
                Novamente, os valores não são encontrados em L1 e L2, porém, esse bloco já foi trazido para a memória RAM e está em L3, 
                bastando levá-lo para os níveis superiores novamente.
                </p>

                <img src={image3} alt="Exemplo3" />

                <p> Será buscado a seguir o valor 136, novamente o mesmo não se encontra em nenhuma das caches, portanto, 
                    é necessário pegar o valor na memória principal. O valor é devidamente colocado na L3 e L2 conforme as regras de mapeamento. 
                    Contudo a linha de índice a qual esta linha deve ser mapeada na L1 já está ocupada, portanto a mesma será substituída. 
                    Há uma modificação na linha que foi substituída, portanto a mesma deve ser passada à cache do nível seguinte, 
                    usando a política de escrita write-back.</p>

                <img src={image12} alt="Exemplo4" />

                <p> Por fim, a leitura do conteúdo do endereço 36. 
                    O mesmo não é encontrado em nenhuma das memórias caches e buscado na RAM, 
                    sendo então carregado em L3 e L2. Contudo o valor precisa ser carregado em L1, 
                    mas no endereço onde já existe um bloco modificado, 
                    então aplica-se a política de escrita apenas no nível inferior, e realiza a leitura do valor.</p>

                <img src={image8} alt="Exemplo5" />

                <p> Por fim a distribuição das leituras com falhas e acertos é: </p>

                <ul> 
                    <li> 1° - Escrita no 72: Miss-L1, Miss-L2, Miss-L3 </li>
                    <li> 2° - Escrita no 64: Miss-L1, Miss-L2, Hit-L3 </li>
                    <li> 3° - Escrita no 136: Miss-L1, Miss-L2, Miss-L3 </li>
                    <li> 4° - Leitura no 36: Miss-L1, Miss-L2, Miss-L3 </li>
                </ul>

            </div>
        </>
    );
}

export default ComoInserir;