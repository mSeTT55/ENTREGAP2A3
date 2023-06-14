import { createContext } from 'react';
import { User } from "../../types/User";

// Esta pag contém os contextos de atenticação que precisam para validar o usuário
export type AuthContextType = {
    user: User | null; 
    //função para entrar
    entrar: (email:string, senha:string) => Promise<boolean>;
    //função para sair
    sair: () => void;
}

// Exportando Contexto para autenticação
export const AuthContext = createContext <AuthContextType>(null!);