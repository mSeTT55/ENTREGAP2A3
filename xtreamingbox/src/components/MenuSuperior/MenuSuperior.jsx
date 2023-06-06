import './MenuSuperior.css';
import './MenuSuperiorMobile.css';
import DropdownMenu from './DropdownButton/DropdownButton';
import DropdownMenuMobile from './DropdownButton/DropdownButtonMobile';
import logo from '../../assets/imgs/logo.png';

import { NavLink } from 'react-router-dom';



function MenuSuperior() {
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
                    to={"/contato"}>CONTATO</NavLink>
                </div>
            </div>
            <div className="usuario">
                <DropdownMenu />
            </div>
            <div className="usuario2">
                <DropdownMenuMobile />   
            </div>
        </div>
    );
}

export default MenuSuperior;


