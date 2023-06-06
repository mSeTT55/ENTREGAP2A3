import React, { useState } from 'react';
import '../MenuSuperior.css';
import { NavLink } from 'react-router-dom';


function DropdownMenu() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="dropdown">
        <button onClick={toggleDropdown}>MINHA CONTA</button>
        {isOpen && (
          <div id="dropdown-content" class="dropdown-content">
            <NavLink to={"/perfil"} >Perfil</NavLink>
            <NavLink>Sair</NavLink>
          </div>
        )}
      </div>
    );
}

export default DropdownMenu;


