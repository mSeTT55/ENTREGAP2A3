import React from 'react';
import './stylePainelcontrole.css';
import './stylePainelcontroleMobile.css';
import InternoAdm from '../../../layouts/internoAdm.jsx';
import { Link } from 'react-router-dom';

function PainelControle() {
  return (
   
   <InternoAdm>
            <div className="text-botoes">
                <div>
                    <h1 id='editarperfil'  className="minhalista">Painel de Controle</h1>
                </div>
            </div>  
                <div className="conteiner-maior">
                <div className="caixa-itens-pnl">
                    <div className="setor-a-pnl">
                        <div className="itens-total-pnl">
                                <div> 
                                <p className="nome-h2-pnl">Cadastrar</p>  
                                </div>
                            <div className="linha1-pnl"> 
                            
                                
                                    <Link className='form-link' to= "/cadastrarseries">
                                    <button className="bt1-pnl" id="">SÉRIES</button>
                                    </Link>
                                
                                
                                    <Link className='form-link' to= "/cadastrarplataforma">
                                    <button className="bt1-pnl" id="" onclick="mudarPagina2()">PLATAFORMAS</button>
                                    </Link>
                                
                            </div> 
                            <br/>
                            

                        </div>
                        <div className="itens-total-pnl">
                                <div> 
                                <p className="nome-h2-pnl">Atualizar</p>  
                                </div>
                            <div className="linha1-pnl"> 
                            
                                 
                                    <Link className='form-link' to= "/cadastrarseries">
                                    <button className="bt1-pnl" id="">SÉRIES</button>
                                    </Link>
                                
                                
                                    <Link className='form-link' to= "/cadastrarplataforma">
                                    <button className="bt1-pnl" id="" onclick="mudarPagina2()">PLATAFORMAS</button>
                                    </Link>
                                
                            </div> 
                            <br/>
                            

                        </div>
                        <div className="itens-total-pnl">
                                <div> 
                                <p className="nome-h2-pnl">Deletar</p>  
                                </div>
                            <div className="linha1-pnl"> 
                            
                                
                                    <Link className='form-link' to= "/cadastrarseries">
                                    <button className="bt1-pnl" id="">SÉRIES</button>
                                    </Link>
                                
                                
                                    <Link className='form-link' to= "/cadastrarplataforma">
                                    <button className="bt1-pnl" id="" onclick="mudarPagina2()">PLATAFORMAS</button>
                                    </Link>
                                
                            </div> 
                            <br/>
                            

                        </div>
                        <div className="itens-total-pnl">
                                <div> 
                                <p className="nome-h2-pnl">Caixa de mensagens</p>  
                                </div>
                            <div className="linha1-pnl"> 
                            
                                
                                    <Link className='form-link' to= "/cadastrarseries">
                                    <button className="bt1-pnl" id="">Ler Mensagens</button>
                                    </Link>
                                
                                
                    </div> 
                            <br/>
                            

                        </div>
                    </div>
                    
                    
                     </div>
                    </div>
           
   
   </InternoAdm>         
  )
}

export default PainelControle