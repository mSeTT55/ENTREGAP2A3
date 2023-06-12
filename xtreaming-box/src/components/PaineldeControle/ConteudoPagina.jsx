import React, { Component } from 'react'


export default class ConteudoPagina extends Component {
  render() {
    return (
      <div class="conteiner-maior">
      <div class="caixa-itens">
          <div class="setor-a">
          <div>
          <div>
             <p class="nome-h2">Novo</p>
           </div>
           <div class="itens-tab">
              <div class="linha1">    
                  <div> 
                      <button class="bt1" id="" onclick="mudarPagina1()">CADASTRAR SÉRIES</button>
                  </div>
                  <div> 
                      <button class="bt1" id="" onclick="mudarPagina2()">CADASTRAR PLATAFORMAS</button>
                  </div>
               </div> 
               <br/>
               <div class="cont-dados">
                  <div class="tab-title">
                      <p class="format-p-tit"> Indicadores</p>
                  </div>
                  <div class="tab-1">
                      <div class="tab1-1">
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
                          <img src="src\assets\imgs\trash1.png" alt=""/>
                      </div>
                  </div>
                </div>
              </div>
           </div>
          </div>
 
    )
  }
}
