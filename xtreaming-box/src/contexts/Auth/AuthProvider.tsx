import React,  { useState } from "react";
import { User } from "../../types/User";
import { AuthContext } from "./AuthContext";
import  {connectAPI} from "./connectAPI";
 
export const AuthProvider = ({children}: {children: JSX.Element}) => {
    // Função para salvar usuário que está logado
    const [user, setUser] = useState <User | null> (null);

    //Conexão com API
    const api = connectAPI();


    //Verificação de usuário 
    const entrar = async (email: string, senha: string) => {
        const dadosLogin = await api.login();
        console.log(dadosLogin);
        const filtered = dadosLogin.filter((obj: { email: string; }) => {
            return obj.email === email;                
        });
        if(filtered.length > 0 && filtered.senha === senha){
            setUser(filtered.email);
            return true;
        }
        return false;   
    }

    // Fazer logoff
    const sair = () => {
        api.logout();
    }
    return (
        <AuthContext.Provider value={{user, entrar, sair}}>
            {children}
        </AuthContext.Provider>
    );
}
