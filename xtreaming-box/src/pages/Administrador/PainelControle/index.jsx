import React from 'react';
import './stylePainelcontrole.css';
import './stylePainelcontroleMobile.css';
import InternoAdm from '../../../layouts/internoAdm.jsx';
import ConteudoPagina from '../../../components/PaineldeControle/ConteudoPagina'

function PainelControle() {
  return (
   
   <InternoAdm>
            <div class="text-botoes">
                <div>
                    <h1 id='editarperfil'  class="minhalista">Painel de Controle</h1>
                </div>
               
            </div>
            <ConteudoPagina/>
   
   </InternoAdm>         
  )
}

export default PainelControle