import React from 'react';
import './styleplataformaMobile.css';
import './styleplataforma.css';
import Interno from '../../../layouts/interno.jsx';
import ConteudoPagina from '../../../components/CadastarPlataforma/ConteudoPagina'



function CadastrarPlataforma() {
  return (
   
   <Interno>
            <div class="text-botoes">
                <div>
                    <h1 id='editarperfil'  class="minhalista">Cadastrar Plataforma</h1>
                </div>
   
            </div>
            <ConteudoPagina/>
   </Interno>         
  )
}

export default CadastrarPlataforma