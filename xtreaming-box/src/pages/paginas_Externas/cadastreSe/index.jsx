import './stylecadastreSe.css';
import './stylecadastreSeMobile.css';
import logo from '../../../assets/imgs/logo.png';
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const CadastreSe = () => {
       
        //UseState para pegar os dados do formulario, decompor em um array e aplicar cada dado em cada variavel
        const [dadosForm, setDadosForm] = useState({
            nome_completo: '', 
            email: '', 
            senha: '', 
            confirm_senha: '' 
        });
        
        //Criando verificacao se as senhas são iguais
        const senhasiguais = () => {
            if (dadosForm.senha !== dadosForm.confirm_senha) {
            alert('A senha e a confirmação de senha não correspondem.');
            return false;
            }
            
            return true;
        };

        const formSumbit = async (pegarCada) => {
            //Cancelando o comportamento padrão de recarregar a pagina
            pegarCada.preventDefault();
            
            //montando os dados do array
            const montandoDados = {
                nome_completo: dadosForm.nome_completo, 
                email: dadosForm.email, 
                senha: dadosForm.senha, 
                confirm_senha: dadosForm.confirm_senha
            };

            
            // Indicando ao AXIOS que os dados são em JSON
            const config = {
                headers: {
                'Content-Type': 'application/json'
                }
            };

            //Usando a validacao de senha
            if (!senhasiguais()) {
                return;
            }
            
            //Teste para verificar se usuário existe no sistema
            try {
                const verificaSeUsuarioExiste = await axios.get('http://localhost:5000/usuario/get/all', config);
                const filtered = verificaSeUsuarioExiste.data.filter(obj => {
                    return obj.email === dadosForm.email;
                        
                }); 
                
                if (filtered.length > 0){
                    alert('Este e-mail já está cadastrado, favor tentar login ou entrar em contato com o suporte.');
                } else {
                    // Cadastrando Usuário caso não exista usuário cadastrado
                    try {
                        const response = await axios.post('http://localhost:5000/usuario/post/novo', montandoDados, config);
                        console.log(response.data);
                        if(response.status === 200){
                            alert('Usuário cadastrado com sucesso.');
                        
                        } else{
                            alert('Erro ao cadastrar o usuário tente novamente.');
                        }
                    }
                    catch (error) {
                        console.error(error);
                    }        
                }
            } 
            catch (error) {
                console.error(error);
            }           
        };
    
    return(
        <div className="main">
            <div className="menu-superior">
                    <div className="img-esquerda" id='img-esquerda'>
                        <Link to={"/"} >
                            <img className="img-logo" src={logo} alt="Imagem da Logo"/>
                        </Link>       
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
                        <form className="esquerda-form" id="esquerda-form" onSubmit={(pegarCada) => formSumbit(pegarCada)}>
                            <label className="label-cadastro" for="nome">Nome Completo</label>
                            <input
                                required
                                className="input-cadastro" 
                                type="text"
                                placeholder="Digite seu nome completo"

                                value={dadosForm.nome_completo}
                                onChange={(pegarCada) => setDadosForm({ ...dadosForm, nome_completo: pegarCada.target.value })}   
                            />

                            <label className="label-cadastro">E-mail</label>
                            
                            <input
                                required
                                className="input-cadastro" 
                                type="email" name="email"  
                                placeholder="Digite um e-mail válido"

                                value={dadosForm.email}
                                onChange={(pegarCada) => setDadosForm({ ...dadosForm, email: pegarCada.target.value })}  
                            />

                            <label className="label-cadastro">Senha</label>

                            <input
                                required 
                                className="input-cadastro" 
                                type="password" name="senha" 
                                placeholder="Digite sua senha"

                                value={dadosForm.senha}
                                onChange={(pegarCada) => setDadosForm({ ...dadosForm, senha: pegarCada.target.value })}  
                            />

                            <label className="label-cadastro">Repetir Senha</label>
                            
                            <input
                                required 
                                className="input-cadastro" 
                                type="password" name="repitirsenha" 
                                placeholder="Confirme a sua senha"

                                value={dadosForm.confirm_senha}
                                onChange={(pegarCada) => setDadosForm({ ...dadosForm, confirm_senha: pegarCada.target.value })} 

                            />
                            <div className="conect">
                                <p>Já tem uma conta</p>
                                <Link className='conecte_se' to={"/login"}>Conecte-se</Link>
                            </div>
                            <div className="termo">
                                <input className="check" type="checkbox" name="termo" required/>
                                <p>Declaro que as informações fornecidas são completas, verdadeiras, sendo total
                                responsabilidade do USUÁRIO.</p>
                            </div>
                            <div className="bt1">
                                <button type="submit">CRIAR CONTA</button>
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


export default CadastreSe;