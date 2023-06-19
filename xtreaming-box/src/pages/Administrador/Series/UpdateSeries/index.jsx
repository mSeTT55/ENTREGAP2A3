import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styleSeriesMobile.css';
import './styleSeries.css';
import InternoAdm from '../../../../layouts/internoAdm.jsx';
import { Link, useNavigate } from 'react-router-dom';




const AtualizarSerie = () => {

    const navigate = useNavigate();

    //UseState para pegar os dados do formulario, decompor em um array e aplicar cada dado em cada variavel
    const [dadosFormSerUpd, setdadosFormSerUpd] = useState({

        id_serie: '',
        plataformaid_serie: '',
        nome_serie: '',
        ano_serie: '',
        genero_serie: '',
        imagem_ser: '',
        temporada_serie: '',
        sinopse_serie: ''
    });

    const limparFormulario = () => {
        setdadosFormSerUpd({

            id_serie: '',
            plataformaid_serie: '',
            nome_serie: '',
            ano_serie: '',
            genero_serie: '',
            imagem_ser: '',
            temporada_serie: '',
            sinopse_serie: ''
        });
    };

    const formSumbit = async (pegarCada) => {
        //Cancelando o comportamento padrão de recarregar a pagina
        pegarCada.preventDefault();
        limparFormulario();



        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        //montando os dados do array        
        const montandoDadosSerUpd = {

            idseries: dadosFormSerUpd.id_serie,
            plataforma_idplataforma: dadosFormSerUpd.plataformaid_serie,
            nome: dadosFormSerUpd.nome_serie,
            ano: dadosFormSerUpd.ano_serie,
            genero: dadosFormSerUpd.genero_serie,
            imagem_serie: dadosFormSerUpd.imagem_ser,
            temporada: dadosFormSerUpd.temporada_serie,
            sinopse: dadosFormSerUpd.sinopse_serie
        };
        console.log(montandoDadosSerUpd)

        //Inserindo dados da mensagem no banco
        try {
            const response = await axios.put(`http://localhost:5000/series/update/${montandoDadosSerUpd.idseries}`, montandoDadosSerUpd, config);
            if (response.status === 200) {
                alert('Os dados de sua série foi alterado com sucesso.');

            } else {
                alert('Erro ao tentar deletar plataforma');

            }
        }
        catch (error) {
            alert('Coloque uma ID existente na lista de séries');
        }
    }

    const [dadosSeries, setDadosSeries] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/series/get/all');
                setDadosSeries(response.data);
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
                    <h1 id='editarperfil' className="minhalista">Séries</h1>
                </div>

            </div>
            <div className="conteiner-maior-adm">
                <div className="caixa-itens-up-ser">
                    <div className="setor-a">
                        <div>
                            <p className="nome-h2">Atualizar</p>
                        </div>
                        <div className="itens-tab">
                            <form onSubmit={(pegarCada) => formSumbit(pegarCada)}>

                                <div className="input-box">
                                    <input type="text" name="idserie" id="idSerie" placeholder="   Digite a ID que deseja atualizar"
                                        required value={dadosFormSerUpd.id_serie}
                                        onChange={(pegarCada) => setdadosFormSerUpd({ ...dadosFormSerUpd, id_serie: pegarCada.target.value })} />
                                </div>
                                <div className="input-box">
                                    <input type="text" name="idplataforma" id="idplataforma" placeholder="   Digite a ID da plataforma"
                                        required value={dadosFormSerUpd.plataformaid_serie}
                                        onChange={(pegarCada) => setdadosFormSerUpd({ ...dadosFormSerUpd, plataformaid_serie: pegarCada.target.value })} />
                                </div>

                                <div className="input-box">
                                    <input type="text" name="nome" id="nomeSerie" placeholder="   Digite o nome da série"
                                        required value={dadosFormSerUpd.nome_serie}
                                        onChange={(pegarCada) => setdadosFormSerUpd({ ...dadosFormSerUpd, nome_serie: pegarCada.target.value })} />
                                </div>
                                <div className="input-box">
                                    <input type="text" name="genero" id="generoSerie" placeholder="   Digite o gênero da série"
                                        required value={dadosFormSerUpd.genero_serie}
                                        onChange={(pegarCada) => setdadosFormSerUpd({ ...dadosFormSerUpd, genero_serie: pegarCada.target.value })} />
                                </div>
                                <div className="input-box">
                                    <input type="text" name="temporada" id="tempSerie" placeholder="   Digite o número de temporadas"
                                        required value={dadosFormSerUpd.temporada_serie}
                                        onChange={(pegarCada) => setdadosFormSerUpd({ ...dadosFormSerUpd, temporada_serie: pegarCada.target.value })} />
                                </div>
                                <div className="input-box">
                                    <input type="text" name="ano" id="anoSerie" placeholder="   Digite o ano de lançamento"
                                        required value={dadosFormSerUpd.ano_serie}
                                        onChange={(pegarCada) => setdadosFormSerUpd({ ...dadosFormSerUpd, ano_serie: pegarCada.target.value })} />
                                </div>
                                <div className="input-box">
                                    <input type="text" name="url-img" id="serie-url" placeholder="   Digite a url em http da foto da série"
                                        required value={dadosFormSerUpd.imagem_ser}
                                        onChange={(pegarCada) => setdadosFormSerUpd({ ...dadosFormSerUpd, imagem_ser: pegarCada.target.value })} />                         </div>
                                <div className="input-box">
                                    <textarea className="caixa-msg" name="Sinopse" id="serie_sinopse" placeholder="   Digite a sinopse da série..."
                                        required value={dadosFormSerUpd.sinopse_serie}
                                        onChange={(pegarCada) => setdadosFormSerUpd({ ...dadosFormSerUpd, sinopse_serie: pegarCada.target.value })}>
                                    </textarea>
                                </div>

                                <div className="botao-submit">
                                    <div>
                                        <button className="bt1" id="" type="submit">Atualizar</button>
                                    </div>
                                    <div>
                                        <Link to={"/paineldecontrole"}>
                                            <button className="bt2" id="" type="">Voltar</button>
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="setor-b">
                        <div className="caixa-plataforma">
                            <table>
                                <tr className="fixa-coluna">
                                    <th className="th-id-del-ser">ID</th>
                                    <th className="th-nome-del-ser">Nome</th>
                                    <th className="th-ger">Gênero</th>
                                    <th className="th-ano">Ano</th>
                                    <th className="th-temp">Temp</th>
                                    <th className="th-sino">Sinopse</th>
                                </tr>
                            </table>
                            {dadosSeries.map((series) => (
                                <section key={series.idseries}>
                                    <table>

                                        <tr className="fixa-coluna">
                                            <td className="td-id-del-ser"> <p>{series.idseries}</p></td>
                                            <td className="td-nome-del-ser"><p>{series.nome}</p></td>
                                            <td className="td-ger"><p>{series.genero}</p></td>
                                            <td className="td-ano"><p>{series.ano}</p></td>
                                            <td className="td-temp"><p>{series.temporada}</p></td>
                                            <td className="td-sino"><p>{series.sinopse}</p></td>
                                        </tr>
                                    </table>
                                </section>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </InternoAdm>
    )
}

export default AtualizarSerie;