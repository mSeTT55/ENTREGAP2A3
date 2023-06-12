import React, { Component } from 'react'

export default class ConteudoPagina extends Component {
    render() {
        return (
            <div class="conteiner-maior">
                <div class="caixa-itens">
                    <div>
                        <div>
                            <p class="nome-h2">Novo</p>
                        </div>
                        <div class="itens-tab">
                            <div class="linha1">
                                <div class="input-box">
                                    <input type="text" name="nome" id="plat_nome" placeholder="   Digite o nome da plataforma de streaming" />
                                </div>
                            </div>
                            <div class="linha1" >
                                <div class="input-box">
                                    <input type="text" name="inserir-img" id="plat_img" placeholder="   Selecionar imagem da TAG da plataforma" />
                                </div>
                            </div>
                            <div>
                                <span class="text-span"></span>
                            </div>
                            <div>
                                <button class="bt1" id="" type="submit">Cadastrar</button>
                            </div>
                        </div>
                    </div>

                    <div class="setorb">

                        <div class="graf-title">
                            <p class="nome-h3">Lista de Plataformas</p>
                        </div>

                        <div class="container-graf">
                            <div class="cabec-graf">
                                <div class="col1">
                                    <p>código</p>
                                </div>
                                <div class="col2">
                                    <p>Nome</p>
                                </div>
                                <div class="col3">
                                    <p>TAG</p>
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
                                    <div class="tag">
                                        <img src="/src/assets/imgs/netflix.png" alt="netflix" />
                                    </div>
                                </div>
                            </div>
                            <div class="lixeira">
                                <img src="/src/assets/imgs/trash1.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
