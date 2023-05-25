import '../../../components/MenuSuperior/MenuSuperior.css';
import '../../../components/ConteudoPrincipal/ConteudoPrincipal.css';
import './style.css';
import './styleMobile.css';
import logo from '../../../assets/imgs/logo.png';


function cadastreSe(){
    return(
        <div className="main">
            <div className="menu-superior">
                    <div className="img-esquerda" id='img-esquerda'>
                    <img className="img-logo" src={logo} alt="Imagem da Logo"/>   
                    </div>
                    <div className="menu-text">
                        <p>Seu Gerenciador de Lista de séries</p>
                    </div>
            </div>
            {/*Aqui termina toda parte do menu superior*/}
            <div className="conteudo-principal-lista" id="conteudoprincipalLista">
                <div className="text-botoes">
                    <div id="minhalista">
                        <h1>Cadastro do Usuário</h1>
                    </div>
                </div>
                <div className="conteiner-maior">
                    <div className="caixa-itens">
                        <form className="esquerda-form" id="esquerda-form" onsubmit="">
                            <label for="nome">Nome Completo</label>
                            <input type="text" name="sobrenome" id= "edit_sobren" placeholder="Digite seu sobrenome"/>
                            <label for="email">E-mail</label>
                            <input type="email" name="email" id="" placeholder="Digite um e-mail válido"/>
                            <label for="senha">Senha</label>
                            <input type="password" name="senha" id="" placeholder="Digite sua senha"/>
                            <label for="repetir">Repetir Senha</label>
                            <input type="password" name="repitirsenha" id="" placeholder="Confirme a sua senha"/>
                            <div className="conect">
                                <p>Já tem uma conta</p>
                                <a href="/Login/index.html">Conecte-se</a>
                            </div>
                            <div className="termo">
                                <input className="check" type="checkbox" name="termo"/>
                                <p>Declaro que as informações fornecidas são completas, verdadeiras, sendo total
                                responsabilidade do USUÁRIO.</p>
                            </div>
                            <div className="bt1">
                                <button id="enviar_cad" type="submit">CRIAR CONTA</button>
                            </div>
                        </form>
                        <div className="direita-form">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default cadastreSe;