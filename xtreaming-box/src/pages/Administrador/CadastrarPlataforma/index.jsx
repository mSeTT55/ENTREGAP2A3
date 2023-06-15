import React, { useState } from 'react';
import './styleplataformaMobile.css';
import './styleplataforma.css';
import InternoAdm from '../../../layouts/internoAdm.jsx';
import { Link } from 'react-router-dom';
import axios from 'axios';




    const CadastrarPlata = () => {
        //UseState para pegar os dados do formulario, decompor em um array e aplicar cada dado em cada variavel
        const [dadosFormPlata, setdadosFormPlata] = useState({
            
            nome_plata: '', 
            imagem_Plata:''
            
        });
      
        const formSubmitPlata = async (pegarCada) => {
            //Cancelando o comportamento padrão de recarregar a pagina
            pegarCada.preventDefault();
            
            //montando os dados do array
            const montandoDadosPlataforma = {
                
                nome_plataforma: dadosFormPlata.nome_plata,
                imagem_plataforma : dadosFormPlata.imagem_Plata
                
              };
      
            //Inserindo dados da mensagem no banco
            try {
                const responsePlataforma = await axios.post('http://localhost:5000//plataformas/post/novo', montandoDadosPlataforma);
                console.log(responsePlataforma.data);
                if (responsePlataforma.status === 200){
                    alert('Plataforma cadastrada com sucesso.');
                } else{
                    alert('Erro ao enviar a cadastro, favor tentar novamente.');
                }
            } catch (error) {
                console.log(error);
            }
        }
  return (
   
   <InternoAdm>
            <div className="text-botoes">
                <div>
                    <h1 id='editarperfil'  className="minhalista">Cadastrar Plataforma</h1>
                </div>
   
            </div>
            <div className="conteiner-maior">
                <div className="caixa-itens">
                    <div>
                    <div>
                       <p className="nome-h2">Novo</p>
                     </div>
                     <div className="itens-tab">
                     <form onSubmit={(pegarCada) => formSubmitPlata(pegarCada)}>
                        <div className="linha1-plat">
                            <div className="input-box">
                            <input type="text" name="nome" id= "plat_nome" placeholder="   Digite o nome da plataforma de streaming"
                            required value={dadosFormPlata.nome_plata}
                            onChange={(pegarCada) => setdadosFormPlata({ ...dadosFormPlata, nome_plata: pegarCada.target.value })}/> 
                            </div>
                         </div> 
                         <div className="linha1-plat" >  
                            <div className="input-box">
                                <input type="text" name="inserir-img" id= "plat_img" placeholder="  Digite a url da imagem da TAG da plataforma"
                                required value={dadosFormPlata.imagem_Plata}
                                onChange={(pegarCada) => setdadosFormPlata({ ...dadosFormPlata, imagem_Plata: pegarCada.target.value })}/>  
                            </div> 
                          </div>
                            
                            <div className='format-bt'>
                                
                                     <button className="bt1-plat" id="" type="submit">Cadastrar</button>
                                
                                     <Link to={"/paineldecontrole"}>
                                     <button className="bt2-plat" id="" type="">Cancelar</button>
                                     </Link>
                            </div>      
                         </form>       
                        </div>
                      </div>                         
                    </div>
                    
                    <div className="setorb">
                        
                        <div className="graf-title">
                           <p className="nome-h3">Lista de Plataformas</p> 
                        </div>   
                        
                         <div className="container-graf">
                           <div className="cabec-graf">
                             <div className="col1">
                                 <p>código</p>
                             </div>
                             <div className="col2">
                                 <p>Nome</p>
                             </div>
                             <div className="col3">
                                 <p>TAG</p>
                             </div>
                           </div>
                           <div className="corpo-graf">
                             <div className="col1-1">
                                 <p>001</p>
                             </div>
                             <div className="col2-1">
                                 <p>Netflix</p>
                             </div>
                             <div className="col3-1">
                                 <div className="tag">
                                     <img src="/imgs/netflix.png" alt="netflix"/>
                                 </div>
                             </div>
                           </div>
                           <div className="lixeira"> 
                            <img src="/imgs/trash1.png" alt=""/>
                          </div>
                         </div>
                      </div>
                      
                </div> 
                
   </InternoAdm>         
  )
}

export default CadastrarPlata;