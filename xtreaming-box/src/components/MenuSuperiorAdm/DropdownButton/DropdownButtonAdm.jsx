import React, { useState } from 'react';
import '../MenuSuperiorAdm.css';
import { NavLink } from 'react-router-dom';


function DropdownMenuAdm() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="dropdown-adm">
        <button onClick={toggleDropdown}>ADMINISTRADOR</button>
        {isOpen && (
          <div id="dropdown-content-adm" class="dropdown-content-adm">
            <NavLink to={"/perfil"} >Perfil</NavLink>
            <NavLink to={"/paineldecontrole"} >Painel de Controle</NavLink>
            <NavLink>Sair</NavLink>
          </div>
        )}
      </div>
    );
}

export default DropdownMenuAdm;


