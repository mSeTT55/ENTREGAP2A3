import React, { useState } from 'react';
import './styleplataformaMobile.css';
import './styleplataforma.css';
import InternoAdm from '../../../../layouts/internoAdm.jsx';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';




const DeletarPlata = () => {

    const navigate = useNavigate();

    //UseState para pegar os dados do formulario, decompor em um array e aplicar cada dado em cada variavel
    const [dadosFormPlatDel, setdadosFormPlatDel] = useState({

        id_plata: ''


    });

    const formSubmitPlata = async (pegarCada) => {
        //Cancelando o comportamento padrão de recarregar a pagina
        pegarCada.preventDefault();


        // Deletar usuário
        const deletePlata = async () => {

        }
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const montandoDados = {
            idplataforma: dadosFormPlatDel.id_plata
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
                    <h1 id='editarperfil' className="minhalista">Plataforma</h1>
                </div>

            </div>
            <div className="conteiner-maior">
                <div className="caixa-itens">
                    <div>
                        <div>
                            <p className="nome-h2">Deletar</p>
                        </div>
                        <div className="itens-tab">
                            <form onSubmit={(pegarCada) => formSubmitPlata(pegarCada)}>

                                <div className="linha1-plat">
                                    <div className="input-box">
                                        <input type="text" name="nome" id="plat_id" placeholder="   Digite a ID para excluir a plataforma"
                                            required value={dadosFormPlatDel.id_plata}
                                            onChange={(pegarCada) => setdadosFormPlatDel({ ...dadosFormPlatDel, id_plata: pegarCada.target.value })} />
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

export default DeletarPlata;