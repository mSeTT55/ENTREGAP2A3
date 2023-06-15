import './styletabelaSerie.css'
import trash1 from "../../../assets/imgs/trash1.png"
function TabelaSerie (){
    return(

            <div className='container-graf-ser'>
                <div>
                <p className="nome-h3-ser">Tabela Séries</p>
                <img src= {trash1} className="lixeira-ser"  alt="Lixeira"/>
                </div>
                
                     
                       <div className="cabec-graf-ser">
                         <div className="col-tit-ser ">
                             <p>código</p>
                         </div>
                         <div className="col2-ser">
                             <p>Plataforma</p>
                         </div>
                         <div className="col3-ser">
                             <p>Nome</p>
                         </div>
                         <div className="col4-ser">
                            <p>Gênero</p>
                        </div>
                        <div className="col5-ser">
                            <p>Temp</p>
                        </div>
                        <div className="col6-ser">
                            <p>Sinopse</p>
                        </div>
                       </div>
                       <div className="corpo-graf-ser">
                        <div className="col-inf-cod">
                            <p>004444</p>
                        </div>
                        <div className="col2-1-ser">
                            <p>Netflix</p>
                        </div>
                        <div className="col3-1-ser">
                            <p>Viking</p>
                        </div>
                        <div className="col4-1-ser">
                           <p>Ação</p>
                       </div>
                       <div className="col5-1-ser">
                           <p>6</p>
                       </div>
                       <div className="col6-1-ser">
                            <p>baseado...</p>
                         </div>
                         
                        
                       </div>
                     
                  </div>
                  

)
}
export default TabelaSerie;