import './styletabelaSerie.css'

function TabelaSerie (){
    return(

            <div className='total-ser'>
                <div className="graf-title-ser">
                <p className="nome-h3-ser">Tabela Séries</p>
                </div>
                     <div className="container-graf-ser">
                       <div className="cabec-graf">
                         <div className="col1">
                             <p>cód</p>
                         </div>
                         <div className="col2">
                             <p>Plataforma</p>
                         </div>
                         <div className="col3">
                             <p>Nome</p>
                         </div>
                         <div className="col4">
                            <p>Gênero</p>
                        </div>
                        <div className="col5">
                            <p>Temp</p>
                        </div>
                        <div className="col6">
                            <p>Sinopse</p>
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
                            <p>Viking</p>
                        </div>
                        <div className="col4-1">
                           <p>Ação</p>
                       </div>
                       <div className="col5-1">
                           <p>6</p>
                       </div>
                       <div className="col6-1">
                            <p>baseado...</p>
                         </div>
                         <div className="lixeira">
                            <img src="xtreaming-box/src/assets/imgs/trash1.png" alt=""/>
                        </div>
                       </div>
                     </div>
                  </div>
                  

)
}
export default TabelaSerie;