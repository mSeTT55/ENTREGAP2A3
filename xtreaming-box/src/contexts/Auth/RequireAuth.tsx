import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
import Login from "../../pages/paginas_Externas/login";
import { Route } from "react-router-dom";

export const RequireAuth = ({children}: {children: JSX.Element}) => {

    const auth = useContext(AuthContext);

    if (!auth.user){
        <Route  path='/login' element={<Login/>}/>
    }

    return children;
}