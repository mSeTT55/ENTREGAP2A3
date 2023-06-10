import axios from "axios";

export const connectAPI = () =>({
    validateToken:async (token) => {
        
    },

    login:async (email, senha) => {
        const response = await axios.get('http://localhost:5000/usuario/get/all');
        return response.data;
    },
    
    logout: async () => {
        console.log('Saindo');
    }
})