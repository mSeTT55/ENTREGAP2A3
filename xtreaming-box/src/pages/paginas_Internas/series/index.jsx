import React, { useEffect, useState } from 'react';
import Interno from '../../../layouts/interno.jsx';
import './styleSeries.css';
import './styleSeriesMobile.css';
import axios from 'axios';

import assistirNormal from "../../../assets/imgs/SituacaoSerie/assistirNormal.png";
import assistirMarcado from "../../../assets/imgs/SituacaoSerie/assistirMarcado.png";
import assistidoNormal from "../../../assets/imgs/SituacaoSerie/assistidoNormal.png";
import assistidoMarcado from "../../../assets/imgs/SituacaoSerie/assistidoMarcado.png";

function Series() {
  // Listando séries com o map
  const [series, setSeries] = useState([]);
  const userId = JSON.parse(localStorage.getItem('emailFiltrado')).idusuario;

  const pegandoSeries = async () => {
    try {
      const response = await axios.get('http://localhost:5000/series/get/all');
      const seriesData = response.data.map((serie) => ({
        ...serie,
        imageSrcDes: assistirNormal,
        imageSrcAss: assistidoNormal,
        situacaoSerie: null,
      }));
      setSeries(seriesData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    pegandoSeries();
  }, []);

  const handleImageClick = async (seriesSection, type) => {
    // Cria uma cópia do array de séries
    const updatedSeries = [...series];
    // Verifica o estado atual da imagem
    if (type === 'assistir') {
      if (updatedSeries[seriesSection].imageSrcDes === assistirNormal) {
        updatedSeries[seriesSection].imageSrcDes = assistirMarcado;
        console.log(`Marcou que quer assistir ${updatedSeries[seriesSection].nome}`);
      } else {
        updatedSeries[seriesSection].imageSrcDes = assistirNormal;
        console.log(`Desmarcou que quer assistir ${updatedSeries[seriesSection].nome}`);
      }
    } else if (type === 'assistido') {
      if (updatedSeries[seriesSection].imageSrcAss === assistidoNormal) {
        updatedSeries[seriesSection].imageSrcAss = assistidoMarcado;
        console.log(`Marcou assistido ${updatedSeries[seriesSection].nome}`);
      } else {
        updatedSeries[seriesSection].imageSrcAss = assistidoNormal;
        console.log(`Desmarcou assistido ${updatedSeries[seriesSection].nome}`);
      }
    }
    // Atualiza o estado do meu array de séries
    setSeries(updatedSeries);

    // Envia a situação para a API
    const situacaoSerie = {
      desejo_assistir: updatedSeries[seriesSection].imageSrcDes === assistirMarcado ? 'Sim' : 'Não',
      assistido: updatedSeries[seriesSection].imageSrcAss === assistidoMarcado ? 'Sim' : 'Não',
      series_idseries: updatedSeries[seriesSection].idseries,
      series_plataforma_idplataforma: updatedSeries[seriesSection].plataforma_idplataforma,
      usuario_idusuario: userId,
      idsituacao_serie: null, // Inicializa com null
    };

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const response = await axios.get('http://localhost:5000/situacao_series/get/all');
      const situacoes = response.data;

      const situacaoExistente = situacoes.find(
        (situacao) =>
          situacao.series_idseries === situacaoSerie.series_idseries &&
          situacao.usuario_idusuario === situacaoSerie.usuario_idusuario
      );

      if (situacaoExistente) {
        situacaoSerie.idsituacao_serie = situacaoExistente.idsituacao_serie; // Atualiza o ID da situação série
        await axios.put(`http://localhost:5000/situacao_serie/update/${situacaoExistente.idsituacao_serie}`, situacaoSerie, config);
        console.log('Situação atualizada com sucesso');
      } else {
        await axios.post('http://localhost:5000/situacao_serie/post/novo', situacaoSerie, config);
        console.log('Situação cadastrada com sucesso');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Interno>
      <div className="cabecalho">
        <div className="divcabecalho">
          <p className="nome-h1">Veja as séries mais populares do X-TREAMING BOX</p>
          <p className="sub-title">Escolha suas séries favoritas e coloque em sua coleção</p>
        </div>
      </div>
      <div className="conteiner-maior">
        <div id="caixa-itens" className="caixa-itens">
          {/* <!--Aqui começa cada card das séries--> */}
          {series.map((serie, seriesSection) => (
            <section key={seriesSection} className="series">
              <div className="conteudo_serie">
                <img className="img_serie" src={serie.imagem_serie} alt={`Imagem da série ${serie.nome}`} />
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
          ))}
          {/* <!--Termina cada card das séries--> */}
        </div>
      </div>
    </Interno>
  );
}

export default Series;