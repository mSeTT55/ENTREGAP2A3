import React, {useEffect, useState} from 'react';
import Interno from '../../../layouts/interno.jsx';
import './styleSeries.css';
import './styleSeriesMobile.css';
import axios from 'axios';

//import imgserie from '../../../assets/imgs/imagens_series/amor e morte.png';
//import imgserie2 from '../../../assets/imgs/imagens_series/a casa do dragão.png';

//import estrela from '../../../assets/imgs/stars/5-star.png';
//import estrela2 from '../../../assets/imgs/stars/1-star.png';
import BotaoMarcador from '../../../components/botaoSituacao/botaoMarcador.jsx'



function Series (){

    const [series, setSeries] = useState([]);

    const pegandoSeries  = async () => {
        const config = {
            headers: {
            'Content-Type': 'application/json'
            }
        };
        try {
            const response = await axios.get('http://localhost:5000/series/get/all', config);
            const series = response.data
            setSeries(series);    
            }
        catch (error) {
            console.error(error);
        }
        return series
    }
    useEffect(() => {
        pegandoSeries();
    }, []);

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
                        {
                            series.map((serie, seriesSection) =>
                                <section key={seriesSection} className="series"> 
                                    <div className="conteudo_serie">
                                        <img className="img_serie" src={serie.imagem_serie} alt={`Imagem da série ${serie.nome}`}/>
                                        <p className="nome_serie">{serie.nome}</p>
                                        <div className="div-botton">
                                            <BotaoMarcador/>
                                        </div>
                                    </div>     
                                </section>
                            )
                        }
                        {/*<!--Aqui se termina cada card das series-->*/}  
                    </div>
                </div>
        </Interno>
    );
} 

export default Series;