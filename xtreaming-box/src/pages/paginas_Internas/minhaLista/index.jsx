import React, { useState, useEffect } from 'react';
import './styleMinhaLista.css';
import './styleMinhaListaMobile.css';
import Interno from '../../../layouts/interno.jsx';
import exclamacao from '../../../assets/imgs/exclamacao.png';
import axios from 'axios';

function MinhaLista() {
  // Dropdown filtro
  const [selectedOption, setSelectedOption] = useState('');
  const handleSelect = (event) => {
    setSelectedOption(event.target.value);
  };

  const [series, setSeries] = useState([]);
  const [plataformas, setPlataformas] = useState([]);
  const [situacaoSeriesData, setSituacaoSeriesData] = useState([]);
  console.log(situacaoSeriesData);

  const handleRecomendadoCheckboxChange = (serieId, value) => {
    const userData = JSON.parse(localStorage.getItem('emailFiltrado'));
    const userId = userData.idusuario;

    const filteredSituacaoSeries = situacaoSeriesData.filter(
      (situacaoSerie) =>
        situacaoSerie.usuario_idusuario === userId &&
        situacaoSerie.series_idseries === serieId
    );

    if (filteredSituacaoSeries.length > 0) {
      const situacaoSerie = filteredSituacaoSeries[0];
      situacaoSerie.recomendado = value;

      axios
        .put(
          `http://localhost:5000/situacao_serie/update/${situacaoSerie.idsituacao_serie}`,
          situacaoSerie
        )
        .then((response) => {
          console.log(response.data); // Situação atualizada com sucesso
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const responseSeries = await axios.get(
          'http://localhost:5000/series/get/all'
        );
        const responseSituacaoSeries = await axios.get(
          'http://localhost:5000/situacao_series/get/all'
        );
        const responsePlataformas = await axios.get(
          'http://localhost:5000/plataformas/get/all'
        );

        const seriesData = responseSeries.data;
        const situacaoSeriesData = responseSituacaoSeries.data;
        const plataformasData = responsePlataformas.data;

        // Obter ID do usuário logado do Local Storage
        const userData = JSON.parse(localStorage.getItem('emailFiltrado'));
        const userId = userData.idusuario;

        // Filtrar séries correspondentes ao usuário logado e com status válido
        const filteredSeries = situacaoSeriesData
          .filter((situacaoSerie) => {
            if (selectedOption === '') {
              return (
                situacaoSerie.usuario_idusuario === userId &&
                (situacaoSerie.desejo_assistir === 'Sim' ||
                  situacaoSerie.assistido === 'Sim')
              );
            } else if (selectedOption === 'assistido') {
              return (
                situacaoSerie.usuario_idusuario === userId &&
                situacaoSerie.assistido === 'Sim'
              );
            } else if (selectedOption === 'desejo-assistir') {
              return (
                situacaoSerie.usuario_idusuario === userId &&
                situacaoSerie.desejo_assistir === 'Sim'
              );
            } else if (selectedOption === 'recomendado') {
              return (
                situacaoSerie.usuario_idusuario === userId &&
                situacaoSerie.recomendado === 'Sim'
              );
            } else if (selectedOption === 'nao-recomendo') {
              return (
                situacaoSerie.usuario_idusuario === userId &&
                situacaoSerie.recomendado === 'Não'
              );
            } else {
              return false;
            }
          })
          .map((situacaoSerie) => {
            const serie = seriesData.find(
              (serie) => serie.idseries === situacaoSerie.series_idseries
            );

            if (
              situacaoSerie.desejo_assistir === 'Sim' &&
              situacaoSerie.assistido === 'Sim'
            ) {
              serie.status = 'Já assisti e quero ver novamente';
            } else if (situacaoSerie.desejo_assistir === 'Sim') {
              serie.status = 'Desejo Assistir';
            } else if (situacaoSerie.assistido === 'Sim') {
              serie.status = 'Assistido';
            } else {
              serie.status = serie.assistido;
            }

            // Encontrar a imagem da plataforma correspondente
            const plataforma = plataformasData.find(
              (plataforma) =>
                plataforma.idplataforma === serie.plataforma_idplataforma
            );

            if (plataforma) {
              serie.imagemplataforma = plataforma.imagemplataforma;
            }
            return serie;
          });
        setSeries(filteredSeries);
        setPlataformas(plataformasData);
        setSituacaoSeriesData(situacaoSeriesData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSeries();
  }, [selectedOption]);

  return (
    <Interno>
      <div className="text-botoes-minhalista">
        <div id="esquerda-text-botoes-minhalista">
          <h1 id="minhalista" className="minhalista">
            Minha Lista
          </h1>
        </div>
        <div id="direita-text-botoes-minhalista">
          <p>Categorias</p>
          <div className="selecao">
            <select value={selectedOption} onChange={handleSelect}>
              <option value="">Todas</option>
              <option value="assistido">Assistido</option>
              <option value="desejo-assistir">Desejo assistir</option>
              <option value="recomendado">Recomendado</option>
              <option value="nao-recomendo">Não recomendo</option>
            </select>
          </div>
        </div>
      </div>
      <div className="conteiner-maior">
        <div className="caixa-itens" id="">
          {/* Itens da direita Vazio DESEJO ASSISTIR */}
          <div
            id="direita-itens-vazio"
            className="direita-itens-vazio-desejo-assistir"
          >
            <img src={exclamacao} alt="Exclamação Imagem" />
            <p>Pensando no que assistir? Veja nossa lista de séries.</p>
            <a href="">Adicionar Séries</a>
          </div>

          {/* Aqui termina toda parte do conteúdo lista quando esta vazia */}

          {/* Itens da direita Desejo Assistir */}
          <div
            id="direita-itens-desejo-assistir"
            className="direita-itens-desejo-assistir"
          >
            {series.map((serie) => (
              <ul className="item" key={serie.idseries}>
                <div id="imagem-plataforma">
                  <img src={serie.imagemplataforma} alt="Plataforma" />
                </div>
                <div id="div-nome-serie">
                  <p className="verde">Série</p>
                  <p>{serie.nome}</p>
                </div>
                <div id="div-genero">
                  <p className="verde">Gênero</p>
                  <p>{serie.genero}</p>
                </div>
                <div id="div-qntdtemporada">
                  <p className="verde">Temporadas</p>
                  <p>{serie.temporada} temporadas</p>
                </div>
                <div id='divstatus'>
                  <p className="verde">Status</p>
                  <p id="status">{serie.status}</p>
                </div>
                <div id='divrecomendado'>
                  <p className="verde">Recomendado</p>
                  <div className="checkbox">
                    {console.log(serie)}
                    <label>
                      Sim
                      <input
                        type="checkbox"
                        checked={serie.recomendado === 'Sim'}
                        onChange={() =>
                          handleRecomendadoCheckboxChange(serie.idseries, 'Sim')
                        }
                      />
                    </label>
                    <label>
                      Não
                      <input
                        type="checkbox"
                        checked={serie.recomendado === 'Não'}
                        onChange={() =>
                          handleRecomendadoCheckboxChange(serie.idseries, 'Não')
                        }
                      />
                    </label>
                  </div>
                </div>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </Interno>
  );
}

export default MinhaLista;
