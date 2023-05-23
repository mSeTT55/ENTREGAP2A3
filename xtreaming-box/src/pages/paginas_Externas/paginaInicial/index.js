import './style.css';
import './styleMobile.css';
import logo from '../../assets/imgs/logo.png';


function PagInicial(){
    return(
        <body>
            <div class="main">
                <div class="sessao-superior">
                    <img src={logo}class="logo-img" alt="Logotipo do site EXtreamingBox"/>
                </div>
                <div class="sessao-inferior">
                    <div class="esquerda">
                        
                        <div class="texto1">
                            <p>Crie e gerencie sua lista de filmes e séries das plataformas streaming que você possui.</p>
                        </div>
                        
                        <div class="bts-acesso">
                            <p class="texto-membro">JÁ É MEMBRO DO NOSSO BOX</p>
                            <a href="/Login/index.html" class="botoes">ACESSAR AGORA</a>
                            <div class="nome-ou">OU</div>
                            <a href="/Pagina_cadastro_Usuario/index.html" class="botoes">CADASTRE-SE</a>
                        </div>
                    </div>
                    <div class="direita"></div>
                </div>
            </div>
        </body>
    );
}

export default PagInicial;