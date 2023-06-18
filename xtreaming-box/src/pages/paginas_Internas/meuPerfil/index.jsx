import React, {useEffect, useState} from 'react';
import './styleMeuPerfil.css';
import './styleMeuPerfilMobile.css';
import Interno from '../../../layouts/interno.jsx';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

function MeuPerfil (){ 
    const navigate = useNavigate();

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


    // Deletar usuário
    const deleteUser = async () => {
        const config = {
            headers: {
            'Content-Type': 'application/json'
            }
        };
        
        const montandoDados = {
            idusuario: contaLogada.idusuario 
        };
        
        try {
            const response = await axios.delete(`http://localhost:5000/usuario/delete/${montandoDados.idusuario}`, {
                data: JSON.stringify(montandoDados), headers: config.headers});
            if(response.status === 200){
                localStorage.clear();
                alert('Usuário deletado com sucesso, você será redirecionado para a página de cadastro caso mude de ideia.');
                navigate('/cadastro');
            } else{
                alert('Erro ao tentar deletar seu usuário, favor tente novamente ou entre em contato com nosso suporte.');
                navigate('/contato');
            }
        }
        catch (error) {
            console.error(error);
        }
    }

    // Pergunta se o usuário quer mesmo deletar a conta
    const [exibindoAlerta, setexibindoAlerta] = useState('none');
    const alerta = () => {
        if (exibindoAlerta === 'flex') {
            setexibindoAlerta('none');
        } 
        else {
            setexibindoAlerta('flex');
        }
    }
   
    return( 
        <Interno>
            <div className="text-botoes">
                <div>
                    <h1 className="minhalista">Perfil </h1>
                </div>
                <div>
                </div>
            </div>
            <div className="conteiner-maior">
                <div className="caixa-itens">
                    <div className="esquerda-caixa">
                        <div>
                            <p className="nome-h2">Meus Dados</p>
                        </div>
                        <div className="linhauser">
                            <div className="texto-user">
                                <p className="marg-para">Nome Completo:</p>
                            </div>
                            <div className="texto-user">
                                <p className="marg-para">{contaLogada.nome_completo}</p>
                            </div>
                        </div>
                        <div className="linhaemail">
                            <div className="texto-user">
                                <p>Email:</p>
                            </div>
                            <div className="texto-user">
                                <p className="marg-text">{contaLogada.email}</p>
                            </div> 
                        </div>
                        <div className="linhabtn">
                            <Link className="bt1Editar" to={"/editarperfil"}>
                                <a id="" type="submit">Editar Perfil</a>
                            </Link>
                            <a className="bt2Encerrar" onClick={alerta} type="submit">Encerrar Conta</a>
                        </div>

                        <div className='deleteUser' style={{ display: exibindoAlerta, flexDirection: 'column' }}>
                            <p className="aviso">Tem certeza que deseja deletar o seu usuário?</p>
                            <div className="linhabtn">
                                <a className="bt1Editar" onClick={deleteUser} type="submit">SIM</a>
                                <a className="bt2Encerrar" onClick={alerta} type="submit">Não</a>
                            </div>
                        </div>
                    </div>
                    <div className="direita-caixa">
                    </div>
                </div>
            </div>
        </Interno>
    );
}

export default MeuPerfil;