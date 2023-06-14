import React, {useEffect, useState} from 'react';
import './styleMeuPerfil.css';
import './styleMeuPerfilMobile.css';
import Interno from '../../../layouts/interno.jsx';
import {Link} from 'react-router-dom';


function MeuPerfil (){ 
    const [contaLogada, setContaLogada] = useState([]);
    const pegandoInformacoes = () => {
        const emailFiltrado = localStorage.getItem('emailFiltrado');
        if (emailFiltrado !== null) {
            const contaLogada = JSON.parse(emailFiltrado);
            setContaLogada(contaLogada);
        }
    }
    useEffect(() => {
        pegandoInformacoes();
    }, []);

    return( 
        <Interno>
            <div className="text-botoes">
                <div>
                    <h1 className="minhalista">Perfil: {contaLogada.nome_completo}</h1>
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
                            <a className="bt2Encerrar" id="" type="submit">Encerrar Conta</a>
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