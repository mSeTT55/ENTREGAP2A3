import React from 'react';
import './styleSeriesMobile.css';
import './styleSeries.css';
import Interno from '../../../layouts/interno.jsx';
import ConteudoPagina from '../../../components/CadastarSeries/ConteudoPagina';

function CadastrarSeries() {
  return (
   
   <Interno>
            <div class="text-botoes">
                <div>
                    <h1 id='editarperfil'  class="minhalista">Cadastrar Séries</h1>
                </div>
                
            </div>
            <ConteudoPagina/>
   
   </Interno>         
  )
}

export default CadastrarSeries