import React  from 'react';

const ProdutoTabela = ({ produtos }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Preço</th>
                    <th>Descrição</th>
                </tr>
            </thead>
            <tbody>
                {produtos?.map(product => (
                <tr key={product._id}>
                    <td>{product._id}</td>
                    <td>{product.nome}</td>
                    <td>{product.preco}</td>
                    <td>{product.descricao}</td>
                </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ProdutoTabela;