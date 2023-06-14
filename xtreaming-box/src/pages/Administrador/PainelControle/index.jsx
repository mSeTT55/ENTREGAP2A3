import React from 'react';
import './stylePainelcontrole.css';
import './stylePainelcontroleMobile.css';
import InternoAdm from '../../../layouts/internoAdm.jsx';
import { Link } from 'react-router-dom';

function PainelControle() {
  return (
   
   <InternoAdm>
            <div class="text-botoes">
                <div>
                    <h1 id='editarperfil'  class="minhalista">Painel de Controle</h1>
                </div>
            </div>  
                <div class="conteiner-maior">
                <div class="caixa-itens">
                    <div class="setor-a">
                    <div>
                    <div>
                       <p class="nome-h2-pnl">Novo</p>
                     </div>
                     <div class="itens-tab">
                            <div> 
                            <p class="nome-h2-pnl">Cadastrar</p>  
                            </div>
                        <div class="linha1"> 
                         
                            <div> 
                                <Link to= "/cadastrarseries">
                                <button class="bt1" id="">SÉRIES</button>
                                </Link>
                            </div>
                            <div> 
                                <Link to= "/cadastrarplataforma">
                                <button class="bt1" id="" onclick="mudarPagina2()">PLATAFORMAS</button>
                                </Link>
                            </div>
                         </div> 
                         <br/>
                         <div class="cont-dados">
                            <div class="tab-title">
                                <p class="format-p-tit"> Indicadores</p>
                            </div>
                            <div class="tab-1">
                                <div class="tab-1-1">
                                    <p class="format-p-tit">QTD de Séries:  </p>
                                </div>
                                <div class="tab-1-2">
                                    <p class="format-p-tit">47</p>
                                </div>
                            </div> 
                             <div class="tab-1">
                                <div class="tab-1-1">
                                    <p class="format-p-tit"> QTD de Plataformas:  </p>
                                </div>
                                <div class="tab-1-2">
                                    <p class="format-p-tit"> 67</p>
                                </div>
                            </div>  
                        </div>

                    </div>
                       </div>                         
                    </div>
                    
                    <div class="setorb">
                       <div class="graf-title">
                          <p class="nome-h3">Lista de Mensagem</p> 
                       </div>   
                        <div class="container-graf">
                          <div class="cabec-graf">
                            <div class="col1">
                                <p>cód</p>
                            </div>
                            <div class="col2">
                                <p>Nome</p>
                            </div>
                            <div class="col3">
                                <p>Email</p>
                            </div>
                            <div class="col4">
                                <p>Mensagem</p>
                            </div>
                          </div>
                          <div class="corpo-graf">
                            <div class="col1-1">
                                <p>001</p>
                            </div>
                            <div class="col2-1">
                                <p>  Mario Bros</p>
                            </div>
                            <div class="col3-1">
                                <p>brotherprincess@...</p>
                             </div>   
                                <div class="col4-1">
                                    <p>Baseaado em fatos...</p>
                                </div>
                                <div class="lixeira">
                                    <img src="/imgs/trash1.png" alt=""/>
                                </div>
                            </div>
                          </div>
                        </div>
                     </div>
                    </div>
           
   
   </InternoAdm>         
  )
}

export default PainelControle