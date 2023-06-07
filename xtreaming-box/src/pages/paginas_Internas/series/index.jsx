import React from 'react';
import Interno from '../../../layouts/interno.jsx';
import './styleSeries.css';
import './styleSeriesMobile.css';

import imgserie from '../../../assets/imgs/imagens_series/amor e morte.png';
import imgserie2 from '../../../assets/imgs/imagens_series/a casa do dragão.png';

import estrela from '../../../assets/imgs/stars/5-star.png';
import estrela2 from '../../../assets/imgs/stars/1-star.png';

import vouver from '../../../assets/imgs/vou ver.png';
import visto from '../../../assets/imgs/visto.png';



function Series (){
    return(
        <Interno>
                <div className="cabecalho">
                    <div className='divcabecalho'>
                        <p className="nome-h1">Veja as series mais popupalares do X-TREAMING BOX</p>
                        <p className="sub-title"> Escolha suas series favoritas e coloque em sua coleção</p>
                    </div>
                </div>
                <div className="conteiner-maior">
                    <div id='caixa-itens' className="caixa-itens" >
                        {/*<!--Aqui se encontra cada card das series-->*/}
                        <section className="series"> 
                            <div className="conteudo_serie">
                                <img className="img_serie" src={imgserie} alt="Amor e Morte"/>
                                <p className="nome_serie">Amor e Morte</p>
                                <div className='startsdiv'>
                                    <img className="img-star" src={estrela} alt="Avaliação"/>
                                </div>
                                <div className="div-botton">
                                    <img className="img-botton" src={vouver} alt="Botoes"/>                   
                                    <img className="img-botton" src={visto} alt="Botoes"/>
                                </div>
                            </div>     
                        </section>
                        <section className="series"> 
                            <div className="conteudo_serie">
                                <img className="img_serie" src={imgserie2} alt="Amor e Morte"/>
                                <p className="nome_serie">A casa do Dragão</p>
                                <div className='startsdiv'>
                                    <img className="img-star" src={estrela2} alt="Avaliação"/>
                                </div>
                                <div className="div-botton">
                                    <img className="img-botton" src={vouver} alt="Botoes"/>                   
                                    <img className="img-botton" src={visto} alt="Botoes"/>
                                </div>
                            </div>   
                        </section>
                        {/*<!--Aqui se termina cada card das series-->*/}  
                    </div>
                </div>
        </Interno>
    );
} 

export default Series;