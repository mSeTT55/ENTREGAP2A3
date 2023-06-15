import React, {useEffect, useState} from 'react';
import Interno from '../../../layouts/interno.jsx';
import './styleSeries.css';
import './styleSeriesMobile.css';
import axios from 'axios';

import assistirNormal from "../../../assets/imgs/SituacaoSerie/assistirNormal.png";
import assistirMarcado from "../../../assets/imgs/SituacaoSerie/assistirMarcado.png";
import assistidoNormal from "../../../assets/imgs/SituacaoSerie/assistidoNormal.png";
import assistidoMarcado from "../../../assets/imgs/SituacaoSerie/assistidoMarcado.png";



function Series (){

    // Listando séries com o map
    const [series, setSeries] = useState([]);

    const pegandoSeries  = async () => {
        const config = {
            headers: {
            'Content-Type': 'application/json'
            }
        };
        try {
            const response = await axios.get('http://localhost:5000/series/get/all', config);
            const seriesData = response.data.map((serie) => ({
              ...serie,
              imageSrcDes: assistirNormal,
              imageSrcAss: assistidoNormal,
            }));
                setSeries(seriesData);
            } catch (error) {
            console.error(error);
          }
        };
    useEffect(() => {
        pegandoSeries();
    }, []);


    const handleImageClick = (seriesSection, type) => {
        // Cria uma cópia do array de séries
        const updatedSeries = [...series];
    
        // Verifica o estado atual da imagem
        if (type === 'assistir') {
          if (updatedSeries[seriesSection].imageSrcDes === assistirNormal) {
            updatedSeries[seriesSection].imageSrcDes = assistirMarcado;
            console.log('Marcou que quer assistir')
          } else {
            updatedSeries[seriesSection].imageSrcDes = assistirNormal;
            console.log('Desmarcou que quer assistir')
          }
        } else if (type === 'assistido') {
          if (updatedSeries[seriesSection].imageSrcAss === assistidoNormal) {
            updatedSeries[seriesSection].imageSrcAss = assistidoMarcado;
            console.log('Marcou assistido')
          } else {
            updatedSeries[seriesSection].imageSrcAss = assistidoNormal;
            console.log('Desmarcou assistido')
          }
        }
        // Atualiza o estado do meu array de séries
        setSeries(updatedSeries);
      };
        
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
                        {/*<!--Aqui começa cada card das series-->*/}

                        {
                            series.map((serie, seriesSection) =>
                                <section key={seriesSection} className="series"> 
                                    <div className="conteudo_serie">
                                        <img className="img_serie" src={serie.imagem_serie} alt={`Imagem da série ${serie.nome}`}/>
                                        <p className="nome_serie">{serie.nome}</p>
                                        <div className="div-botton">
                                            <div>
                                                <div onClick={() => handleImageClick(seriesSection, 'assistir')}>
                                                    <img src={serie.imageSrcDes} alt="Desejo Assistir" />
                                                </div>
                                                <div onClick={() => handleImageClick(seriesSection, 'assistido')}>
                                                    <img src={serie.imageSrcAss} alt="Assistido" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>     
                                </section>
                            )
                        }

                        {/*<!--Termina cada card das series-->*/}  
                    </div>
                </div>
        </Interno>
    );
} 

export default Series;