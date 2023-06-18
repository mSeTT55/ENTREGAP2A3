import React, { useContext, useState } from 'react';
import '../MenuSuperiorAdm.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/Auth/AuthContext';


function DropdownMenuAdm() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const btnLogout = async () => {
      await auth.sair();
      navigate('/');
    } 
  
    return (
      <div className="dropdown-adm">
        <button onClick={toggleDropdown}>ADMINISTRADOR</button>
        {isOpen && (
          <div id="dropdown-content-adm" class="dropdown-content-adm">
            <NavLink to={"/perfil"} >Perfil</NavLink>
            <NavLink to={"/paineldecontrole"} >Painel de Controle</NavLink>
            <a onClick={btnLogout}>Sair</a>
          </div>
        )}
      </div>
    );
}

export default DropdownMenuAdm;


