import { createContext } from 'react';
import { User } from "../../types/User";

export type AuthContextType = {
    user: User | null; 
    //função para entrar
    entrar: (email:string, senha:string) => Promise<boolean>;
    //função para sair
    sair: () => void;
}

// Exportando Contexto para autenticação
export const AuthContext = createContext <AuthContextType>(null!);