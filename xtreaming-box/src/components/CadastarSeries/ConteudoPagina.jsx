
import React, { Component } from 'react'

export default class ConteudoPagina extends Component {


    render() {
        return (
            <div class="conteiner-maior">
                <div class="caixa-itens">
                    <div class="setor-a">
                        <div>
                            <p class="nome-h2">Novo</p>
                        </div>
                        <div class="itens-tab">
                            <form>
                                <div class="input-box">
                                    <select class="input-box" name="selec-plata" id="select-plata" placeholder="Selecione a plataforma do streaming">
                                        <option value="netflix">Netflix</option>
                                        <option value="globoplay">Globo Play</option>
                                        <option value="prime">Prime Video</option>
                                        <option value="Disney">Disney</option>
                                    </select>
                                </div>
                                <div class="input-box">
                                    <input type="text" name="nome" id="edit_sobren" placeholder="   Nome" />
                                </div>
                                <div class="input-box">
                                    <input type="email" name="genero" id="" placeholder="   Gênero" />
                                </div>
                                <div class="input-box">
                                    <input type="email" name="temporada" id="" placeholder="   Quantidade de Temporadas" />
                                </div>
                                <div class="input-box">
                                    <input type="email" name="ano" id="" placeholder="   Ano de Lançamento" />
                                </div>
                                <div class="input-box">
                                    <textarea class="caixa-msg" name="Sinopse" id="plata_sinopse">   Sinopse...</textarea>
                                </div>
                                <div class="text-span">
                                    <span></span>
                                </div>
                                <div>
                                    <button class="bt1" id="" type="submit">Cadastrar</button>
                                    <button class="bt2" id="" type="submit">Limpar</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="setorb">
                        <div class="graf-title">
                            <p class="nome-h3">Lista de Séries</p>
                        </div>
                        <div class="container-graf">
                            <div class="cabec-graf">
                                <div class="col1">
                                    <p>cód</p>
                                </div>
                                <div class="col2">
                                    <p>Plataforma</p>
                                </div>
                                <div class="col3">
                                    <p>Nome</p>
                                </div>
                                <div class="col4">
                                    <p>Gênero</p>
                                </div>
                                <div class="col5">
                                    <p>Temp</p>
                                </div>
                                <div class="col6">
                                    <p>Sinopse</p>
                                </div>
                            </div>
                            <div class="corpo-graf">
                                <div class="col1-1">
                                    <p>001</p>
                                </div>
                                <div class="col2-1">
                                    <p>Netflix</p>
                                </div>
                                <div class="col3-1">
                                    <p>Viking</p>
                                </div>
                                <div class="col4-1">
                                    <p>Ação</p>
                                </div>
                                <div class="col5-1">
                                    <p>6</p>
                                </div>
                                <div class="col6-1">
                                    <p>baseado...</p>
                                </div>
                                <div class="lixeira">
                                    <img src="/src/assets/imgs/trash1.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
