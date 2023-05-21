import './MenuSuperior.css';
import './MenuSuperiorMobile.css';

import logo from '../../assets/imgs/logo.png';


    //Menu dropdown no button
   
function MenuSuperior() {
    return (
        <div class="menu-superior">
            <div class="img-text">
                <div class="img-esquerda">
                    <img class="img-logo" src={logo} alt="Imagem da Logo"/>     
                </div>
                <div class="text-direita">
                    <a href="#">SÉRIES</a>
                    <a href="#">MINHA LISTA</a>
                    <a href="#">CONTATO</a>
                </div>
            </div>
            <div class="usuario">
                <div>
                    <button onclick='Dropdown()' class="dropbtn">MINHA CONTA</button>
                    <div id="dropdown-content" class="dropdown-content">
                        <a href="/perfil/index.html">Perfil</a>
                        <a href="/Pag_inicial/index.html">Sair</a>
                    </div>
                </div>    
            </div>
            <div class="usuario2">
                <div>
                    <button onclick="dropdown2()" class="dropbtn2">MINHA CONTA</button>
                    <div id="dropdown-content2" class="dropdown-content2">
                        <a href="/Séries/index.html">Séries</a>
                        <a href="/Minha_Lista/index.html">Minha Lista</a>
                        <a href="/Contato/index.html">Contato</a>
                        <a href="/perfil/index.html">Perfil</a>
                        <a href="/Pag_inicial/index.html">Sair</a>
                    </div>
                </div>    
            </div>
        </div>

    );
}

export default MenuSuperior;


