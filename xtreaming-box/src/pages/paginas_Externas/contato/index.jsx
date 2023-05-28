

import logo from '../../../assets/imgs/logo.png';

function contato(){
    return(
        <div className="main">
            <div className="menu-superior">
                <div className="img-text">
                    <div className="img-esquerda">
                        <img className="img-logo" src={logo} alt="Imagem da Logo"/>     
                    </div>
                    <div className="text-direita">
                        <h1>Contato</h1>
                    </div>
                </div>
            </div>
            {/*Aqui termina toda parte do menu superior*/}
            <div className="conteudo-principal-lista" id="conteudoprincipalLista">
                <div className="text-botoes">
                    <div>
                        <p className="title1">Deixe aqui sua opnião ou mande uma mensagem</p>
                    </div>
                    <div>
                        <p className="title2">O prazo de resposta de sua solicitação é até 3 dias</p>
                    </div>
                </div>
                <div className="conteiner-maior">
                    <div className="caixa-itens">
                        <form className="form-esquerda">
                            <p>Nova mensagem</p>
                            <input type="text" placeholder="Nome (Obrigatório)" required/>
                            <input type="email" placeholder="E-mail (Obrigatório)" required/>
                            <textarea name="" id="" placeholder="Digite sua mensagem (Obrigatório)" required></textarea>
                            <div>
                                <button className="Enviar">Enviar Mensagem</button>
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

export default contato;