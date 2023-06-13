import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router-dom";

export const RequireAuth = ({children}: {children: JSX.Element}) => {

    const auth = useContext(AuthContext);
    const storageData = localStorage.getItem("authToken");
    

    
    if (!auth.user && storageData === null){
        return <Navigate to='/login'/>
    } 
       
    
    return children;
}