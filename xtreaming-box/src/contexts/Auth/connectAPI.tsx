import axios from "axios";

export const connectAPI = () =>({
    validateToken:async (token:string) => {
        function gerandoNumeroToken(): number {
            const valorMaximo = 1000000;
            return Math.floor(Math.random() * valorMaximo);
        }
        return gerandoNumeroToken
    },

    login: async () => {
        const response = await axios.get('http://localhost:5000/usuario/get/all');
        return response.data;
    },
    
    logout: async () => {
        console.log('Saindo');
    }
})
