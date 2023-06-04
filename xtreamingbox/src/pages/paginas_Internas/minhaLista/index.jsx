import React from 'react';
import './styleMinhaLista.css';
import './styleMinhaListaMobile.css';

import Interno from '../../../layouts/interno.jsx';
import exclamacao from '../../../assets/imgs/exclamacao.png';
import lupa from '../../../assets/imgs/lupa.png';


function MinhaLista (){ 

    return( 
        <Interno>   
            <div className="text-botoes">
                <div id="esquerda-text-botoes">
                    <h1 id="minhalista" className="minhalista">Minha Lista</h1>
                </div>
                <div id="direita-text-botoes">
                </div>
            </div>
            <div className="conteiner-maior">



                <div className="caixa-itens" id=''>
                    <div className="esquerda-itens">
                        <div id="desejoassistir" className="desejoassistir" onclick="mudarTela_desejoassistir()"><a>Desejo Assistir</a></div>
                        <div id="visto" className="visto" onclick="mudarTela_visto()"><a>Visto</a></div>
                    </div>



                    {/*<!--Itens da direita Vazio DESEJO ASSISTIR-->*/}
                    <div id="direita-itens-vazio" className="direita-itens-vazio-desejo-assistir">
                        <img src={exclamacao} alt="Exclamação Imagem"/>
                        <p>Pensando no que assistir? Veja nossa lista de séries.</p>
                        <a href="">Adicionar Séries</a>
                    </div>
                    

                    {/*<!--Itens da direita Vazio VISTO-->*/}
                    <div id="direita-itens-vazio" className="direita-itens-vazio-visto" >
                        <img src={lupa} alt="Exclamação Imagem"/>
                        <p>Procure séries que você já viu! Veja nossa lista de séries.</p>
                        <a href="">Procurar Séries</a>
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
                            <div>
                                <p class="verde">Opniões</p>
                                <p>4,9</p>
                            </div>
                            <div>
                                <p class="verde">Visto</p>
                                <input type="checkbox" id="checkbox-item"/>
                            </div>
                            <div class="lixeira">
                                <img src="/imgs/trash1.png"/>
                            </div>
                        </ul> 
                    </div>



                    {/*<!--Itens da direita Visto-->*/}
                    <div id="direita-itens-visto" class="direita-itens-visto">
                        <ul class="item">
                            <div id="imagem-plataforma">
                                <img src="/imgs/netflix.png"/>
                            </div>                          
                            <div id="div-nome-serie">
                                <p class="verde">Série</p>
                                <p>Arcane</p>
                            </div>
                            <div id="div-genero">
                                <p class="verde">Gênero</p>
                                <p>Ação</p>
                            </div>
                            <div id="div-qntdtemporada">
                                <p class="verde">Temporadas</p>
                                <p>6 temporadas</p>
                            </div>    
                            <div>
                                <p class="verde">Opniões</p>
                                <p>5.0</p>
                            </div>
                            <div>
                                <p class="verde">Visto</p>
                                <input type="checkbox" id="checkbox-item"/>
                            </div>
                            <div class="lixeira">
                                <img src="/imgs/trash1.png"/>
                            </div>
                        </ul> 
                    </div>

                </div>
            </div>         
        </Interno>
    );
}

export default MinhaLista;