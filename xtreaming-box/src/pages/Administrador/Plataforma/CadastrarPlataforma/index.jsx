import React, { useState } from 'react';
import './styleplataformaMobile.css';
import './styleplataforma.css';
import InternoAdm from '../../../../layouts/internoAdm.jsx';
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
                
                nome: dadosFormPlata.nome_plata,
                imagemplataforma : dadosFormPlata.imagem_Plata
                
              };
      
            //Inserindo dados da mensagem no banco
            try {
                const responsePlataforma = await axios.post('http://localhost:5000/plataformas/post/novo', montandoDadosPlataforma);
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
                    <h1 id='editarperfil'  className="minhalista">Plataforma</h1>
                </div>
   
            </div>
            <div className="conteiner-maior-adm">
                <div className="caixa-itens-adm">
                    <div>
                    <div>
                       <p className="nome-h2">Cadastrar</p>
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
                                     <button className="bt2-plat" id="" type="">Voltar</button>
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

export default CadastrarPlata;