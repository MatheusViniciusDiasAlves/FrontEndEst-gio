import { Container, Grid, Typography } from '@mui/material';
import ProdutoCartao from '../componentes/ProdutoCartao';

const produtos = [
  {
    id: 1,
    name: 'AirPos Apple Fones de Ouvido',
    price: 1.499,
    image: '/produtos/produto-01.jpeg'
  },
  {
    id: 2,
    name: 'Capa de silicone para iPhone 8/7',
    price: 299,
    image: '/produtos/produto-02.jpeg'
  },
  {
    id: 3,
    name: 'Apple Pencil',
    price: 729.00,
    image: '/produtos/produto-03.jpeg'
  },
  {
    id: 4,
    name: 'Magic Mouse 2 - Prateado',
    price: 549.00,
    image: '/produtos/produto-04.jpeg'
  },
  {
    id: 5,
    name: 'Caixa prateada de alumínio',
    price: 2.899,
    image: '/produtos/produto-05.jpeg'
  },
  {
    id: 6,
    name: 'Cabo de lightning para USB (1m)',
    price: 149,
    image: '/produtos/produto-06.jpeg'
  },
  {
    id: 7,
    name: 'Smart KeyBoard para iPad Pro',
    price: 1.099,
    image: '/produtos/produto-07.jpeg'
  },
  {
    id: 8,
    name: 'Carregador USB de 5w Apple',
    price: 149,
    image: '/produtos/produto-08.jpeg'
  },
];

export default function Produto() {
  return (
    <Container sx={{ mt: 4 }}>
      
      <Typography
        variant="h4"
        component="h1"
        sx={{ mb: 4, fontWeight: 'bold' }}
      >
        Produtos
      </Typography>

      <Grid container spacing={3}>
        {produtos.map((produto) => (
          <Grid
            item
            key={produto.id}
            xs={12}
            sm={6}
            md={4}
            lg={3}
          >
            <ProdutoCartao produto={produto} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
