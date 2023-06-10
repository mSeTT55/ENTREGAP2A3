import axios from "axios";

export const connectAPI = () =>({
    validateToken:async (token) => {
        
    },

    login:async (email, senha) => {
        const response = await axios.get('http://localhost:5000/usuario/get/all')
        const filtered = response.data.filter(obj => {
            return obj.email === email;                
        }); 
        
        if(filtered.length > 0 && filtered.senha === senha){
            return true
        }else{
            return false
        }    
    },
    
    logout: async () => {

    }
})