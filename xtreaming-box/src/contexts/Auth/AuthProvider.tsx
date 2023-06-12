import React,  { useEffect, useState } from "react";
import { User } from "../../types/User";
import { AuthContext } from "./AuthContext";
import  {connectAPI} from "./connectAPI";
 
export const AuthProvider = ({children}: {children: JSX.Element}) => {
    // Função para salvar usuário que está logado
    const [user, setUser] = useState <User | null> (null);

    //Conexão com API
    const api = connectAPI();

    // Verificando se o usuário está logado
    useEffect(() => {
        const validateToken = () => {
            const storageData = localStorage.getItem('authToken');
            if(storageData) {
                const emailFiltrado = localStorage.getItem('emailFiltrado');
                if (emailFiltrado !== null) {
                    const meuArrayRecuperado = JSON.parse(emailFiltrado);
                    console.log(meuArrayRecuperado);
                    setUser(meuArrayRecuperado);
                }
            }
        }
        validateToken();
    }, []);

    //Colocar o token no local storage para persistência de usuário logado.
    const setToken = () =>{
        const token:number = api.createToken()
        const authToken:string = token.toString();
        localStorage.setItem('authToken', authToken);
    }

    //Verificação de usuário 
    const entrar = async (email: string, senha: string) => {
        interface dados {
            nome_completo: string;
            email: string;
            senha: string;
            confirm_senha: string;
        }
        const dadosLogin: dados [] = await api.login();

        const filtered = dadosLogin.filter((obj) => {
            return obj.email === email;                
        });

        if(filtered.length > 0 && filtered[0].senha === senha){
            const emailFiltrado = filtered[0];
            setUser(emailFiltrado);
            setToken();
            localStorage.setItem('emailFiltrado', JSON.stringify(emailFiltrado));
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
