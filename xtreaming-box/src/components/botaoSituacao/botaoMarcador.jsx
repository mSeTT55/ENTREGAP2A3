import React from "react";
import assistirNormal from "../../assets/imgs/SituacaoSerie/assistirNormal.png";
import assistirMarcado from "../../assets/imgs/SituacaoSerie/assistirMarcado.png";
import assistidoNormal from "../../assets/imgs/SituacaoSerie/assistidoNormal.png";
import assistidoMarcado from "../../assets/imgs/SituacaoSerie/assistidoMarcado.png";
import "./styleBotaoMarcador.css";
import { useState } from 'react';



function BotaoMarcador (){

  const [imageSrcDes, setImageSrcDes] = useState(assistirNormal);
     
  const handleClickDes = () => {
    // Altere o estado da imagem quando o botão for clicado
    setImageSrcDes(assistirMarcado);
  };


   const [imageSrcAss, setImageSrcAss] = useState(assistidoNormal);
   const handleClickAss = () => {
    // Altere o estado da imagem quando o botão for clicado
    setImageSrcAss(assistidoMarcado);
  };
    

    return(
        <div>
            <div onClick={handleClickDes}>
                <img src={imageSrcDes} alt="Desejo Assistir"/> 
            </div>
            <div onClick={handleClickAss}>
                <img src={imageSrcAss} alt="Assistido"/> 
            </div>
        </div>            
    )
} 

export default BotaoMarcador;