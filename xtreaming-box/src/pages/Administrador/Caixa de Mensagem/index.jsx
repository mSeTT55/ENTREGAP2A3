import React, { useState } from 'react';
import './styleplataformaMobile.css';
import './styleplataforma.css';
import InternoAdm from '../../../layouts/internoAdm.jsx';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';




const LerMensagens = () => {

    const navigate = useNavigate();

    //UseState para pegar os dados do formulario, decompor em um array e aplicar cada dado em cada variavel
    const [dadosFormMsgDel, setdadosFormMsgDel] = useState({

        id_contato: ''


    });

    const limparFormulario = () => {
        setdadosFormMsgDel({
            id_contato: ''
        });
      };
      
    const formSubmitMsg = async (pegarCada) => {
        //Cancelando o comportamento padrão de recarregar a pagina
        pegarCada.preventDefault();
        limparFormulario();


        

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const montandoDados = {
            idcontato: dadosFormMsgDel.id_contato
        };

        //Inserindo dados da mensagem no banco
        try {
            const response = await axios.delete(`http://localhost:5000/plataforma/delete/${montandoDados.idplataforma}`, {
                data: JSON.stringify(montandoDados), headers: config.headers
            });
            if (response.status === 200) {
                alert('Plataforma deletada com sucesso, você será redirecionado para a página de cadastro caso mude de ideia.');
                navigate('/paineldecontrole');
            } else {
                alert('Erro ao tentar deletar plataforma');

            }
        }
        catch (error) {
             alert('Coloque uma existente na lista de plataforma');
        }
    }
    return (

        <InternoAdm>
            <div className="text-botoes">
                <div>
                    <h1 id='editarperfil' className="minhalista">Caixa de Mensagem</h1>
                </div>

            </div>
            <div className="conteiner-maior-adm">
                <div className="caixa-itens-adm">
                    <div>
                        <div>
                            <p className="nome-h2">Ler Mensagens</p>
                        </div>
                        <div className='caixa-msg'>

                            </div>
                        <div className="itens-tab">
                            
                            <form onSubmit={(pegarCada) => formSubmitMsg(pegarCada)}>

                                <div className="linha1-plat">
                                    <div className="input-box">
                                        <input type="text" name="nome" id="plat_id" placeholder="   Digite a ID para excluir a plataforma"
                                            required value={dadosFormMsgDel.id_contato}
                                            onChange={(pegarCada) => setdadosFormMsgDel({ ...dadosFormMsgDel, id_contato: pegarCada.target.value })} />
                                    </div>
                                </div>


                                <div className='format-bt'>

                                    <button className="bt-excluir" id="" type="submit">Excluir</button>

                                    <Link to={"/paineldecontrole"}>
                                        <button className="bt-voltar" id="" type="">Voltar</button>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>



            </div>

        </InternoAdm>
    )
}

export default LerMensagens;