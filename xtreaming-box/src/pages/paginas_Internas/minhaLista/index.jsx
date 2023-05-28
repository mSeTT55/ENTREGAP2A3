import React from 'react';
import './style.module.css';
import './styleMobile.css';

import Interno from '../../../layouts/interno.jsx';
import exclamacao from '../../../assets/imgs/exclamacao.png';


function MinhaLista (){ 
    return( 
        <Interno>   
            <div className="text-botoes">
                <div id="esquerda-text-botoes">
                    <h1 className="minhalista">Minha Lista</h1>
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

                    {/*<!--Itens da direita Vazio-->*/}

                    <div id="direita-itens-vazio" className="direita-itens-vazio" >
                        <img src={exclamacao} alt="Exclamação Imagem"/>
                        <p>Pensando no que assistir? Veja nossa lista de séries</p>
                        <a href="">Adicionar Séries</a>
                    </div>

                    {/*<!--Aqui termina toda parte do conteúdo lista quando esta vazia-->*/}

                    {/*<!--Itens da direita Desejo Assistir-->*/}
                </div>
            </div>         
        </Interno>
    );
}

export default MinhaLista;