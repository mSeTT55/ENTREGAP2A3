import React from 'react';
import './styleEditarPerfil.css';
import './EditarPerfilMobile.css';
import Interno from '../../../layouts/interno.jsx';



function EditarPerfil (){
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
                        <form>
                            <div class="inputs">
                                <input class="entradasdetexto" type="text" name="nome" id= "edit_nome" placeholder="Nome"/>
                            </div>
                            <div class="inputs">
                                <input class="entradasdetexto" type="text" name="sobrenome" id= "edit_sobren" placeholder="Sobrenome"/>
                            </div>
                            <div class="inputs">
                                <input class="entradasdetexto" type="email" name="email" id="" placeholder="E-mail"/>
                            </div>
                                <button class="bt1submit" id="" type="submit">Confirmar</button>                            
                        </form>
                    </div>
                    <div> 
                        <p class="nome-h2">Trocar Senha</p>
                    </div>                            
                    <div class="itens-tab">
                        <form>  
                            <div class="inputs">
                                <input class="entradasdetexto" type="password" name="novasenha" id= "edit_novasenha" placeholder="Nova Senha"/>
                            </div>
                            <div class="inputs">
                                <input class="entradasdetexto" type="password" name="senhaatual" id= "edit_senhaatual" placeholder="Senha Atual"/>
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