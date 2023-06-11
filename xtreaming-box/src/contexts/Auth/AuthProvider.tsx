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
        interface dados {
            nome_completo: string,
            email: string;
            senha: string;
            confirm_senha: string;
        }
        const dadosLogin: dados [] = await api.login();

        console.log(dadosLogin);
        
        const filtered = dadosLogin.filter((obj) => {
            return obj.email === email;                
        });

        console.log(filtered);

        if(filtered.length > 0 && filtered[0].senha === senha){
            const emailFiltrado = filtered[0].email;
            setUser();
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
