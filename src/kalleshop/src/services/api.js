import axios from 'axios';

const baseURL = "https://serverest.dev"

const api = axios.create({
    baseURL: baseURL
});

const ProdutosService = {
    buscaTodosProdutos: async () => {
        try {
            const resposta = await api.get('/produtos');
            return resposta.data;

        } catch (error) {
            
        }
    }
}

export default ProdutosService;