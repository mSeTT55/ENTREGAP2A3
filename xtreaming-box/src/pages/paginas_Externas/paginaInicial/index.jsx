import '../../../components/Main/Body.css';
import './style.css';
import './styleMobile.css';
import logo from '../../../assets/imgs/logo.png';


function PagInicial(){
    return(
        <body>
            <div className="main">
                <div className="sessao-superior">
                    <img src={logo}className="logo-img" alt="Logotipo do site EXtreamingBox"/>
                </div>
                <div className="sessao-inferior">
                    <div className="esquerda">
                        
                        <div className="texto1">
                            <p>Crie e gerencie sua lista de filmes e séries das plataformas streaming que você possui.</p>
                        </div>
                        
                        <div className="bts-acesso">
                            <p className="texto-membro">JÁ É MEMBRO DO NOSSO BOX</p>
                            <a href="/Login/index.html" className="botoes">ACESSAR AGORA</a>
                            <div className="nome-ou">OU</div>
                            <a href="/Pagina_cadastro_Usuario/index.html" className="botoes">CADASTRE-SE</a>
                        </div>
                    </div>
                    <div className="direita"></div>
                </div>
            </div>
        </body>
    );
}

export default PagInicial;