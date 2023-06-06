import './stylecadastreSe.css';
import './stylecadastreSeMobile.css';
import logo from '../../../assets/imgs/logo.png';
import { useState } from 'react';
import axios from 'axios';


const cadastreSe = () => {

    const [nomeCompleto, setNomeCompleto] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [repeteSenha, setRepeteSenha] = useState('')


    axios.post('http://localhost:5000/users/post/new', cadastro)
        .then(
            () => {
                setNomeCompleto('')
                setEmail('')
                setSenha('')
            }
        ).catch(
           () =>{
                console.log('Deu erro cajazeirense!')
           } 
        )



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
                    <div id="esquerda-text-botoes-cadastro">
                        <h1 id="minhalista" className="minhalista">Cadastro de usuário</h1>
                    </div>
                    <div id="direita-text-botoes">
                    </div>
                </div>
                <div className="conteiner-maior">
                    <div className="caixa-itens">
                        <form className="esquerda-form" id="esquerda-form" onsubmit="">
                            <label className="label-cadastro" for="nome">Nome Completo</label>
                            <input className="input-cadastro" type="text" id="edit_sobren" placeholder="Digite seu nome completo" value={nomeCompleto} onChange={setNomeCompleto} />
                            <label className="label-cadastro"  for="email">E-mail</label>
                            <input className="input-cadastro" type="email" name="email"  placeholder="Digite um e-mail válido" value={email} onChange={setEmail}/>
                            <label className="label-cadastro"  for="senha">Senha</label>
                            <input className="input-cadastro" type="password" name="senha" id="" placeholder="Digite sua senha" value={senha} onChange={setSenha}/>
                            <label className="label-cadastro"  for="repetir">Repetir Senha</label>
                            <input className="input-cadastro" type="password" name="repitirsenha" id="" placeholder="Confirme a sua senha" value={repeteSenha} onChange={setRepeteSenha}/>
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