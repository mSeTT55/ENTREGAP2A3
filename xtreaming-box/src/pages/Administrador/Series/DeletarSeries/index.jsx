import React, { useState, useEffect } from 'react';
import './styleplataformaMobile.css';
import './styleplataforma.css';
import InternoAdm from '../../../../layouts/internoAdm.jsx';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';




const DeletarSerie = () => {

    const navigate = useNavigate();

    //UseState para pegar os dados do formulario, decompor em um array e aplicar cada dado em cada variavel
    const [dadosFormSerieDel, setdadosFormSerieDel] = useState({
        id_serie: ''
    });

    const limparFormulario = () => {
        setdadosFormSerieDel({
            id_serie: ''
        });
      };

    const formSubmitSerie = async (pegarCada) => {
        //Cancelando o comportamento padrão de recarregar a pagina
        pegarCada.preventDefault();
        limparFormulario();

        
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const montandoDados = {
            idseries: dadosFormSerieDel.id_serie
        };

        //Inserindo dados da mensagem no banco
        try {
            const response = await axios.delete(`http://localhost:5000/series/delete/${montandoDados.idseries}`, {
                data: JSON.stringify(montandoDados), headers: config.headers
            });
            if (response.status === 200) {
                alert('Série deletada com sucesso, você será redirecionado para a página de painel de controle.');
                navigate('/paineldecontrole');
            } else {
                alert('Erro ao tentar deletar série');

            }
        }
        catch (error) {
             alert('Coloque uma ID existente na lista de Séries');
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
                <div className="caixa-itens-adm">
                    <div className='setor-a'>
                        <div>
                            <p className="nome-h2">Deletar</p>
                        </div>
                        <div className="itens-tab">
                            <form onSubmit={(pegarCada) => formSubmitSerie(pegarCada)}>

                                <div className="linha1-plat">
                                    <div className="input-box">
                                        <input type="text" name="nome" id="plat_id" placeholder="   Digite a ID para excluir a série"
                                            required value={dadosFormSerieDel.id_serie}
                                            onChange={(pegarCada) => setdadosFormSerieDel({ ...dadosFormSerieDel, id_serie: pegarCada.target.value })} />
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
                    <div className="setor-b">
                        <div className="caixa-plataforma">
                            {dadosSeries.map((series) => (
                                <section key={series.idseries}>
                                    <p>ID: {series.idseries}</p>
                                    <p>Nome: {series.nome}</p>
                                    <p>Ano: {series.ano}</p>
                                    <p>Genero: {series.genero}</p>
                                    <p>Sinopse: {series.sinopse}</p>
                                    <p>Temporada: {series.temporada}</p>
                                </section>
                            ))}
                        </div>
                    </div>
                </div>



            </div>

        </InternoAdm>
    )
}

export default DeletarSerie;