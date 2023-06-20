import React, { useState, useEffect } from 'react';
import './styleplataformaMobile.css';
import './styleplataforma.css';
import InternoAdm from '../../../../layouts/internoAdm.jsx';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';




const DeletarPlata = () => {

    const navigate = useNavigate();

    //UseState para pegar os dados do formulario, decompor em um array e aplicar cada dado em cada variavel
    const [dadosFormPlatDel, setdadosFormPlatDel] = useState({

        id_plata: ''


    });

    const limparFormulario = () => {
        setdadosFormPlatDel({
            id_plata: ''
        });
    };

    const formSubmitPlata = async (pegarCada) => {
        //Cancelando o comportamento padrão de recarregar a pagina
        pegarCada.preventDefault();
        limparFormulario();




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

    const [dadosPlataformas, setDadosPlataformas] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/plataformas/get/all');
                setDadosPlataformas(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);


    return (

        <InternoAdm>
            <div className="text-botoes">
                <div>
                    <h1 id='editarperfil' className="minhalista">Plataforma</h1>
                </div>

            </div>
            <div className="conteiner-maior-adm">

                <div className="caixa-itens-adm">
                    <div>
                        <p className="nome-h2-del-pla">Deletar</p>

                        <div className="caixa-plataforma-del-pla">
                            <table>
                                <tr className="fixa-coluna">
                                    <th className="th-id-del-pla">ID</th>
                                    <th className="th-nome-del-pla">Nome</th>
                                    <th className="th-img">Imagem</th>

                                </tr>
                            </table>
                            {dadosPlataformas.map((plataforma) => (
                                <section key={plataforma.idplataforma}>
                                    <table>

                                        <tr className="fixa-coluna">
                                            <td className="td-id-del-pla"> <p>{plataforma.idplataforma}</p></td>
                                            <td className="td-nome-del-pla"><p>{plataforma.nome}</p></td>
                                            <td className="td-img"><p>{plataforma.imagemplataforma}</p></td>
                                        </tr>
                                    </table>
                                    
                                </section>
                            ))}
                        </div>


                        <div className="linha1-plat">
                            <form onSubmit={(pegarCada) => formSubmitPlata(pegarCada)}>
                                <div className="input-box-del-pla">
                                    <input type="text" name="nome" id="plat_id" placeholder="   Digite a ID para excluir a plataforma"
                                        required value={dadosFormPlatDel.id_plata}
                                        onChange={(pegarCada) => setdadosFormPlatDel({ ...dadosFormPlatDel, id_plata: pegarCada.target.value })} />
                                </div>

                                <div className='format-bt-del-pla'>
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