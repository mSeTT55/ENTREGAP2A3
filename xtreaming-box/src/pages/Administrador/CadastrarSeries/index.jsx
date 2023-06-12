import React, { useState } from 'react';
import axios from 'axios';
import './styleSeriesMobile.css';
import './styleSeries.css';
import Interno from '../../../layouts/interno.jsx';
import { Link } from 'react-router-dom';



const CadastrarSerie = () => {
  //UseState para pegar os dados do formulario, decompor em um array e aplicar cada dado em cada variavel
  const [dadosFormSerie, setdadosFormSerie] = useState({
      plataformaid_serie:'',
      nome_serie: '', 
      ano_serie: '', 
      genero_serie: '',
      imagem_ser:'',
      temporada_serie:'',
      sinopse_serie:''
  });

  const formSumbit = async (pegarCada) => {
      //Cancelando o comportamento padrão de recarregar a pagina
      pegarCada.preventDefault();
      
      //montando os dados do array
      const montandoDadosSerie = {
          plataforma_idplataforma:dadosFormSerie.plataformaid_serie,
          nome: dadosFormSerie.nome_serie, 
          ano: dadosFormSerie.ano_serie,
          genero: dadosFormSerie.genero_serie,
          imagem_serie: dadosFormSerie.imagem_ser,
          temporada: dadosFormSerie.temporada_serie,
          avaliacao: dadosFormSerie.sinopse_serie
           
      };

      //Inserindo dados da mensagem no banco
      try {
          const responseSerie = await axios.post('http://localhost:5000/series/post/novo', montandoDadosSerie);
          console.log(responseSerie.data);
          if (responseSerie.status === 200){
              alert('Série cadastrada com sucesso.');
          } else{
              alert('Erro ao enviar a cadastro, favor tentar novamente.');
          }
      } catch (error) {
          console.log(error);
      }
  }

  return (
   
   <Interno>
            <div className="text-botoes">
                <div>
                    <h1 id='editarperfil'  className="minhalista">Cadastrar Séries</h1>
                </div>
   
            </div>
            <div className="conteiner-maior">
                <div className="caixa-itens">
                    <div className="setor-a">
                    <div>
                       <p className="nome-h2">Novo</p>
                     </div>
                     <div className="itens-tab">
                       <form onSubmit={(pegarCada) => formSumbit(pegarCada)}>
                          <div className="input-box">
                            <select className="input-box" name="selec-plata" id="select-plata" placeholder="Selecione a plataforma do streaming"
                            required value={dadosFormSerie.plataformaid_serie}
                            onChange={(pegarCada) => setdadosFormSerie({ ...dadosFormSerie, plataformaid_serie: pegarCada.target.value })}>
                                <option value="1">Netflix</option>
                                <option value="2">Globo Play</option>
                                <option value="3">Prime Vídeo</option>
                                <option value="4">Disney Plus</option>
                            </select>
                          </div>
                          <div className="input-box">
                           <input type="text" name="nome" id= "nomeSerie" placeholder="   Digite o nome da série"
                           required value={dadosFormSerie.nome_serie}
                           onChange={(pegarCada) => setdadosFormSerie({ ...dadosFormSerie, nome_serie: pegarCada.target.value })}/>
                          </div>
                        <div className="input-box">
                            <input type="text" name="genero" id="generoSerie" placeholder="   Digite o gênero da série"
                            required value={dadosFormSerie.genero_serie}
                            onChange={(pegarCada) => setdadosFormSerie({ ...dadosFormSerie, genero_serie: pegarCada.target.value })}/>
                        </div>
                        <div className="input-box">
                            <input type="text" name="temporada" id="tempSerie" placeholder="   Digite o número de temporadas"
                            required value={dadosFormSerie.temporada_serie}
                            onChange={(pegarCada) => setdadosFormSerie({ ...dadosFormSerie, temporada_serie: pegarCada.target.value })}/>
                        </div>
                        <div className="input-box">
                            <input type="text" name="ano" id="anoSerie" placeholder="   Digite o ano de lançamento"
                            required value={dadosFormSerie.ano_serie}
                            onChange={(pegarCada) => setdadosFormSerie({ ...dadosFormSerie, ano_serie: pegarCada.target.value })}/>
                        </div>
                        <div className="input-box">
                           <input type="text" name="url-img" id= "serie-url" placeholder="   Digite a url em http da foto da série"
                           required value={dadosFormSerie.imagem_ser}
                           onChange={(pegarCada) => setdadosFormSerie({ ...dadosFormSerie, imagem_ser: pegarCada.target.value })}/>                         </div>
                        <div className="input-box">
                            <textarea className="caixa-msg" name="Sinopse" id="serie_sinopse" placeholder="   Digite a sinopse da série..."
                            required value={dadosFormSerie.sinopse_serie}
                            onChange={(pegarCada) => setdadosFormSerie({ ...dadosFormSerie, sinopse_serie: pegarCada.target.value })}> 
                            </textarea>
                       </div>
                       
                        <div className="botao-submit">
                            <div>
                              <button className="bt1" id="" type="submit">Cadastrar</button>
                             </div>
                              <div>
                                <Link to={"/paineldecontrole"}>
                               <button className="bt2" id="" type="">Cancelar</button>
                               </Link>
                              </div>
                        </div>
                      </form>
                   </div>
                  </div>

                <div className="setorb">
                    <div className="graf-title">
                       <p className="nome-h3">Lista de Séries</p> 
                    </div>   
                     <div className="container-graf">
                       <div className="cabec-graf">
                         <div className="col1">
                             <p>cód</p>
                         </div>
                         <div className="col2">
                             <p>Plataforma</p>
                         </div>
                         <div className="col3">
                             <p>Nome</p>
                         </div>
                         <div className="col4">
                            <p>Gênero</p>
                        </div>
                        <div className="col5">
                            <p>Temp</p>
                        </div>
                        <div className="col6">
                            <p>Sinopse</p>
                        </div>
                       </div>
                       <div className="corpo-graf">
                        <div className="col1-1">
                            <p>001</p>
                        </div>
                        <div className="col2-1">
                            <p>Netflix</p>
                        </div>
                        <div className="col3-1">
                            <p>Viking</p>
                        </div>
                        <div className="col4-1">
                           <p>Ação</p>
                       </div>
                       <div className="col5-1">
                           <p>6</p>
                       </div>
                       <div className="col6-1">
                            <p>baseado...</p>
                         </div>
                         <div className="lixeira">
                            <img src="xtreaming-box/src/assets/imgs/trash1.png" alt=""/>
                        </div>
                       </div>
                     </div>
                  </div>
                   
                </div>
            </div>
   
   </Interno>         
  )
}

export default CadastrarSerie;