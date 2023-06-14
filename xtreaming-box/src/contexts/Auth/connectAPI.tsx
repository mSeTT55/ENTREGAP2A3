import axios from "axios";

export const connectAPI = () =>({
    //Crinado tokens
    createToken: () => {    
        const valorMaximo = 1000000;
        return Math.floor(Math.random() * valorMaximo);
    },

    //Pegando dados do usuário para validação da tentativa de login
    login: async () => {
        const response = await axios.get('http://localhost:5000/usuario/get/all');
        return response.data;
    },
    
    // Saida de login
    logout: async () => {
        localStorage.clear();
    }
})
