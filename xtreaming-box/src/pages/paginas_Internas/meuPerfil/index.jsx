import React from 'react';
import './style.css';
import './styleMobile.css';
import Interno from '../../../layouts/interno.jsx';


function MeuPerfil (){ 
    return( 
        <Interno>
            <div className="text-botoes">
                <div>
                    <h1 className="minhalista">Perfil</h1>
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
                        <div className="linha1">
                            <div className="text-user">
                                <p className="marg-para">Nome:</p>
                            </div>
                            <div className="text-user">
                                <p className="marg-para">Usuário Teste</p>
                            </div>
                        </div>
                        <div className="linha2">
                            <div className="text-user">
                                <p>Email:</p>
                            </div>
                            <div className="text-user">
                                <p className="marg-text">usuario_234@gmail.com</p>
                            </div> 
                        </div>
                        <div className="linha3">
                            <a className="bt1" id="" type="submit">Editar Perfil</a>
                            <a className="bt2" id="" type="submit">Encerrar Conta</a>
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