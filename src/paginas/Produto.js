// Aqui é a parte mais legal, funciona como o cérebro da loja, pois é ela que realiza os cálculo do dinheiro, veja que temos os valores reais dos produtos com os nomes também 

import { Container, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import ProdutoCartao from '../componentes/ProdutoCartao';
import FormularioCliente from '../componentes/FormularioCliente';

const produtos = [
  { id: 1, name: 'AirPos Apple Fones de Ouvido', price: 1499, image: '/produtos/produto-01.jpeg' },
  { id: 2, name: 'Capa de silicone para iPhone 8/7', price: 299, image: '/produtos/produto-02.jpeg' },
  { id: 3, name: 'Apple Pencil', price: 729, image: '/produtos/produto-03.jpeg' },
  { id: 4, name: 'Magic Mouse 2 - Prateado', price: 549, image: '/produtos/produto-04.jpeg' },
  { id: 5, name: 'Caixa prateada de alumínio', price: 2899, image: '/produtos/produto-05.jpeg' },
  { id: 6, name: 'Cabo de lightning para USB (1m)', price: 149, image: '/produtos/produto-06.jpeg' },
  { id: 7, name: 'Smart KeyBoard para iPad Pro', price: 1099, image: '/produtos/produto-07.jpeg' },
  { id: 8, name: 'Carregador USB de 5w Apple', price: 149, image: '/produtos/produto-08.jpeg' },
];

export default function Produto() {
  const [carrinho, setCarrinho] = useState([]);

  const atualizarCarrinho = (produto, quantidade) => {
    setCarrinho((prev) => {
      const existe = prev.find((item) => item.id === produto.id);

      if (existe) {
        if (quantidade === 0) {
          return prev.filter((item) => item.id !== produto.id);
        }
        return prev.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade }
            : item
        );
      }

      return [...prev, { ...produto, quantidade }];
    });
  };

  const total = carrinho.reduce(
    (acc, item) => acc + item.price * item.quantidade,
    0
  );

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
        Produtos
      </Typography>

      <Grid container spacing={3}>
        {produtos.map((produto) => (
          <Grid item key={produto.id} xs={12} sm={6} md={4} lg={3}>
            <ProdutoCartao
              produto={produto}
              onQuantidadeChange={atualizarCarrinho}
            />
          </Grid>
        ))}
      </Grid>

      <FormularioCliente total={total} />
    </Container>
  );
}
