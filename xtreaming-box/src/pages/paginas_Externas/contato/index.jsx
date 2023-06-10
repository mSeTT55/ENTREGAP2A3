import React, { useState } from 'react';
import './styleContato.css';
import './styleContatoMobile.css';
import logo from '../../../assets/imgs/logo.png';



const Contato = () => {
    //UseState para pegar os dados do formulario, decompor em um array e aplicar cada dado em cada variavel
    const [dadosFormCont, setdadosFormCont] = useState({
        nome_contato: '', 
        email_contato: '', 
        mensagem_contato: '' 
        
    });

    const formSumbit = async (pegarCada) => {
        //Cancelando o comportamento padrão de recarregar a pagina
        pegarCada.preventDefault();
        
        //montando os dados do array
        const montandoDados = {
            nome_contato: dadosFormCont.nome_contato, 
            email_contato: dadosFormCont.email_contato,
            mensagem_contato: dadosFormCont.mensagem_contato 
            
        };
    }
    return(
        <div className="main">
            <div className="menu-superior">
                <div className="img-text">
                    <div className="img-esquerda">
                        <img className="img-logo" src={logo} alt="Imagem da Logo"/>     
                    </div>
                    <div className="text-direita-contato">
                        <h1>Contato</h1>
                    </div>
                </div>
            </div>
            {/*Aqui termina toda parte do menu superior*/}
            <div className="conteudo-principal-lista" id="conteudoprincipalLista">
                <div className="text-botoes-contato">
                    <div>
                        <p className="title1">Deixe aqui sua opnião ou mande uma mensagem</p>
                    </div>
                    <div>
                        <p className="title2">O prazo de resposta de sua solicitação é até 3 dias</p>
                    </div>
                </div>
                <div className="conteiner-maior">
                    <div className="caixa-itens">
                        <form className="form-esquerda" onSubmit={(pegarCada) => formSumbit(pegarCada)}>
                            <p>Nova mensagem</p>
                            <input type="text" placeholder="Nome (Obrigatório)" required value={dadosFormCont.nome_contato}
                                onChange={(pegarCada) => setdadosFormCont({ ...dadosFormCont, nome_contato: pegarCada.target.value })}/>

                            <input type="email" placeholder="E-mail (Obrigatório)" requiredvalue={dadosFormCont.email_contato}
                                onChange={(pegarCada) => setdadosFormCont({ ...dadosFormCont, email_contato: pegarCada.target.value })}/>

                            <textarea name="mensagem" id="" placeholder="Digite sua mensagem (Obrigatório)" required value={dadosFormCont.mensagem_contato}
                                onChange={(pegarCada) => setdadosFormCont({ ...dadosFormCont, mensagem_contato: pegarCada.target.value })}/>
                            <div>
                                <button type='submit'className="Enviar">Enviar Mensagem</button>
                                <button className="Cancelar">Cancelar</button>
                            </div>
                        </form>
                        <div className="form-direita">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contato;