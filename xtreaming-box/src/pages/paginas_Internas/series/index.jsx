import React from 'react';
import Interno from '../../../layouts/interno.jsx';
import './styleSeries.css';
import './styleSeriesMobile.css';

import imgserie from '../../../assets/imgs/imagens_series/amor e morte.png';
//import imgserie2 from '../../../assets/imgs/imagens_series/a casa do dragão.png';

//import estrela from '../../../assets/imgs/stars/5-star.png';
//import estrela2 from '../../../assets/imgs/stars/1-star.png';
import botaoMarcador from '../../../components/botaoSituacao/botaoMarcador.jsx'



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
                                <div className="div-botton">
                                  <botaoMarcador/>
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