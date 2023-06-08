import './MenuSuperiorAdm.css';
import './MenuSuperiorMobileAdm.css';
import DropdownMenuAdm from './DropdownButton/DropdownButtonAdm.jsx';
import DropdownMenuMobileAdm from './DropdownButton/DropdownButtonMobileAdm.jsx';
import logo from '../../assets/imgs/logo.png';

import { NavLink } from 'react-router-dom';



function MenuSuperiorAdm() {
    return (
        <div className="menu-superior">
            <div className="img-text">
                <div className="img-esquerda">
                    <img className="img-logo" src={logo} alt="Imagem da Logo"/>     
                </div>
                <div className="text-direita">
                    <NavLink 
                    className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                    to={"/series"}>SÉRIES</NavLink>
                    <NavLink 
                    className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                    to={"/minhalista"}>MINHA LISTA</NavLink>
                    <NavLink 
                    className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                    to={"/paineldecontrole"}>PAINEL DE CONTROLE</NavLink>
                   
                </div>
            </div>
            <div className="usuario">
                <DropdownMenuAdm />
            </div>
            <div className="usuario2">
                <DropdownMenuMobileAdm />   
            </div>
        </div>
    );
}

export default MenuSuperiorAdm;


