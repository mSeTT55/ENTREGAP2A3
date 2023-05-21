import React, { useState } from 'react';
import '../MenuSuperior/MenuSuperior.css';


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
            <a href="/perfil/index.html">Perfil</a>
            <a href="/Pag_inicial/index.html">Sair</a>
          </div>
        )}
      </div>
    );
}

export default DropdownMenu;


