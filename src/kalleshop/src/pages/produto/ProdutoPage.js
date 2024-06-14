import React, { useEffect, useState } from 'react';
import ProdutosService from '../../services/api';
import ProdutoTabela from './components/ProdutoTabela';

const ProdutoPage = () => {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const produtosData = await ProdutosService.buscaTodosProdutos();
                setProdutos(produtosData.produtos);
            } catch (error) {
                console.error('Erro ao buscar produtos.')
            }
        }
        fetchProdutos();
    }, []);

    return (
        <div className="contenti">
            <h1>Lista de Produtos</h1>
            <ProdutoTabela produtos={produtos} />
        </div>
    );
}

export default ProdutoPage;