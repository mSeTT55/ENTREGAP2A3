import React, { useState, useEffect } from 'react';
import './styleplataformaMobile.css';
import './styleplataforma.css';
import InternoAdm from '../../../layouts/internoAdm.jsx';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LerMensagens = () => {
  const navigate = useNavigate();

  const [dadosFormMsgDel, setdadosFormMsgDel] = useState({
    id_contato: ''
  });

  const [dadosContatos, setDadosContatos] = useState([]);

  const limparFormulario = () => {
    setdadosFormMsgDel({
      id_contato: ''
    });
  };

  const formSubmitMsg = async (pegarCada) => {
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

    try {
      const response = await axios.delete(`http://localhost:5000/contatos/delete/${montandoDados.idplataforma}`, {
        data: JSON.stringify(montandoDados),
        headers: config.headers
      });

      if (response.status === 200) {
        alert('Mensagem deletada com sucesso.');
      } else {
        alert('Erro ao tentar deletar mensagem');
      }
    } catch (error) {
      alert('Coloque uma ID existente da caixa de mensagem');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/contatos/get/all');
        setDadosContatos(response.data);
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
          <h1 id="editarperfil" className="minhalista">
            Caixa de Mensagem
          </h1>
        </div>
      </div>
      <div className="conteiner-maior-adm">
        <div className="caixa-itens-adm">
          <div>
            <div className="caixa-msg-contato">
              {dadosContatos.map((contato) => (
                <section key={contato.idcontato}>
                  <p>ID: {contato.idcontato}</p>
                  <p>Nome: {contato.nome}</p>
                  <p>Email: {contato.email}</p>
                  <p>Mensagem: {contato.mensagem}</p>
                </section>
              ))}
            </div>
            <div className="itens-tab">
              <form onSubmit={(pegarCada) => formSubmitMsg(pegarCada)}>
                <div className="linha1-plat">
                  <div className="input-box">
                    <input
                      type="text"
                      name="nome"
                      id="plat_id"
                      placeholder="   Digite a ID para excluir a mensagem"
                      required
                      value={dadosFormMsgDel.id_contato}
                      onChange={(pegarCada) => setdadosFormMsgDel({ ...dadosFormMsgDel, id_contato: pegarCada.target.value })}
                    />
                  </div>
                </div>
                <div className="format-bt-contato">
                  <button className="bt-excluir" id="" type="submit">
                    Excluir
                  </button>
                  <Link to={"/paineldecontrole"}>
                    <button className="bt-voltar" id="" type="">
                      Voltar
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </InternoAdm>
  );
};

export default LerMensagens;
