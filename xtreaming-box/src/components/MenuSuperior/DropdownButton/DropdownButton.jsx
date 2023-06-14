import React, { useContext, useState } from 'react';
import '../MenuSuperior.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/Auth/AuthContext';

function DropdownMenu() {
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
      <div className="dropdown">
        <button onClick={toggleDropdown}>MINHA CONTA</button>
        {isOpen && (
          <div id="dropdown-content" class="dropdown-content">
            <NavLink to={"/perfil"} >Perfil</NavLink>
            <a onClick={btnLogout}>Sair</a>
          </div>
        )}
      </div>
    );
}

export default DropdownMenu;


