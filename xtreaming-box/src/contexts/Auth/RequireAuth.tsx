import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router-dom";

// Esta pagina recebe as validações de atenticação, verifica e permite o usuário entrar ou não caso não esteja autenticado
// Esta pagina também mantem o usuário logado com a persistência do login
export const RequireAuth = ({children}: {children: JSX.Element}) => {

    const auth = useContext(AuthContext);
    const storageData = localStorage.getItem("authToken");
    //Validando se o usuário está logado ou se existe token no local storage. 
    if (!auth.user && storageData === null){
        return <Navigate to='/login'/>
    } 
       
    
    return children;
}