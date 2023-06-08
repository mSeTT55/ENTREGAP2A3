import React, { useState } from 'react';
import '../MenuSuperiorMobileAdm.css';
import { NavLink } from 'react-router-dom';


function DropdownButtonMobileAdm() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="dropdown">
        <button onClick={toggleDropdown}>ADMINISTRADOR</button>
        {isOpen && (
          <div id="dropdown-content2" className="dropdown-content2">
            <NavLink to={"/series"}>Séries</NavLink>
            <NavLink to={"/minhalista"}>Minha Lista</NavLink>
            <NavLink to={"/paineldecontrole"}>Painel de Controle</NavLink>
            <NavLink to={"/perfil"}>Perfil</NavLink>
            <NavLink>Sair</NavLink>
          </div>
        )}
      </div>
    );
}

export default DropdownButtonMobileAdm;

/*
<div>
  <button onclick="dropdown2()" className="dropbtn2">MINHA CONTA</button>
  <div id="dropdown-content2" className="dropdown-content2">
      <a href="/Séries/index.html">Séries</a>
      <a href="/Minha_Lista/index.html">Minha Lista</a>
      <a href="/Contato/index.html">Contato</a>
      <a href="/perfil/index.html">Perfil</a>
      <a href="/Pag_inicial/index.html">Sair</a>
  </div>
</div> 
*/