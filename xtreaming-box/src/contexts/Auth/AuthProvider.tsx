import React,  { useState } from "react";
import { User } from "../../types/User";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({children}: {children: JSX.Element}) => {
    // Função para salvar usuário que está logado
    const [user, setUser] = useState<User | null> (null);

    const entrar = (email: string, senha: string) => {
        
    }

    const sair = () => {

    }
    return (
        <AuthContext.Provider value={{user, entrar, sair}}>
            {children}
        </AuthContext.Provider>
    );
}
