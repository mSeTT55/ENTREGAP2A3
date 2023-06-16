import React, {useState} from 'react';
import './styleMinhaLista.css';
import './styleMinhaListaMobile.css';

import Interno from '../../../layouts/interno.jsx';
import exclamacao from '../../../assets/imgs/exclamacao.png';


function MinhaLista (){ 

    // Dropdown filtro
    const [selectedOption, setSelectedOption] = useState(''); 
    const handleSelect = (event) => {
        setSelectedOption(event.target.value);
    };
    


    return( 
        <Interno>   
            <div className="text-botoes-minhalista">
                <div id="esquerda-text-botoes-minhalista">
                    <h1 id="minhalista" className="minhalista">Minha Lista</h1>
                </div>
                <div id="direita-text-botoes-minhalista">
                    <p>Categorias</p>
                    <div className="selecao">
                        <select value={selectedOption} onChange={handleSelect}>
                            <option value="">Selecione uma opção</option>
                            <option value="assistido">Assistido</option>
                            <option value="desejo-assistir">Desejo assistir</option>
                            <option value="recomendado">Recomendado</option>
                            <option value="nao-recomendo">Não recomendo</option>
                        </select>
                    </div>



                </div>
            </div>
            <div className="conteiner-maior">



                <div className="caixa-itens" id=''>
                    {/*<!--Itens da direita Vazio DESEJO ASSISTIR-->*/}
                    <div id="direita-itens-vazio" className="direita-itens-vazio-desejo-assistir">
                        <img src={exclamacao} alt="Exclamação Imagem"/>
                        <p>Pensando no que assistir? Veja nossa lista de séries.</p>
                        <a href="">Adicionar Séries</a>
                    </div>
                
                    {/*<!--Aqui termina toda parte do conteúdo lista quando esta vazia-->*/}


                    {/*<!--Itens da direita Desejo Assistir-->*/}
                    <div id="direita-itens-desejo-assistir" class="direita-itens-desejo-assistir">
                        <ul class="item">
                            <div id="imagem-plataforma">
                                <img src="/imgs/globo-play.png"/>
                            </div>                          
                            <div id="div-nome-serie">
                                <p class="verde">Série</p>
                                <p>Viking</p>
                            </div>
                            <div  id="div-genero">
                                <p class="verde">Gênero</p>
                                <p>Ação</p>
                            </div>
                            <div id="div-qntdtemporada">
                                <p class="verde">Temporadas</p>
                                <p>6 temporadas</p>
                            </div>
                            <div id="div-qntdtemporada">
                                <p class="verde">Status</p>
                                <p>assistido</p>
                            </div>    
                            <div>
                                <p class="verde">Recomendado</p>
                                <div className="recomendado">
                                    <p>Sim</p><input type="checkbox" id="checkbox-item"/>
                                    <p>Não</p><input type="checkbox" id="checkbox-item"/>
                                </div>
                            </div>
                        </ul>


                    </div>
                </div>
            </div>         
        </Interno>
    );
}

export default MinhaLista;