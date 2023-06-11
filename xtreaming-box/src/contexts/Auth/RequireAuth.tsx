import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
import Login from "../../pages/paginas_Externas/login";

export const RequireAuth = ({children}: {children: JSX.Element}) => {

    const auth = useContext(AuthContext);

    if (!auth.user){
        <Login/>
    }

    return children;
}