import { useState } from 'react';
import './styleContato.css';
import './styleContatoMobile.css';
import logo from '../../../assets/imgs/logo.png';



function contato(){
    const [formData, setFormData] = useState({
        nome: '',
        email:'',
        mensagem:''
    })

    const handleFormEdit = (event, nome) =>{
        setFormData({
            ...formData,
            [nome]: event.target.value
        })
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
                        <form className="form-esquerda">
                            <p>Nova mensagem</p>
                            <input type="text" placeholder="Nome (Obrigatório)" required value= {formData.nome} onChange={(e) => {handleFormEdit(e,'nome')}}/>
                            <input type="email" placeholder="E-mail (Obrigatório)" requiredvalue= {formData.email} onChange={(e) => {handleFormEdit(e,'email')}}/>
                            <textarea name="mensagem" id="" placeholder="Digite sua mensagem (Obrigatório)" required value= {formData.mensagem}onChange={(e) => {handleFormEdit(e,'mensagem')}}></textarea>
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

export default contato;