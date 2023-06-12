import React from "react";
import assistirNormal from "../../assets/imgs/SituacaoSerie/assistirNormal.png";
//import assistirMarcado from "../../assets/imgs/SituacaoSerie/assistirMarcado.png";
import assistidoNormal from "../../assets/imgs/SituacaoSerie/assistidoNormal.png";
//import assistidoMarcado from "../../assets/imgs/SituacaoSerie/assistidoMarcado.png";
import "./styleBotaoMarcador.css";




function BotaoMarcador (){

    

    return(
        
        <div className="margin-botton">
            <div>
                <img className="" src={assistirNormal} alt="Botoes"/>
            </div>
            <div>                   
                <img className="" src={assistidoNormal} alt="Botoes"/>
            </div>
        </div>
                                      
                    
    )
} 

export default BotaoMarcador;