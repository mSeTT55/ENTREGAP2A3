import './MenuSuperior.css';
import './MenuSuperiorMobile.css';
import DropdownMenu from '../DropdownButton/DropdownButton';
import DropdownMenuMobile from '../DropdownButton/DropdownButtonMobile';

import logo from '../../assets/imgs/logo.png';


function MenuSuperior() {
    return (
        <div className="menu-superior">
            <div className="img-text">
                <div className="img-esquerda">
                    <img className="img-logo" src={logo} alt="Imagem da Logo"/>     
                </div>
                <div className="text-direita">
                    <a href="#">SÉRIES</a>
                    <a href="#">MINHA LISTA</a>
                    <a href="#">CONTATO</a>
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


