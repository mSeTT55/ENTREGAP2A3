import React from 'react'
import MenuSuperior from '../../componetes/MenuSuperior'
import TituloPagina from '../../componetes/TituloPagina'
import "./style.css"
import CPlataformas from '../../componetes/CPlataformas'


function CadastrarPlataforma() {
  return (
    <div>
     <MenuSuperior/>
     <TituloPagina titulo="Cadastrar Plataformas"/>
     <CPlataformas/>
     </div>
     
  )
}

export default CadastrarPlataforma