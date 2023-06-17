import React, { useState } from 'react';
import axios from 'axios';
import './styleSeriesMobile.css';
import './styleSeries.css';
import InternoAdm from '../../../../layouts/internoAdm.jsx';
import { Link } from 'react-router-dom';




const AtualizarSerie = () => {
  //UseState para pegar os dados do formulario, decompor em um array e aplicar cada dado em cada variavel
  const [dadosFormSerie, setdadosFormSerie] = useState({
      
      id_serie:'',
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
          
          id_serie: dadosFormSerie.id_serie,
          plataforma_idplataforma:dadosFormSerie.plataformaid_serie,
          nome: dadosFormSerie.nome_serie, 
          ano: dadosFormSerie.ano_serie,
          genero: dadosFormSerie.genero_serie,
          imagem_serie: dadosFormSerie.imagem_ser,
          temporada: dadosFormSerie.temporada_serie,
          sinopse: dadosFormSerie.sinopse_serie   
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
   
   <InternoAdm>
            <div className="text-botoes">
                <div>
                    <h1 id='editarperfil'  className="minhalista">Séries</h1>
                </div>
   
            </div>
            <div className="conteiner-maior">
                <div className="caixa-itens-up-ser">
                    <div className="setor-a">
                    <div>
                       <p className="nome-h2">Atualizar</p>
                     </div>
                     <div className="itens-tab">
                       <form onSubmit={(pegarCada) => formSumbit(pegarCada)}>
                          
                          <div className="input-box">
                            <input type="text" name="idserie" id="idSerie" placeholder="   Digite o gênero da série"
                            required value={dadosFormSerie.genero_serie}
                            onChange={(pegarCada) => setdadosFormSerie({ ...dadosFormSerie, genero_serie: pegarCada.target.value })}/>
                        </div>
                        <div className="input-box">
                            <input type="text" name="idplataforma" id="idplataforma" placeholder="   Digite o gênero da série"
                            required value={dadosFormSerie.genero_serie}
                            onChange={(pegarCada) => setdadosFormSerie({ ...dadosFormSerie, genero_serie: pegarCada.target.value })}/>
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
                              
                </div>
            </div>
   
   </InternoAdm>         
  )
}

export default AtualizarSerie;