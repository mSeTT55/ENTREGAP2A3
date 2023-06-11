import '../../../layouts/body.css';
import './stylePaginaInicial.css';
import './stylePaginaInicialMobile.css';

import logo from '../../../assets/imgs/logo.png';
import { Link } from 'react-router-dom';


function PagInicial(){
    return(
        <body>
            <div className="main">
            <div className="menu-superior-inicial">
                <div className="text-direita-faleconosco">
                      <h1><Link to={"/contato"} className="text-direita-faleconosco">Fale Conosco</Link></h1>
                    </div>
                </div>
            
                <div className="sessao-superior">
                    <img src={logo}className="logo-img" alt="Logotipo do site EXtreamingBox"/>
                </div>
                <div className="sessao-inferior-paginicial">
                    <div className="esquerda">
                        
                        <div className="texto1">
                            <p>Crie e gerencie sua lista de filmes e séries das plataformas streaming que você possui.</p>
                        </div>
                        
                        <div className="bts-acesso">
                            <p className="texto-membro">JÁ É MEMBRO DO NOSSO BOX</p>
                            <Link to={"/login"} className="botoes">ACESSAR AGORA</Link>
                            <div className="nome-ou">OU</div>
                            <Link to={"/cadastro"} className="botoes">CADASTRE-SE</Link>
                        </div>
                    </div>
                    <div className="direita"></div>
                </div>
            </div>
        </body>
    );
}

export default PagInicial;