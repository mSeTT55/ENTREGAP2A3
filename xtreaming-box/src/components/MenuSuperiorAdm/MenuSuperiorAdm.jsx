import './MenuSuperiorAdm.css';
import './MenuSuperiorMobileAdm.css';
import DropdownMenuAdm from './DropdownButton/DropdownButtonAdm.jsx';
import DropdownMenuMobileAdm from './DropdownButton/DropdownButtonMobileAdm.jsx';
import logo from '../../assets/imgs/logo.png';

import { NavLink } from 'react-router-dom';



function MenuSuperiorAdm() {
    return (
        <div className="menu-superior-adm">
            <div className="img-text-adm">
                <div className="img-esquerda-adm">
                    <img className="img-logo-adm" src={logo} alt="Imagem da Logo"/>     
                </div>
                <div className="text-direita-adm">
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
            <div className="usuario-adm">
                <DropdownMenuAdm />
            </div>
            <div className="usuario2-adm">
                <DropdownMenuMobileAdm />   
            </div>
        </div>
    );
}

export default MenuSuperiorAdm;


