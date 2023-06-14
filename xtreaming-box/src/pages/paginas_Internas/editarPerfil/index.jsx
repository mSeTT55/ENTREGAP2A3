import React, {useEffect, useState} from 'react';
import './styleEditarPerfil.css';
import './EditarPerfilMobile.css';
import Interno from '../../../layouts/interno.jsx';
import axios from 'axios';

function EditarPerfil (){

    //Criando useState para armazenar dados do array do local Storage
    const [contaLogada, setContaLogada] = useState([]);

    //Função que pega informações de login que foram armazenadas no local storage
    const pegandoInformacoes = () => {
        const emailFiltrado = localStorage.getItem('emailFiltrado');
        if (emailFiltrado !== null) {
            const contaLogada = JSON.parse(emailFiltrado);
            setContaLogada(contaLogada);
        }
    }
    
    //useEffect utilizado para executar a função de pegar os dados do local storage
    useEffect(() => {
        pegandoInformacoes();
    }, []);


    //UseState para pegar os dados do formulario, decompor em um array e aplicar cada dado em cada variavel
    const [dadosForm, setDadosForm] = useState({
        nome_completo: '', 
        email: '', 
        senha: '', 
        confirm_senha: '' 
    });

    const formSumbit = async (pegarCada) => {
        //Cancelando o comportamento padrão de recarregar a pagina
        pegarCada.preventDefault();

        //montando os dados do array
        const montandoDados = {
            nome_completo: dadosForm.nome_completo || contaLogada.nome_completo, 
            email: dadosForm.email || contaLogada.email, 
            senha: dadosForm.senha || contaLogada.senha, 
            confirm_senha: dadosForm.senha || contaLogada.senha,
            idusuario: contaLogada.idusuario
        };

        // Indicando ao AXIOS que os dados são em JSON
        const config = {
            headers: {
            'Content-Type': 'application/json'
            }
        };
        
        try {
            const response = await axios.put(`http://localhost:5000/usuario/update/${montandoDados.idusuario}`, montandoDados, config);
            if(response.status === 200){
                localStorage.setItem('emailFiltrado', JSON.stringify(montandoDados));
                alert('Usuário atualizado com sucesso.');
            } else{
                alert('Erro ao tentar atualizar seu usuário, favor tente novamente ou entre em contato com nosso suporte.');
            }
        }
        catch (error) {
            console.error(error);
        }
    }



    return(
        <Interno>
            <div class="text-botoes">
                <div>
                    <h1 id='editarperfil'  class="minhalista">Editar Perfil</h1>
                </div>
                <div>
                </div>
            </div>
            <div class="conteiner-maior">
                <div id='caixa-itens-editarperfil' class="caixa-itens">
                    <div>
                        <p class="nome-DadosPessoais">Dados Pessoais</p>
                    </div>
                    <div class="itens-tab">
                        <form onSubmit={(pegarCada) => formSumbit(pegarCada)}>
                            <div class="inputs">
                                <input 
                                    class="entradasdetexto" 
                                    type="text" 
                                    name="nome" 
                                    id= "edit_nome" 
                                    placeholder={contaLogada.nome_completo}
                                    onChange={(pegarCada) => setDadosForm({ ...dadosForm, nome_completo: pegarCada.target.value })}
                                />
                            </div>
                            <div class="inputs">
                                <input 
                                    class="entradasdetexto" 
                                    type="email" 
                                    name="email" 
                                    id="" 
                                    placeholder={contaLogada.email}
                                    onChange={(pegarCada) => setDadosForm({ ...dadosForm, email: pegarCada.target.value })}
                                />
                            </div>
                                <button class="bt1submit" type="submit">Confirmar</button>                            
                        </form>
                    </div>
                    <div>



                        <p class="nome-h2">Trocar Senha</p>
                    </div>                            
                    <div class="itens-tab">
                        <form onSubmit={(pegarCada) => formSumbit(pegarCada)}>  
                            <div class="inputs">
                                <input 
                                    class="entradasdetexto" 
                                    type="password" 
                                    name="novasenha" 
                                    id= "edit_novasenha" 
                                    placeholder="Nova Senha"
                                    onChange={(pegarCada) => setDadosForm({ ...dadosForm, senha: pegarCada.target.value })}
                                />
                            </div>                         
                                <button class="bt1submit" id="" type="submit">Confirmar</button>
                        </form> 
                    </div>
                </div>
            </div>
        </Interno>
    );
}

export default EditarPerfil;